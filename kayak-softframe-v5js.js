// KAYAK SOFT-FRAME v5v (14.10.2026): Tastenklick per Standard aus (KAYAK_KEYCLICK), Beeper schaltbar (KAYAK_BEEPER)
// KAYAK SOFT-FRAME v5u (12.10.2026): KAYAK_MES (Standard 3) ersetzt KAYAK_CFG31="26,27,28,29=84"
// KAYAK SOFT-FRAME v5t (12.10.2026): M/E-Taste n = n-te Quelle in der Switcher-Liste (nicht mehr Szenen-Position)
// KAYAK SOFT-FRAME v5s (12.10.2026): Fehler behoben - nach M/E-CUT/AUTO wurden Lampen/Vorschau nicht nachgefuehrt (Kommentar verschluckte Code)
// KAYAK SOFT-FRAME v5r (12.10.2026): OBS-Modul waehlbar (kayak-obs-standard.js, KAYAK_OBS_MODULE=NAME -> kayak-obs-NAME.js)
// KAYAK SOFT-FRAME v5p (12.10.2026): Vorschau je M/E ueber zweiten Source Switcher "M_E1 PVW" .. (KAYAK_ME_PVW)
// KAYAK SOFT-FRAME v5o (12.10.2026): Versuch Bus-Lampen M/E1..3 (Satz [M/E] 01 01/02 [Code]); aus mit KAYAK_ME_LAMPS=0
// KAYAK SOFT-FRAME v5n (12.10.2026): M/E1..3 PST merken, CUT/AUTO (Source Switcher, Schnitt bzw. eigener Uebergang), Blendzeit je M/E
// KAYAK SOFT-FRAME v5m (12.10.2026): M/E-Log zeigt Szenennummer (31-120)
// KAYAK SOFT-FRAME v5l (12.10.2026): M/E-Szenennummern P/P 1-30, M/E1 31-60, M/E2 61-90, M/E3 91-120 (kayak-obs.js)
// KAYAK SOFT-FRAME v5k (12.10.2026): M/E1..3 PGM-Bus -> OBS Source Switcher M_E1..M_E3 (n-te Quelle der Liste)
// KAYAK SOFT-FRAME v5j (12.10.2026): Bus-Tasten mit M/E-Nummer (Byte 3) getrennt loggen, nicht mehr als P/P behandeln
// KAYAK SOFT-FRAME v5i (12.10.2026): KAYAK_CFG31 ersetzt die Tabelle auch im Multicast-Anfangsstrom
// KAYAK SOFT-FRAME v5h (12.10.2026): KAYAK_CFG31 fuer die ganze Tabelle; Schalter 25-28 = M/E 0-3 vorhanden, 29 = Anzahl M/Es (unteres Halbbyte)
// KAYAK SOFT-FRAME v5g (12.10.2026): Versuchsmodus Systemtabelle 30 01 31 (KAYAK_CFG31) - M/E-Boards?
// KAYAK SOFT-FRAME v5zd (24.10.2026): Save/Load nutzt den gemeldeten Applikationsnamen (KAYAK_APPNAME) statt fest 20230203 DUPLEX1-NORM
// KAYAK SOFT-FRAME v5zc (24.10.2026): VERSUCH M/E-Tally (PGM rot) - nur mit $env:KAYAK_ME_TALLY=1 oder 2, sonst wie v5zb
// KAYAK SOFT-FRAME v5zb (24.10.2026): Empfindlichkeit der Encoder einstellbar (KAYAK_GAIN_SIZE/XY/TWIST/CROP, Standard 1/1/1/0.25)
// KAYAK SOFT-FRAME v5za (24.10.2026): Clip Low = Luma Min, Clip Hi = Luma Max im OBS-Filter "Kayak Luma" (statt Glaettung); sonst wie v5z
// KAYAK SOFT-FRAME v5z (24.10.2026): TFT-Werte absolut + proportional nach OBS (Size 100 = ganze Leinwand, X/Y +-100 = +-Leinwand,
//   Crop +-16/+-9 = ganze Quelle, Twist = Drehung) und Rueckmeldung OBS -> TFT (beim Delegieren + Abfrage alle 1 s). Braucht kayak-obs-standard.js v5z.
//   Abfrage-Intervall: $env:KAYAK_TFT_POLL (ms, Standard 1000, 0 = aus)
// KAYAK SOFT-FRAME v5y (23.10.2026): + Twist-Wert (Z) im TFT
// KAYAK SOFT-FRAME v5x (23.10.2026): Save/Load Application wie der echte Frame (Frame schreibt/liest per TFTP im Panel)
// KAYAK SOFT-FRAME v5w (23.10.2026): TFT-Zahlenwerte (Locate/Size/Crop/Opacity/Clip) wie der echte Frame, Zifferneingabe
// KAYAK SOFT-FRAME v5f (11.10.2026): Panel-Applikation speichern/laden (TFTP-Schreiben -> Ordner panel_store)
// KAYAK SOFT-FRAME v5e (11.10.2026): eigene appli.ini im Ordner hat Vorrang (KAYAK_APPLI_FILE)
// KAYAK SOFT-FRAME v5d (08.10.2026): Keyer-Encoder OPAC/GAIN/CLIP -> OBS-Filter Opacity + Luma Key
// KAYAK SOFT-FRAME v5c (08.10.2026): Regler-Nachricht enthaelt Key 1..4 (a1..a4) -> Locate/Size/Crop je Key
// KAYAK SOFT-FRAME v5b (08.10.2026): TFT-Regler Size + Crop (Gruppe a2) auf die delegierte Quelle
// KAYAK SOFT-FRAME v5a (08.10.2026): Delegate Key 1..4 waehlt die 1..4. Quelle von unten (PST) fuer Joystick/Reset;
//   Key 1 wird aus der Abfrage-Salve erkannt (Panel schickt dafuer kein a0 26)
// KAYAK SOFT-FRAME v4l (07.10.2026): Ebene 7 -> Black direkt aufs Programm (statt Vorschau+Trigger)
// KAYAK SOFT-FRAME v4k (07.10.2026): Ebene 7 CUT/MIX -> Szene 'Black' (statt FTB-Taste)
// KAYAK SOFT-FRAME v4j (07.10.2026): Joystick-Reset (05 00 24 00 10 16 00)
// KAYAK SOFT-FRAME v4i (07.10.2026): FTB -> OBS-Schnellübergang Schwarzüberblende
// KAYAK SOFT-FRAME v4h (07.10.2026): Joystick 2. Format (07 00 46 00 a1 02 [Achse] [int16])
// KAYAK SOFT-FRAME v4g (07.10.2026): Panel-Wipes -> OBS 'Wischen' (Luma Wipe), Pattern-Tabelle kayak-wipes.json
// KAYAK SOFT-FRAME v4f (06.10.2026): Applikationsname '21Broadcast' statt '20230203 DUPLEX1-NORM' (KAYAK_APPNAME)
// KAYAK SOFT-FRAME v4e (06.10.2026): Joystick -> Bild-im-Bild (Quelle in der Vorschau-Szene verschieben/skalieren)
// KAYAK SOFT-FRAME v4d (06.10.2026): Advanced Scene Switcher - Panel-Ereignisse als ASS-Meldungen (EMEM n, PGM n, ...), OBS-Standard 192.168.5.100
// KAYAK SOFT-FRAME v4c (06.10.2026): Shift+10..15 (Codes 00,90,91,92,99,f0) -> OBS-Szenen 25..30
// KAYAK SOFT-FRAME v4b (06.10.2026): Blendenhebel -> OBS-Ueberblendung nach Hebel-Tempo (OBS-T-Bar-Fehler umgangen)
// KAYAK SOFT-FRAME v4 (05.10.2026): + OBS-Anbindung (kayak-obs.js, obs-websocket v5)
//   Eingang 1..24 = erste 24 OBS-Szenen, PGM/PST/CUT/AUTO/Hebel/Blendzeit -> OBS Studio-Modus,
//   Key 1..4 -> Downstream-Keyer-Plugin. Abschalten: $env:KAYAK_OBS="0"
//
// KAYAK SOFT-FRAME v3 (05.10.2026): eigener Mischer-Zustand
//   - PGM/PST werden mitgefuehrt, CUT tauscht PGM und PST
//   - AUTO: eigene Blende (Dauer KAYAK_AUTO_MS, Standard 1000 ms), am Ende Tausch
//   - Blendenhebel: Position wird als Blendenstand zurueckgemeldet, am Anschlag Tausch,
//     danach laeuft die naechste Blende in Gegenrichtung (wie beim echten Frame)
//   - Hebel-Untergrenze KAYAK_LEVER_MIN (Standard 3100, gemessen an diesem Panel)
//
// KAYAK SOFT-FRAME v2.1 - Tasten reagieren (02.10.2026, nachmittags)
// Neu in v2.1:
//   - kein Geister-Strom mehr: nur der Anfangs-Zustand aus Mirror.pcapng (erste 24 s),
//     danach eigenes Keepalive jede Sekunde + Praesenzmeldung alle 10 s
//   - alle Zustandspakete bekommen eine EIGENE fortlaufende Nummer (letzte 4 Byte),
//     wie beim echten Frame (1, 2, 3, ...)
//   - Tasten: PGM/PST-Druck -> Antwort des echten Frames aus Soft3.pcapng (Taste leuchtet),
//     CUT -> aufgezeichnete Umschaltung, AUTO -> aufgezeichnete Blende
//   (Zustand ist noch "aufgezeichnet", nicht berechnet - das kommt in v3)
//
// --- urspruenglicher Kopf (v1) ---
// KAYAK SOFT-FRAME v1 - "antwortender Frame" (nach Mirror.pcapng, 02.10.2026)
//
// Erkenntnis aus dem ersten Mitschnitt MIT Port-Mirroring: Der echte Frame
// ist kein reiner Sender, sondern beantwortet laufend direkte (Unicast-)
// Anfragen des Panels. Die waren in allen frueheren Mitschnitten unsichtbar,
// weil der Switch Unicast nicht an den Wireshark-Port weiterleitet.
//
// Dieser Soft-Frame macht alles, was der echte Frame im Mirror-Mitschnitt tut:
//   - Boot-Announce:   Panel -> :56712  => Antwort von :1024 an Panel:56713
//   - Handshake:       Panel-ITry => unser ITry, Panel-IAm => unser Confirm (+174ms)
//   - Pings 56631:     Panel-Ping beantworten (Pong) + selbst alle ~2,1s pingen (von :1025)
//   - Anfrage 0x04 & Co. auf 56629: Antworten 1:1 aus dem Mitschnitt (Tabelle)
//   - TFTP-Server (Port 69): appli.ini, state.bin, reglst.bin, envir_mf.bin,
//     rr_meta.bin, fr_meta1/2.bin, tl_eff0-4 (byte-genau aus dem Mitschnitt)
//   - RPC Portmapper (111) + Mount (1003): Antworten wie im Mitschnitt
//   - Multicast-Strom (239.168.5.60 / 239.0.0.0) nach dem Confirm wie im Mitschnitt
//
// Alle Daten stehen in softframe_data.json (gleicher Ordner).
// Start: node kayak-softframe.js   (Wireshark parallel, echter Frame AUS dem Netz,
// Laptop braucht die IP 192.168.5.60)

const dgram = require('dgram');
const os = require('os');
const fs = require('fs');
const path = require('path');

const FRAME_IP = process.env.KAYAK_FRAME_IP || '192.168.5.60';
const PANEL_IP = process.env.KAYAK_PANEL_IP || '192.168.5.63';
const BROADCAST_IP = '192.168.5.255';
const FRAME_IP_BYTES = Buffer.from([192, 168, 5, 60]);

const D = JSON.parse(fs.readFileSync(path.join(__dirname, 'softframe_data.json'), 'utf8'));
// v5q: OBS-Anbindung waehlbar. Standard: kayak-obs-standard.js. Andere: kayak-obs-NAME.js daneben legen und
// mit KAYAK_OBS_MODULE=NAME starten (oder vollem Dateinamen/Pfad). Alle Module muessen dieselben Funktionen anbieten.
const OBS_MODULE = (() => {
  const m = process.env.KAYAK_OBS_MODULE || 'standard';
  return (m.endsWith('.js') || m.includes('/') || m.includes('\\')) ? path.resolve(__dirname, m) : path.join(__dirname, `kayak-obs-${m}.js`);
})();
let OBS;
try { OBS = require(OBS_MODULE); }
catch (e) { console.error(`[INIT] OBS-Modul ${OBS_MODULE} nicht ladbar: ${e.message}`); process.exit(1); }
console.log(`[INIT] OBS-Modul: ${path.basename(OBS_MODULE)}`);

// ---- Applikationsname (v4f) ----
// Der Frame meldet dem Panel den Namen der Applikation im Record 23 00 01 [Laenge] [Name]
// (Antwort auf Anfrage 04 00 63 23 00 01 und im Anfangsstrom). Das Panel holt danach
// /appli/<Name>/appli.ini usw. per TFTP (das Soft-Frame liefert nach Dateiname, Ordner egal).
// Standard jetzt "21Broadcast"; Original: $env:KAYAK_APPNAME="orig"; eigener Name: $env:KAYAK_APPNAME="..."
const APP_OLD = '20230203 DUPLEX1-NORM';
const APP_NAME = (() => { const v = process.env.KAYAK_APPNAME || '21Broadcast'; return v.toLowerCase() === 'orig' ? APP_OLD : v; })();
function renameAppHex(hex) {
  if (APP_NAME === APP_OLD) return hex;
  const b = Buffer.from(hex, 'hex');
  const oldSeq = Buffer.concat([Buffer.from([0x23, 0x00, 0x01, APP_OLD.length]), Buffer.from(APP_OLD, 'latin1')]);
  const i = b.indexOf(oldSeq);
  if (i < 1 || (b[i - 1] & 0x1f) !== 4 + APP_OLD.length) return hex;
  const nm = Buffer.from(APP_NAME.slice(0, 26), 'latin1');
  const rec = Buffer.concat([Buffer.from([(b[i - 1] & 0xe0) | (4 + nm.length), 0x23, 0x00, 0x01, nm.length]), nm]);
  const out = Buffer.concat([b.slice(0, i - 1), rec, b.slice(i + oldSeq.length)]);
  out.writeUInt16LE(out.length - 2, 0);
  return out.toString('hex');
}
(function applyAppName() {
  if (APP_NAME === APP_OLD) return;
  let n = 0;
  for (const e of D.unicast_table || []) { const r = renameAppHex(e.resp); if (r !== e.resp) { e.resp = r; n++; } }
  for (const list of [D.stream, D.stream_initial, D.idle_loop]) for (const e of list || []) {
    if (!e.hex) continue; const r = renameAppHex(e.hex); if (r !== e.hex) { e.hex = r; n++; } }
  for (const key of Object.keys(D.tftp)) if (key.endsWith('/appli.ini')) {
    for (const src of ['tftp', 'bak']) {
      const b64 = src === 'tftp' ? D.tftp[key] : D.tftp_appli_bak; if (!b64) continue;
      const txt = Buffer.from(b64, 'base64').toString('latin1').split(APP_OLD).join(APP_NAME);
      if (src === 'tftp') D.tftp[key] = Buffer.from(txt, 'latin1').toString('base64'); else D.tftp_appli_bak = Buffer.from(txt, 'latin1').toString('base64');
    }
  }
  console.log(`[INIT] Applikationsname "${APP_NAME}" statt "${APP_OLD}" (${n} Pakete angepasst)`);
})();

