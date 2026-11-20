# Their first computer

Asus is donating 100 desktop PCs to an NGO. Many of the people who will use them have never touched a computer, and power and internet come and go. Which free operating system should they run?

This repository holds our school presentation's website: a one-page, 3D, sticker-style site that compares **Linux Mint**, **Zorin OS Lite** and **Endless OS**. Our pick is **Endless OS**; plan B is Linux Mint.

## Open it

- **Online:** turn on GitHub Pages (Settings → Pages → Deploy from a branch → `main`, `/ (root)`), then open `https://linomaini.github.io/free-os-100-pcs/`.
- **Offline:** download `dist/standalone.html` and double-click it. Everything is inside that one file; without internet the fonts fall back to the system ones.

## What it does

- A toon-shaded 3D computer (three.js), surrounded by the other 99 donated PCs. Scroll and the camera dives through its screen: inside, every section is a small 3D world in its own colour, from the three systems checked with a magnifier to the score towers and the podium.
- **Play the tour** scrolls through the whole story by itself. During the tour, the arrow keys or a presentation clicker move between stops; Esc stops it.
- An interactive scorecard: change how much each criterion matters and watch the ranking move.
- Works without WebGL (static drawing) and respects the system's "reduce motion" setting.

## Files

- `index.html`, `css/style.css`, `js/app.js`: the site.
- `src/`: source of the script (`main.js` page logic, `scene.js` 3D stage, `screens.js` screen and sticker drawings).
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
