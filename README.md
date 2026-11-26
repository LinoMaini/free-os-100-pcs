# Their first computer

Asus is donating 100 desktop PCs to an NGO. Many of the people who will use them have never touched a computer, and power and internet come and go. Which free operating system should they run?

This repository holds our school presentation's website: a one-page, 3D, sticker-style site that compares **Linux Mint**, **Zorin OS Lite** and **Endless OS**. Our pick is **Endless OS**; plan B is Linux Mint.

## Open it

- **Online:** https://wedarealgoat.dev (GitHub Pages from `main`, `/ (root)`, with the custom domain in `CNAME`).
- **Earlier absurd version:** https://wedarealgoat.dev/assurda/ — a separate single file (`assurda/index.html`). Its effects are now part of the main site too.
- **Offline:** download `dist/standalone.html` and double-click it. Everything is inside that one file, fonts included, so it also works from a USB stick on a PC without internet.

## Presenting on the school PCs (Windows)

- **Keys:** a presentation clicker (PageDown / PageUp) or the → ← arrows jump between the sections, even without the tour. **F** switches full screen on and off.
- **Animations switch:** many school PCs have Windows animations turned off, which the browser reports as "reduce motion", so the site would stay still. When that happens a sparkle button appears in the top bar: press it once to turn the animations back on (that computer remembers it). Opening the page with `?motion=on` does the same.
- **Speed:** the 3D is drawn straight to the screen with the graphics chip's own antialiasing; the extra full-screen pass only runs during the dive and in the party modes, and when nothing moves for a few seconds the site draws at 30 frames a second. It also checks the graphics chip and the frame rate: phones start one step lighter, and a slow PC gets fewer pixels. `?q=0` to `?q=3` fixes the level by hand (0 full, 3 lightest).
- The fonts come with the site, so it looks the same on networks that block font services.

## What it does

- The site opens on a 3D globe. The 100 PCs leave Taipei in one cardboard box that takes off like a rocket and bursts, then fly to schools in Africa, where storms knock out the power and the Wi-Fi comes and goes. The camera dives through the clouds into a classroom, and the presentation starts.
- **How to install it:** two cards cover preparing a reformatter USB (32 GB or more) and installing on all 100 PCs, ten at a time. A USB stick with eyes leads the full 3D sequence until the board reads 100/100.
- **Inside the computer:** the case opens, the parts fly apart and the camera zooms through the chip into the code and down to a single bit. At the end, a bonus on the heaviest system of all (IBM z/OS on a mainframe).
- A toon-shaded 3D computer (three.js), surrounded by the other 99 donated PCs. Scroll and the camera dives through its screen: inside, every section is a small 3D world in its own colour, from the three systems checked with a magnifier to the score towers and the podium.
- Inside the computer, each finalist's desktop (Linux Mint, Zorin OS Lite, Endless OS) is redrawn layer by layer: as you scroll through its section, windows and menus open, the pointer clicks, and the layers come apart in depth. The icons are generic drawings, not the official logos.
- Click a desktop, or the monitor button next to a system's name, to open a small desktop that really works. Windows move, resize, minimise and maximise; the menu searches; the clock is live and the Wi-Fi is offline. Apps: Files, Text Editor, Calculator, Web Browser (offline, with a jumping game), Paint, Snake, Terminal, Encyclopedia (works without internet), Typing, Photos and Settings, plus the App Center on Endless OS. What you make stays in the page; nothing is saved on the computer. Switch systems with the tabs, the arrow buttons or ← →; Esc closes.
- The dive spins through the glass like a corkscrew, with a rainbow flash; each new section's colour spreads out of the 3D object in a star shape, under swirling rays.
- The dive through the screen has a fisheye and colour fringes; small PCs rain down behind the title.
- **Party modes:** the popper button in the top bar (or **P**) goes normal → party → chaos → kaleidoscope → normal, with a sticker saying which one is on. In the party modes: a beat (with sound on), rainbow background, dancing letters, glitches, hold the mouse on an empty spot for a black hole, hold **R** to rewind the page like a tape, and **→** at the very end throws you back to the top through a wormhole. In normal mode none of this starts on its own.
- A small USB stick with eyes rides along the top bar as you scroll, showing how far you are.
- With a mouse, click any empty spot to make cubes burst out of it, or click the computer for a backflip. Press **P** to cycle normal → party → chaos → normal. The speaker button in the menu turns sound on (off by default); in party and chaos mode it plays a beat.
- **Play the tour** is the presentation in four parts, one per speaker, in page order: Lino opens (the mission, what an operating system is, why free and open: 2:40), Dennis goes inside the computer and explains how we chose, Roberto presents the three systems with live desktops, the scores and our pick, and Davide closes with two installation cards, an IBM fun fact and questions (1:30; Dennis and Roberto have 3:00 each; scripts in `docs/speech.md`). A desktop left open for a demo closes by itself at the handover. It moves on by itself and hands over to the next speaker when the time is up. The page glides on its own without stopping, and only a real scroll or swipe takes over: a light touch of the trackpad, or the glide left over from a swipe just before Play, does not. The only clock is hidden in the little USB stick under the top bar: it walks across during each part, its line turns red in the last 30 seconds and the stick shakes in the last 10. The arrow keys or a presentation clicker move between stops (the time left is shared out again), Pause stops the handover, Esc ends the tour. `?slot=60` turns a three-minute part into 60 seconds (Lino's and Davide's scale with it), for a quick rehearsal.
- **The audience's phones become the 100 PCs:** the phone button in the top bar (or **J**) shows a QR code and a six-letter code. Each phone that scans it gets a PC number and a little computer on its screen that follows the presentation: the globe, the bits, the three desktops, the scores, our pick. At **How to install it** the phones install Endless OS ten at a time, like the ten USB sticks, and the grid of 100 squares in the corner fills up live; a tap on a phone makes its square jump. The tour shrinks the panel into the corner; **End** closes the room, and a reload in the middle keeps the same room and numbers. Messages go through free public MQTT brokers (several at once, one on port 443, so a school network that blocks some still lets the others through); they carry only PC ids and the name of the stop, never text, and if none gets through the site carries on as usual.
- **Works without internet:** after the first visit, a service worker keeps the whole site on the device (pages, script, fonts, the phone page). If the Wi-Fi drops, an "Offline" sticker appears in the top bar and everything keeps working, like Endless OS. It can also be installed as an app (Chrome: the install icon in the address bar; Safari: File → Add to Dock).
- An interactive scorecard: change how much each criterion matters and watch the ranking move.
- Works without WebGL (static drawing) and respects the system's "reduce motion" setting (see the animations switch above).