function ts() { return new Date().toISOString().substr(11, 12); }
function log(...a) { console.log(ts(), ...a); }

// ---------- MAC im Payload an eigene NIC anpassen ----------
const OLD_REAL_FRAME_MAC = Buffer.from('e04b4216f9', 'hex');
const KNOWN_REAL_NIC_MAC = 'b0:0c:d1:34:99:81';
function looksLikePlaceholderMac(mac) {
  if (!mac || mac === '00:00:00:00:00:00') return true;
  const firstByte = parseInt(mac.split(':')[0], 16);
  return (firstByte & 0x02) !== 0 && mac.replace(/:/g, '').slice(2) === '0000000000';
}
function detectOwnMac() {
  for (const addrs of Object.values(os.networkInterfaces())) {
    for (const a of addrs) {
      if (a.family === 'IPv4' && a.address === FRAME_IP && a.mac && !looksLikePlaceholderMac(a.mac)) return a.mac;
    }
  }
  return null;
}
const detectedMac = detectOwnMac();
if (!detectedMac) console.error(`WARNUNG: Kein Adapter mit IP ${FRAME_IP} gefunden - hat der Laptop die .60?`);
const OWN_MAC_BYTES = Buffer.from((detectedMac || KNOWN_REAL_NIC_MAC).replace(/:/g, ''), 'hex');
function patchMac(buf) {
  let idx = buf.indexOf(OLD_REAL_FRAME_MAC);
  while (idx !== -1) {
    OWN_MAC_BYTES.copy(buf, idx - 1);
    idx = buf.indexOf(OLD_REAL_FRAME_MAC, idx + 1);
  }
  return buf;
}
const hx = (h) => patchMac(Buffer.from(h, 'hex'));
log(`[INIT] MAC im Payload: ${detectedMac || KNOWN_REAL_NIC_MAC} (${detectedMac ? 'erkannt' : 'Fallback'})`);

// ---------- Hilfsfunktion: Socket binden ----------
function mkSocket(port, name, onMsg, onReady) {
  const s = dgram.createSocket({ type: 'udp4', reuseAddr: true });
  s.on('error', (err) => console.error(`[${name}] Socket-Fehler (Port ${port}): ${err.message}`));
  if (onMsg) s.on('message', onMsg);
  s.bind(port, () => {
    try { s.setBroadcast(true); } catch (e) {}
    try { s.setTTL(64); } catch (e) {}
    if (onReady) onReady(s);
    log(`[${name}] bereit auf Port ${port}`);
  });
  return s;
}

// ---------- Zustand ----------
let itrySent = false;
let connected = false;
let streamStarted = false;
const stats = { unicastAnswered: 0, unicastUnknown: 0, pongs: 0, tftpFiles: 0 };

// ---------- 56629: Handshake, Multicast, Unicast-Anfragen ----------
const unicastTable = new Map(); // req-hex -> [{resp, dt}]
for (const row of D.unicast_table) {
  if (!row.req) continue;
  if (!unicastTable.has(row.req)) unicastTable.set(row.req, []);
  unicastTable.get(row.req).push({ resp: row.resp, dt: row.dt || 0 });
}
// v5g: Versuchsmodus Systemtabelle "30 01 31" (Antwort auf 04 00 63 30 01 31, fragt das Panel beim Start).
// Die Tabelle beginnt mit 28 Schaltern (01 = vorhanden?, 00 = fehlt?). Nummern 1..28.
// $env:KAYAK_CFG31="10"        -> Schalter 10 auf 01
// $env:KAYAK_CFG31="10,14,15"  -> mehrere
// $env:KAYAK_CFG31="10=02"     -> eigener Wert (hex)
// $env:KAYAK_CFG31="alle"      -> alle 00-Schalter 1..28 auf 01
// Aus der Panel-Software (CSystem::MEAvailable): Nr. 25..28 = M/E 0..3 vorhanden (0 = P/P), Nr. 29 unteres
// Halbbyte = Anzahl M/Es (Original 81 = 1 M/E). Alle M/Es: KAYAK_CFG31="26,27,28,29=84"
// Wirkt erst nach Panel-Neustart. Ohne Variable: Original.
const CFG31_REQ = '040063300131', CFG31_OFS = 8, CFG31_N = 29; // v5h: Nummern bis Tabellenende erlaubt
{
  const ent = unicastTable.get(CFG31_REQ);
  if (ent && ent[0]) {
    const b = Buffer.from(ent[0].resp, 'hex');
    const sw = (i) => b[CFG31_OFS + i].toString(16).padStart(2, '0');
    log('[CFG31] Schalter (Original): ' + Array.from({ length: CFG31_N }, (_, i) => `${i + 1}:${sw(i)}`).join(' '));
    // v5u: KAYAK_MES = Anzahl M/Es neben P/P (0..3, Standard 3). Setzt Schalter 26..28 und 29 passend.
    //      KAYAK_CFG31 (Experten) hat Vorrang. KAYAK_MES=0 = Original des Frames.
    const nMes = Math.max(0, Math.min(3, parseInt(process.env.KAYAK_MES !== undefined ? process.env.KAYAK_MES : '3', 10) || 0));
    const mesSpec = nMes ? [...Array(nMes)].map((_, i) => `${26 + i}`).concat([`29=${(0x80 | (nMes + 1)).toString(16)}`]).join(',') : '';
    const spec = (process.env.KAYAK_CFG31 || mesSpec).trim();
    if (!process.env.KAYAK_CFG31) log(`[CFG31] M/Es neben P/P: ${nMes} (KAYAK_MES)`);
    if (spec) {
      const items = spec.toLowerCase() === 'alle'
        ? Array.from({ length: 28 }, (_, i) => i).filter(i => b[CFG31_OFS + i] === 0).map(i => `${i + 1}`)
        : spec.split(/[,; ]+/).filter(Boolean);
      for (const it of items) {
        const [n, v] = it.split('=');
        const i = parseInt(n, 10) - 1, val = v !== undefined ? parseInt(v, 16) : 1;
        if (i >= 0 && CFG31_OFS + i < b.length && val >= 0 && val <= 255) { b[CFG31_OFS + i] = val; }
        else log(`[CFG31] ungueltig: ${it}`);
      }
      const origHex = ent[0].resp.slice(4), newHex = b.toString('hex').slice(4);
      ent[0].resp = b.toString('hex');
      // v5i: dieselbe Tabelle steckt auch im Multicast-Anfangsstrom (bei ~6 s) und wuerde den Versuch ueberschreiben
      let nRep = 0;
      for (const list of [D.stream, D.stream_initial, D.idle_loop]) for (const e of list || []) {
        if (e && e.hex && e.hex.includes(origHex)) { e.hex = e.hex.split(origHex).join(newHex); nRep++; }
      }
      log(`[CFG31] auch im Multicast-Strom ersetzt: ${nRep} Paket(e)`);
      log(`[CFG31] VERSUCH aktiv (${spec}): ` + Array.from({ length: CFG31_N }, (_, i) => `${i + 1}:${sw(i)}`).join(' '));
    }
  } else log('[CFG31] Anfrage 30 01 31 nicht in den Daten');
}
log(`[INIT] ${unicastTable.size} bekannte Unicast-Anfragen mit Antwort, ${D.stream.length} Multicast-Pakete, ${Object.keys(D.tftp).length} TFTP-Dateien`);

const s56629 = mkSocket(56629, '56629', on56629, (s) => {
  try { s.setMulticastInterface(FRAME_IP); } catch (e) { console.error('setMulticastInterface:', e.message); }
  try { s.setMulticastTTL(5); } catch (e) {}
  try { s.addMembership('239.0.0.0', FRAME_IP); s.addMembership('239.168.5.60', FRAME_IP); } catch (e) { console.error('addMembership:', e.message); }
});

// Fortlaufende Nummer in allen Zustandspaketen an 239.168.5.60
// (Trailer: 2d 30 04 0a 01 35 00 00 00 00 [Nummer 4 Byte, little endian])
const TRAILER = Buffer.from('2d30040a0135', 'hex');
let mcSeq = 1;
// TEST 05.10.: Tally-Bloecke (9f 44 00 18 00 02 [n] ...) enthalten an Inhalts-Byte 12 ein
// Status (beim echten Frame 80/00 bei "gut", fd/7d bei Quellen, deren Tasten blinken + UNCAL).
// Mit KAYAK_FORCE_SYNC (Standard an) werden die Bits 0x7d geloescht -> alles "gut".
const FORCE_SYNC = process.env.KAYAK_FORCE_SYNC !== '0';
const TALLY_HDR = Buffer.from('9f4400180002', 'hex');
function forceSync(buf) {
  if (!FORCE_SYNC) return buf;
  let i = buf.indexOf(TALLY_HDR);
  while (i !== -1) {
    const k = i + 2 + 12;
    if (k < buf.length) buf[k] &= 0x80;
    i = buf.indexOf(TALLY_HDR, i + 1);
  }
  return buf;
}
// TEST 05.10. (Montag3): Status-Tabelle (Eintrag 3f aa 00 22 11 01 ...) enthaelt an
// Tabellenplatz 5 (PGM) und 6 (PST) offenbar die UNCAL-Anzeige je Bus:
// 03 = an, 02 = blinkt, 00 = aus. Die Vorlage fuer PGM1/PGM2 hatte dort 03 -> UNCAL + Blinken.
// Mit KAYAK_FORCE_SYNC werden beide Plaetze auf 00 gesetzt.
const ARRAY_HDR = Buffer.from('3faa00221101', 'hex');
function clearUncal(buf) {
  if (!FORCE_SYNC) return buf;
  let i = buf.indexOf(ARRAY_HDR);
  while (i !== -1) {
    const body = i + 2; // nach 3f aa
    if (body + 6 < buf.length) { buf[body + 5] = 0x00; buf[body + 6] = 0x00; }
    i = buf.indexOf(ARRAY_HDR, i + 1);
  }
  return buf;
}
// KORREKTUR 05.10. (PST leuchtete rot statt hell), 3. Anlauf - aus Mitschnitt BrightPST (echter Frame):
//   Block 0 und Block 1 = Maske der PGM-Quelle, Block 2 = Maske der PST-Quelle.
//   Bit (Code-1) = Eingang 2..33; Black (00) und RAM-Rekorder (89/8a) haben kein Bit
//   und verwenden eine eigene Vorlage (Statusbyte 0x80 + Zusatzfeld f8).
//   (Der 2. Anlauf hatte PGM+PST in Block 0 - das stammte aus einem Mitschnitt mit
//    halb gezogenem Blendenhebel, da war PST tatsaechlich auf Sendung.)
function srcMask(code) { return (code >= 1 && code <= 32) ? (1 << (code - 1)) >>> 0 : 0; }
const N1_MODE = (process.env.KAYAK_N1 || 'zero').toLowerCase();
const N0_MODE = (process.env.KAYAK_N0 || 'bright').toLowerCase();
setImmediate(() => log(`[INIT] Tally-Bloecke: Block0=${N0_MODE}, Block1=${N1_MODE}`));
function ramMask(code) { return code === 0x89 ? 1 : code === 0x8a ? 2 : 0; }
function tallyBody(n) {
  // Waehrend AUTO/Hebel-Blende ist auch die PST-Quelle auf Sendung -> rot (wie echter Frame, Soft3)
  let mask = n === 2 ? srcMask(mix.pst) : srcMask(mix.pgm);
  if (n !== 2 && mix.pos > 0) mask = (mask | srcMask(mix.pst)) >>> 0;
  // KORREKTUR 05.10. (Panel sprang auf PGM15/PST15): zweite Maske fuer die RAM-Rekorder
  // (Bit0 = Taste 14 / Code 89, Bit1 = Taste 15 / Code 8a) an body[28] und body[44].
  // Die Vorlage stammte von einem PST15-Druck und hatte dort fest "02" stehen.
  let ram = n === 2 ? ramMask(mix.pst) : ramMask(mix.pgm);
  if (n !== 2 && mix.pos > 0) ram |= ramMask(mix.pst);
  // KORREKTUR 05.10. (PGM sprang immer auf BLACK zurueck, Video IMG_0517):
  // Block 0 wieder wie in v3f (dort lief PGM einwandfrei), Block 1 leer wie in v3f,
  // nur Block 2 (PST) aus dem BrightPST-Mitschnitt (dort leuchtete PST korrekt hell).
  let hex;
  // 05.10. mittags: Block 0 im v3f-Stil enthaelt ein Zusatzfeld "ffffff0f" (+ f8) - vermutlich
  // "alle Eingaenge auf Sendung" -> jede PST-Taste rot. Der echte Frame schickt Block 0 ohne
  // dieses Feld. Das Zurueckspringen auf BLACK kam dagegen von Block 1 (jetzt leer).
  // KAYAK_N0=bright (Standard, wie echter Frame) | v3f (alter Stil, PST rot)
  // 05.10. 12:10: Waehrend einer Blende schickt der echte Frame Block 0 im "f8/ffffff0f"-Stil
  // (Soft3, Hebel) -> genau der Stil, der PST rot macht. Also: Blende laeuft -> v3f-Stil.
  if (n === 0) hex = (N0_MODE === 'v3f' || !mask || mix.pos > 0) ? D.tally_n0_v3f : D.tally_tpl_src[0];
  else if (n === 1) {
    // TEST 05.10.: Block 1 entscheidet vermutlich, ob PST hell oder rot ist.
    // PST war nur in v3h hell - dort enthielt Block 1 die PGM-Maske (wie beim echten Frame).
    // KAYAK_N1=zero (Standard seit 05.10., Tasten reagieren) | bright | v3f (beide: Tasten springen zurueck)
    if (N1_MODE === 'zero') return Buffer.from(D.tally_n1_zero, 'hex');
    if (N1_MODE === 'v3f') { hex = D.tally_n0_v3f; }
    else hex = (mask ? D.tally_tpl_src : D.tally_tpl_none)[1];
    const b1 = Buffer.from(hex, 'hex'); b1[4] = 1;
    b1.writeUInt32LE(mask, 5); b1[28] = ram; b1[44] = ram;
    return b1;
  }
  else hex = (mask ? D.tally_tpl_src : D.tally_tpl_none)[2];
  if (!hex) return null;
  const b = Buffer.from(hex, 'hex');
  b.writeUInt32LE(mask, 5);
  b[28] = ram; b[44] = ram;
  // 05.10. 12:00: PST waehrend der Blende rot. Echter Frame (Soft3, Hebel halb gezogen):
  // Block 2 Status-Byte 13 = 02 statt 06 -> Bit 0x04 heisst offenbar "PST hell".
  if (n === 2 && mix.pos > 0 && mask) b[13] &= ~0x04;
  return b;
}
function patchTally(buf) {
  let i = buf.indexOf(TALLY_HDR);
  while (i !== -1) {
    const b = i + 2, n = buf[b + 4];
    const body = n <= 2 ? tallyBody(n) : null;   // v5zc: Bloecke > 2 sind M/E-Versuch, nicht anfassen
    if (body && b + body.length <= buf.length) body.copy(buf, b);
    i = buf.indexOf(TALLY_HDR, i + 1);
  }
  return buf;
}
function tallyRecs() {
  return [0, 1, 2].map((n) => tallyBody(n)).filter(Boolean).map((b) => Buffer.concat([Buffer.from([0x9f, 0x44]), b]));
}
function sendMc(buf, group) {
  if (group === '239.168.5.60') { forceSync(buf); clearUncal(buf); patchTally(buf); }
  if (group === '239.168.5.60' && buf.length >= 14 && buf.slice(buf.length - 14, buf.length - 8).equals(TRAILER)) {
    buf.writeUInt32LE(mcSeq++ >>> 0, buf.length - 4);
  }
  s56629.send(buf, 56629, group);
}

