# Kayak Soft-Frame

**English** · [Deutsch](#deutsch)

Run a Grass Valley Kayak DD-1 control panel **without its mainframe** and use it as a hardware
controller for **OBS Studio**.

A small Node.js program (the "soft-frame") takes the place of the Kayak mainframe on the network.
The panel boots, connects and works as usual. Its buttons, fader bar, keypad and joystick are
translated into OBS commands via obs-websocket v5.

> **Disclaimer**
> This is an independent hobby project. It is not affiliated with, endorsed by or supported by
> Grass Valley. "Grass Valley", "Kayak" and "Kayenne" are trademarks of their respective owners.
> This repository contains **no** Grass Valley software, firmware, configuration files or recorded
> network data. It does **not** bypass, change or unlock any Grass Valley licence. You need your own,
> legally owned hardware.

---

## What works

| Panel | OBS Studio |
|---|---|
| PGM / PST bus (15 buttons + Shift = 30 sources) | Program / Preview scene (Studio Mode), first 30 scenes in the OBS scene list |
| CUT | Cut transition |
| AUTO | Fade with the transition rate set on the panel |
| Fader bar | Fade, speed taken from how fast the lever is moved (see note) |
| Transition rate (AUTO and Key 1–4) | Transition duration |
| Next Transition (BKGD or Key 1–4) | CUT / AUTO act on background or the selected key |
| Transition type Mix / Wipe 1 / Wipe 2 | Fade or OBS "Luma Wipe"; wipe pattern → luma image via `kayak-wipes.json` |
| Key 1–4: delegate, key bus, Key CUT, Key MIX (own rate per key) | **Downstream Keyer** plugin (one DSK tab per key) |
| Keypad number + Enter (E-MEM 1–99) | Message to **Advanced Scene Switcher** → any OBS macro |
| Joystick / positioner (X, Y, twist) + reset button | Move / scale a source in the preview scene; reset = undo, 2nd press = fit to screen |
| Key CUT / MIX of layer 7 | Cut / fade the program to an OBS scene "Black" and back |
| Key 1–4 + DPM controls (Locate X/Y, Size, Crop, Twist), by knob or typed on the panel display | Move, scale, crop and rotate the 1st–4th source (from the bottom) of the preview scene; absolute, proportional values (see below) |
| Keyer knobs OPAC / CLIP LOW / CLIP HI (knob or typed) | OBS filters on that source: *Kayak Opacity* (opacity) and *Kayak Luma* (luma key, Luma Min / Max), created automatically |
| Panel display values | Values are shown on the panel display and follow changes made in OBS |
| Config → Application Control (Save / Load) | Works as on the real system |
| Tally (P/P) | PGM red, PST lit, PST red during transitions, like on the real system |
| **M/E 1–3** (delegation P/P, M/E1, M/E2, M/E3) | One **Source Switcher** per M/E (`M_E1_PGM` …): PGM bus = cut, PST bus = preview |
| M/E CUT / AUTO / fader bar / rate | Cut, or the switcher's own transition with the rate set on the panel |
| M/E preview | Second Source Switcher per M/E (`M_E1_PVW` …), e.g. for a multiview |

Panel events (`PGM n`, `PST n`, `CUT`, `AUTO`, `KEYn ON/OFF`, `EMEM n`, `BLACK ON/OFF`) are also sent
to Advanced Scene Switcher, so you can attach your own macros to them.

**M/E setup in OBS:** create scenes `M/E1`–`M/E3` (e.g. on P/P buttons 13–15) with a
[Source Switcher](https://github.com/exeldro/obs-source-switcher) `M_E1_PGM` … inside. Put a second switcher
`M_E1_PVW` … into separate scenes for your multiview. Panel button *n* of an M/E selects the *n*-th entry in the
switcher's list (1–15, Shift 16–30), so the list order **is** the button assignment. Keep PGM and PVW lists in
the same order.

**Fader bar note:** obs-websocket can move the OBS T-bar, but OBS cancels the transition on release.
The soft-frame therefore starts a normal fade as soon as the lever moves, with a duration estimated from
the lever speed.

**Panel display values ↔ OBS (Key 1–4 delegated):** the key's source is the *n*-th from the bottom of the preview scene.

| Panel value | OBS |
|---|---|
| Size 100 / 50 / 200 | Source fills the canvas (fit to screen) / half / double, e.g. 1920×1080 / 960×540 / 3840×2160 (range 1–400) |
| Locate X, Y: −100 … +100 | −canvas width … +canvas width and −canvas height … +canvas height (±1920 / ±1080 px at HD); 0 = centred, Y up = positive |
| Crop right/left ±16, top/bottom ±9 | Whole source width / height; the visible picture stays in place; negative values act as 0 in OBS |
| Twist | Rotation in degrees around the picture centre (counter-clockwise on the panel = positive) |
| Opacity 0–100 % | Opacity of the *Kayak Opacity* filter |
| Clip Low / Clip High (0–100 %) | Luma Min / Luma Max of the *Kayak Luma* filter (smoothing is set in OBS) |

The reference point of the OBS source (top left, centre, …) does not matter: the position is calculated via the picture centre.
Typed values are exact; the knobs are scaled with `KAYAK_GAIN_*`. When a key is delegated, its values are read from OBS and sent to
the panel display. While it stays delegated the soft-frame compares once a second and updates the display when you change something in OBS.

## Requirements

**Hardware / network**
- Grass Valley Kayak DD-1 control panel, connected via Ethernet
- A computer for the soft-frame on the same network, using the IP address the panel expects for its frame
- For the one-time setup: a **working Kayak HD mainframe** (see below)
- For recordings: a switch with port mirroring (e.g. Netgear GS105E) and Wireshark

**Software**
- Node.js 22 or newer (built-in WebSocket); older versions work after `npm install ws` (tested with Node 12)
- OBS Studio 30+ with the obs-websocket server enabled (Tools → WebSocket Server Settings)
- Optional OBS plugins (by exeldro / WarmUpTill):
  - [Downstream Keyer](https://github.com/exeldro/obs-downstream-keyer) for Key 1–4
  - [Advanced Scene Switcher](https://github.com/WarmUpTill/SceneSwitcher) for E-MEM macros
  - [Source Switcher](https://github.com/exeldro/obs-source-switcher) for M/E 1–3
- Optional: OBS transition "Luma Wipe" (Wipe) for panel wipes, a scene "Black" (outside the first 30 scenes)

## What you need from a real mainframe

The soft-frame needs data that only your own Kayak mainframe can provide. That data is
**not** part of this repository and must not be published.

1. **The panel's start-up files.** While booting, the panel loads its application and configuration
   from the frame. These come from your frame and your licence, and they stay on your machine.
2. **A reference recording of your frame.** Use port mirroring and Wireshark, and record the panel
   booting with the real frame and a few button presses. The soft-frame's answers are based on it.
3. **Your panel settings.** The button assignment, Personality settings (XBar tally, async blinking)
   and the application in use are set on the panel itself.

All of this goes into a local file `softframe_data.json` next to the scripts. The file is listed in
`.gitignore` and is never committed.

Once this data exists, the mainframe is no longer needed.

## Files

| File | Purpose |
|---|---|
| `kayak-softframe-v5zd.js` | The soft-frame (handshake, file serving, mixer state, tally, panel buttons, display values, Save/Load) |
| `kayak-obs-standard.js` | Standard OBS link (obs-websocket v5, Downstream Keyer, Advanced Scene Switcher, Source Switcher, joystick, wipes, black) |
| `kayak-obs-NAME.js` | Your own variant (optional), selected with `KAYAK_OBS_MODULE=NAME` |
| `kayak-wipes.json` | Your table: panel wipe pattern number → OBS luma image |
| `softframe_data.json` | **Local only, not in the repo:** data from your own frame |

## Start

Windows (PowerShell):
```powershell
cd "path\to\soft-frame"
$env:KAYAK_OBS_URL  = "ws://192.168.5.100:4455"   # OBS computer (same computer: ws://127.0.0.1:4455)
$env:KAYAK_OBS_PASS = "your-password"              # only if authentication is enabled in OBS
node .\kayak-softframe-v5zd.js
```
macOS / Linux:
```bash
cd "path/to/soft-frame"
KAYAK_OBS_URL=ws://127.0.0.1:4455 node kayak-softframe-v5zd.js
```

Then (re)start the panel. The log shows the handshake, the scene mapping (button 1–30 → OBS scene)
and the plugins that were found.

## Settings (environment variables)

| Variable | Default | Meaning |
|---|---|---|
| `KAYAK_OBS_URL` | `ws://192.168.5.100:4455` | Address of OBS |
| `KAYAK_OBS_PASS` | – | obs-websocket password |
| `KAYAK_OBS` | – | `0` = run without OBS |
| `KAYAK_OBS_SCENES` | `30` | Number of OBS scenes mapped to panel buttons |
| `KAYAK_OBS_EXTRA` | built-in | Map extra panel sources to scenes 25–30 |
| `KAYAK_OBS_FADE` | first fade | Name of the OBS transition used for AUTO / MIX |
| `KAYAK_OBS_LEVER` | `speed` | Fader bar mode: `speed`, `end` (cut at the end), `tbar` (OBS T-bar) |
| `KAYAK_DSK1` … `KAYAK_DSK4` | first 4 DSK tabs | Downstream Keyer tab per key |
| `KAYAK_JOY` / `KAYAK_JOY_ITEM` / `KAYAK_JOY_PX` | on / topmost source / 8 | Joystick on/off, source name, pixels per step |
| `KAYAK_ASS` | on | `0` = no Advanced Scene Switcher messages |
| `KAYAK_BLACK_SCENE` | `Black` | Scene used by layer 7 CUT/MIX |
| `KAYAK_APPNAME` | – | Application name reported to the panel (`orig` = as recorded) |
| `KAYAK_OBS_MODULE` | `standard` | OBS link to load: `kayak-obs-NAME.js` |
| `KAYAK_MES` | `3` | Number of M/E rows besides P/P the soft-frame reports to the panel (`0` = as recorded) |
| `KAYAK_ME_SW` / `KAYAK_ME_PVW` | `M_E{n}_PGM` / `M_E{n}_PVW,M_E{n}_PST` | Names of the Source Switchers per M/E (`{n}` = 1–3) |
| `KAYAK_ME_RATE` | `25` | M/E transition rate in frames until the panel sends one |
| `KAYAK_APPLI_FILE` | `appli.ini` next to the script | Your own panel application file (served at every panel start) |
| `KAYAK_TFT` | on | `0` = no values on the panel display |
| `KAYAK_TFT_POLL` | `1000` | Interval (ms) for reading changes back from OBS to the display, `0` = off |
| `KAYAK_TFT_ONDELEGATE` | on | `0` = do not send values when a key is delegated |
| `KAYAK_TFT_SIZE` | `100` | Start value of Size |
| `KAYAK_XY_RANGE` | `100` | Locate units for the full canvas |
| `KAYAK_GAIN_SIZE` / `_XY` / `_TWIST` / `_CROP` | `1` / `1` / `1` / `0.25` | Sensitivity of the knobs (factor on the panel's steps; the panel does the acceleration) |
| `KAYAK_SAVELOAD` | on | `0` = no Save / Load support |
| `KAYAK_KEYCLICK` / `KAYAK_BEEPER` | `off` / `keep` | Key click and beeper of the panel (`on` / `off` / `keep`) |
| `KAYAK_RAW` | – | `1` = log every panel message (troubleshooting) |

## Limitations

- 30 panel sources: 15 buttons × 2 (Shift). The DD-1 has no freely assignable 2nd/3rd shift buttons.
  More sources can be reached via E-MEM numbers and Advanced Scene Switcher.
- The number of inputs licensed on your frame stays as it is. This project does not touch licences.
  `KAYAK_MES` only changes what the soft-frame itself reports to the panel; no Grass Valley hardware is involved.
- By design no feedback from OBS to the panel: the panel decides what is on air.
- M/E bus lamps light up, but only in white, not in tally colours (no recording of a frame with M/Es was available).
- Save / Load of the application works. Whether the panel keeps its settings after a restart with an empty backup battery is still being checked; a Load after boot may be needed.
- Knobs for other keyer types (other Clip/Gain pairs) are not mapped yet.

## Roadmap

- Tally colours for the M/E buses
- JLCooper / Contour controllers and CasparCG
- Printable button label strips generated from the OBS scene list
- Configurable network range for other studios

---

<a name="deutsch"></a>

# Kayak Soft-Frame (Deutsch)

[English](#kayak-soft-frame) · **Deutsch**

Ein Grass Valley Kayak DD-1 Bedienpanel **ohne Mainframe** betreiben und als Hardware-Pult für
**OBS Studio** nutzen.

Ein kleines Node.js-Programm, das „Soft-Frame“, übernimmt im Netzwerk die Rolle des Kayak-Mainframes.
Das Panel bootet, verbindet sich und arbeitet ganz normal. Tasten, Blendenhebel, Ziffernblock und
Joystick werden über obs-websocket v5 in OBS-Befehle übersetzt.

> **Hinweis**
> Dies ist ein unabhängiges Hobbyprojekt. Es steht in keiner Verbindung zu Grass Valley und wird von
> Grass Valley weder unterstützt noch empfohlen. „Grass Valley“, „Kayak“ und „Kayenne“ sind Marken
> ihrer jeweiligen Inhaber. Dieses Repository enthält **keine** Software, Firmware,
> Konfigurationsdateien oder aufgezeichneten Netzwerkdaten von Grass Valley. Es umgeht, verändert oder
> erweitert **keine** Grass-Valley-Lizenz. Du brauchst eigene, rechtmäßig erworbene Hardware.

---

## Was funktioniert

| Panel | OBS Studio |
|---|---|
| PGM-/PST-Bus (15 Tasten + Shift = 30 Quellen) | Programm-/Vorschau-Szene (Studio-Modus), die ersten 30 Szenen der OBS-Szenenliste |
| CUT | Schnitt |
| AUTO | Überblendung mit der am Panel eingestellten Blendzeit |
| Blendenhebel | Überblendung, Tempo aus der Hebelbewegung (siehe Hinweis) |
| Blendzeit (AUTO und Key 1–4) | Übergangsdauer |
| Next Transition (BKGD oder Key 1–4) | CUT/AUTO wirken auf den Hintergrund oder den gewählten Key |
| Transitions-Typ Mix / Wipe 1 / Wipe 2 | Überblenden oder OBS „Wischen“ (Luma Wipe); Wipe-Muster → Luma-Bild über `kayak-wipes.json` |
| Key 1–4: Delegate, Key-Bus, Key CUT, Key MIX (eigene Blendzeit je Key) | Plugin **Downstream Keyer** (ein DSK-Tab pro Key) |
| Ziffernblock Nummer + Enter (E-MEM 1–99) | Meldung an den **Advanced Scene Switcher** → beliebiges OBS-Makro |
| Joystick/Positioner (X, Y, Twist) + Reset-Taste | Quelle in der Vorschau-Szene verschieben und skalieren; Reset = rückgängig, 2. Druck = an Bildschirm anpassen |
| Key CUT / MIX der Ebene 7 | Programm auf eine OBS-Szene „Black“ schneiden/blenden und zurück |
| Key 1–4 + DPM-Regler (Locate X/Y, Size, Crop, Twist), per Drehgeber oder am Panel-Display eingetippt | 1.–4. Quelle (von unten) der Vorschau-Szene verschieben, skalieren, beschneiden, drehen; absolute, proportionale Werte (siehe unten) |
| Keyer-Regler OPAC / CLIP LOW / CLIP HI (Drehgeber oder eingetippt) | OBS-Filter an dieser Quelle: *Kayak Opacity* (Deckkraft) und *Kayak Luma* (Luma Key, Luma Min / Max), werden automatisch angelegt |
| Werte im Panel-Display | Werte erscheinen im Panel-Display und folgen Änderungen in OBS |
| Config → Application Control (Save / Load) | Funktioniert wie am echten System |
| Tally (P/P) | PGM rot, PST hell, PST rot während der Blende, wie am echten System |
| **M/E 1–3** (Delegation P/P, M/E1, M/E2, M/E3) | Je M/E ein **Source Switcher** (`M_E1_PGM` …): PGM-Bus = Schnitt, PST-Bus = Vorschau |
| M/E CUT / AUTO / Blendenhebel / Blendzeit | Schnitt bzw. Übergang des Switchers mit der Blendzeit vom Panel |
| M/E-Vorschau | Zweiter Source Switcher je M/E (`M_E1_PVW` …), z. B. für den Multiview |

Panel-Ereignisse (`PGM n`, `PST n`, `CUT`, `AUTO`, `KEYn ON/OFF`, `EMEM n`, `BLACK ON/OFF`) gehen
zusätzlich an den Advanced Scene Switcher. Daran lassen sich eigene Makros hängen.

**M/E in OBS einrichten:** Szenen `M/E1`–`M/E3` anlegen (z. B. auf P/P-Taste 13–15), darin je ein
[Source Switcher](https://github.com/exeldro/obs-source-switcher) `M_E1_PGM` …. Ein zweiter Switcher `M_E1_PVW` …
kommt in eigene Szenen für den Multiview. Panel-Taste *n* einer M/E wählt den *n*-ten Eintrag der Switcher-Liste
(1–15, Shift 16–30). Die Reihenfolge der Liste **ist** also die Tastenbelegung. PGM- und PVW-Liste in derselben
Reihenfolge halten.

**Hinweis zum Blendenhebel:** obs-websocket kann die OBS-T-Bar zwar bewegen, OBS bricht die Blende aber
beim Loslassen ab. Das Soft-Frame startet deshalb eine normale Überblendung, sobald der Hebel bewegt
wird. Die Dauer schätzt es aus dem Hebel-Tempo.

**Panel-Werte ↔ OBS (Key 1–4 delegiert):** Die Quelle des Keys ist die *n*-te von unten in der Vorschau-Szene.

| Panel-Wert | OBS |
|---|---|
| Size 100 / 50 / 200 | Quelle füllt die Leinwand (an Bildschirm angepasst) / halb / doppelt, z. B. 1920×1080 / 960×540 / 3840×2160 (Bereich 1–400) |
| Locate X, Y: −100 … +100 | −Leinwandbreite … +Leinwandbreite bzw. −Leinwandhöhe … +Leinwandhöhe (bei HD ±1920 / ±1080 px); 0 = Mitte, Y nach oben = positiv |
| Crop rechts/links ±16, oben/unten ±9 | Ganze Quellbreite bzw. -höhe; das sichtbare Bild bleibt an seinem Platz; negative Werte wirken in OBS wie 0 |
| Twist | Drehung in Grad um die Bildmitte (am Panel gegen den Uhrzeigersinn = positiv) |
| Opacity 0–100 % | Deckkraft des Filters *Kayak Opacity* |
| Clip Low / Clip High (0–100 %) | Luma Min / Luma Max des Filters *Kayak Luma* (die Glättung stellt man in OBS ein) |

Der Bezugspunkt der OBS-Quelle (oben links, Mitte, …) spielt keine Rolle: Die Lage wird über die Bildmitte gerechnet.
Eingetippte Werte sind exakt; die Drehgeber werden mit `KAYAK_GAIN_*` skaliert. Wird ein Key delegiert, liest das Soft-Frame seine Werte
aus OBS und schickt sie ans Panel-Display. Solange er delegiert bleibt, vergleicht es einmal pro Sekunde und aktualisiert das Display,
wenn du in OBS etwas änderst.

## Voraussetzungen

**Hardware / Netzwerk**
- Grass Valley Kayak DD-1 Bedienpanel, per Ethernet angeschlossen
- Ein Rechner für das Soft-Frame im selben Netz, mit der IP-Adresse, die das Panel für seinen Frame erwartet
- Für die einmalige Einrichtung: ein **funktionierender Kayak-HD-Mainframe** (siehe unten)
- Für Mitschnitte: ein Switch mit Port-Mirroring (z. B. Netgear GS105E) und Wireshark

**Software**
- Node.js 22 oder neuer (eingebautes WebSocket); ältere Versionen laufen nach `npm install ws` (getestet mit Node 12)
- OBS Studio 30+ mit eingeschaltetem WebSocket-Server (Werkzeuge → WebSocket-Server-Einstellungen)
- Optionale OBS-Plugins (von exeldro bzw. WarmUpTill):
  - [Downstream Keyer](https://github.com/exeldro/obs-downstream-keyer) für Key 1–4
  - [Advanced Scene Switcher](https://github.com/WarmUpTill/SceneSwitcher) für E-MEM-Makros
  - [Source Switcher](https://github.com/exeldro/obs-source-switcher) für M/E 1–3
- Optional: OBS-Übergang „Wischen“ (Luma Wipe) für Panel-Wipes, eine Szene „Black“ (nicht unter den ersten 30 Szenen)

## Was man von einem echten Mainframe braucht

Das Soft-Frame braucht Daten, die nur dein eigener Kayak-Mainframe liefern kann. Diese Daten sind
**nicht** Teil des Repositorys und dürfen nicht veröffentlicht werden.

1. **Die Startdateien des Panels.** Beim Booten lädt das Panel seine Applikation und Konfiguration vom
   Frame. Sie stammen von deinem Frame und deiner Lizenz und bleiben bei dir.
2. **Ein Referenz-Mitschnitt deines Frames.** Mit Port-Mirroring und Wireshark den Panel-Start am echten
   Frame und einige Tastendrücke aufzeichnen. Darauf bauen die Antworten des Soft-Frames auf.
3. **Deine Panel-Einstellungen.** Tastenbelegung, Personality (XBar Tally, Async Blinking) und die
   verwendete Applikation stellst du am Panel selbst ein.

Alles zusammen landet in einer lokalen Datei `softframe_data.json` neben den Skripten. Sie steht in der
`.gitignore` und wird nie eingecheckt.

Sind diese Daten einmal vorhanden, wird der Mainframe nicht mehr gebraucht.

## Dateien

| Datei | Zweck |
|---|---|
| `kayak-softframe-v5zd.js` | Das Soft-Frame (Handshake, Dateiauslieferung, Mischer-Zustand, Tally, Panel-Tasten, Display-Werte, Save/Load) |
| `kayak-obs-standard.js` | Standard-OBS-Anbindung (obs-websocket v5, Downstream Keyer, Advanced Scene Switcher, Source Switcher, Joystick, Wipes, Black) |
| `kayak-obs-NAME.js` | Eigene Variante (optional), Auswahl mit `KAYAK_OBS_MODULE=NAME` |
| `kayak-wipes.json` | Deine Tabelle: Panel-Wipe-Muster → OBS-Luma-Bild |
| `softframe_data.json` | **Nur lokal, nicht im Repo:** Daten deines eigenen Frames |

## Start

Windows (PowerShell):
```powershell
cd "Pfad\zum\Soft-Frame"
$env:KAYAK_OBS_URL  = "ws://192.168.5.100:4455"   # OBS-Rechner (gleicher Rechner: ws://127.0.0.1:4455)
$env:KAYAK_OBS_PASS = "dein-passwort"              # nur falls in OBS Authentifizierung aktiv ist
node .\kayak-softframe-v5zd.js
```
macOS / Linux:
```bash
cd "Pfad/zum/Soft-Frame"
KAYAK_OBS_URL=ws://127.0.0.1:4455 node kayak-softframe-v5zd.js
```

Danach das Panel (neu) starten. Das Log zeigt den Handshake, die Szenen-Zuordnung (Taste 1–30 →
OBS-Szene) und die gefundenen Plugins.

## Einstellungen (Umgebungsvariablen)

| Variable | Standard | Bedeutung |
|---|---|---|
| `KAYAK_OBS_URL` | `ws://192.168.5.100:4455` | Adresse von OBS |
| `KAYAK_OBS_PASS` | – | Passwort für obs-websocket |
| `KAYAK_OBS` | – | `0` = ohne OBS |
| `KAYAK_OBS_SCENES` | `30` | Anzahl OBS-Szenen auf den Panel-Tasten |
| `KAYAK_OBS_EXTRA` | eingebaut | Zusätzliche Panel-Quellen auf die Szenen 25–30 legen |
| `KAYAK_OBS_FADE` | erste Überblendung | Name des OBS-Übergangs für AUTO/MIX |
| `KAYAK_OBS_LEVER` | `speed` | Blendenhebel: `speed`, `end` (am Anschlag schneiden), `tbar` (OBS-T-Bar) |
| `KAYAK_DSK1` … `KAYAK_DSK4` | erste 4 DSK-Tabs | Downstream-Keyer-Tab je Key |
| `KAYAK_JOY` / `KAYAK_JOY_ITEM` / `KAYAK_JOY_PX` | an / oberste Quelle / 8 | Joystick an/aus, Quellenname, Pixel pro Schritt |
| `KAYAK_ASS` | an | `0` = keine Meldungen an den Advanced Scene Switcher |
| `KAYAK_BLACK_SCENE` | `Black` | Szene für Ebene 7 CUT/MIX |
| `KAYAK_APPNAME` | – | Applikationsname, der dem Panel gemeldet wird (`orig` = wie aufgezeichnet) |
| `KAYAK_OBS_MODULE` | `standard` | Zu ladende OBS-Anbindung: `kayak-obs-NAME.js` |
| `KAYAK_MES` | `3` | Anzahl M/E-Reihen neben P/P, die das Soft-Frame dem Panel meldet (`0` = wie aufgezeichnet) |
| `KAYAK_ME_SW` / `KAYAK_ME_PVW` | `M_E{n}_PGM` / `M_E{n}_PVW,M_E{n}_PST` | Namen der Source Switcher je M/E (`{n}` = 1–3) |
| `KAYAK_ME_RATE` | `25` | M/E-Blendzeit in Frames, bis das Panel eine sendet |
| `KAYAK_APPLI_FILE` | `appli.ini` neben dem Skript | Eigene Panel-Applikation (wird bei jedem Panel-Start ausgeliefert) |
| `KAYAK_TFT` | an | `0` = keine Werte im Panel-Display |
| `KAYAK_TFT_POLL` | `1000` | Intervall (ms) für das Zurücklesen von OBS ins Display, `0` = aus |
| `KAYAK_TFT_ONDELEGATE` | an | `0` = beim Delegieren eines Keys keine Werte senden |
| `KAYAK_TFT_SIZE` | `100` | Startwert für Size |
| `KAYAK_XY_RANGE` | `100` | Locate-Einheiten für die volle Leinwand |
| `KAYAK_GAIN_SIZE` / `_XY` / `_TWIST` / `_CROP` | `1` / `1` / `1` / `0.25` | Empfindlichkeit der Drehgeber (Faktor auf die Panel-Schritte; die Beschleunigung macht das Panel) |
| `KAYAK_SAVELOAD` | an | `0` = kein Save / Load |
| `KAYAK_KEYCLICK` / `KAYAK_BEEPER` | `off` / `keep` | Tastenklick und Beeper des Panels (`on` / `off` / `keep`) |
| `KAYAK_RAW` | – | `1` = jede Panel-Meldung ins Log (Fehlersuche) |

## Grenzen

- 30 Panel-Quellen: 15 Tasten × 2 (Shift). Das DD-1 hat keine frei belegbaren 2nd/3rd-Shift-Tasten.
  Weitere Quellen gehen über E-MEM-Nummern und den Advanced Scene Switcher.
- Die Zahl der auf deinem Frame lizenzierten Eingänge bleibt, wie sie ist. Das Projekt verändert keine Lizenzen.
  `KAYAK_MES` ändert nur, was das Soft-Frame selbst dem Panel meldet; Grass-Valley-Hardware ist nicht beteiligt.
- Bewusst keine Rückmeldung von OBS ans Panel: Das Panel bestimmt, was auf Sendung ist.
- Die M/E-Bustasten leuchten, aber nur weiß, nicht in Tally-Farben (es gab keinen Mitschnitt eines Frames mit M/Es).
- Save / Load der Applikation funktioniert. Ob das Panel nach einem Neustart mit leerer Pufferbatterie seine Einstellungen behält, wird noch geprüft; nach dem Boot kann ein Load nötig sein.
- Drehgeber anderer Keyer-Typen (andere Clip/Gain-Paare) sind noch nicht belegt.

## Ausblick

- Tally-Farben für die M/E-Busse
- JLCooper-/Contour-Controller und CasparCG
- Druckbare Beschriftungsstreifen aus der OBS-Szenenliste
- Einstellbarer Adressbereich für andere Studios