## Files

- `index.html`, `css/style.css`, `js/app.js`, `fonts/`: the site.
- `src/`: source of the script (`main.js` page logic, `scene.js` 3D stage, `worlds.js` the worlds inside the computer, `worlds2.js` the opened computer and the mainframe, `worlds3.js` the opening globe, `worlds4.js` the install tutorial, `osui.js` the three desktops drawn in 3D, `viewer.js` the full-screen viewer, `desk.js` the working desktops and their apps, `crazy.js` sound, modes and other effects, `absurd.js` black hole, rewind and wormhole, `perf.js` graphics quality levels, `kit.js` shared 3D pieces, `screens.js` screen and sticker drawings).
- `join/index.html`, `js/join.js`: the page for the audience's phones; `sw.js` (made by the build), `manifest.webmanifest`, `icons/`: offline copy and app install.
- `src/fleet.js` the phone room on the big screen, `src/join.js` the phone page, `src/room.js` what they share (stops, install rounds), `src/mq.js` a tiny MQTT client over WebSocket, `src/offline.js` and `src/sw.template.js` the offline copy.
- `src/term.js`: the sources at the bottom, a thin terminal that opens on a click.
- `dist/standalone.html`: the same site in a single file.
- `docs/speech.md`: the current script source, including Davide’s short 1:30 close, likely questions and sources; `docs/Discorso.pdf`: an earlier export; `docs/Discorso-Lino.docx`: Lino's part in simple English, with the Italian meaning and pronunciation.
- `docs/Presentazione.pdf`: the 12 slides.

## Build

```
npm install
npm run build
```

This bundles `src/` with three.js (and the world map from `world-atlas`) into `js/app.js`, builds the phone page into `js/join.js`, writes `sw.js` with the list of files to keep offline, and rebuilds `dist/standalone.html`. To test the phones without the public brokers, add `?mq=ws://localhost:9001/mqtt` to the address (any MQTT-over-WebSocket broker).

## Team

Lino Maini, Davide Miron, Dennis Boschi, Roberto Cacace.

Scores are our own ratings. The 3D computer and its screens are simplified drawings, not screenshots. Sources are listed at the bottom of the page and in `docs/speech.md`.