// ---------- Tasten (v2.1) ----------
function keyResponse(row, key) {
  const k = row.toString(16).padStart(2, '0') + key.toString(16).padStart(2, '0');
  if (D.key_responses[k]) return D.key_responses[k];
  // nicht aufgezeichnet (z. B. PGM1): Vorlage derselben Reihe nehmen und Tastencode einsetzen
  const rowKey = Object.keys(D.key_responses).find((x) => x.startsWith(row.toString(16).padStart(2, '0')));
  if (!rowKey) return null;
  return D.key_responses[rowKey].map((e) => {
    const b = Buffer.from(e.hex, 'hex');
    const marker = Buffer.from([0x87, 0x00, 0x01, row]);
    let i = b.indexOf(marker);
    while (i !== -1) { b[i + 4] = key; i = b.indexOf(marker, i + 1); }
    return { dt: e.dt, hex: b.toString('hex') };
  });
}
function playResponse(list, label) {
  for (const e of list) {
    stateTimers.push(setTimeout(() => sendMc(hx(e.hex), '239.168.5.60'), Math.round(e.dt * 1000)));
  }
  log(`[TASTE] ${label} -> ${list.length} Antwortpaket(e)`);
}
// ================= v3: eigener Mischer-Zustand =================
// Aufbau der Zustandspakete (entschluesselt 05.10.):
//   [Laenge 2 Byte LE] [Eintrag] [Eintrag] ... [Trailer 2d 30 04 0a 01 35 00 00 00 00 + Nummer]
//   Eintrag = Kopfbyte (0x80 | Laenge) + Inhalt, z. B.
//     87 00 01 01 [Quelle] 00 00 00   PGM-Bus
//     87 00 01 02 [Quelle] 00 00 00   PST-Bus
//     85 00 08 0b [Hebel 2 Byte]      Hebelstellung (Rueckmeldung)
//     85 00 08 0d [Pos 2 Byte]        Blendenstand 0..32767
//     86 00 08 0e 01/02/0f [2 Byte]   Mischwerte
//     87 00 08 31 06 80 00 00         Blende laeuft  /  02 00 00 00 = Ruhe
const LEVER_MIN = Number(process.env.KAYAK_LEVER_MIN || 3100); // unterster Hebelwert dieses Panels (gemessen ~3100)
const LEVER_MAX = 32767;
const LEVER_DEADBAND = Number(process.env.KAYAK_LEVER_DEADBAND || 400); // ~1,2 % Totzone an den Enden
const LEVER_0C = process.env.KAYAK_LEVER_0C || '01';           // Test-Schalter fuer UNCAL (Eintrag 84 00 08 0c ..)
const AUTO_MS = Number(process.env.KAYAK_AUTO_MS || 1000);      // Dauer AUTO
const TICK_MS = 60;                                              // Takt wie echter Frame
// Start: PGM Szene 1, PST Szene 2 (Black liegt auf keiner Taste mehr)
const mix = { pgm: 0x01, pst: 0x02, dirUp: true, pos: 0, inTrans: false, leverSent: false, leverTimer: null, leverRaw: null, lastLeverLog: 0 };

function hex2(n) { return (n & 0xff).toString(16).padStart(2, '0'); }
function u16(v) { const b = Buffer.alloc(2); b.writeUInt16LE(Math.max(0, Math.min(32767, Math.round(v)))); return b.toString('hex'); }
function rec(bodyHex) { const b = Buffer.from(bodyHex, 'hex'); return Buffer.concat([Buffer.from([0x80 | b.length]), b]); }
function packet(recs) {
  const body = Buffer.concat([...recs, Buffer.from('2d30040a01350000000000000000', 'hex')]);
  const len = Buffer.alloc(2); len.writeUInt16LE(body.length);
  return Buffer.concat([len, body]);
}
function busRecs() { return [rec('000101' + hex2(mix.pgm) + '000000'), rec('000102' + hex2(mix.pst) + '000000'), ...tallyRecs()]; }
function transRecs(pos, running, leverRaw) {
  const r = [];
  if (leverRaw != null) r.push(rec('00080b' + u16(leverRaw)));
  r.push(rec('00080d' + u16(pos)), rec('00080e01' + u16(32767 - pos)), rec('00080e02' + u16(pos)), rec('00080e0f' + u16(pos)));
  r.push(rec('000831' + u32hex(((running ? 0x8006 : 0x0002) | keyOnMask()) >>> 0)));
  return r;
}
// TEST (05.10.): Ruhe-Strom des echten Frames (Ref2.pcapng, 95 s ohne Bedienung) in
// Schleife mitsenden - enthaelt Lampen-/Statusmeldungen, die der echte Frame laufend
// schickt. Ziel: pruefen, ob dadurch das Blinken der Tasten verschwindet.
// Abschalten mit KAYAK_IDLE_LOOP=0.
function startIdleLoop() {
  log(`[STREAM] Ruhe-Strom des echten Frames laeuft in Schleife (${D.idle_loop.length} Pakete / ${D.idle_loop_len} s)`);
  const cycle = () => {
    for (const e of D.idle_loop) {
      stateTimers.push(setTimeout(() => sendMc(hx(patchBuses(e.hex)), '239.168.5.60'), e.t * 1000));
    }
    stateTimers.push(setTimeout(cycle, D.idle_loop_len * 1000));
  };
  cycle();
}
// 05.10.: Tasten tragen jetzt Szenen; Code = Eingang (01 = Sz01 ... 60 = Sz96), 00 = Black, ab 80 = interne Quellen
function srcName(k) {
  const n = OBS.sceneNo(k);
  if (n && (k === 0 || k > 96)) return `Sz${String(n).padStart(2, '0')} (${k === 0 ? 'Black' : 'intern ' + k.toString(16)})`;
  return k === 0 ? 'Black' : k <= 96 ? `Sz${String(k).padStart(2, '0')}` : `intern ${k.toString(16)}`;
}
function logBus(prefix) { log(`${prefix} -> PGM ${srcName(mix.pgm)} / PST ${srcName(mix.pst)}`); }
// Bus-Eintraege in einem aufgezeichneten Paket auf den aktuellen Zustand setzen
function patchBuses(hex) {
  const b = Buffer.from(hex, 'hex');
  for (const [row, val] of [[1, mix.pgm], [2, mix.pst]]) {
    const m = Buffer.from([0x87, 0x00, 0x01, row]);
    let i = b.indexOf(m);
    while (i !== -1) { b[i + 4] = val; i = b.indexOf(m, i + 1); }
  }
  return b.toString('hex');
}
function finishTransition(leverRaw, label) {
  const old = mix.pgm; mix.pgm = mix.pst; mix.pst = old;
  mix.pos = 0; mix.inTrans = false;
  sendMc(packet([...transRecs(0, false, leverRaw), ...busRecs()]), '239.168.5.60');
  logBus(`[MIX] ${label} fertig`);
}

function doCut() {
  if (mix.inTrans) return;
  const old = mix.pgm; mix.pgm = mix.pst; mix.pst = old;
  // aufgezeichnetes CUT-Paket des echten Frames, Busse auf neuen Zustand gesetzt
  for (const e of D.cut_response) sendMc(hx(patchBuses(e.hex)), '239.168.5.60');
  logBus('[MIX] CUT');
  OBS.cut(mix.pgm, mix.pst);
}
// 05.10. nachmittags: Blendendauer (Rate) vom Panel, in Frames (25 fps -> 40 ms/Frame).
// Panel: 06 00 25 1e 00 18 [Frames u16 LE] bei jeder Eingabe; echter Frame zeigt sie per
// Multicast 1e 00 18 [Frames] + 1e 00 1e 00 00 an (Transition1.pcapng). Start: 25 Frames = 1 s.
const FRAME_MS = 40;
mix.rate = Math.round(AUTO_MS / FRAME_MS);
// AUTO-/Key-Mix-Dauer (Transition2.pcapng): Panel 07 00 26 00 08 0a [Sel][u16 Frames]; Sel 0=AUTO, 3..6=Key1..4.
// Frame antwortet mit der ganzen Tabelle 00 08 0a [Sel] [u16], Sel 0..31 (Default 25).
const rates = new Array(32).fill(25); rates[0] = mix.rate;
function setRate(sel, frames) {
  if (sel > 31) return;
  rates[sel] = frames; if (sel === 0) mix.rate = frames;
  const r = []; for (let i = 0; i < 32; i++) r.push(rec('00080a' + i.toString(16).padStart(2, '0') + u16(rates[i])));
  sendMc(packet(r), '239.168.5.60');
  log(`[MIX] Dauer ${sel === 0 ? 'AUTO' : 'Key' + (sel - 2)} (Sel ${sel}) = ${frames} Frames = ${frames * FRAME_MS} ms`);
  if (sel === 0) OBS.setDuration(frames * FRAME_MS);
}
function doAuto() {
  if (mix.inTrans) return;
  const ms = mix.rate * FRAME_MS;
  if (ms < TICK_MS) { doCut(); log(`[MIX] AUTO mit ${mix.rate} Frames -> wie CUT`); return; }
  mix.inTrans = true;
  const steps = Math.max(2, Math.round(ms / TICK_MS));
  log(`[MIX] AUTO startet (${mix.rate} Frames = ${ms} ms)`);
  OBS.auto(mix.pst, mix.pgm, ms);
  for (let i = 1; i < steps; i++) {
    stateTimers.push(setTimeout(() => {
      mix.pos = 32767 * i / steps;
      const remaining = Math.round(mix.rate * (steps - i) / steps); // Restdauer in Frames (wie echter Frame: 00 08 18 00)
      sendMc(packet([...transRecs(mix.pos, true, null), rec('00081800' + u16(remaining))]), '239.168.5.60');
      if (i === 1) sendMc(packet(busRecs()), '239.168.5.60');
    }, i * TICK_MS));
  }
  stateTimers.push(setTimeout(() => { sendMc(packet([rec('000818000000')]), '239.168.5.60'); finishTransition(null, 'AUTO'); }, steps * TICK_MS));
}
function onLever(raw) {
  mix.leverRaw = raw;
  if (mix.leverTimer) return; // Takt 60 ms wie der echte Frame
  mix.leverTimer = setTimeout(() => {
    mix.leverTimer = null;
    if (mix.inTrans) return; // waehrend AUTO ignorieren
    const v = mix.leverRaw;
    let p = (v - LEVER_MIN) / (LEVER_MAX - LEVER_MIN) * 32767;
    p = Math.max(0, Math.min(32767, p));
    let pos = mix.dirUp ? p : 32767 - p;
    // KORREKTUR Montag1: Hebel zittert am Anschlag minimal (z. B. 32760 statt 32767).
    // Ohne Totzone meldete v3 dann "Blende laeuft, 0,05 %" -> Panel zeigte Mischzustand,
    // Tasten blinkten rot/gruen. Jetzt: unter LEVER_DEADBAND = Ruhe.
    if (pos < LEVER_DEADBAND) pos = 0;
    const recs = [];
    if (!mix.leverSent) { recs.push(rec('00080c' + LEVER_0C)); mix.leverSent = true; }
    if (pos >= 32767 - LEVER_DEADBAND) {
      mix.dirUp = !mix.dirUp;
      finishTransition(v, 'Hebel-Blende');
      OBS.tbarEnd(mix.pgm, mix.pst);
      return;
    }
    if (pos === 0 && mix.pos === 0 && recs.length === 0) return; // Ruhe bleibt Ruhe, nichts senden
    const tallyChange = (pos > 0) !== (mix.pos > 0); // Blende beginnt / Hebel zurueck an den Start
    mix.pos = pos;
    if (pos > 0) OBS.tbar(pos / 32767, mix.pst, mix.pgm); else OBS.tbarAbort(mix.pgm, mix.pst);
    sendMc(packet([...recs, ...transRecs(pos, pos > 0, v)]), '239.168.5.60');
    if (tallyChange) sendMc(packet(busRecs()), '239.168.5.60'); // eigenes Paket: Busse + Tally (PST rot/hell)
    const now = Date.now();
    if (now - mix.lastLeverLog > 1000) { mix.lastLeverLog = now; log(`[MIX] Hebel ${Math.round(pos / 327.67)} %`); }
  }, TICK_MS);
}

