'use strict';
// kayak-labels.js (v6, 30.10.2026) - Beschriftungs-Ausgang fuer Tasten-Displays (Raspberry Pi / ESP32 / Browser)
//
// Liefert die Namen der 15 Bus-Tasten (und der Shift-Ebene 16-30) abhaengig von der Ebene, die am Panel gewaehlt ist
// (P/P, M/E1, M/E2, M/E3). Namen: P/P = OBS-Szenenliste, M/E n = Liste des Source Switchers (wie die Tastenbelegung).
//
// Ausgabe:
//   http://<Rechner>:8088/            Testseite (3 Displays zu je 5 Tasten, wie ein modernes Panel)
//   http://<Rechner>:8088/labels.json aktueller Stand (fuer ESP32: einfach abfragen)
//   http://<Rechner>:8088/events      Server-Sent Events (Browser, Raspberry Pi)
//   http://<Rechner>:8088/api/set?level=M/E2&shift=1   Ebene von Hand setzen (zum Testen ohne Panel)
//   UDP (optional) KAYAK_LABELS_UDP=host:port  schickt bei jeder Aenderung und alle 5 s ein JSON-Paket
//
// Einstellungen (Umgebungsvariablen):
//   KAYAK_LABELS_PORT   8088      0 = aus
//   KAYAK_LABELS_HOST   0.0.0.0   (nur im lokalen Netz verwenden, keine Anmeldung!)
//   KAYAK_LABELS_COLS   8         Zeichen pro Zeile
//   KAYAK_LABELS_LINES  3         Zeilen pro Taste
//   KAYAK_LABELS_FILE   kayak-labels.json neben dem Skript: Kurznamen, z. B. { "Kamera 1": "Kam 1" }
//   KAYAK_LABELS_UDP    host:port fuer UDP-Ausgabe
//
// Hinweis Shift: Das Panel meldet die Shift-Taste nicht an den Frame (Mitschnitt ShiftPST). Der Zustand "shift" wird
// deshalb nur beim Druck einer Bus-Taste erkannt (Taste 16-30 = Shift). Die Ausgabe enthaelt immer beide Ebenen.

const http = require('http');
const fs = require('fs');
const path = require('path');
const dgram = require('dgram');

const PORT = parseInt(process.env.KAYAK_LABELS_PORT || '8088', 10);
const HOST = process.env.KAYAK_LABELS_HOST || '0.0.0.0';
const COLS = Math.max(3, parseInt(process.env.KAYAK_LABELS_COLS || '8', 10));
const LINES = Math.max(1, parseInt(process.env.KAYAK_LABELS_LINES || '3', 10));
const ALIAS_FILE = process.env.KAYAK_LABELS_FILE || path.join(__dirname, 'kayak-labels.json');
const UDP_TARGET = process.env.KAYAK_LABELS_UDP || '';
const LEVELS = ['P/P', 'M/E1', 'M/E2', 'M/E3'];

let log = function () {};
let OBS = null;
const state = { level: 'P/P', shift: false, source: 'start', keys: [] };
let lastJson = '';
let aliasCache = { mtime: 0, map: {} };
let meFail = {};                 // M/E -> Zeitpunkt des letzten Fehlschlags
const clients = new Set();
let udp = null, udpHost = '', udpPort = 0;

function aliases() {
  try {
    const m = fs.statSync(ALIAS_FILE).mtimeMs;
    if (m !== aliasCache.mtime) { aliasCache = { mtime: m, map: JSON.parse(fs.readFileSync(ALIAS_FILE, 'utf8')) }; }
  } catch (e) { if (aliasCache.mtime) aliasCache = { mtime: 0, map: {} }; }
  return aliasCache.map;
}

