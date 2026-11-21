# Their first computer

Asus is donating 100 desktop PCs to an NGO. Many of the people who will use them have never touched a computer, and power and internet come and go. Which free operating system should they run?

This repository holds our school presentation's website: a one-page, 3D, sticker-style site that compares **Linux Mint**, **Zorin OS Lite** and **Endless OS**. Our pick is **Endless OS**; plan B is Linux Mint.

## Open it

- **Online:** https://wedarealgoat.dev (GitHub Pages from `main`, `/ (root)`, with the custom domain in `CNAME`).
- **Absurd version:** https://wedarealgoat.dev/assurda/ — a separate single file (`assurda/index.html`) with the opened computer that zooms down to the bits, a bonus section on IBM z/OS, a black hole (hold the mouse), rewind (hold R), a kaleidoscope (P three times) and a loop back to the top.
- **Offline:** download `dist/standalone.html` and double-click it. Everything is inside that one file, fonts included, so it also works from a USB stick on a PC without internet.

## Presenting on the school PCs (Windows)

- **Keys:** a presentation clicker (PageDown / PageUp) or the → ← arrows jump between the sections, even without the tour. **F** switches full screen on and off.
- **Animations switch:** many school PCs have Windows animations turned off, which the browser reports as "reduce motion", so the site would stay still. When that happens a sparkle button appears in the top bar: press it once to turn the animations back on (that computer remembers it). Opening the page with `?motion=on` does the same.
- **Speed:** the site checks the graphics chip and the frame rate, and on a slow PC it draws the 3D with fewer pixels and lighter effects. `?q=0` to `?q=3` fixes the level by hand (0 full, 3 lightest).
- The fonts come with the site, so it looks the same on networks that block font services.

## What it does

- A toon-shaded 3D computer (three.js), surrounded by the other 99 donated PCs. Scroll and the camera dives through its screen: inside, every section is a small 3D world in its own colour, from the three systems checked with a magnifier to the score towers and the podium.
- Inside the computer, each finalist's desktop (Linux Mint, Zorin OS Lite, Endless OS) is redrawn layer by layer: as you scroll through its section, windows and menus open, the pointer clicks, and the layers come apart in depth. The icons are generic drawings, not the official logos.
- Click a desktop, or the monitor button next to a system's name, to open it full screen. Open the menu, open, drag, minimise and close windows, or launch the encyclopedia in Endless OS. Switch systems with the tabs, the arrow buttons or ← →; Esc closes.
- The dive spins through the glass like a corkscrew, with a rainbow flash; each new section's colour spreads out of the 3D object in a star shape, under swirling rays.
- On the 3D canvas: colour fringes that grow with the scroll speed, a fisheye in the dive, a glitch on every section change and a shockwave where you click. The title's letters dodge the pointer, the page wobbles when you scroll fast, a sticker trail follows the pointer and small PCs rain down.
- Click any empty spot to make cubes burst out of it, or click the computer for a backflip. Press **P** to cycle normal → party → chaos → normal. The speaker button in the menu turns sound on (off by default); in party and chaos mode it plays a beat.
- **Play the tour** scrolls through the whole story by itself. During the tour, the arrow keys or a presentation clicker move between stops; Esc stops it.
- An interactive scorecard: change how much each criterion matters and watch the ranking move.
- Works without WebGL (static drawing) and respects the system's "reduce motion" setting (see the animations switch above).

## Files

- `index.html`, `css/style.css`, `js/app.js`, `fonts/`: the site.
- `src/`: source of the script (`main.js` page logic, `scene.js` 3D stage, `worlds.js` the worlds inside the computer, `osui.js` the three desktops, `viewer.js` the full-screen desktop viewer, `crazy.js` sound, modes and other effects, `perf.js` graphics quality levels, `kit.js` shared 3D pieces, `screens.js` screen and sticker drawings).
- `dist/standalone.html`: the same site in a single file.
- `docs/speech.md` and `docs/Discorso.pdf`: the speaker script, about 3 minutes each, with likely questions and sources.
- `docs/Presentazione.pdf`: the 12 slides.

## Build

```
npm install
npm run build
```

This bundles `src/` with three.js into `js/app.js` and rebuilds `dist/standalone.html`.

## Team

Lino Maini, Davide Miron, Dennis Boschi, Roberto Cacace.

Scores are our own ratings. The 3D computer and its screens are simplified drawings, not screenshots. Sources are listed at the bottom of the page and in `docs/speech.md`.