// 05.10. Ziffernblock (Effects-Bereich), aus EMEM.pcapng (echter Frame):
//   Ziffer:  Panel 06 00 25 1e 00 01 01 [Zahl]  -> Frame: Unicast-Quittung 06 00 85 1e 00 01 00 06
//                                                  + Multicast-Record 1e 00 01 01 [Zahl] (Anzeige)
//   Enter:   Panel 07 00 e6 1e 00 03 [Zahl] fe ff  (Register/Macro-Nummer abrufen)
//   CLEAR:   Panel 04 00 e3 1e 00 33
//   E-MEM, MaKe und Macros (bis 96) laufen im Panel selbst - kein Verkehr zum Frame.
const keypad = { value: 0 };
function onKeypadEnter(n) {
  // Platzhalter fuer spaeter (OBS/CasparCG/Companion): Nummer n wurde mit Enter abgerufen
  log(`[ZIFFERN] Enter -> Register/Macro ${n}`);
  OBS.emem(n);
}
// ---- Keys 1-4: Delegate + Key-Bus (Key-Delegate.pcapng) ----
// Gruppe 0x20..0x23 = Key1..4. Delegate: Panel 06 00 25 00 a0 26 [Maske 01/02/04/08] 00 -> Frame 00 a0 26 [Maske] 00
// Panel-Abfrage 05 00 24 00 [Gruppe] [Sub 50/13/84] -> Frame sendet alle Key-Gruppen.
// Key-Bus: 06 00 25 00 [Gruppe] 02 [Code] 01 -> Frame 00 g 01 typ, 00 g 02 code 000000, 00 g 03 code 000000 (Fill = Source)
//          + 00 a4 27 code 000000, 00 a4 28 00000000, 00 a4 2a code 000000, 00 a4 2b 00000000
const keys = [{ typ: 1, src: 0 }, { typ: 2, src: 0 }, { typ: 2, src: 0 }, { typ: 3, src: 0 }];
let keyDelegate = 0x01;
const KEY_INTERN = new Set([0x89, 0x8a, 0x8b, 0x8c, 0x90, 0x91, 0x92, 0x99, 0xf0]);
function keyGroupRecs() {
  const r = [];
  keys.forEach((k, i) => { const g = hex2(0x20 + i); r.push(rec('00' + g + '01' + hex2(k.typ)), rec('00' + g + '1300'), rec('00' + g + '5000'), rec('00' + g + '8400')); });
  for (const g of ['74', '75']) r.push(rec('00' + g + '0102'), rec('00' + g + '1300'), rec('00' + g + '5000'), rec('00' + g + '8400'));
  return r;
}

// ================= v5w (23.10.2026): TFT-Zahlenwerte (Mitschnitte am echten Frame) =================
// Der Frame meldet dem Panel nach jeder Aenderung die Absolutwerte (Multicast):
//   Locate/Size : Record 9f [Len=44]  00 a1+k 02 00  [Float Size][Float X][Float Y][-0.0] ...   (Anzeigeeinheiten)
//                 Record 9f [Len=76]  00 a1+k 03 00  [X*Size][Y*Size] ...                        (abgeleitet)
//   Crop        : Record 9f [Len=56]  00 a1+k 29 00  [?][?][1.0][1.0][1.0][rechts][links][oben][unten] ...
//   Opacity     : 85 00 [20+k] 0d [u16 0..4096 = 0..100 %]
//   Clip        : 85 00 [20+k] 2f [Low u16] / 30 [Hi u16] / 31 [(2(L+H)-2048)/3] / 32 [2047-2L+2H]
//                 Low: -200..+200 %, Hi: -100..+300 % (je 0..4096)
// Panel -> Frame: Drehgeber = Delta in 1/1024 Anzeigeeinheit (07 00 46 ...) bzw. Rohwert (06 00 c5 ...);
//   Zifferneingabe = Absolutwert: 09 00 28 00 [a1+k] [sub] [achse] [Float] bzw. 06 00 25 00 [20+k] [id] [u16].
const TFT_FB = process.env.KAYAK_TFT !== '0';
const KV_UNIT = 1024;
const HI_IDS = [0x30, 0x2d, 0x28], LO_IDS = [0x2f, 0x2c, 0x27];
const KV = [0, 1, 2, 3].map(() => ({ size: Number(process.env.KAYAK_TFT_SIZE || 100), x: 0, y: 0, tw: 0, crop: [0, 0, 0, 0], opac: 4096, lo: 2048, hi: 2048, ids: [0x30, 0x2f] }));
const A103_TPL = Buffer.from('00a103000000c13e0400a0bb000000800000c13e0400a0bb0000000000000000000000000000000000000000000000000000008000000000000000004b59863c00000000000000000000803f', 'hex');
function rec9f(body) { const h = Buffer.alloc(3); h[0] = 0x9f; h.writeUInt16LE(body.length, 1); return Buffer.concat([h, body]); }
function w16(v) { const b = Buffer.alloc(2); b.writeUInt16LE(v & 0xffff); return b.toString('hex'); }
// Crop-Bereich am echten Frame (Angabe 23.10.): rechts/links +-16, oben/unten +-9 (16:9)
const CROP_MAX = [16, 16, 9, 9];
function cropClamp(idx, v) { return Math.max(-CROP_MAX[idx], Math.min(CROP_MAX[idx], v)); }
const SIZE_LIM = [1, 400], XY_LIM = parseFloat(process.env.KAYAK_XY_RANGE || '100');
function lim(v, a, b) { return Math.max(a, Math.min(b, v)); }
let lastPanelInput = 0;
function kvApply(key) { lastPanelInput = Date.now(); OBS.setKey(key, KV[key], mix.pst); }
function kvNorm(s) { s.size = lim(s.size, ...SIZE_LIM); s.x = lim(s.x, -XY_LIM, XY_LIM); s.y = lim(s.y, -XY_LIM, XY_LIM); s.tw = lim(s.tw, -3600, 3600); }
function kvClamp(v) { return Math.max(0, Math.min(4096, Math.round(v))); }
function kvLocateRecs(i) {
  const s = KV[i], a = Buffer.alloc(44); a[1] = 0xa1 + i; a[2] = 0x02;
  a.writeFloatLE(s.size, 4); a.writeFloatLE(s.x, 8); a.writeFloatLE(s.y, 12); if (s.tw) a.writeFloatLE(s.tw, 16); else a.writeUInt32LE(0x80000000, 16); a.writeUInt32LE(0x80000000, 28);   // Twist = 4. Float (Mitschnitt twist.pcapng)
  const b = Buffer.from(A103_TPL); b[1] = 0xa1 + i;
  b.writeFloatLE(s.x * s.size, 4); b.writeFloatLE(s.y * s.size, 8); b.writeFloatLE(s.x * s.size, 16); b.writeFloatLE(s.y * s.size, 20);
  return [rec9f(a), rec9f(b)];
}
function kvCropRec(i) {
  const b = Buffer.alloc(56); b[1] = 0xa1 + i; b[2] = 0x29;
  for (const k of [2, 3, 4]) b.writeFloatLE(1, 4 + 4 * k);
  for (let k = 0; k < 4; k++) b.writeFloatLE(KV[i].crop[k], 4 + 4 * (5 + k));
  return rec9f(b);
}
function kvClipRecs(i) {
  const s = KV[i], g = hex2(0x20 + i), r = [rec('00' + g + hex2(s.ids[1]) + w16(s.lo)), rec('00' + g + hex2(s.ids[0]) + w16(s.hi))];
  if (s.ids[0] === 0x30) {
    r.push(rec('00' + g + '31' + w16(Math.max(-1, Math.floor((2 * (s.lo + s.hi) - 2048) / 3)))), rec('00' + g + '32' + w16(2047 - 2 * s.lo + 2 * s.hi)));
  }
  return r;
}
const kvPending = [new Set(), new Set(), new Set(), new Set()]; let kvTimer = null;
function kvSend(i, part) {
  if (!TFT_FB) return;
  kvPending[i].add(part);
  if (kvTimer) return;
  kvTimer = setTimeout(() => {
    kvTimer = null;
    for (let k = 0; k < 4; k++) {
      const p = kvPending[k]; if (!p.size) continue;
      const r = [];
      if (p.has('loc')) r.push(...kvLocateRecs(k));
      if (p.has('crop')) r.push(kvCropRec(k));
      if (p.has('opac')) r.push(rec('00' + hex2(0x20 + k) + '0d' + w16(KV[k].opac)));
      if (p.has('clip')) r.push(...kvClipRecs(k));
      p.clear();
      if (r.length) sendMc(packet(r), '239.168.5.60');
    }
  }, 40);
}
function kvSendAll(i) { for (const p of ['loc', 'crop', 'opac', 'clip']) kvSend(i, p); }
// Encoder-Empfindlichkeit (Faktor auf die Panel-Schritte; die Beschleunigung macht das Panel selbst)
const GAIN = { size: parseFloat(process.env.KAYAK_GAIN_SIZE || '1'), xy: parseFloat(process.env.KAYAK_GAIN_XY || '1'),
  tw: parseFloat(process.env.KAYAK_GAIN_TWIST || '1'), crop: parseFloat(process.env.KAYAK_GAIN_CROP || '0.25') };