// Name in bis zu LINES Zeilen zu je COLS Zeichen umbrechen
function wrap(name) {
  const text = String(name || '').replace(/\s+/g, ' ').trim();
  if (!text) return [];
  const out = [];
  let cur = '';
  const words = text.split(' ');
  for (let w of words) {
    while (w.length > COLS) {                       // sehr lange Woerter zerlegen
      if (cur) { out.push(cur); cur = ''; }
      out.push(w.slice(0, COLS - 1) + '-'); w = w.slice(COLS - 1);
    }
    if (!cur) cur = w;
    else if ((cur + ' ' + w).length <= COLS) cur += ' ' + w;
    else { out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  if (out.length > LINES) {
    const cut = out.slice(0, LINES);
    cut[LINES - 1] = cut[LINES - 1].slice(0, COLS - 1) + '.';
    return cut;
  }
  return out;
}

function shortName(name) {
  const a = aliases();
  return (name && Object.prototype.hasOwnProperty.call(a, name)) ? String(a[name]) : (name || '');
}

async function namesFor(level) {
  const empty = [];
  if (!OBS) return empty;
  if (level === 'P/P') {
    const s = (OBS.state && OBS.state.scenes) || [];
    return s.slice(0, 30);
  }
  const me = parseInt(level.slice(3), 10);
  if (meFail[me] && Date.now() - meFail[me] < 30000) return empty;     // nicht alle 3 s ins Log schreiben
  if (OBS.isReady && !OBS.isReady()) return empty;
  let list = null;
  try { list = await OBS.meSources(me); } catch (e) { list = null; }
  if (!list) { meFail[me] = Date.now(); return empty; }
  delete meFail[me];
  return list.slice(0, 30);
}

async function build() {
  const names = await namesFor(state.level);
  const keys = [];
  for (let i = 0; i < 15; i++) {
    const a = names[i] || '', b = names[i + 15] || '';
    keys.push({
      n: i + 1,
      name: a, lines: wrap(shortName(a)),
      shiftName: b, shiftLines: wrap(shortName(b)),
    });
  }
  state.keys = keys;
  publish();
}

function snapshot() {
  return { level: state.level, shift: state.shift, source: state.source, cols: COLS, lines: LINES, keys: state.keys };
}

function publish(force) {
  const json = JSON.stringify(snapshot());
  if (!force && json === lastJson) return;
  lastJson = json;
  for (const res of clients) { try { res.write('data: ' + json + '\n\n'); } catch (e) { clients.delete(res); } }
  sendUdp(json);
}

function sendUdp(json) {
  if (!udp) return;
  const b = Buffer.from(json);
  udp.send(b, 0, b.length, udpPort, udpHost, function () {});
}

function setLevel(level, source) {
  if (LEVELS.indexOf(level) < 0) return false;
  const changed = level !== state.level;
  state.level = level; state.source = source || 'panel';
  if (changed) log('[LABELS] Ebene ' + level + ' (' + state.source + ')');
  build().catch(function () {});
  return true;
}

// Panel-Abfrage nach dem Umschalten der Delegation: 05 00 24 [n] 20 13/84 (n: 1 = M/E2, 2 = M/E3, 3 = P/P; 0 = M/E1 vermutet)
function onDelegationQuery(n, sub) {
  const map = { 1: 'M/E2', 2: 'M/E3', 3: 'P/P' };
  if (map[n]) setLevel(map[n], 'Abfrage');
  else if (n === 0 && sub === 0x13) setLevel('M/E1', 'Abfrage (vermutet)');
}

// Bus-Taste gedrueckt: me = 0 (P/P) .. 3, n = Tastennummer 1..30 (>15 = Shift-Ebene)
function noteKey(me, n) {
  if (me >= 0 && me <= 3) {
    const level = LEVELS[me];
    const shift = n > 15;
    if (level !== state.level || shift !== state.shift) {
      state.shift = shift;
      setLevel(level, 'Taste');
    }
  }
}

const PAGE = '<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
  '<title>Kayak Tasten-Displays</title><style>' +
  ':root{--bg:#0b0b0c;--panel:#17181a;--amber:#ffb000;--dim:#7a5a10;--line:#2a2b2e;--txt:#e8e8e8}' +
  '@media (prefers-color-scheme:light){:root{--bg:#e9eaec;--panel:#d5d7da;--line:#b9bcc1;--txt:#1b1c1e}}' +
  'html,body{margin:0;background:var(--bg);color:var(--txt);font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}' +
  'main{max-width:1100px;margin:0 auto;padding:16px}' +
  'h1{font-size:18px;margin:0 0 4px}p.sub{margin:0 0 14px;color:#8d9096;font-size:13px}' +
  '.bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:14px}' +
  'button{font:inherit;padding:8px 14px;border-radius:8px;border:1px solid var(--line);background:var(--panel);color:var(--txt);cursor:pointer;min-height:40px}' +
  'button.on{background:#2b6cff;color:#fff;border-color:#2b6cff}' +
  'label{display:flex;gap:6px;align-items:center;font-size:14px}' +
  '.strips{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:14px}' +
  '.strip{min-width:0;background:#000;border:2px solid var(--line);border-radius:8px;padding:8px;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px}' +
  '.key{min-width:0;overflow:hidden;border:1px solid #3a2a00;border-radius:4px;padding:4px 2px;min-height:78px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;text-align:center}' +
  '.key .n{font:11px ui-monospace,Menlo,Consolas,monospace;color:var(--dim)}' +
  '.key .t{font:600 clamp(9px,1.15vw,14px) ui-monospace,Menlo,Consolas,monospace;color:var(--amber);line-height:1.15;white-space:pre}' +
  '.key .s{margin-top:auto;font:9px ui-monospace,Menlo,Consolas,monospace;color:var(--dim);white-space:pre;line-height:1.1}' +
  '.st{font-size:12px;color:#8d9096;margin-top:12px}' +
  '</style></head><body><main>' +
  '<h1>Kayak Tasten-Displays (Test)</h1>' +
  '<p class="sub">So wuerden drei 5er-Displays ueber den Bus-Tasten aussehen. Die Namen kommen aus OBS und folgen der Ebene am Panel.</p>' +
  '<div class="bar" id="lv"></div>' +
  '<div class="bar"><label><input type="checkbox" id="sh"> Shift-Ebene (16-30)</label>' +
  '<label><input type="checkbox" id="both" checked> andere Ebene klein mitzeigen</label></div>' +
  '<div class="strips" id="strips"></div>' +
  '<div class="st" id="st">verbinde ...</div></main>' +
  '<script>' +
  'var COLS_JS='+COLS+';var LV=["P/P","M/E1","M/E2","M/E3"],cur=null;' +
  'function api(q){fetch("/api/set?"+q).catch(function(){});}' +
  'var lv=document.getElementById("lv");' +
  'LV.forEach(function(l){var b=document.createElement("button");b.textContent=l;b.setAttribute("data-l",l);b.onclick=function(){api("level="+encodeURIComponent(l));};lv.appendChild(b);});' +
  'document.getElementById("sh").onchange=function(e){api("shift="+(e.target.checked?1:0));};' +
  'document.getElementById("both").onchange=function(){if(cur)draw(cur);};' +
  'function pad(a,n){var o=a.slice();return o;}' +
  'function draw(d){cur=d;' +
  ' var bs=lv.children;for(var i=0;i<bs.length;i++)bs[i].className=bs[i].getAttribute("data-l")===d.level?"on":"";' +
  ' document.getElementById("sh").checked=!!d.shift;' +
  ' var both=document.getElementById("both").checked,box=document.getElementById("strips");box.innerHTML="";' +
  ' for(var g=0;g<3;g++){var s=document.createElement("div");s.className="strip";' +
  '  for(var k=0;k<5;k++){var key=d.keys[g*5+k];if(!key)continue;' +
  '   var main=d.shift?key.shiftLines:key.lines,other=d.shift?key.name:key.shiftName;' +
  '   var el=document.createElement("div");el.className="key";' +
  '   var n=document.createElement("div");n.className="n";n.textContent=(d.shift?key.n+15:key.n);el.appendChild(n);' +
  '   var t=document.createElement("div");t.className="t";t.textContent=main.join("\\n");el.appendChild(t);' +
  '   if(both&&other){var o=document.createElement("div");o.className="s";o.textContent=(d.shift?"":"\\u21E7 ")+other.slice(0,COLS_JS);el.appendChild(o);}' +
  '   s.appendChild(el);}' +
  '  box.appendChild(s);}' +
  ' document.getElementById("st").textContent="Ebene "+d.level+" ("+d.source+")";}' +
  'var es=new EventSource("/events");es.onmessage=function(e){draw(JSON.parse(e.data));};' +
  'es.onerror=function(){document.getElementById("st").textContent="Verbindung getrennt - neu laden";};' +
  '</script></body></html>';

function serve(req, res) {
  const u = new URL(req.url, 'http://x');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (u.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    return res.end(PAGE);
  }
  if (u.pathname === '/labels.json') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
    return res.end(JSON.stringify(snapshot()));
  }
  if (u.pathname === '/events') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-store', 'Connection': 'keep-alive' });
    res.write('data: ' + JSON.stringify(snapshot()) + '\n\n');
    clients.add(res);
    req.on('close', function () { clients.delete(res); });
    return;
  }
  if (u.pathname === '/api/set') {
    const lv = u.searchParams.get('level'), sh = u.searchParams.get('shift');
    if (sh !== null) state.shift = sh === '1' || sh === 'true';
    if (lv !== null) setLevel(lv, 'Testseite'); else { state.source = 'Testseite'; publish(); }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ level: state.level, shift: state.shift }));
  }
  res.writeHead(404); res.end('nicht gefunden');
}

function init(opts) {
  opts = opts || {};
  if (opts.log) log = opts.log;
  OBS = opts.OBS || null;
  if (!PORT) { log('[LABELS] aus (KAYAK_LABELS_PORT=0)'); return; }
  if (UDP_TARGET) {
    const p = UDP_TARGET.split(':');
    udpHost = p[0]; udpPort = parseInt(p[1] || '0', 10);
    if (udpHost && udpPort) { udp = dgram.createSocket('udp4'); log('[LABELS] UDP -> ' + udpHost + ':' + udpPort); }
  }
  const srv = http.createServer(serve);
  srv.on('error', function (e) { log('[LABELS] Webserver-Fehler: ' + e.message); });
  srv.listen(PORT, HOST, function () { log('[LABELS] Testseite: http://127.0.0.1:' + PORT + '/  (Daten: /labels.json, /events)'); });
  build().catch(function () {});
  setInterval(function () { build().catch(function () {}); }, 3000);
  setInterval(function () { if (udp) sendUdp(lastJson || JSON.stringify(snapshot())); }, 5000);
}

module.exports = { init, setLevel, onDelegationQuery, noteKey, wrap, state, snapshot };