function kvEncoder(key, sub, axis, v) {   // Drehgeber-Delta (1/1024 Einheit)
  const s = KV[key], d0 = v / KV_UNIT;
  const d = d0 * (sub === 0x02 ? (axis === 1 ? GAIN.size : axis === 4 ? GAIN.tw : GAIN.xy) : GAIN.crop);
  if (sub === 0x02) {
    if (axis === 1) s.size += d; else if (axis === 2) s.x += d; else if (axis === 3) s.y += d; else if (axis === 4) s.tw += d; else return;
    kvNorm(s); kvSend(key, 'loc');
  } else if (sub === 0x29 && axis >= 6 && axis <= 9) { s.crop[axis - 6] = cropClamp(axis - 6, s.crop[axis - 6] + d); kvSend(key, 'crop'); }
}
function kvKeyer(key, id, v, absolute) {  // Opacity / Clip; liefert Delta zurueck
  const s = KV[key]; let old, part;
  if (id === 0x0d) { old = s.opac; s.opac = kvClamp(absolute ? v : old + v); part = 'opac'; }
  else if (HI_IDS.includes(id)) { old = s.hi; s.hi = kvClamp(absolute ? v : old + v); s.ids[0] = id; part = 'clip'; }
  else if (LO_IDS.includes(id)) { old = s.lo; s.lo = kvClamp(absolute ? v : old + v); s.ids[1] = id; part = 'clip'; }
  else return 0;
  kvSend(key, part);
  return (id === 0x0d ? s.opac : HI_IDS.includes(id) ? s.hi : s.lo) - old;
}
// Modell -> OBS-Filterwerte (Opacity 0..1, Clip Low = luma_min, Clip Hi = luma_max; Panel-Prozent 0..100 = 0..1)
function kvObsVal(key, kind) {
  const s = KV[key];
  if (kind === 'opac') return lim(s.opac / 4096, 0, 1);
  if (kind === 'clip') return lim((-200 + s.lo / 4096 * 400) / 100, 0, 1);
  return lim((-100 + s.hi / 4096 * 400) / 100, 0, 1);
}
function kvKeyOut(key, kind) { lastPanelInput = Date.now(); OBS.keyFilter(key, kind, 0, mix.pst, kvObsVal(key, kind)); }
// OBS -> TFT: Modell aus OBS lesen. force = alles uebernehmen (beim Delegieren), sonst nur Abweichungen (Abfrage)
let kvPulling = false;
async function kvPull(i, force) {
  if (!TFT_FB || !connected || kvPulling) return false;
  kvPulling = true;
  try {
    const m = await OBS.readKey(i, mix.pst); if (!m) return false;
    if (i !== keyDelIdx) return false;
    const s = KV[i], parts = new Set();
    const neq = (a, b, t) => Math.abs(a - b) > t;
    if (force || neq(s.size, lim(m.size, ...SIZE_LIM), 0.05) || neq(s.x, m.x, 0.02) || neq(s.y, m.y, 0.02) || neq(s.tw, m.tw, 0.1)) {
      s.size = m.size; s.x = m.x; s.y = m.y; s.tw = m.tw; kvNorm(s); parts.add('loc'); }
    for (let n = 0; n < 4; n++) {
      const mo = Math.max(0, s.crop[n]);          // negatives Crop gibt es in OBS nicht (= 0)
      if (force || neq(mo, m.crop[n], 0.02)) { s.crop[n] = cropClamp(n, m.crop[n]); parts.add('crop'); }
    }
    if (force && m.opac == null) s.opac = 4096;
    if (force && m.lumaMin == null) { s.lo = 2048; s.hi = 2048; }
    if (m.opac != null && (force || neq(s.opac / 4096, m.opac, 0.003))) { s.opac = kvClamp(m.opac * 4096); parts.add('opac'); }
    if (m.lumaMin != null) {
      const lo = (-200 + s.lo / 4096 * 400) / 100;
      if (force || (lo > 0 ? neq(lo, m.lumaMin, 0.003) : m.lumaMin > 0.003)) { s.lo = kvClamp((m.lumaMin * 100 + 200) / 400 * 4096); parts.add('clip'); }
      const hi = kvObsVal(i, 'gain');
      if (force || (hi < 1 ? neq(hi, m.lumaMax, 0.003) : m.lumaMax < 0.997)) { s.hi = kvClamp((m.lumaMax * 100 + 100) / 400 * 4096); parts.add('clip'); }
    }
    if (force) for (const p of ['loc', 'crop', 'opac', 'clip']) parts.add(p);
    for (const p of parts) kvSend(i, p);
    if (parts.size && !force) log(`[TFT] Key${i + 1} aus OBS uebernommen (${[...parts].join(', ')}): Size ${s.size.toFixed(1)}, X ${s.x.toFixed(1)}, Y ${s.y.toFixed(1)}, Twist ${s.tw.toFixed(1)}`);
    return true;
  } finally { kvPulling = false; }
}
const TFT_POLL = parseInt(process.env.KAYAK_TFT_POLL || '1000', 10);
if (TFT_FB && TFT_POLL > 0) setInterval(() => { if (connected && Date.now() - lastPanelInput > 1500) kvPull(keyDelIdx, false).catch(() => {}); }, TFT_POLL);
let keyReqTimer = null;
// Delegate Key 1 schickt KEIN a0 26 (Log 08.10.), nur die Abfrage-Salve 05 00 24 00 [Gruppe] 50 fuer die
// drei NICHT delegierten Keys. Die fehlende Gruppe = neu delegierter Key (gilt auch fuer Key 2..4).
const keyReqGroups = new Set();
let keyDelIdx = 0;
function setDelegate(i, how) {
  if (i < 0 || i > 3) return;
  const changed = i !== keyDelIdx; keyDelIdx = i;
  if (changed || how === 'a026') log(`[KEY] Delegate Key${i + 1}${how === 'abfrage' ? ' (aus Abfrage erkannt)' : how === 'regler' ? ' (aus Regler erkannt)' : ''}`);
  OBS.selectItem(i, mix.pst);
  if (changed && process.env.KAYAK_TFT_ONDELEGATE !== '0') { kvSendAll(i); kvPull(i, true).catch(() => {}); }
}
function onKeyRequest(g, sub) {
  if (sub === 0x50) keyReqGroups.add(g);
  if (keyReqTimer) return;
  keyReqTimer = setTimeout(() => {
    keyReqTimer = null; sendMc(packet(keyGroupRecs()), '239.168.5.60');
    if (keyReqGroups.size === 3) for (let i = 0; i < 4; i++) if (!keyReqGroups.has(0x20 + i)) setDelegate(i, 'abfrage');
    keyReqGroups.clear();
  }, 25);
}
function keySrcRecs(i) {
  const k = keys[i], g = hex2(0x20 + i), c = hex2(k.src);
  return [rec('00' + g + '01' + hex2(k.typ)), rec('00' + g + '02' + c + '000000'), rec('00' + g + '03' + c + '000000'),
          rec('00a427' + c + '000000'), rec('00a42800000000'), rec('00a42a' + c + '000000'), rec('00a42b00000000')];
}
function onKeyBus(i, code) {
  if (code === 0 || code <= 0x60 || KEY_INTERN.has(code)) keys[i].src = code;
  else log(`[KEY] Key${i + 1} Code ${hex2(code)} unbekannt -> bleibt ${srcName(keys[i].src)}`);
  sendMc(packet(keySrcRecs(i)), '239.168.5.60');
  log(`[KEY] Key${i + 1} Source/Fill = ${srcName(keys[i].src)} (Code ${hex2(keys[i].src)})`);
  OBS.keySource(i, keys[i].src);
}
// ---- Wipe-Pattern (Wipe-PatternSelect.pcapng) ----
// Panel 06 00 25 00 [10=Wipe1 / 11=Wipe2] 01 [u16 LE Pattern] -> Frame 00 g 01 [u16], 00 g 04 0d [13 Flags], 00 g 11 00, 00 g 12 00, 00 g 79 00, 00 g 7d 00
// Flag 5 ist bei einigen Patterns 00 (vermutlich Parameter nicht verfuegbar).
const wipe = { 0x10: 1, 0x11: 1 };
const WIPE_FLAG0 = new Set([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x29, 0x2a, 0x3d, 0x3e, 0x3f, 0x40, 0x47, 0x48]);
function onWipe(g, pat) {
  wipe[g] = pat; const G = hex2(g);
  const flags = '01010101' + (WIPE_FLAG0.has(pat) ? '00' : '01') + '0101010101000100';
  sendMc(packet([rec('00' + G + '01' + u16(pat)), rec('00' + G + '040d' + flags), rec('00' + G + '1100'), rec('00' + G + '1200'), rec('00' + G + '7900'), rec('00' + G + '7d00')]), '239.168.5.60');
  log(`[WIPE] Wipe${g - 0x0f} Pattern ${pat}`);
  OBS.setWipePattern(g - 0x0f, pat);
}
// ---- Key CUT / Key MIX (KeyCutMix.pcapng) ----
// Sel = Transitions-Ebene: 1/2 = Bkgd A/B, 3..6 = Key1..4, 7 = ? (5. Ebene, evtl. FTB), 0x0f = Bkgd-Hilfsebene.
// Panel: Key CUT 05 00 e4 00 08 06 [Sel], Key MIX 05 00 e4 00 08 05 [Sel]
// Frame: 00 08 0e [Sel] [u16 Pegel 0..7fff], 00 08 31 [u32 On-Air-Maske, Bit = Sel], 00 08 0f [Sel] [00=on/01=off] (Tabelle 0..31),
//        00 08 18 [Sel] [u16 Rest-Frames] (Tabelle 0..31), waehrend MIX alle 60 ms.
// Next Transition: Panel 09 00 28 00 08 03 [u32 Maske] -> Frame 00 08 03 [Maske] + 00 08 04-Tabelle
// Transitions-Typ: Panel 06 00 25 00 08 04 [Sel] [Typ 01/02/03] -> Frame 00 08 04-Tabelle (Sel 0..31) + 00 08 1a 00
function u32hex(v) { const b = Buffer.alloc(4); b.writeUInt32LE(v >>> 0); return b.toString('hex'); }
const keyOn = new Array(32).fill(false);           // Sel -> on air
const keyRun = new Array(32).fill(false);          // Sel -> Mix laeuft
const transType = new Array(32).fill(1);
let nextTrans = 0x06;
function keyOnMask() { let m = 0; for (let i = 3; i <= 7; i++) if (keyOn[i] || keyRun[i]) m |= (1 << i); return m; }
function keyBaseMask() { return (mix.inTrans ? 0x8006 : 0x0002) | keyOnMask(); }
function key0fTable() { const r = []; for (let i = 0; i < 32; i++) r.push(rec('00080f' + hex2(i) + ((i === 1 || ((i >= 3 && i <= 7) && keyOn[i])) ? '00' : '01'))); return r; }
function key18Table(sel, remain) { const r = []; for (let i = 0; i < 32; i++) r.push(rec('000818' + hex2(i) + u16(i === sel ? remain : 0))); return r; }
function keyName(sel) { return sel >= 3 && sel <= 6 ? 'Key' + (sel - 2) : 'Ebene' + sel; }
function keyCut(sel) {
  if (keyRun[sel]) return;
  keyOn[sel] = !keyOn[sel];
  sendMc(packet([rec('00080e' + hex2(sel) + u16(keyOn[sel] ? 32767 : 0)), rec('000831' + u32hex(keyBaseMask())), ...key0fTable(), ...key18Table(sel, 0)]), '239.168.5.60');
  log(`[KEY] CUT ${keyName(sel)} -> ${keyOn[sel] ? 'ON' : 'OFF'}`);
  if (sel >= 3 && sel <= 6) { OBS.keySwitch(sel - 3, keyOn[sel], 0); OBS.assMessage(`KEY${sel - 2} ${keyOn[sel] ? 'ON' : 'OFF'}`); }
  if (sel === 7) OBS.black(keyOn[sel], 0, mix.pst);
}
function keyMix(sel, framesOverride) {
  if (keyRun[sel]) return;
  const frames = framesOverride != null ? framesOverride : (rates[sel] || 25), ms = frames * FRAME_MS;
  if (ms < TICK_MS) { keyCut(sel); return; }
  const up = !keyOn[sel], steps = Math.max(1, Math.round(ms / TICK_MS));
  keyRun[sel] = true;
  log(`[KEY] MIX ${keyName(sel)} -> ${up ? 'ON' : 'OFF'} (${frames} Frames = ${ms} ms)`);
  if (sel >= 3 && sel <= 6) { OBS.keySwitch(sel - 3, up, ms); OBS.assMessage(`KEY${sel - 2} ${up ? 'ON' : 'OFF'}`); }
  if (sel === 7) OBS.black(up, ms, mix.pst);
  let i = 0;
  const t = setInterval(() => {
    i++;
    const f = i / steps, lvl = Math.round(32767 * (up ? f : 1 - f)), remain = Math.round(frames * (steps - i) / steps);
    if (i < steps) {
      sendMc(packet([rec('00080d0000'), rec('00080e' + hex2(sel) + u16(lvl)), rec('000831' + u32hex(keyBaseMask())), ...key18Table(sel, remain)]), '239.168.5.60');
      return;
    }
    clearInterval(t);
    keyRun[sel] = false; keyOn[sel] = up;
    sendMc(packet([rec('00080d0000'), rec('00080e' + hex2(sel) + u16(up ? 32767 : 0)), rec('000831' + u32hex(keyBaseMask())), ...key0fTable(), ...key18Table(sel, 0)]), '239.168.5.60');
    log(`[KEY] MIX ${keyName(sel)} fertig -> ${up ? 'ON' : 'OFF'}`);
  }, TICK_MS);
}
// Haupt-CUT/AUTO: wirkt auf alle bei Next Transition gewaehlten Ebenen (Bkgd = Bit 1/2, Key1..4 = Bit 3..6).
// AUTO nimmt fuer alle Ebenen die AUTO-Blendzeit (Sel 0).
function selKeys() { const r = []; for (let i = 3; i <= 6; i++) if (nextTrans & (1 << i)) r.push(i); return r; }
function bkgdSelected() { return (nextTrans & 0x06) !== 0 || selKeys().length === 0; }
function mainCut() { OBS.assMessage('CUT'); if (bkgdSelected()) doCut(); for (const i of selKeys()) keyCut(i); }
function mainAuto() { OBS.assMessage('AUTO'); if (bkgdSelected()) doAuto(); for (const i of selKeys()) keyMix(i, mix.rate); }
function trans04Table() { const r = []; for (let i = 0; i < 32; i++) r.push(rec('000804' + hex2(i) + hex2(transType[i]))); return r; }
function onNextTrans(m) {
  nextTrans = m;
  sendMc(packet([rec('000803' + u32hex(m)), ...trans04Table()]), '239.168.5.60');
  const parts = []; if (m & 0x06) parts.push('Bkgd'); for (let i = 3; i <= 7; i++) if (m & (1 << i)) parts.push(keyName(i));
  log(`[TRANS] Next Transition = ${parts.join('+') || 'nichts'} (Maske ${hex2(m)})`);
}
function onTransType(sel, typ) {
  if (sel > 31) return;
  transType[sel] = typ;
  sendMc(packet([...trans04Table(), rec('00081a00')]), '239.168.5.60');
  log(`[TRANS] Typ ${sel === 0 ? 'Bkgd' : keyName(sel)} = ${({ 1: 'Mix', 2: 'Wipe1?', 3: 'Wipe2?' })[typ] || typ}`);
  if (sel === 0) OBS.setTransType(typ);
}
const seen46 = new Set();
function meLever(me, v) {
  const m = meSt[me], L = m.lev || (m.lev = { min: v, max: 32767, armed: true, from: null, t0: 0 });
  if (v < L.min) L.min = v;
  const p = (v - L.min) / Math.max(1, L.max - L.min);         // 0..1
  const atEnd = p < 0.05 ? 0 : p > 0.95 ? 1 : null;
  if (atEnd !== null) { if (!L.armed) log(`[M/E] M/E${me} Hebel am Anschlag - bereit`); L.armed = true; L.from = atEnd; L.t0 = 0; return; }
  if (!L.armed) return;
  if (!L.t0) L.t0 = Date.now();
  if ((L.from === 0 && p >= 0.5) || (L.from === 1 && p <= 0.5)) {
    L.armed = false;
    const ms = Math.max(150, Math.min(5000, 2 * (Date.now() - L.t0)));
    if (!m.pst) { log(`[M/E] M/E${me} Hebel: noch keine PST-Taste gewaehlt`); return; }
    OBS.meSwitch(me, m.pst, 'auto', ms, `Hebel (${Math.round(ms)} ms)`);
    const old = m.pgm; m.pgm = m.pst; m.pst = old; const oc = m.pgmC; m.pgmC = m.pstC; m.pstC = oc; meBusLamps(me); OBS.mePreview(me, m.pst);
  }
}
// v5o: Bus-Lampen der M/E zurueckmelden - wie bei P/P (Satz 00 01 01/02 [Code]), nur mit M/E-Nummer vorne
// v5zc: VERSUCH M/E-Tally (kein Mitschnitt vorhanden, geraten!). KAYAK_ME_TALLY=1: wie P/P-Bloecke 0..2, aber mit M/E-Nummer im
// Byte vor der "02" (Annahme: dort steht die Ebene, P/P = 0). KAYAK_ME_TALLY=2: Bloecke 3..11 (3 pro M/E) ohne Ebenenbyte.
const ME_TALLY = parseInt(process.env.KAYAK_ME_TALLY || '0', 10);
function meTallyBody(me, n) {
  const m = meSt[me], code = (n === 2 ? m.pstC : m.pgmC) || 0, mask = srcMask(code);
  let b;
  if (n === 1) b = Buffer.from(D.tally_n1_zero, 'hex');
  else {
    const hex = n === 0 ? (mask ? D.tally_tpl_src[0] : D.tally_n0_v3f) : (mask ? D.tally_tpl_src : D.tally_tpl_none)[2];
    if (!hex) return null;
    b = Buffer.from(hex, 'hex'); b.writeUInt32LE(mask, 5); b[28] = 0; b[44] = 0;
  }
  if (ME_TALLY === 1) { b[2] = me; b[4] = n; } else { b[4] = 3 * me + n; }
  return b;
}
function meBusLamps(me) {
  const m = meSt[me], r = [];
  if (ME_TALLY) for (const n of [0, 1, 2]) { const t = meTallyBody(me, n); if (t) r.push(Buffer.concat([Buffer.from([0x9f, 0x44]), t])); }
  if (m.pgmC !== undefined) r.push(rec(hex2(me) + '0101' + hex2(m.pgmC) + '000000'));
  if (m.pstC !== undefined) r.push(rec(hex2(me) + '0102' + hex2(m.pstC) + '000000'));
  if (ME_TALLY) log(`[M/E] M/E${me} Tally-Versuch Modus ${ME_TALLY}: PGM-Taste ${m.pgmC}, PST-Taste ${m.pstC}`);
  if (r.length && process.env.KAYAK_ME_LAMPS !== '0') sendMc(packet(r), '239.168.5.60');
}
// v5v: Persoenliche Einstellungen des Panels setzen (wie das Sidepanel, Mitschnitt Siedepanel2 14.10.):
// Objekt 21 05, Kennung 01 = Beeper, 03 = Tastenklick; Wert 00 aus / 01 an.
// KAYAK_KEYCLICK = off (Standard) | on | keep ; KAYAK_BEEPER = keep (Standard) | off | on
function personalSettings() {
  const want = (v, def) => { const x = (v || def).toLowerCase(); return x === 'off' || x === '0' ? 0 : x === 'on' || x === '1' ? 1 : null; };
  const kc = want(process.env.KAYAK_KEYCLICK, 'off'), bp = want(process.env.KAYAK_BEEPER, 'keep');
  const send = (kw, val, name) => {
    s56629.send(Buffer.from([0x05, 0x00, 0x25, 0x21, 0x05, kw, val]), 56629, PANEL_IP);
    log(`[PANEL] ${name} ${val ? 'an' : 'aus'}`);
  };
  if (kc !== null) send(0x03, kc, 'Tastenklick');
  if (bp !== null) send(0x01, bp, 'Beeper');
}
// v5n: Zustand je M/E (Tastennummern 1..30, Blendzeit in Frames)
const meSt = { 1: { pgm: 0, pst: 0, rate: parseInt(process.env.KAYAK_ME_RATE || '25', 10) }, 2: { pgm: 0, pst: 0, rate: parseInt(process.env.KAYAK_ME_RATE || '25', 10) }, 3: { pgm: 0, pst: 0, rate: parseInt(process.env.KAYAK_ME_RATE || '25', 10) } };
function handleKey(msg, rinfo) {
  const h = msg.toString('hex');
  if (process.env.KAYAK_RAW === '1') log(`[ROH] ${h}`); // v5j: alle Panel-Meldungen roh anzeigen
  if (msg.length === 8 && h.startsWith('0600251e000101')) {
    keypad.value = msg[7];
    if (rinfo) s56629.send(Buffer.from('0600851e00010006', 'hex'), rinfo.port, rinfo.address);
    sendMc(packet([rec('1e000101' + hex2(keypad.value))]), '239.168.5.60');
    log(`[ZIFFERN] Eingabe ${keypad.value}`);
    return true;
  }
  if (msg.length === 9 && h.startsWith('0700e61e0003')) { onKeypadEnter(msg[6]); return true; }
  if (h === '0400e31e0033') { keypad.value = 0; log('[ZIFFERN] CLEAR'); return true; }
  if (msg.length === 8 && h.startsWith('06002500') && (msg[4] === 0x10 || msg[4] === 0x11) && msg[5] === 0x01) { onWipe(msg[4], msg.readUInt16LE(6)); return true; }
  if (msg.length === 8 && h.startsWith('06002500a026')) {
    keyDelegate = msg[6];
    sendMc(packet([rec('00a026' + hex2(keyDelegate) + '00')]), '239.168.5.60');
    { const i = [0, 1, 2, 3].find(k => keyDelegate & (1 << k)); if (i !== undefined) setDelegate(i, 'a026'); }
    return true;
  }
  if (msg.length === 7 && h.startsWith('05002400') && msg[4] >= 0x20 && msg[4] <= 0x23) { onKeyRequest(msg[4], msg[5]); return true; }
  if (msg.length === 8 && (msg[2] & 0x7f) === 0x25 && msg[3] === 0 && msg[4] >= 0x20 && msg[4] <= 0x23 && msg[5] === 0x02) {
    if (msg[7] === 1) onKeyBus(msg[4] - 0x20, msg[6]);
    return true;
  }
  if (msg.length === 9 && h.startsWith('07002600080a')) { setRate(msg[6], msg.readUInt16LE(7)); return true; }
  if (msg.length === 8 && h.startsWith('0600251e0018')) { log('[MIX] E-MEM-Dauer ' + msg.readUInt16LE(6) + ' Frames (nur E-MEM, ignoriert)'); return true; }
  // v5n: M/E1..3 CUT/AUTO (05 00 e4 [M/E] 08 06/05 00) und Blendzeit (07 00 26 [M/E] 08 0a 00 [u16 Frames])
  if (msg.length === 7 && msg[2] === 0xe4 && msg[3] >= 1 && msg[3] <= 3 && msg[4] === 0x08 && (msg[5] === 0x06 || msg[5] === 0x05) && msg[6] === 0x00) {
    const me = msg[3], m = meSt[me], isAuto = msg[5] === 0x05;
    if (!m.pst) { log(`[M/E] M/E${me} ${isAuto ? 'AUTO' : 'CUT'}: noch keine PST-Taste gewaehlt`); return true; }
    const ms = m.rate * FRAME_MS;
    OBS.meSwitch(me, m.pst, isAuto && ms >= 80 ? 'auto' : 'cut', ms, isAuto ? 'AUTO' : 'CUT');
    // wie am Mischer: PGM und PST tauschen
    const old = m.pgm; m.pgm = m.pst; m.pst = old; const oc = m.pgmC; m.pgmC = m.pstC; m.pstC = oc; meBusLamps(me); OBS.mePreview(me, m.pst);
    return true;
  }
  // v5n: Blendenhebel M/E1..3 (06 00 a5 [M/E] 08 0b [u16 0..7fff]). Der Source Switcher kennt keinen Hebel ->
  // sobald der Hebel die Mitte passiert, startet eine Blende; Dauer = 2 x Zeit seit Verlassen des Anschlags.
  if (msg.length === 8 && (msg[2] & 0x7f) === 0x25 && msg[3] >= 1 && msg[3] <= 3 && msg[4] === 0x08 && msg[5] === 0x0b) {
    meLever(msg[3], msg.readUInt16LE(6));
    return true;
  }
  if (msg.length === 9 && msg[2] === 0x26 && msg[3] >= 1 && msg[3] <= 3 && msg[4] === 0x08 && msg[5] === 0x0a && msg[6] === 0x00) {
    const me = msg[3]; meSt[me].rate = msg.readUInt16LE(7);
    sendMc(packet([rec(hex2(me) + '080a00' + u16(meSt[me].rate))]), '239.168.5.60');
    log(`[M/E] M/E${me} Blendzeit ${meSt[me].rate} Frames = ${meSt[me].rate * FRAME_MS} ms`);
    return true;
  }
  // Bus-Taste: 06 00 x5 00 01 [Reihe] [Taste] [01/00]
  if (msg.length === 8 && (msg[2] & 0x7f) === 0x25 && msg[4] === 0x01) {
    const row = msg[5], key = msg[6], pressed = msg[7] === 1;
    if (!pressed) return true;
    if (msg[3] !== 0x00) { // v5j: Bus-Taste einer M/E (Byte 3 = M/E-Nummer, 00 = P/P) - noch nicht an OBS
      { const n = OBS.sceneNo(key); log(`[M/E] M/E${msg[3]} ${row === 1 ? 'PGM' : row === 2 ? 'PST' : 'Reihe' + row} Taste ${n || '?'} (Code ${key.toString(16)})`); }
      const me = msg[3], n = OBS.sceneNo(key);
      if (me >= 1 && me <= 3 && n) {
        if (row === 1) { meSt[me].pgm = n; meSt[me].pgmC = key; OBS.meProgram(me, key); } // v5k: M/E-PGM -> Source Switcher M_E1..3
        if (row === 2) { meSt[me].pst = n; meSt[me].pstC = key; OBS.mePreview(me, n); }   // v5n: PST merken, v5p: PVW-Switcher
        meBusLamps(me);
      }
      return true;
    }
    const name = row === 1 ? 'PGM' : row === 2 ? 'PST' : `Reihe${row}`;
    if (row === 1) { mix.pgm = key; OBS.program(key); OBS.assMessage(`PGM ${OBS.sceneNo(key)}`); }
    if (row === 2) { mix.pst = key; OBS.preview(key); OBS.assMessage(`PST ${OBS.sceneNo(key)}`); }
    const resp = keyResponse(row, key);
    if (resp) playResponse(resp, `${name} ${srcName(key)} (Code ${key.toString(16)})`);
    if (row === 1 || row === 2) setTimeout(() => sendMc(packet(busRecs()), '239.168.5.60'), 250);
    else log(`[TASTE] ${name} Code ${key.toString(16)} - keine Vorlage`);
    return true;
  }
  if (msg.length === 7 && h.startsWith('0500e4000806') && msg[6] >= 3 && msg[6] <= 7) { keyCut(msg[6]); return true; }
  if (msg.length === 7 && h.startsWith('0500e4000805') && msg[6] >= 3 && msg[6] <= 7) { keyMix(msg[6]); return true; }
  if (msg.length === 11 && h.startsWith('090028000803')) { onNextTrans(msg.readUInt32LE(6)); return true; }
  if (msg.length === 8 && h.startsWith('060025000804')) { onTransType(msg[6], msg[7]); return true; }
  // Joystick: 06 00 c5 00 [Gruppe] [Achse 14/15/17] [int16 Schritt] -> OBS Bild-im-Bild (kayak-obs.js)
  // Keyer-Encoder (Log 08.10.): 06 00 c5 00 [20..23 = Key 1..4] [Parameter] [int16]
  //   0d = OPAC; GAIN/CLIP je nach Key-Typ: 30/2f, 2d/2c, 28/27 -> OBS-Filter (kayak-obs.js keyFilter)
  if (msg.length === 8 && msg[2] === 0xc5 && msg[3] === 0x00 && msg[4] >= 0x20 && msg[4] <= 0x23) {
    const kind = msg[5] === 0x0d ? 'opac' : [0x30, 0x2d, 0x28].includes(msg[5]) ? 'gain' : [0x2f, 0x2c, 0x27].includes(msg[5]) ? 'clip' : null;
    if (kind) {
      const key = msg[4] - 0x20;
      if (key !== keyDelIdx) setDelegate(key, 'regler');
      kvKeyer(key, msg[5], msg.readInt16LE(6), false);
      kvKeyOut(key, kind); return true;
    }
  }
  if (msg.length === 8 && msg[2] === 0xc5 && msg[3] === 0x00 && [0x14, 0x15, 0x17].includes(msg[5])) {
    lastPanelInput = Date.now() - 500; OBS.joy(msg[4], msg[5], msg.readInt16LE(6), mix.pst); return true;
  }
  // Joystick, 2. Format (z. B. im PST-/Key-Bereich delegiert, Log 07.10.):
  // 07 00 46 00 [Gruppe a1] [02] [Achse 02=X, 03=Y, 04=Twist] [int16]; Schritte +-2 (Twist bis +-10),
  // Twist hier umgekehrt (gegen Uhrzeiger = positiv) -> auf Format 1 umgerechnet.
  // DPM-/Keyer-Regler (Logs 08.10.): 07 00 46 00 [a1..a4 = Key 1..4] [Untergruppe] [Achse] [int16]
  //   Untergruppe 02: Achse 01 = Size, 02 = X, 03 = Y, 04 = Twist (Locate, Schritte +-2, Twist umgekehrt)
  //   Untergruppe 29: Crop (Edge), Achse 06 = rechts, 07 = links, 08 = oben, 09 = unten (Uhrzeiger + = mehr)
  //   Die Key-Nummer steckt in der Nachricht -> Ziel = n-te Quelle von unten in PST (wie Delegate Key n).
  if (msg.length === 9 && msg[2] === 0x46 && msg[3] === 0x00 && msg[4] >= 0xa1 && msg[4] <= 0xa4) {
    if (regler46(msg[4] - 0xa1, msg[5], msg[6], msg.readInt16LE(7))) return true;
  }
  // v5w: Zifferneingabe am TFT = Absolutwert (Mitschnitt 23.10.): 09 00 28 00 [a1+k] [sub 02/29] [Achse] [Float]
  if (msg.length === 11 && msg[2] === 0x28 && msg[3] === 0x00 && msg[4] >= 0xa1 && msg[4] <= 0xa4 && (msg[5] === 0x02 || msg[5] === 0x29)) {
    const key = msg[4] - 0xa1, sub = msg[5], axis = msg[6], f = msg.readFloatLE(7), s = KV[key];
    const cur = sub === 0x02 ? [null, s.size, s.x, s.y, s.tw][axis] : (axis >= 6 && axis <= 9 ? s.crop[axis - 6] : null);
    if (cur != null && Number.isFinite(f)) {
      log(`[TFT] Key${key + 1} ${sub === 0x02 ? ['', 'Size', 'X', 'Y', 'Twist'][axis] : 'Crop ' + ['rechts', 'links', 'oben', 'unten'][axis - 6]} = ${f}`);
      if (key !== keyDelIdx) setDelegate(key, 'regler');
      if (sub === 0x02) { if (axis === 1) s.size = f; else if (axis === 2) s.x = f; else if (axis === 3) s.y = f; else s.tw = f; kvNorm(s); kvSend(key, 'loc'); }
      else { s.crop[axis - 6] = cropClamp(axis - 6, f); kvSend(key, 'crop'); }
      kvApply(key);
      return true;
    }
  }
  // v5w: Opacity/Clip per Zifferneingabe: 06 00 25 00 [20+k] [id] [u16 0..4096]
  if (msg.length === 8 && (msg[2] & 0x7f) === 0x25 && msg[3] === 0x00 && msg[4] >= 0x20 && msg[4] <= 0x23 && (msg[5] === 0x0d || HI_IDS.includes(msg[5]) || LO_IDS.includes(msg[5]))) {
    const key = msg[4] - 0x20, id = msg[5], d = kvKeyer(key, id, msg.readUInt16LE(6), true);
    const kind = id === 0x0d ? 'opac' : HI_IDS.includes(id) ? 'gain' : 'clip';
    log(`[TFT] Key${key + 1} ${kind === 'opac' ? 'Opacity' : kind === 'gain' ? 'Clip Hi' : 'Clip Low'} = ${msg.readUInt16LE(6)} (Delta ${d})`);
    if (key !== keyDelIdx) setDelegate(key, 'regler');
    kvKeyOut(key, kind);
    return true;
  }
  // noch unbekannte Regler/Joystick-Varianten einmal pro Muster melden
  if (msg.length === 9 && msg[2] === 0x46 && msg[3] === 0x00) {
    const k = h.slice(0, 14); if (!seen46.has(k)) { seen46.add(k); log(`[REGLER] neu/unbekannt: ${h} (Gruppe ${hex2(msg[4])}, ${hex2(msg[5])}, Achse ${hex2(msg[6])})`); }
    return true;
  }
  // FTB: Panel 06 00 25 00 08 07 00 02 (ein Paket pro Druck, Log 07.10.) -> OBS Schwarzüberblende (Umschalten)
  // FTB-Taste: v4k nicht mehr belegt (Schwarz jetzt ueber Ebene 7 CUT/MIX). Wieder aktivieren: KAYAK_FTB_KEY=1
  if (h === '0600250008070002') { if (process.env.KAYAK_FTB_KEY === '1') OBS.ftb(); else log('[FTB] Taste nicht belegt (Schwarz ueber Ebene 7)'); return true; }
  // Joystick-Reset-Taste: Panel 05 00 24 00 10 16 00 (Log 07.10.) -> Quelle zuruecksetzen / an Bildschirm anpassen
  if (h === '05002400101600') { OBS.joyReset(mix.pst); return true; }
  if (h === '0500e400080600') { mainCut(); return true; }
  if (h === '0500e400080500') { mainAuto(); return true; }
  // Blendenhebel: 06 00 a5 00 08 0b [Wert 2 Byte LE]
  if (msg.length === 8 && (msg[2] & 0x7f) === 0x25 && msg[3] === 0x00 && msg[4] === 0x08 && msg[5] === 0x0b) {
    onLever(msg.readUInt16LE(6));
    return true;
  }
  return false;
}

// v5w: Drehgeber Locate/Size/Crop -> Modell (TFT-Rueckmeldung) + OBS
function regler46(key, sub, axis, v) {
  if (sub === 0x02 && axis >= 0x02 && axis <= 0x04 && Math.abs(v) < 100) {
    // Joystick (kleine Schritte +-2, Twist bis +-10): wie bisher relativ in OBS; das TFT folgt ueber die Abfrage
    const ax = { 2: 0x14, 3: 0x15, 4: 0x17 }[axis]; let val = v / 2; if (ax === 0x17) val = -val;
    if (key !== keyDelIdx) setDelegate(key, 'regler');
    lastPanelInput = Date.now() - 500;
    OBS.joy(0xa1 + key, ax, val, mix.pst);
    return true;
  }
  if (!((sub === 0x02 && axis >= 0x01 && axis <= 0x04) || (sub === 0x29 && axis >= 0x06 && axis <= 0x09))) return false;
  if (key !== keyDelIdx) setDelegate(key, 'regler');
  kvEncoder(key, sub, axis, v);
  kvApply(key);
  return true;
}


// ================= v5x (23.10.2026): Save/Load Application wie der echte Frame (Mitschnitt saveload.pcapng) =================
// Ablauf Save (Panel-Menue "Save"): Panel schickt Name (39 23 00 01 ..), Pfad (3f 27 00 23 00 02 ..) und den Befehl
//   09 00 e8 22 02 29 [IP]. Der FRAME schreibt dann seine Dateien per TFTP INS PANEL (WRQ auf Port 69 des Panels) und
//   meldet je Datei per Unicast "22 02 2b [IP60] 00 [Laenge][Name] [Nr] 00". Am Ende "30 01 0a ..." + "22 02 2a" (storing done);
//   danach speichert das Panel seine eigenen Dateien (appli_cp.ini, state_cp.bin ...) lokal.
// Load: Panel schickt "ff 42 00 22 02 20 [IP][IP] [Name] [Pfad] 03"; der Frame HOLT die Dateien per TFTP (RRQ) aus dem Panel
//   ("22 02 22" je Datei), am Ende "30 01 0b ..." + "22 02 21". Danach meldet sich das Panel neu an (33 30 01 04).
// Inhalt der Frame-Dateien: devices.ini/appli.ini/state.bin aus unseren TFTP-Dateien, alle anderen leer (Soft-Frame hat keine).
// Abschalten: KAYAK_SAVELOAD=0
const SAVELOAD = process.env.KAYAK_SAVELOAD !== '0';
const APP = { name: APP_NAME, path: '/bd/appli/' + APP_NAME };   // v5zd: gleicher Name wie der gemeldete Applikationsname (KAYAK_APPNAME)
let appBusy = false;
function ipBuf(ip) { return Buffer.from(ip.split('.').map(Number)); }
function strL(s) { const b = Buffer.from(s, 'latin1'); return Buffer.concat([Buffer.from([b.length]), b]); }
function appRec(body) {
  const r = body.length < 0x1f ? Buffer.concat([Buffer.from([0x80 | body.length]), body]) : rec9f(body);
  const l = Buffer.alloc(2); l.writeUInt16LE(r.length); return Buffer.concat([l, r]);
}
function appSteps() {
  const P = APP.path, cp = (n) => ({ save: '/cpStore/' + n, load: '/cpStore/' + n });
  const mf = (n) => ({ save: `${P}/mf1\\${n}`, load: `${P}\\mf1\\${n}` });
  return [
    ['devices.ini', [{ save: '/devFiles/devices.ini', load: `${P}\\devices.ini`, data: () => tftpFiles.get('devices.ini') }]],
    ['appli.ini', [{ ...mf('appli.ini'), data: () => localAppli() || tftpFiles.get('appli.ini') }]],
    ['state.bin', [{ ...mf('state.bin'), data: () => tftpFiles.get('state.bin') }]],
    ['PattMemory & UserWipes', [cp('pattmemo.mf1'), cp('usrwipes.mf1')]],
    ['KeyMemory App0', [mf('keymem.bin')]],
    ['TE-Effect PP', [cp('te_eff0.mf1')]], ['TE-Effect ME1', [cp('te_eff1.mf1')]], ['TE-Effect ME2', [cp('te_eff2.mf1')]],
    ['TE-Effect ME3', [cp('te_eff3.mf1')]], ['TE-Effect EDPM', [cp('te_effEDpm.mf1')]],
    ['DVx Effects', []], ['Playlist', [cp('playlist.mf1')]],
    ['TiM/E-Memo PP', [cp('tmem_me0.mf1')]], ['TiM/E-Memo M/E1', [cp('tmem_me1.mf1')]], ['TiM/E-Memo M/E2', [cp('tmem_me2.mf1')]],
    ['TiM/E-Memo M/E3', [cp('tmem_me3.mf1')]], ['TiM/E-Memo App0', [cp('tmem_app.mf1')]], ['TiM/E-Memo M/E4', [cp('tmem_me4.mf1')]],
  ];
}
function tftpClient(mode, remote, data, done) {
  const t = dgram.createSocket('udp4'); let tid = null, block = 0, tries = 0, timer = null, finished = false, lastLen = 512;
  const fin = (ok, why) => { if (finished) return; finished = true; clearTimeout(timer); try { t.close(); } catch (e) { /* */ } if (!ok) log(`[SAVELOAD] TFTP ${mode} ${remote}: ${why}`); done(ok); };
  const out = (b) => t.send(b, tid || 69, PANEL_IP);
  const req = () => out(Buffer.concat([Buffer.from([0, mode === 'put' ? 2 : 1]), Buffer.from(remote + '\0octet\0', 'latin1')]));
  const dataPkt = (n) => { const d = data.slice((n - 1) * 512, n * 512); lastLen = d.length; const h = Buffer.alloc(4); h.writeUInt16BE(3, 0); h.writeUInt16BE(n & 0xffff, 2); return Buffer.concat([h, d]); };
  let lastPkt = null;
  const send = (b) => { lastPkt = b; out(b); clearTimeout(timer); timer = setTimeout(retry, 1500); };
  const retry = () => { if (++tries > 4) return fin(false, 'Zeitüberschreitung'); out(lastPkt); timer = setTimeout(retry, 1500); };
  t.on('error', (e) => fin(false, e.message));
  t.on('message', (m, r) => {
    if (r.address !== PANEL_IP) return;
    const op = m.readUInt16BE(0); tid = tid || r.port; tries = 0;
    if (op === 5) return fin(false, 'Panel meldet Fehler: ' + m.slice(4, m.length - 1).toString());
    if (mode === 'put' && op === 4) {
      const ack = m.readUInt16BE(2);
      if (ack !== (block & 0xffff)) return;
      if (block > 0 && lastLen < 512) return fin(true);
      block++; send(dataPkt(block));
    } else if (mode === 'get' && op === 3) {
      const n = m.readUInt16BE(2), a = Buffer.alloc(4); a.writeUInt16BE(4, 0); a.writeUInt16BE(n, 2);
      t.send(a, tid, PANEL_IP);
      if (m.length - 4 < 512) fin(true);
    }
  });
  t.bind({ address: FRAME_IP, port: 0 }, () => { req(); lastPkt = Buffer.concat([Buffer.from([0, mode === 'put' ? 2 : 1]), Buffer.from(remote + '\0octet\0', 'latin1')]); timer = setTimeout(retry, 1500); });
}
function runApplication(kind) {   // 'save' | 'load'
  if (appBusy) { log('[SAVELOAD] laeuft schon'); return; }
  appBusy = true;
  const save = kind === 'save', steps = appSteps(), ip60 = FRAME_IP_BYTES, ip63 = ipBuf(PANEL_IP);
  log(`[SAVELOAD] ${save ? 'Save' : 'Load'} Application "${APP.name}" (${APP.path})`);
  const sendU = (b) => s56629.send(b, 56629, PANEL_IP);
  const nextStep = (i) => {
    if (i >= steps.length) {
      const body = Buffer.concat([Buffer.from([0x30, 0x01, save ? 0x0a : 0x0b]), ip60, ip63, ip63, Buffer.from([0x00, 0x06]), strL(APP.path), strL(APP.name)]);
      sendU(appRec(body));
      sendU(appRec(Buffer.concat([Buffer.from([0x22, 0x02, save ? 0x2a : 0x21]), ip60, Buffer.from([0, 0])])));
      appBusy = false; log(`[SAVELOAD] ${save ? 'Save' : 'Load'} fertig`);
      return;
    }
    const [name, files] = steps[i];
    sendU(appRec(Buffer.concat([Buffer.from([0x22, 0x02, save ? 0x2b : 0x22]), ip60, Buffer.from([0x00]), strL(name), Buffer.from([i + 1, 0x00])])));
    const nextFile = (j) => {
      if (j >= files.length) return setTimeout(() => nextStep(i + 1), 20);
      const fl = files[j];
      if (save) tftpClient('put', fl.save, (fl.data && fl.data()) || Buffer.alloc(0), (ok) => { if (!ok) log(`[SAVELOAD] ${fl.save} nicht geschrieben`); nextFile(j + 1); });
      else tftpClient('get', fl.load, null, (ok) => { if (!ok) log(`[SAVELOAD] ${fl.load} nicht geholt`); nextFile(j + 1); });
    };
    nextFile(0);
  };
  nextStep(0);
}
// Panel-Meldungen zu Save/Load; true = behandelt
function handleAppControl(msg) {
  if (!SAVELOAD || msg.length < 8) return false;
  if (msg[2] === 0x39 && msg[3] === 0x23 && msg[4] === 0x00 && msg[5] === 0x01 && msg[6] === msg.length - 7) {
    APP.name = msg.slice(7).toString('latin1'); log(`[SAVELOAD] Applikationsname: ${APP.name}`); return true;
  }
  if (msg[2] === 0x3f && msg[3] === 0x27 && msg[4] === 0x00 && msg[5] === 0x23 && msg[6] === 0x00 && msg[7] === 0x02 && msg.length > 13 && msg[12] === msg.length - 13) {
    APP.path = msg.slice(13).toString('latin1'); log(`[SAVELOAD] Applikationspfad: ${APP.path}`); return true;
  }
  if (msg.length === 11 && msg[2] === 0xe8 && msg[3] === 0x22 && msg[4] === 0x02 && msg[5] === 0x29) { runApplication('save'); return true; }
  if (msg[2] === 0xff && msg[3] === 0x42 && msg[4] === 0x00 && msg[5] === 0x22 && msg[6] === 0x02 && msg[7] === 0x20 && msg.length > 17) {
    const nl = msg[16]; APP.name = msg.slice(17, 17 + nl).toString('latin1');
    const pl = msg[17 + nl]; if (pl && msg.length >= 18 + nl + pl) APP.path = msg.slice(18 + nl, 18 + nl + pl).toString('latin1');
    runApplication('load'); return true;
  }
  return false;
}

function on56629(msg, rinfo) {
  if (rinfo.address !== PANEL_IP) return;
  const head = msg.slice(0, 6).toString('hex');

  // Panel-ITry (Suchruf) -> wir melden uns mit unserem ITry (bis IAm kommt alle 8s wiederholen)
  if (msg.slice(0, 2).toString('hex') === '1a00' && msg[4] === 0x01 && msg[5] === 0x01) {
    scheduleItry('Panel sucht');
    return;
  }
  if (connected && handleAppControl(msg)) return;
  // Panel-IAm -> nach 174ms unser Confirm, dann Multicast-Strom
  if (head.startsWith('2a003f27')) {
    if (!connected) {
      connected = true;
      clearTimeout(itryTimer); itryTimer = null;
      log('[HANDSHAKE] Panel-IAm erhalten -> Confirm in 174 ms');
      setTimeout(() => {
        sendMc(hx(D.confirm), '239.0.0.0');
        log('[HANDSHAKE] Confirm gesendet, starte Multicast-Strom und Pings');
        startStream();
        startPings();
        stateTimers.push(setTimeout(personalSettings, 8000)); // v5v: Tastenklick/Beeper
        // wie der echte Frame: 0,57 s nach dem Confirm ein Boot-Announce (Typ 8102) als Broadcast
        stateTimers.push(setTimeout(() => s1024.send(hx(D.boot_broadcast_8102), 56713, BROADCAST_IP), Math.round(D.boot_8102_delay_after_confirm * 1000)));
      }, Math.round(D.confirm_delay * 1000));
    }
    return;
  }
  if (head.startsWith('25003f22')) { log('[HANDSHAKE] Panel-Confirm empfangen (Panel bestaetigt uns!)'); return; }

  // Tasten (v2.1)
  if (connected && handleKey(msg, rinfo)) return;

  // Unicast-Anfrage an uns
  if (rinfo.address === PANEL_IP && msg.length > 0) {
    const key = msg.toString('hex');
    const answers = unicastTable.get(key);
    if (answers) {
      for (const a of answers) {
        setTimeout(() => s56629.send(hx(a.resp), rinfo.port, rinfo.address), Math.round(a.dt * 1000));
      }
      stats.unicastAnswered++;
      if (key === CFG31_REQ) log(`[CFG31] Panel hat die Systemtabelle abgefragt${process.env.KAYAK_CFG31 ? ' (Versuch: ' + process.env.KAYAK_CFG31 + ')' : ''}`);
      log(`[UNICAST] Anfrage ${key.slice(0, 24)}${key.length > 24 ? '...' : ''} -> ${answers.length} Antwort(en)`);
    } else {
      stats.unicastUnknown++;
      if (key.startsWith('2500') || key.startsWith('0500') || key.startsWith('0800') || key.startsWith('0400') || key.startsWith('0d00')) {
        log(`[UNICAST] Anfrage ohne bekannte Antwort (wie beim echten Frame meist normal): ${key}`);
      } else {
        log(`[UNICAST] UNBEKANNT: ${key}`);
      }
    }
  }
}

// ITry senden und bis zum IAm alle 8 s wiederholen
let itryTimer = null;
function scheduleItry(reason) {
  if (connected || itryTimer) return;
  const fire = () => {
    if (connected) { itryTimer = null; return; }
    log(`[HANDSHAKE] sende unser ITry (${reason})`);
    sendMc(hx(D.itry), '239.0.0.0');
    itryTimer = setTimeout(fire, 8000);
  };
  itryTimer = setTimeout(fire, 300);
}

// Alles zuruecksetzen, wenn das Panel neu bootet
const stateTimers = [];
let pingInterval = null;
function resetState(reason) {
  log(`[RESET] ${reason} -> Verbindung zuruecksetzen, warte auf neuen Handshake`);
  connected = false; streamStarted = false; mcSeq = 1; mix.pos = 0; mix.inTrans = false; mix.dirUp = true; mix.leverSent = false;
  clearTimeout(itryTimer); itryTimer = null;
  while (stateTimers.length) clearTimeout(stateTimers.pop());
  if (pingInterval) { clearInterval(pingInterval); pingInterval = null; }
}

// Multicast-Strom nach dem Confirm (Zeiten relativ zum echten Confirm)
function startStream() {
  if (streamStarted) return;
  streamStarted = true;
  const S = D.stream_initial; // v2.1: nur Anfangszustand, ohne Geister-Tasten
  const groups = [];
  let cur = [S[0]];
  for (let i = 1; i < S.length; i++) {
    if (S[i].t - S[i - 1].t < 0.003) cur.push(S[i]);
    else { groups.push(cur); cur = [S[i]]; }
  }
  groups.push(cur);
  for (const g of groups) {
    stateTimers.push(setTimeout(() => {
      const start = process.hrtime.bigint();
      for (const e of g) {
        const off = BigInt(Math.round((e.t - g[0].t) * 1e9));
        while (process.hrtime.bigint() - start < off) { /* busy wait */ }
        sendMc(hx(e.hex), e.dst);
      }
    }, g[0].t * 1000));
  }
  const end = S[S.length - 1].t;
  log(`[STREAM] Anfangszustand: ${S.length} Pakete (${end.toFixed(0)} s), danach eigenes Keepalive`);
  stateTimers.push(setTimeout(() => {
    log('[STREAM] Anfangszustand gesendet - ab jetzt Keepalive (1 s) und Praesenz (10 s)');
    // KORREKTUR Montag1: Anfangszustand aus dem Mitschnitt enthielt "Blende laeuft"
    // -> Panel zeigte Mischzustand (Tasten blinken rot/gruen). Jetzt explizit Ruhe melden.
    sendMc(packet([...transRecs(0, false, null), ...busRecs()]), '239.168.5.60');
    logBus('[MIX] Startzustand (Blende in Ruhe)');
    if (process.env.KAYAK_IDLE_LOOP !== '0' && D.idle_loop) startIdleLoop();
    const ka = setInterval(() => sendMc(Buffer.from('14008522010300002d30040a01350000000000000000', 'hex'), '239.168.5.60'), 1000);
    const pr = setInterval(() => sendMc(Buffer.from('08008730040100000000', 'hex'), '239.0.0.0'), 10000);
    stateTimers.push(ka, pr);
  }, end * 1000 + 300));
}

// ---------- 56631: Pings des Panels beantworten ----------
// Format (13 Byte): 0b00 ea30 01 33 SEQ 00 <IP 4 Byte> FLAG  (FLAG 01=Ping, 00=Antwort)
// Antwort des echten Frames: gleiche SEQ, eigene IP, FLAG 00.
const s56631 = mkSocket(56631, '56631', (msg, rinfo) => {
  if (rinfo.address !== PANEL_IP) return;
  if (msg.length === 13 && msg[5] === 0x33 && msg[12] === 0x01) {
    const pong = Buffer.from(msg);
    FRAME_IP_BYTES.copy(pong, 8);
    pong[12] = 0x00;
    s56631.send(pong, rinfo.port, rinfo.address);
    stats.pongs++;
  } else {
    log(`[56631] unerwartet: ${msg.toString('hex')}`);
  }
});

// ---------- 1025: eigene Pings an das Panel ----------
let pingSeq = 1;
const s1025 = mkSocket(1025, '1025', (msg, rinfo) => { /* Panel-Antwort auf unseren Ping */ });
function startPings() {
  if (pingInterval) clearInterval(pingInterval);
  pingInterval = setInterval(() => {
    const ping = Buffer.from('0b00ea300133' + '00' + '00' + 'c0a8053c' + '01', 'hex');
    ping[6] = pingSeq & 0xff;
    pingSeq++;
    s1025.send(ping, 56631, PANEL_IP);
  }, 2100);
}

// ---------- 56712 / 1024: Boot-Announce ----------
// Boot-Announce-Typen (Bytes 32..35):
//   Panel 02010301 = "ich boote / wer ist da?"  -> Frame meldet sich voll (8350 + b507, Broadcast)
//   Panel 02010201 = Keepalive alle 5 s         -> Frame antwortet 03018200 (Unicast)
//   Panel 03018350 = Panel hat gebootet (Broadcast) -> bei uns: Zustand zuruecksetzen
// KORREKTUR nach Soft1: v1 hat auf JEDE Anfrage mit 8200 geantwortet. Nach dem
// Panel-Neustart fragt das Panel aber mit 0301 - auf die falsche Antwort hat es
// sofort neu gefragt => ueber 19 000 Pakete Ping-Pong. Jetzt nach Typ getrennt
// und mit Bremse.
function sendFullAnnounce(target) {
  s1024.send(hx(D.boot_broadcast_8350), 56713, target);
  s1024.send(hx(D.boot_broadcast_b507), 56713, target);
}
const s1024 = mkSocket(1024, '1024', null, () => {
  sendFullAnnounce(BROADCAST_IP);
  log('[BOOT] Eigenes Boot-Announce (8350 + b507) als Broadcast gesendet');
});
let lastKeepaliveReply = 0, lastFullAnnounce = 0;
mkSocket(56712, '56712', (msg, rinfo) => {
  if (rinfo.address !== PANEL_IP) return;
  if (msg.length < 36 || msg.readUInt32BE(0) !== 0x35dd35dd) return;
  const type = msg.slice(32, 36).toString('hex');
  const now = Date.now();
  if (type === '02010201') {
    if (now - lastKeepaliveReply < 1000) return;
    lastKeepaliveReply = now;
    s1024.send(hx(D.boot_announce), 56713, PANEL_IP);
    log('[BOOT] Keepalive des Panels beantwortet (8200)');
  } else if (type === '02010301') {
    if (now - lastFullAnnounce < 3000) return;
    lastFullAnnounce = now;
    sendFullAnnounce(BROADCAST_IP);
    log('[BOOT] Panel fragt "wer ist da?" -> volles Boot-Announce (8350 + b507) gesendet');
  } else {
    log(`[BOOT] unbekannter Boot-Announce-Typ ${type} - keine Antwort`);
  }
});
mkSocket(56713, '56713', (msg, rinfo) => {
  if (rinfo.address !== PANEL_IP || msg.length < 36 || msg.readUInt32BE(0) !== 0x35dd35dd) return;
  const type = msg.slice(32, 36).toString('hex');
  if (type === '03018350') resetState('Panel hat neu gebootet (Boot-Announce 8350)');
});

// ---------- TFTP-Server (Port 69) ----------
const tftpFiles = new Map();
// KAYAK_APPLI=orig -> Original-appli.ini (Sicherung) statt der Sz01..Sz96-Fassung ausliefern
const APPLI_ORIG = (process.env.KAYAK_APPLI || '').toLowerCase() === 'orig' && D.tftp_appli_bak;
if (APPLI_ORIG) log('[INIT] KAYAK_APPLI=orig -> liefere die Original-appli.ini (Sicherung) aus');
for (const [name, b64] of Object.entries(D.tftp)) {
  const src = (APPLI_ORIG && name.endsWith('/appli.ini')) ? D.tftp_appli_bak : b64;
  tftpFiles.set(path.posix.basename(name), Buffer.from(src, 'base64'));
}
// v5e: eigene appli.ini im Soft-Frame-Ordner hat Vorrang (zum Bearbeiten in VS Code).
// Datei: appli.ini neben kayak-softframe-*.js, oder Pfad per $env:KAYAK_APPLI_FILE. Wird bei JEDEM Panel-Start
// neu gelesen, d. h. nach einer Aenderung reicht ein Neustart des Panels. KAYAK_APPLI=orig hat Vorrang.
const APPLI_FILE = process.env.KAYAK_APPLI_FILE || path.join(__dirname, 'appli.ini');
function localAppli() {
  if (APPLI_ORIG) return null;
  try {
    let txt = fs.readFileSync(APPLI_FILE, 'latin1');
    if (APP_NAME !== APP_OLD) txt = txt.split(APP_OLD).join(APP_NAME);
    return Buffer.from(txt, 'latin1');
  } catch (e) { return null; }
}
{ const la = localAppli(); log(la ? `[INIT] Eigene appli.ini wird verwendet: ${APPLI_FILE} (${la.length} Byte)`
                                  : '[INIT] Keine eigene appli.ini im Ordner - eingebettete Fassung (Sz01-Sz96)'); }
// v5f: Panel-Applikation speichern/laden wie beim echten Frame.
// Panel-Menue "Save Application" schickt appli_cp.ini, state_cp.bin usw. per TFTP an den Frame.
// Das Soft-Frame legt sie im Ordner panel_store (neben dem Skript) ab; vorhandene Dateien werden
// vorher als *.bak-JJJJMMTT-HHMMSS gesichert. "Load Application" holt sie von dort zurueck.
// Ordner aendern: $env:KAYAK_STORE="C:\\pfad"
const STORE_DIR = process.env.KAYAK_STORE || path.join(__dirname, 'panel_store');
function storePath(name) {
  const parts = name.replace(/\\/g, '/').split('/').filter(x => x && x !== '.' && x !== '..')
    .map(x => x.replace(/[<>:"|?*\x00-\x1f]/g, '_'));
  return parts.length ? path.join(STORE_DIR, ...parts) : null;
}
function findByBase(dir, base) {
  let best = null;
  let list = []; try { list = fs.readdirSync(dir, { withFileTypes: true }); } catch (e) { return null; }
  for (const d of list) {
    const p = path.join(dir, d.name);
    const c = d.isDirectory() ? findByBase(p, base) : (d.name === base ? p : null);
    if (c && (!best || fs.statSync(c).mtimeMs > fs.statSync(best).mtimeMs)) best = c;
  }
  return best;
}
function storeRead(name) {
  try {
    let p = storePath(name);
    if (!p || !fs.existsSync(p)) p = findByBase(STORE_DIR, path.posix.basename(name.replace(/\\/g, '/')));
    if (!p) return null;
    const b = fs.readFileSync(p); log(`[STORE] liefere ${path.relative(STORE_DIR, p)} (${b.length} Byte)`); return b;
  } catch (e) { return null; }
}
function tftpReceive(name, rinfo) {
  const t = dgram.createSocket('udp4');
  const chunks = []; let expect = 1, timer = null, done = false;
  const ack = (n) => { const a = Buffer.alloc(4); a.writeUInt16BE(4, 0); a.writeUInt16BE(n & 0xffff, 2); t.send(a, rinfo.port, rinfo.address); };
  const arm = () => { clearTimeout(timer); timer = setTimeout(() => { log(`[STORE] Abbruch (Zeitueberschreitung) ${name}`); t.close(); }, 10000); };
  t.on('error', (e) => console.error('[STORE] Fehler:', e.message));
  t.on('message', (m, ri) => {
    if (ri.port !== rinfo.port || m.readUInt16BE(0) !== 3) return;
    const blk = m.readUInt16BE(2);
    if (blk === ((expect - 1) & 0xffff)) { ack(blk); return; } // Wiederholung
    if (done || blk !== (expect & 0xffff)) return;
    chunks.push(m.slice(4)); ack(blk); expect++; arm();
    if (m.length - 4 < 512) {
      done = true; clearTimeout(timer); setTimeout(() => t.close(), 3000); // offen lassen fuer wiederholten letzten Block
      const data = Buffer.concat(chunks), p = storePath(name);
      try {
        fs.mkdirSync(path.dirname(p), { recursive: true });
        if (fs.existsSync(p)) {
          const d = new Date(), z = (n) => String(n).padStart(2, '0');
          fs.renameSync(p, `${p}.bak-${d.getFullYear()}${z(d.getMonth() + 1)}${z(d.getDate())}-${z(d.getHours())}${z(d.getMinutes())}${z(d.getSeconds())}`);
        }
        fs.writeFileSync(p, data);
        log(`[STORE] Panel hat gespeichert: ${name} -> ${path.relative(__dirname, p)} (${data.length} Byte)`);
      } catch (e) { log(`[STORE] Schreiben fehlgeschlagen ${name}: ${e.message}`); }
    }
  });
  t.bind(0, () => { log(`[STORE] Panel speichert ${name} ...`); ack(0); arm(); });
}
mkSocket(69, 'TFTP', (msg, rinfo) => {
  const op = msg.readUInt16BE(0);
  const name = msg.slice(2).toString('latin1').split('\0')[0];
  if (op === 2) return tftpReceive(name, rinfo); // v5f: Panel speichert (Save Application)
  if (op !== 1) return;
  const base = path.posix.basename(name);
  const data = (base === 'appli.ini' && localAppli()) || (base !== 'appli.ini' && storeRead(name)) || tftpFiles.get(base);
  const t = dgram.createSocket('udp4');
  t.on('error', (e) => console.error('[TFTP] Fehler:', e.message));
  t.bind(0, () => {
    if (!data) {
      const err = Buffer.concat([Buffer.from([0, 5, 0, 1]), Buffer.from('File not found\0', 'latin1')]);
      t.send(err, rinfo.port, rinfo.address, () => t.close());
      log(`[TFTP] Datei NICHT vorhanden: ${name}`);
      return;
    }
    const nBlocks = Math.floor(data.length / 512) + 1; // letzter Block < 512 (ggf. leer)
    let block = 1, tries = 0, timer = null;
    const sendBlock = () => {
      const chunk = data.slice((block - 1) * 512, block * 512);
      const pkt = Buffer.alloc(4 + chunk.length);
      pkt.writeUInt16BE(3, 0); pkt.writeUInt16BE(block & 0xffff, 2); chunk.copy(pkt, 4);
      t.send(pkt, rinfo.port, rinfo.address);
      clearTimeout(timer);
      timer = setTimeout(() => { if (++tries > 5) { log(`[TFTP] Abbruch ${name}`); t.close(); } else sendBlock(); }, 1000);
    };
    t.on('message', (ack) => {
      if (ack.readUInt16BE(0) !== 4 || ack.readUInt16BE(2) !== (block & 0xffff)) return;
      tries = 0;
      if (block >= nBlocks) {
        clearTimeout(timer); t.close();
        stats.tftpFiles++;
        log(`[TFTP] ${name} komplett gesendet (${data.length} Byte)`);
        return;
      }
      block++; sendBlock();
    });
    log(`[TFTP] Panel holt ${name} (${data.length} Byte)`);
    sendBlock();
  });
});

// ---------- RPC: Portmapper (111) und Mount (1003) ----------
function rpcResponder(port, name, replyHex) {
  const s = mkSocket(port, name, (msg, rinfo) => {
    const reply = Buffer.from(replyHex, 'hex');
    msg.copy(reply, 0, 0, 4); // XID der Anfrage uebernehmen
    s.send(reply, rinfo.port, rinfo.address);
    log(`[${name}] RPC-Anfrage beantwortet`);
  });
}
rpcResponder(111, 'PORTMAP', D.rpc_portmap_reply);
rpcResponder(1003, 'MOUNT', D.rpc_mount_reply);

// Statuszeile alle 30 s
setInterval(() => {
  log(`[STATUS] verbunden=${connected} | Unicast beantwortet=${stats.unicastAnswered}, unbekannt=${stats.unicastUnknown} | Pongs=${stats.pongs} | TFTP-Dateien=${stats.tftpFiles}`);
}, 30000);

log('[INIT] Soft-Frame laeuft. Panel jetzt (neu) starten oder warten, bis es sucht. Beenden mit Strg+C.');

// ---- OBS-Anbindung starten (v4) ----
OBS.init(log, {
  onReady: () => {            // Mischer ist fuehrend: aktuellen Zustand nach OBS uebertragen
    OBS.setDuration(mix.rate * FRAME_MS);
    OBS.program(mix.pgm);
    setTimeout(() => OBS.preview(mix.pst), 300);
    for (let i = 0; i < 4; i++) if (keys[i].src) OBS.keySource(i, keys[i].src);
  },
});
