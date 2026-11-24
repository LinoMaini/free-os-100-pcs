// A small desktop you can really use, one per system, inside the full-screen viewer (1280 × 800, scaled to fit).
// Windows can be dragged, resized, minimised, maximised and closed; the menu searches; the clock is live.
// Apps: Files, Text Editor, Calculator, Web Browser (offline, with a game), Paint, Snake, Terminal,
// Encyclopedia (offline), Typing, Photos, Settings and, on Endless OS, the App Center.
// Everything stays in this page: nothing is saved to the visitor's computer.
import { sfx } from './kit.js';

const SVG = (inner) => `<svg viewBox="0 0 48 48" aria-hidden="true">${inner}</svg>`;
const K = 'stroke="#000" stroke-width="3" stroke-linejoin="round"';
export const ICONS = {
  folder: SVG(`<path d="M5 13a3 3 0 0 1 3-3h10l4 4h18a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" fill="#FFC93C" ${K}/><path d="M5 19h38" stroke="#000" stroke-width="3"/>`),
  note: SVG(`<path d="M11 5h19l9 9v29H11z" fill="#fff" ${K}/><path d="M30 5v9h9M17 22h15M17 29h15M17 36h10" stroke="#000" stroke-width="3" fill="none" stroke-linecap="round"/>`),
  calc: SVG(`<rect x="10" y="5" width="28" height="38" rx="5" fill="#B7A3FF" ${K}/><rect x="15" y="10" width="18" height="8" rx="2" fill="#fff" stroke="#000" stroke-width="2.5"/><g fill="#000"><circle cx="17" cy="25" r="2.4"/><circle cx="24" cy="25" r="2.4"/><circle cx="31" cy="25" r="2.4"/><circle cx="17" cy="32" r="2.4"/><circle cx="24" cy="32" r="2.4"/><circle cx="31" cy="32" r="2.4"/><circle cx="17" cy="38.5" r="2.4"/><circle cx="24" cy="38.5" r="2.4"/><circle cx="31" cy="38.5" r="2.4"/></g>`),
  globe: SVG(`<circle cx="24" cy="24" r="18" fill="#7CC8FF" ${K}/><path d="M24 6c-6 5-6 31 0 36M24 6c6 5 6 31 0 36M7 18h34M7 30h34" stroke="#000" stroke-width="2.5" fill="none"/>`),
  term: SVG(`<rect x="5" y="8" width="38" height="32" rx="5" fill="#2B2B33" ${K}/><path d="M12 18l6 5-6 5M21 30h12" stroke="#C8EE5A" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
  gear: SVG(`<circle cx="24" cy="24" r="16" fill="none" stroke="#000" stroke-width="10" stroke-dasharray="5.6 6.97"/><circle cx="24" cy="24" r="16" fill="none" stroke="#D9D9D9" stroke-width="5" stroke-dasharray="4.2 8.37" stroke-dashoffset="-0.7"/><circle cx="24" cy="24" r="12.5" fill="#D9D9D9" ${K}/><circle cx="24" cy="24" r="5" fill="#fff" ${K}/>`),
  brush: SVG(`<path d="M31 5l12 12-15 15-6-6z" fill="#FF9ECF" ${K}/><path d="M22 26c-6 0-10 4-10 9 0 3-2 5-6 6 10 2 18-2 19-9z" fill="#FF7A1A" ${K}/>`),
  snake: SVG(`<path d="M10 37c0-6 6-8 12-8s12-2 12-8-6-8-12-8" fill="none" stroke="#000" stroke-width="10" stroke-linecap="round"/><path d="M10 37c0-6 6-8 12-8s12-2 12-8-6-8-12-8" fill="none" stroke="#2FBF71" stroke-width="5" stroke-linecap="round"/><circle cx="20" cy="12" r="2.6" fill="#000"/><path d="M27 13l5 1" stroke="#FF4D4D" stroke-width="2.5" stroke-linecap="round"/>`),
  book: SVG(`<path d="M7 9h13a4 4 0 0 1 4 4v28a3 3 0 0 0-3-3H7z" fill="#FF7A1A" ${K}/><path d="M41 9H28a4 4 0 0 0-4 4v28a3 3 0 0 1 3-3h14z" fill="#FFE14D" ${K}/>`),
  keys: SVG(`<rect x="4" y="13" width="40" height="23" rx="4" fill="#fff" ${K}/><g fill="#000"><rect x="9" y="18" width="5" height="4" rx="1"/><rect x="16" y="18" width="5" height="4" rx="1"/><rect x="23" y="18" width="5" height="4" rx="1"/><rect x="30" y="18" width="5" height="4" rx="1"/><rect x="12" y="24" width="5" height="4" rx="1"/><rect x="19" y="24" width="5" height="4" rx="1"/><rect x="26" y="24" width="5" height="4" rx="1"/><rect x="33" y="24" width="5" height="4" rx="1"/><rect x="14" y="30" width="20" height="3" rx="1"/></g>`),
  trash: SVG(`<path d="M12 14h24l-2 28H14z" fill="#D9D9D9" ${K}/><path d="M8 14h32M19 14V9h10v5M20 20v16M28 20v16" stroke="#000" stroke-width="3" fill="none" stroke-linecap="round"/>`),
  computer: SVG(`<rect x="5" y="8" width="38" height="25" rx="3" fill="#7CC8FF" ${K}/><path d="M18 40h12M24 33v7" stroke="#000" stroke-width="3" stroke-linecap="round"/>`),
  image: SVG(`<rect x="5" y="9" width="38" height="30" rx="3" fill="#7CC8FF" ${K}/><path d="M5 33l11-11 9 9 6-6 12 12H8a3 3 0 0 1-3-3z" fill="#2FBF71" ${K}/><circle cx="33" cy="17" r="4" fill="#FFE14D" stroke="#000" stroke-width="2.5"/>`),
  music: SVG(`<path d="M18 34V10l20-4v24" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/><circle cx="13" cy="35" r="6" fill="#FF9ECF" ${K}/><circle cx="33" cy="31" r="6" fill="#FF9ECF" ${K}/>`),
  usb: SVG(`<rect x="8" y="17" width="24" height="14" rx="4" fill="#FF7A1A" ${K}/><rect x="32" y="19.5" width="9" height="9" rx="1.5" fill="#D9D9D9" ${K}/><circle cx="15" cy="23" r="2" fill="#fff"/><circle cx="21" cy="23" r="2" fill="#fff"/>`),
  disc: SVG(`<rect x="8" y="5" width="32" height="38" rx="4" fill="#fff" ${K}/><circle cx="24" cy="21" r="9" fill="#FF7A1A" ${K}/><circle cx="24" cy="21" r="2.5" fill="#000"/><path d="M14 36h20" stroke="#000" stroke-width="3" stroke-linecap="round"/>`),
  exe: SVG(`<rect x="7" y="9" width="34" height="30" rx="4" fill="#3D7BFF" ${K}/><path d="M7 17h34" stroke="#000" stroke-width="3"/><path d="M16 26l5 5 10-10" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
  store: SVG(`<path d="M8 18h32l-3 23H11z" fill="#C8EE5A" ${K}/><path d="M17 18c0-6 3-10 7-10s7 4 7 10" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/><path d="M19 29l4 4 7-8" stroke="#000" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
};
const G = { // small monochrome glyphs for the panel and the window buttons
  grid: '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="currentColor"><rect x="4" y="4" width="4" height="4" rx="1"/><rect x="10" y="4" width="4" height="4" rx="1"/><rect x="16" y="4" width="4" height="4" rx="1"/><rect x="4" y="10" width="4" height="4" rx="1"/><rect x="10" y="10" width="4" height="4" rx="1"/><rect x="16" y="10" width="4" height="4" rx="1"/><rect x="4" y="16" width="4" height="4" rx="1"/><rect x="10" y="16" width="4" height="4" rx="1"/><rect x="16" y="16" width="4" height="4" rx="1"/></g></svg>',
  wifiOff: '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 15.8a5 5 0 0 1 6.8 0" opacity=".45"/><path d="M4 4l16 16"/></g><circle cx="12" cy="19.2" r="1.6" fill="currentColor"/></svg>',
  battery: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="7" width="17" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="9.5" width="9" height="5" rx="1" fill="currentColor"/><path d="M21.5 10.5v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  speaker: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z" fill="currentColor"/><path d="M15.5 9a4.5 4.5 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  min: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 17h12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  max: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M15 15l5 5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.5L8 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  fwd: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 5.5L16 12l-6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  reload: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12a7 7 0 1 1-2.1-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M17.5 3.5v4h-4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  power: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5v8M7 6.5a7.5 7.5 0 1 0 10 0" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
};
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const svgUrl = (s) => `data:image/svg+xml,${encodeURIComponent(s)}`;

// ---------- the pictures that come with the PC ----------
const PICS = {
  'Sunset.svg': svgUrl('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a3fd1"/><stop offset=".55" stop-color="#ff6f91"/><stop offset="1" stop-color="#ffd98a"/></linearGradient></defs><rect width="640" height="400" fill="url(#s)"/><circle cx="420" cy="250" r="80" fill="#fff3b0"/><path d="M0 290q120-80 240-10t220-30 180 20v130H0z" fill="#7b4fc9"/><path d="M0 330q160-60 320 0t320-10v80H0z" fill="#3d2183"/></svg>'),
  'Our school.svg': svgUrl('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><rect width="640" height="400" fill="#7CC8FF"/><circle cx="540" cy="80" r="44" fill="#FFE14D" stroke="#000" stroke-width="6"/><rect y="300" width="640" height="100" fill="#C8EE5A"/><path d="M150 170l170-90 170 90z" fill="#FF8F8F" stroke="#000" stroke-width="8" stroke-linejoin="round"/><rect x="170" y="170" width="300" height="140" fill="#fff" stroke="#000" stroke-width="8"/><rect x="295" y="230" width="50" height="80" fill="#FF7A1A" stroke="#000" stroke-width="6"/><rect x="200" y="200" width="60" height="50" fill="#7CC8FF" stroke="#000" stroke-width="6"/><rect x="380" y="200" width="60" height="50" fill="#7CC8FF" stroke="#000" stroke-width="6"/><rect x="314" y="40" width="8" height="50" fill="#000"/><path d="M322 40h50l-12 14 12 14h-50z" fill="#2FBF71" stroke="#000" stroke-width="5" stroke-linejoin="round"/></svg>'),
  'Solar panel.svg': svgUrl('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><rect width="640" height="400" fill="#FFE14D"/><circle cx="120" cy="100" r="54" fill="#fff" stroke="#000" stroke-width="7"/><path d="M200 330l60-170h300l-60 170z" fill="#3D7BFF" stroke="#000" stroke-width="8" stroke-linejoin="round"/><path d="M230 245h300M215 288h300M300 160l-40 170M380 160l-40 170M460 160l-40 170" stroke="#fff" stroke-width="5"/><rect x="370" y="330" width="16" height="50" fill="#000"/></svg>'),
  'Map.svg': svgUrl('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><rect width="640" height="400" fill="#5CC8F0"/><path d="M230 60q60-30 120 0t60 70 40 60-30 90-80 80-60-60-60-90-30-80z" fill="#C8EE5A" stroke="#000" stroke-width="7" stroke-linejoin="round"/><circle cx="330" cy="200" r="14" fill="#FF7A1A" stroke="#000" stroke-width="5"/><circle cx="300" cy="140" r="10" fill="#fff" stroke="#000" stroke-width="5"/><circle cx="360" cy="270" r="10" fill="#fff" stroke="#000" stroke-width="5"/></svg>'),
};

// ---------- the encyclopedia (works offline) ----------
const WIKI = [
  ['Computer', 'computer', ['A computer is a machine that follows instructions, called programs, to work with information: words, numbers, pictures and sounds.', 'It has a processor that does the work, memory that holds what it is working on, and storage that keeps files when it is switched off.', 'You talk to it with a keyboard, a mouse or a touch screen, and it answers on the screen.']],
  ['Operating system', 'gear', ['The operating system is the main program of a computer. It starts first and lets all the other programs share the screen, the memory and the files.', 'Windows and macOS are operating systems. So are Linux Mint, Zorin OS and Endless OS, which are free to use and to share.']],
  ['Linux', 'term', ['Linux is the free core of many operating systems. Linus Torvalds started it in 1991 as a student project, and thousands of people have improved it since.', 'Linux runs phones, supercomputers, web servers and the three systems in our project.']],
  ['Internet', 'globe', ['The internet is a huge network that joins millions of smaller networks of computers all over the world.', 'It carries web pages, messages, video and files. Without a connection, a computer can still run the programs and read the files it already has.']],
  ['USB flash drive', 'usb', ['A USB flash drive, or USB stick, is a small device that stores files on memory chips.', 'It can carry a whole operating system: with one stick you can install a system on many computers, and carry updates to places without internet.']],
  ['Solar power', 'image', ['Solar panels turn sunlight into electricity. They have no moving parts and work best in sunny places.', 'With a battery, solar power can keep lights and computers running in villages where the electricity grid does not reach or often goes off.']],
  ['Photosynthesis', 'note', ['Photosynthesis is how plants make their food. Leaves take in sunlight, water and carbon dioxide from the air.', 'They turn them into sugar, which the plant uses to grow, and give out oxygen, which people and animals breathe.']],
  ['Water cycle', 'globe', ['The Sun warms water in seas, lakes and rivers, and some of it rises into the air as vapour. This is evaporation.', 'High up, the vapour cools and forms clouds. This is condensation. When the drops get heavy, they fall as rain or snow, and the water flows back to the sea.']],
  ['Fractions', 'calc', ['A fraction is a part of a whole. In 3/4, the bottom number says the whole is cut into 4 equal parts, and the top number says we take 3 of them.', 'Two fractions are equal when they show the same amount: 1/2 is the same as 2/4 and 4/8.']],
];
const LESSONS = [
  'The sun is shining on our school.',
  'A computer can work without the internet.',
  'We share one USB stick with every class.',
  'Plants need light, water and air to grow.',
  'Practice a little every day and you will type fast.',
];

// the files every new PC starts with
function makeFs(osName) {
  const txt = (name, body) => ({ name, type: 'txt', body });
  const img = (name) => ({ name, type: 'img', src: PICS[name] });
  return {
    home: { name: 'Home', icon: 'folder', items: [{ name: 'Documents', type: 'dir', to: 'documents' }, { name: 'Pictures', type: 'dir', to: 'pictures' }, { name: 'Music', type: 'dir', to: 'music' }, { name: 'Downloads', type: 'dir', to: 'downloads' }] },
    documents: { name: 'Documents', icon: 'folder', items: [
      txt('Welcome.txt', `Welcome to ${osName}!\n\nThis is a working copy of the desktop, made for our presentation. Open the menu, try the apps and drag the windows around.\n\nEverything you make stays in this page and is gone when you close it.`),
      txt('Lesson plan.txt', 'Monday: switch on the PC, use the mouse\nTuesday: type your name\nWednesday: draw in Paint\nThursday: read the Encyclopedia\nFriday: save your first file'),
      txt('Shopping list.txt', 'Chalk\nExercise books\nA spare USB stick\nBatteries for the clock'),
    ] },
    pictures: { name: 'Pictures', icon: 'folder', items: Object.keys(PICS).map(img) },
    music: { name: 'Music', icon: 'folder', items: [{ name: 'Morning song.ogg', type: 'music' }, { name: 'Times tables.ogg', type: 'music' }] },
    downloads: { name: 'Downloads', icon: 'folder', items: [], empty: 'Nothing downloaded yet. This PC is offline, and everything still works.' },
    usb: { name: 'USB stick', icon: 'usb', items: [{ name: 'Endless OS Full.img', type: 'disc' }, { name: 'endless-installer.exe', type: 'exe' }, txt('README.txt', 'This stick installs Endless OS.\n\n1. Plug it into the PC.\n2. Hold F2 and press power to open the BIOS.\n3. Press F8, pick the USB stick.\n4. Wait: the stick copies Endless OS onto the PC.')] },
    trash: { name: 'Trash', icon: 'trash', items: [], empty: 'The trash is empty.' },
  };
}

// ---------- the systems ----------
const SYSTEMS = {
  mint: {
    user: 'student', host: 'mint', panel: 'bottom', menu: 'mint',
    pinned: ['files', 'web', 'term'],
    desktop: [['computer', 'Computer', 'files', 'usb'], ['folder', 'Home', 'files', 'home'], ['trash', 'Trash', 'files', 'trash']],
    names: { files: 'Files', editor: 'Text Editor', web: 'Web Browser', term: 'Terminal' },
  },
  zorin: {
    user: 'student', host: 'zorin', panel: 'bottom', menu: 'zorin',
    pinned: ['web', 'files', 'editor'],
    desktop: [['folder', 'Home', 'files', 'home'], ['usb', 'USB stick', 'files', 'usb'], ['trash', 'Trash', 'files', 'trash']],
    names: { files: 'Files', editor: 'Mousepad', web: 'Web Browser', term: 'Terminal' },
  },
  endless: {
    user: 'student', host: 'endless', panel: 'bottom', menu: 'home',
    home: ['wiki', 'web', 'files', 'editor', 'photos', 'typing', 'paint', 'calc', 'snake', 'store', 'settings', 'term'],
    names: { files: 'Files', editor: 'Writer', web: 'Browser', wiki: 'Encyclopedia', store: 'App Center', term: 'Terminal' },
  },
};

export function buildDesk(os, { reduceMotion, getScale }) {
  const SYS = SYSTEMS[os.id];
  const pop = (f) => sfx.pop(f);
  const el = (tag, cls, parent, props = {}) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    Object.assign(e, props);
    if (parent) parent.appendChild(e);
    return e;
  };
  const btn = (parent, cls, label, html = '') => {
    const b = el('button', cls, parent, { type: 'button', innerHTML: html });
    if (label) b.setAttribute('aria-label', label);
    return b;
  };
  const fs = makeFs(os.name);
  const fsListeners = new Set();
  const fsChanged = () => fsListeners.forEach((f) => f());

  // ---------- the apps ----------
  const APPS = {
    files: { icon: 'folder', w: 780, h: 480, cat: 'Accessories', build: appFiles, multi: true },
    editor: { icon: 'note', w: 660, h: 460, cat: 'Office', build: appEditor, multi: true },
    calc: { name: 'Calculator', icon: 'calc', w: 320, h: 450, cat: 'Accessories', build: appCalc, fixed: true },
    web: { icon: 'globe', w: 860, h: 540, cat: 'Internet', build: appWeb },
    paint: { name: 'Paint', icon: 'brush', w: 800, h: 560, cat: 'Graphics', build: appPaint },
    snake: { name: 'Snake', icon: 'snake', w: 460, h: 560, cat: 'Games', build: appSnake, fixed: true, keys: true },
    term: { icon: 'term', w: 680, h: 420, cat: 'System', build: appTerm, keys: true },
    wiki: { name: 'Encyclopedia', icon: 'book', w: 860, h: 540, cat: 'Education', build: appWiki },
    typing: { name: 'Typing', icon: 'keys', w: 720, h: 440, cat: 'Education', build: appTyping },
    photos: { name: 'Photos', icon: 'image', w: 820, h: 540, cat: 'Graphics', build: appPhotos },
    settings: { name: 'Settings', icon: 'gear', w: 640, h: 470, cat: 'System', build: appSettings },
    store: { name: 'App Center', icon: 'store', w: 780, h: 520, cat: 'System', build: appStore },
  };
  for (const [id, a] of Object.entries(APPS)) a.name = SYS.names[id] || a.name || id;
  const appList = Object.keys(APPS).filter((id) => id !== 'store' || os.id === 'endless');

  // ---------- the screen ----------
  const scr = el('div', `osv-screen ds ds-${os.id}`);
  const wall = el('canvas', 'ds-wall', scr, { width: 1280, height: 800 });
  wall.setAttribute('aria-hidden', 'true');
  const deskIcons = el('div', 'ds-desk', scr);
  const winLayer = el('div', 'ds-wins', scr);
  const panel = el('div', 'ds-panel', scr);
  const toastBox = el('div', 'ds-toasts', scr);
  toastBox.setAttribute('aria-live', 'polite');
  const prefs = { wall: 0, dark: false, big: false, night: false };
  const night = el('div', 'ds-night', scr);
  night.setAttribute('aria-hidden', 'true');
  paintWall();

  function paintWall() {
    const g = wall.getContext('2d'), W = 1280, H = 800;
    const alt = [['#FF9ECF', '#FFE14D'], ['#2B2B33', '#4B4B5A'], ['#9FF2C8', '#3D7BFF']][prefs.wall - 1];
    if (alt) {
      const gr = g.createLinearGradient(0, 0, W, H);
      gr.addColorStop(0, alt[0]);
      gr.addColorStop(1, alt[1]);
      g.fillStyle = gr;
      g.fillRect(0, 0, W, H);
      g.fillStyle = 'rgba(255,255,255,.08)';
      for (let i = 0; i < 9; i++) { g.beginPath(); g.arc(160 + i * 140, 400 + Math.sin(i) * 200, 60 + (i % 3) * 40, 0, Math.PI * 2); g.fill(); }
      return;
    }
    if (os.id === 'mint') {
      const gr = g.createLinearGradient(0, 0, W, H);
      gr.addColorStop(0, '#0c2925'); gr.addColorStop(0.55, '#1d5a44'); gr.addColorStop(1, '#64b06f');
      g.fillStyle = gr; g.fillRect(0, 0, W, H);
      for (const [x, y, r, a] of [[990, 170, 280, 0.18], [1160, 560, 210, 0.12], [320, 660, 320, 0.08], [720, 380, 150, 0.1]]) {
        const rg = g.createRadialGradient(x, y, 0, x, y, r);
        rg.addColorStop(0, `rgba(190,255,205,${a})`); rg.addColorStop(1, 'rgba(190,255,205,0)');
        g.fillStyle = rg; g.fillRect(x - r, y - r, r * 2, r * 2);
      }
      g.strokeStyle = 'rgba(255,255,255,.035)'; g.lineWidth = 2;
      for (let i = -800; i < W; i += 26) { g.beginPath(); g.moveTo(i, H); g.lineTo(i + 800, 0); g.stroke(); }
    } else if (os.id === 'zorin') {
      const gr = g.createLinearGradient(0, 0, W * 0.6, H);
      gr.addColorStop(0, '#0a1a5c'); gr.addColorStop(0.5, '#1f56d8'); gr.addColorStop(1, '#79b6ff');
      g.fillStyle = gr; g.fillRect(0, 0, W, H);
      for (let k = 0; k < 7; k++) {
        g.beginPath();
        for (let x = 0; x <= W; x += 16) { const y = 250 + k * 70 + Math.sin(x / 210 + k * 0.9) * 60 + Math.sin(x / 90 + k) * 12; if (x === 0) g.moveTo(x, y); else g.lineTo(x, y); }
        g.lineTo(W, H); g.lineTo(0, H); g.closePath();
        g.fillStyle = `rgba(255,255,255,${0.035 + k * 0.006})`; g.fill();
      }
    } else {
      const sky = g.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, '#5a3fd1'); sky.addColorStop(0.45, '#ff6f91'); sky.addColorStop(0.75, '#ffb36b'); sky.addColorStop(1, '#ffd98a');
      g.fillStyle = sky; g.fillRect(0, 0, W, H);
      g.fillStyle = 'rgba(255,240,180,.9)'; g.beginPath(); g.arc(880, 470, 110, 0, Math.PI * 2); g.fill();
      [['#7b4fc9', 470, 120], ['#5b33a8', 540, 90], ['#3d2183', 610, 70], ['#2a145e', 690, 50]].forEach(([col, base, amp], k) => {
        g.beginPath(); g.moveTo(0, H);
        for (let x = 0; x <= W; x += 20) g.lineTo(x, base - Math.abs(Math.sin(x / (170 + k * 40) + k * 1.3)) * amp - Math.sin(x / 53 + k) * 8);
        g.lineTo(W, H); g.closePath(); g.fillStyle = col; g.fill();
      });
    }
  }

  function toast(msg, icon = 'note') {
    const t = el('div', 'ds-toast', toastBox, { innerHTML: `<span class="ds-ic">${ICONS[icon] || ''}</span><span>${esc(msg)}</span>` });
    pop(720);
    if (!reduceMotion) t.animate([{ transform: 'translateX(120%)' }, { transform: 'none' }], { duration: 320, easing: 'cubic-bezier(.2,.9,.3,1.2)' });
    setTimeout(() => {
      if (reduceMotion) return t.remove();
      t.animate([{ opacity: 1 }, { opacity: 0, transform: 'translateX(40%)' }], { duration: 260, fill: 'forwards' }).onfinish = () => t.remove();
    }, 3200);
  }
  const melody = (notes) => notes.forEach((f, i) => setTimeout(() => sfx.pop(f), i * 190));

  // ---------- windows ----------
  const wins = [];
  let z = 10, cascade = 0;
  const PANEL_H = os.id === 'endless' ? 48 : os.id === 'zorin' ? 46 : 44;
  const AREA = { w: 1280, h: 800 - PANEL_H };
  const topWin = () => wins.filter((w) => !w.min).sort((a, b) => b.z - a.z)[0];

  function focusWin(w) {
    if (!w) return;
    w.z = ++z;
    w.win.style.zIndex = w.z;
    wins.forEach((o) => { o.win.classList.toggle('active', o === w); o.task?.classList.toggle('active', o === w && !o.min); });
  }
  function place(w) {
    Object.assign(w.win.style, { left: `${w.x}px`, top: `${w.y}px`, width: `${w.w}px`, height: `${w.h}px` });
  }
  function openApp(id, arg, from) {
    const app = APPS[id];
    if (!app) return null;
    if (!app.multi) {
      const ex = wins.find((w) => w.id === id);
      if (ex) { restore(ex); ex.api?.open?.(arg); return ex; }
    }
    menuSet(false);
    const n = cascade++ % 7;
    const w = { id, app, min: false, max: os.id === 'endless' && !app.fixed, x: 0, y: 0, w: app.w, h: app.h, z: 0 };
    w.x = Math.round(Math.min(AREA.w - w.w - 20, 140 + n * 34 + (id === 'calc' ? 460 : 0)));
    w.y = Math.round(Math.max(12, Math.min(AREA.h - w.h - 12, 36 + n * 30)));
    const win = w.win = el('section', 'ds-win', winLayer, { tabIndex: -1 });
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', app.name);
    if (app.keys) win.dataset.keys = '1';
    const bar = el('header', 'ds-bar', win, { innerHTML: `<span class="ds-ic">${ICONS[app.icon]}</span><span class="ds-bar-t">${esc(app.name)}</span>` });
    const bb = el('div', 'ds-bar-b', bar);
    btn(bb, 'ds-wb', 'Minimise', G.min).addEventListener('click', () => minimise(w));
    if (!app.fixed) btn(bb, 'ds-wb', 'Maximise', G.max).addEventListener('click', () => toggleMax(w));
    btn(bb, 'ds-wb ds-wclose', 'Close', G.close).addEventListener('click', () => closeWin(w));
    w.title = bar.querySelector('.ds-bar-t');
    w.body = el('div', 'ds-body', win);
    if (!app.fixed) {
      const grip = el('div', 'ds-grip', win);
      grip.addEventListener('pointerdown', (e) => startDrag(e, w, 'size'));
    }
    bar.addEventListener('pointerdown', (e) => { if (!e.target.closest('button')) startDrag(e, w, 'move'); });
    bar.addEventListener('dblclick', (e) => { if (!e.target.closest('button') && !app.fixed) toggleMax(w); });
    win.addEventListener('pointerdown', () => focusWin(w), true);
    win.classList.toggle('max', w.max);
    place(w);
    // a button in the panel for every open window
    w.task = btn(taskList, 'ds-task', null, `<span class="ds-ic">${ICONS[app.icon]}</span><span class="ds-task-t">${esc(app.name)}</span>`);
    w.task.addEventListener('click', () => { if (w.min) restore(w); else if (topWin() === w) minimise(w); else focusWin(w); });
    wins.push(w);
    w.setTitle = (s) => { w.title.textContent = s; w.task.querySelector('.ds-task-t').textContent = s; win.setAttribute('aria-label', s); };
    w.api = app.build(w.body, arg, w) || {};
    focusWin(w);
    pop(560);
    if (!reduceMotion) {
      const r = w.max ? { x: 0, y: 0, w: AREA.w, h: AREA.h } : w;
      const [fx, fy] = from || [r.x + r.w / 2, r.y + r.h + 60];
      win.animate([{ transform: `translate(${fx - (r.x + r.w / 2)}px,${fy - (r.y + r.h / 2)}px) scale(.08)`, opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 420, easing: 'cubic-bezier(.2,.9,.3,1.15)' });
    }
    setTimeout(() => (w.api.focus ? w.api.focus() : win.focus({ preventScroll: true })), reduceMotion ? 0 : 200);
    return w;
  }
  function closeWin(w) {
    w.api?.destroy?.();
    const i = wins.indexOf(w);
    if (i >= 0) wins.splice(i, 1);
    w.task?.remove();
    pop(380);
    const done = () => { w.win.remove(); focusWin(topWin()); };
    if (reduceMotion) return done();
    w.win.animate([{ transform: 'none', opacity: 1 }, { transform: 'scale(.8)', opacity: 0 }], { duration: 200, easing: 'ease-in' }).onfinish = done;
  }
  function minimise(w) {
    if (w.min) return;
    w.min = true;
    w.api?.pause?.();
    w.task.classList.remove('active');
    pop(420);
    const done = () => { w.win.hidden = true; focusWin(topWin()); };
    if (reduceMotion) return done();
    const tr = w.task.getBoundingClientRect(), wr = w.win.getBoundingClientRect(), s = getScale();
    const dx = (tr.left + tr.width / 2 - (wr.left + wr.width / 2)) / s, dy = (tr.top - (wr.top + wr.height / 2)) / s;
    w.win.animate([{ transform: 'none', opacity: 1 }, { transform: `translate(${dx}px,${dy}px) scale(.05)`, opacity: 0 }], { duration: 300, easing: 'cubic-bezier(.6,0,.8,.4)' }).onfinish = done;
  }
  function restore(w) {
    if (!w.min) return focusWin(w);
    w.min = false;
    w.win.hidden = false;
    focusWin(w);
    w.api?.resume?.();
    pop(600);
    if (!reduceMotion) w.win.animate([{ transform: 'translateY(300px) scale(.1)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 320, easing: 'cubic-bezier(.2,.9,.3,1.15)' });
  }
  function toggleMax(w) {
    w.max = !w.max;
    w.win.classList.toggle('max', w.max);
    w.api?.resize?.();
    pop(w.max ? 640 : 520);
  }
  function startDrag(e, w, mode) {
    if (e.button !== 0) return;
    if (mode === 'move' && w.max) return;
    e.preventDefault();
    const t = e.currentTarget;
    t.setPointerCapture(e.pointerId);
    const sx = e.clientX, sy = e.clientY, o = { x: w.x, y: w.y, w: w.w, h: w.h }, s = getScale();
    const move = (ev) => {
      const dx = (ev.clientX - sx) / s, dy = (ev.clientY - sy) / s;
      if (mode === 'move') {
        w.x = Math.round(Math.max(-w.w + 140, Math.min(AREA.w - 140, o.x + dx)));
        w.y = Math.round(Math.max(0, Math.min(AREA.h - 40, o.y + dy)));
      } else {
        w.w = Math.round(Math.max(Math.min(w.app.w, 360), Math.min(AREA.w - w.x, o.w + dx)));
        w.h = Math.round(Math.max(Math.min(w.app.h, 260), Math.min(AREA.h - w.y, o.h + dy)));
      }
      place(w);
    };
    const up = () => { t.removeEventListener('pointermove', move); t.removeEventListener('pointerup', up); t.removeEventListener('pointercancel', up); if (mode === 'size') w.api?.resize?.(); };
    t.addEventListener('pointermove', move);
    t.addEventListener('pointerup', up);
    t.addEventListener('pointercancel', up);
  }

  // ---------- panel, menu and tray ----------
  let menu = null, menuOpen = false, menuBtn = null, homeSearch = null, popover = null;
  const taskList = el('div', 'ds-tasks');
  if (os.id === 'endless') {
    menuBtn = btn(panel, 'ds-mbtn ds-home-btn', 'Show the home screen', '<span class="ds-e"></span>');
    menuBtn.addEventListener('click', () => { wins.filter((w) => !w.min).forEach(minimise); homeSearch?.focus({ preventScroll: true }); });
  } else {
    menuBtn = btn(panel, 'ds-mbtn ds-pulse', 'Menu', G.grid);
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.addEventListener('click', (e) => { e.stopPropagation(); menuBtn.classList.remove('ds-pulse'); menuSet(!menuOpen); });
    const pins = el('div', 'ds-pins', panel);
    SYS.pinned.forEach((id) => {
      const b = btn(pins, 'ds-pin', APPS[id].name, ICONS[APPS[id].icon]);
      b.title = APPS[id].name;
      b.addEventListener('click', () => { const r = b.getBoundingClientRect(), s = getScale(), sr = scr.getBoundingClientRect(); openApp(id, undefined, [(r.left + r.width / 2 - sr.left) / s, (r.top - sr.top) / s]); });
    });
  }
  panel.appendChild(taskList);
  const tray = el('div', 'ds-tray', panel);
  const wifiBtn = btn(tray, 'ds-tray-b', 'Network: offline', G.wifiOff);
  btn(tray, 'ds-tray-b', 'Volume', G.speaker).addEventListener('click', () => toast('Sound comes from the page’s speaker button, top right.', 'music'));
  btn(tray, 'ds-tray-b', 'Battery 80%', G.battery).addEventListener('click', () => toast('Battery 80%. Plugged into solar power.', 'image'));
  const clock = el('span', 'ds-clock', tray);
  const tick = () => { const d = new Date(); clock.textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); };
  tick();
  const clockTimer = setInterval(tick, 15000);
  wifiBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (popover) return closePop();
    popover = el('div', 'ds-pop', scr, { innerHTML: `<b>No networks found</b><p>This PC is offline right now. Files, apps and the Encyclopedia keep working.</p>` });
    pop(660);
    if (!reduceMotion) popover.animate([{ transform: 'translateY(16px)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 220, easing: 'ease-out' });
  });
  const closePop = () => { popover?.remove(); popover = null; };

  function buildMenu() {
    menu = el('div', `ds-menu ds-menu-${os.id}`, scr);
    menu.setAttribute('role', 'dialog');
    menu.setAttribute('aria-label', 'Menu');
    const top = el('div', 'ds-msearch', menu, { innerHTML: G.search });
    const input = el('input', '', top, { type: 'search', placeholder: 'Search apps', autocomplete: 'off', spellcheck: false });
    input.setAttribute('aria-label', 'Search apps');
    const cols = el('div', 'ds-mcols', menu);
    const cats = el('div', 'ds-mcats', cols);
    const list = el('div', 'ds-mlist', cols);
    const CATS = ['All', ...new Set(appList.map((id) => APPS[id].cat))];
    let cat = 'All';
    const render = () => {
      const q = input.value.trim().toLowerCase();
      list.replaceChildren();
      const ids = appList.filter((id) => (q ? APPS[id].name.toLowerCase().includes(q) || APPS[id].cat.toLowerCase().includes(q) : cat === 'All' || APPS[id].cat === cat));
      ids.forEach((id) => {
        const b = btn(list, 'ds-mapp', null, `<span class="ds-ic">${ICONS[APPS[id].icon]}</span><span>${esc(APPS[id].name)}</span>`);
        b.addEventListener('click', () => openApp(id, undefined, [40, AREA.h]));
      });
      if (!ids.length) el('p', 'ds-empty', list, { textContent: 'No apps match.' });
    };
    CATS.forEach((c) => {
      const b = btn(cats, 'ds-mcat', null, esc(c));
      b.addEventListener('click', () => { cat = c; input.value = ''; cats.querySelectorAll('.ds-mcat').forEach((x) => x.classList.toggle('on', x === b)); render(); });
      if (c === 'All') b.classList.add('on');
    });
    const foot = el('div', 'ds-mfoot', menu, { innerHTML: `<span class="ds-user"><span class="ds-avatar">${SYS.user[0].toUpperCase()}</span>${SYS.user}</span>` });
    btn(foot, 'ds-tray-b', 'Shut down', G.power).addEventListener('click', () => toast('Shut down? Not today: this is a demo.', 'computer'));
    input.addEventListener('input', render);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') list.querySelector('.ds-mapp')?.click(); });
    render();
    menu._input = input;
  }
  function menuSet(v) {
    if (!menuBtn || os.id === 'endless') return;
    if (v === menuOpen) return;
    if (v && !menu) buildMenu();
    menuOpen = v;
    menuBtn.setAttribute('aria-expanded', String(v));
    pop(v ? 700 : 420);
    if (v) {
      menu.classList.add('open');
      menu._input.value = '';
      menu._input.dispatchEvent(new Event('input'));
      if (!reduceMotion) menu.animate([{ transform: 'translateY(40px) scaleY(.3)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 280, easing: 'cubic-bezier(.2,.9,.3,1.2)' });
      setTimeout(() => menu._input.focus({ preventScroll: true }), 30);
    } else menu?.classList.remove('open');
  }
  scr.addEventListener('pointerdown', (e) => {
    if (menuOpen && !e.target.closest('.ds-menu') && !e.target.closest('.ds-mbtn')) menuSet(false);
    if (popover && !e.target.closest('.ds-pop')) closePop();
  });

  // ---------- desktop icons, or the Endless home screen ----------
  if (os.id === 'endless') {
    const home = el('div', 'ds-homescr', deskIcons);
    const sb = el('label', 'ds-hsearch', home, { innerHTML: G.search });
    homeSearch = el('input', '', sb, { type: 'search', placeholder: 'Search your computer', autocomplete: 'off', spellcheck: false });
    homeSearch.setAttribute('aria-label', 'Search your computer');
    const gridEl = el('div', 'ds-hgrid', home);
    const tiles = SYS.home.map((id) => {
      const b = btn(gridEl, `ds-happ ds-t-${id}`, null, `<span class="ds-happ-ic">${ICONS[APPS[id].icon]}</span><span class="ds-happ-t">${esc(APPS[id].name)}</span>`);
      b.addEventListener('click', () => {
        const r = b.getBoundingClientRect(), sr = scr.getBoundingClientRect(), s = getScale();
        openApp(id, undefined, [(r.left + r.width / 2 - sr.left) / s, (r.top + r.height / 2 - sr.top) / s]);
      });
      b.dataset.id = id;
      return b;
    });
    tiles[0].classList.add('ds-pulse-app');
    homeSearch.addEventListener('input', () => {
      const q = homeSearch.value.trim().toLowerCase();
      tiles.forEach((t) => { t.hidden = !!q && !APPS[t.dataset.id].name.toLowerCase().includes(q); });
    });
    homeSearch.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      const q = homeSearch.value.trim();
      const first = tiles.find((t) => !t.hidden);
      if (first && q) first.click();
      else if (q) openApp('wiki', q);
    });
    scr._tiles = tiles;
  } else {
    SYS.desktop.forEach(([icon, label, app, arg], i) => {
      const b = btn(deskIcons, 'ds-dicon', null, `<span class="ds-dicon-ic">${ICONS[icon]}</span><span class="ds-dicon-t">${esc(label)}</span>`);
      b.style.top = `${18 + i * 112}px`;
      b.addEventListener('click', () => openApp(app, arg, [70, 60 + i * 112]));
    });
  }

  // ======================= the apps =======================
  function appFiles(body, start = 'home', w) {
    body.classList.add('ap-files');
    const side = el('nav', 'fl-side', body);
    const main = el('div', 'fl-main', body);
    const bar = el('div', 'fl-bar', main);
    const backB = btn(bar, 'ap-ib', 'Back', G.back);
    const path = el('span', 'fl-path', bar);
    const count = el('span', 'fl-count', bar);
    const gridEl = el('div', 'fl-grid', main);
    let cur = fs[start] ? start : 'home';
    const hist = [];
    const places = ['home', 'documents', 'pictures', 'music', 'downloads', 'usb', 'trash'];
    places.forEach((k) => {
      const b = btn(side, 'fl-place', null, `<span class="ds-ic">${ICONS[k === 'home' ? 'folder' : fs[k].icon]}</span>${esc(fs[k].name)}`);
      b.dataset.k = k;
      b.addEventListener('click', () => go(k));
    });
    const go = (k, push = true) => { if (push && k !== cur) hist.push(cur); cur = k; render(); };
    backB.addEventListener('click', () => { if (hist.length) go(hist.pop(), false); });
    function openItem(it) {
      if (it.type === 'dir') return go(it.to);
      if (it.type === 'txt') return openApp('editor', { folder: cur, name: it.name });
      if (it.type === 'img') return openApp('photos', it.name);
      if (it.type === 'music') { toast(`Now playing: ${it.name.replace('.ogg', '')}`, 'music'); return melody(it.name.startsWith('Morning') ? [523, 659, 784, 659, 698, 880, 784] : [392, 440, 494, 523, 494, 440, 392, 523]); }
      if (it.type === 'exe') return toast('This is a Windows program: it doesn’t run here, and it doesn’t need to.', 'exe');
      if (it.type === 'disc') return toast('A disk image. Written to a USB stick, it installs Endless OS.', 'disc');
    }
    function render() {
      const f = fs[cur];
      path.textContent = cur === 'home' ? `/home/${SYS.user}` : f.name;
      count.textContent = `${f.items.length} item${f.items.length === 1 ? '' : 's'}`;
      backB.disabled = !hist.length;
      side.querySelectorAll('.fl-place').forEach((b) => b.classList.toggle('on', b.dataset.k === cur));
      gridEl.replaceChildren();
      w.setTitle(f.name);
      if (!f.items.length) { el('p', 'ds-empty', gridEl, { textContent: f.empty || 'This folder is empty.' }); return; }
      f.items.forEach((it) => {
        const icon = it.type === 'dir' ? 'folder' : it.type === 'img' ? 'image' : it.type === 'music' ? 'music' : it.type === 'exe' ? 'exe' : it.type === 'disc' ? 'disc' : 'note';
        const b = btn(gridEl, 'fl-item', null, it.type === 'img' ? `<img src="${it.src}" alt=""><span>${esc(it.name)}</span>` : `<span class="fl-ic">${ICONS[icon]}</span><span>${esc(it.name)}</span>`);
        b.addEventListener('click', () => { gridEl.querySelectorAll('.fl-item').forEach((x) => x.classList.remove('sel')); b.classList.add('sel'); });
        b.addEventListener('dblclick', () => openItem(it));
        b.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); openItem(it); } });
        b.title = 'Double-click to open';
      });
    }
    fsListeners.add(render);
    render();
    return { destroy: () => fsListeners.delete(render), open: (k) => { if (k && fs[k]) go(k); } };
  }

  function appEditor(body, arg, w) {
    body.classList.add('ap-editor');
    const bar = el('div', 'ed-bar', body);
    const newB = btn(bar, 'ap-btn', null, 'New');
    const name = el('input', 'ed-name', bar, { value: 'Untitled.txt', spellcheck: false });
    name.setAttribute('aria-label', 'File name');
    const saveB = btn(bar, 'ap-btn ap-btn-main', null, 'Save');
    const ta = el('textarea', 'ed-text', body, { spellcheck: false });
    ta.setAttribute('aria-label', 'Text');
    const status = el('div', 'ed-status', body);
    let folder = 'documents';
    const count = () => { const t = ta.value.trim(); status.textContent = `${t ? t.split(/\s+/).length : 0} words, ${ta.value.length} characters`; };
    const load = (a) => {
      if (a && fs[a.folder]) {
        const it = fs[a.folder].items.find((x) => x.name === a.name);
        if (it) { folder = a.folder; name.value = it.name; ta.value = it.body; }
      }
      w.setTitle(`${name.value} – ${APPS.editor.name}`);
      count();
    };
    ta.addEventListener('input', count);
    newB.addEventListener('click', () => { name.value = 'Untitled.txt'; ta.value = ''; folder = 'documents'; count(); ta.focus(); w.setTitle(`Untitled.txt – ${APPS.editor.name}`); });
    const save = () => {
      let n = name.value.trim() || 'Untitled.txt';
      if (!/\.\w+$/.test(n)) n += '.txt';
      name.value = n;
      const items = fs[folder].items;
      const it = items.find((x) => x.name === n);
      if (it) it.body = ta.value; else items.push({ name: n, type: 'txt', body: ta.value });
      fsChanged();
      w.setTitle(`${n} – ${APPS.editor.name}`);
      toast(`Saved ${n} in ${fs[folder].name}`, 'note');
    };
    saveB.addEventListener('click', save);
    ta.addEventListener('keydown', (e) => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); save(); } });
    load(arg);
    return { focus: () => ta.focus({ preventScroll: true }), open: load };
  }

  function appCalc(body, _a, w) {
    body.classList.add('ap-calc');
    const disp = el('output', 'ca-disp', body, { textContent: '0' });
    const hist = el('div', 'ca-hist', body);
    const pad = el('div', 'ca-pad', body);
    let cur = '0', prev = null, op = null, fresh = true;
    const fmt = (n) => { if (!isFinite(n)) return 'Error'; const s = String(Math.round(n * 1e10) / 1e10); return s.length > 14 ? n.toExponential(6) : s; };
    const calc = (a, b, o) => (o === '+' ? a + b : o === '−' ? a - b : o === '×' ? a * b : b === 0 ? NaN : a / b);
    const show = () => { disp.textContent = cur; hist.textContent = prev !== null ? `${fmt(prev)} ${op}` : ''; };
    const press = (k) => {
      if (/^\d$/.test(k)) { cur = fresh || cur === '0' ? k : cur.length < 14 ? cur + k : cur; fresh = false; }
      else if (k === '.') { if (fresh) { cur = '0.'; fresh = false; } else if (!cur.includes('.')) cur += '.'; }
      else if (k === 'C') { cur = '0'; prev = null; op = null; fresh = true; }
      else if (k === '±') cur = cur.startsWith('-') ? cur.slice(1) : cur === '0' ? '0' : '-' + cur;
      else if (k === '%') cur = fmt(parseFloat(cur) / 100);
      else if (k === '⌫') { cur = fresh ? cur : cur.slice(0, -1) || '0'; }
      else if ('+−×÷'.includes(k)) {
        if (prev !== null && op && !fresh) cur = fmt(calc(prev, parseFloat(cur), op));
        prev = parseFloat(cur); op = k; fresh = true;
      } else if (k === '=') {
        if (prev !== null && op) { cur = fmt(calc(prev, parseFloat(cur), op)); prev = null; op = null; fresh = true; }
      }
      if (cur === 'Error') { prev = null; op = null; fresh = true; }
      show();
      pop(400 + (k.charCodeAt(0) % 12) * 30);
    };
    ['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '−', '1', '2', '3', '+', '0', '.', '⌫', '='].forEach((k) => {
      const b = btn(pad, `ca-k${'+−×÷='.includes(k) ? ' ca-op' : ''}${k === '=' ? ' ca-eq' : ''}`, null, k);
      b.addEventListener('click', () => press(k));
    });
    const map = { '+': '+', '-': '−', '*': '×', x: '×', '/': '÷', Enter: '=', '=': '=', Escape: 'C', Delete: 'C', Backspace: '⌫', ',': '.', '.': '.', '%': '%' };
    w.win.addEventListener('keydown', (e) => {
      const k = /^\d$/.test(e.key) ? e.key : map[e.key];
      if (!k || (k === 'C' && e.key === 'Escape' && cur === '0')) return;
      e.preventDefault();
      e.stopPropagation();
      press(k);
    });
    w.win.dataset.keys = '1';
    return {};
  }

  function appWeb(body, _a, w) {
    body.classList.add('ap-web');
    const bar = el('div', 'wb-bar', body);
    btn(bar, 'ap-ib', 'Back', G.back).disabled = true;
    btn(bar, 'ap-ib', 'Forward', G.fwd).disabled = true;
    const reload = btn(bar, 'ap-ib', 'Reload', G.reload);
    const addr = el('input', 'wb-addr', bar, { type: 'text', placeholder: 'Search or type a web address', spellcheck: false });
    addr.setAttribute('aria-label', 'Address');
    const page = el('div', 'wb-page', body);
    let game = null;
    const offline = (host) => {
      game?.stop();
      game = null;
      page.innerHTML = `<div class="wb-off"><svg viewBox="0 0 120 90" aria-hidden="true"><path d="M30 70a20 20 0 0 1 2-40 26 26 0 0 1 50-4 18 18 0 0 1 8 44z" fill="#fff" stroke="#000" stroke-width="5" stroke-linejoin="round"/><path d="M20 15l80 65" stroke="#FF4D4D" stroke-width="7" stroke-linecap="round"/></svg>
        <h3>${host ? `Can’t reach ${esc(host)}` : 'You’re offline'}</h3><p>There’s no internet here right now. That’s normal where these PCs are going, and the computer keeps working.</p>
        <div class="wb-acts"><button type="button" class="ap-btn ap-btn-main" data-a="wiki">Open the Encyclopedia</button><button type="button" class="ap-btn" data-a="game">Play while you wait</button></div></div>`;
      page.querySelector('[data-a=wiki]').addEventListener('click', () => openApp('wiki'));
      page.querySelector('[data-a=game]').addEventListener('click', play);
      w.setTitle(host ? `${host} – ${APPS.web.name}` : APPS.web.name);
    };
    const play = () => {
      page.innerHTML = '<div class="wb-game"><canvas width="760" height="260" aria-label="Jumping game: press Space, the up arrow or click to jump"></canvas><p>Space, ↑ or click to jump over the unplugged cables</p></div>';
      game = runner(page.querySelector('canvas'));
      w.win.dataset.keys = '1';
      w.win.focus({ preventScroll: true });
    };
    addr.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      const v = addr.value.trim();
      if (!v) return;
      offline(v.replace(/^https?:\/\//, '').split('/')[0]);
      addr.blur();
    });
    reload.addEventListener('click', () => offline());
    w.win.addEventListener('keydown', (e) => {
      if (!game || e.target === addr) return;
      if (e.key === ' ' || e.key === 'ArrowUp') { e.preventDefault(); e.stopPropagation(); game.jump(); }
    });
    offline();
    return { destroy: () => game?.stop(), pause: () => game?.pause(), resume: () => game?.resume() };
  }

  // an original little runner: the orange stick jumps over unplugged cables
  function runner(cv) {
    const g = cv.getContext('2d'), W = cv.width, H = cv.height, GY = H - 46;
    let y = 0, vy = 0, obs = [], clouds = [], speed = 6, score = 0, best = 0, over = false, raf = 0, last = 0, paused = false, spawn = 60;
    const reset = () => { y = 0; vy = 0; obs = []; speed = 6; score = 0; over = false; spawn = 60; };
    const jump = () => { if (over) return reset(); if (y === 0) { vy = 13; pop(660); } };
    cv.addEventListener('pointerdown', (e) => { e.preventDefault(); jump(); });
    for (let i = 0; i < 4; i++) clouds.push({ x: i * 220 + 60, y: 30 + (i % 2) * 40 });
    const step = () => {
      if (over) return;
      vy -= 0.8;
      y = Math.max(0, y + vy);
      if (y === 0) vy = 0;
      if (--spawn <= 0) { obs.push({ x: W + 20, h: 26 + Math.random() * 26, w: 16 + Math.random() * 14 }); spawn = 50 + Math.random() * 60 - speed * 2; }
      obs.forEach((o) => { o.x -= speed; });
      obs = obs.filter((o) => o.x > -40);
      clouds.forEach((c) => { c.x -= speed * 0.25; if (c.x < -80) c.x = W + 40; });
      score += 0.2;
      speed = Math.min(14, 6 + score / 90);
      const px = 80, pw = 46, ph = 22, py = GY - y - ph;
      for (const o of obs) if (px + pw - 6 > o.x && px + 6 < o.x + o.w && py + ph > GY - o.h) { over = true; best = Math.max(best, Math.floor(score)); pop(220); }
    };
    const draw = () => {
      g.fillStyle = '#F4F7FF';
      g.fillRect(0, 0, W, H);
      g.fillStyle = '#fff';
      g.strokeStyle = '#000';
      g.lineWidth = 3;
      clouds.forEach((c) => { g.beginPath(); g.arc(c.x, c.y + 10, 16, 0, 7); g.arc(c.x + 22, c.y, 20, 0, 7); g.arc(c.x + 46, c.y + 10, 15, 0, 7); g.fill(); });
      g.fillStyle = '#000';
      g.fillRect(0, GY, W, 3);
      obs.forEach((o) => {
        g.fillStyle = '#5A5A66';
        g.fillRect(o.x + o.w / 2 - 3, GY - o.h, 6, o.h);
        g.fillStyle = '#D9D9D9';
        g.fillRect(o.x, GY - o.h - 12, o.w, 14);
        g.strokeRect(o.x, GY - o.h - 12, o.w, 14);
      });
      const px = 80, py = GY - y - 22;
      g.fillStyle = '#FF7A1A';
      g.beginPath();
      if (g.roundRect) g.roundRect(px, py, 34, 22, 6); else g.rect(px, py, 34, 22);
      g.fill();
      g.stroke();
      g.fillStyle = '#D9D9D9';
      g.fillRect(px + 34, py + 5, 12, 12);
      g.strokeRect(px + 34, py + 5, 12, 12);
      g.fillStyle = '#fff';
      [px + 9, px + 20].forEach((ex) => { g.beginPath(); g.arc(ex, py + 9, 4.5, 0, 7); g.fill(); });
      g.fillStyle = '#000';
      [px + 10, px + 21].forEach((ex) => { g.beginPath(); g.arc(ex, py + 9, 2.2, 0, 7); g.fill(); });
      g.fillStyle = '#000';
      g.font = '700 20px Archivo, sans-serif';
      g.textAlign = 'right';
      g.fillText(`${Math.floor(score)}${best ? `   best ${best}` : ''}`, W - 16, 30);
      if (over) { g.textAlign = 'center'; g.font = '28px "Archivo Black", sans-serif'; g.fillText('Unplugged! Press Space to try again', W / 2, H / 2 - 10); }
    };
    const loop = (t) => {
      raf = requestAnimationFrame(loop);
      if (paused) return;
      if (t - last > 1000 / 60 - 2 || !last) { last = t; step(); draw(); }
    };
    raf = requestAnimationFrame(loop);
    return { jump, stop: () => cancelAnimationFrame(raf), pause: () => { paused = true; }, resume: () => { paused = false; } };
  }

  function appPaint(body, _a, w) {
    body.classList.add('ap-paint');
    const tools = el('div', 'pt-tools', body);
    const cv = el('canvas', 'pt-canvas', body, { width: 760, height: 430 });
    cv.setAttribute('aria-label', 'Drawing canvas');
    const g = cv.getContext('2d');
    g.fillStyle = '#fff';
    g.fillRect(0, 0, cv.width, cv.height);
    let color = '#000000', size = 8, erase = false;
    ['#000000', '#FF4D4D', '#FF7A1A', '#FFE14D', '#2FBF71', '#3D7BFF', '#B7A3FF', '#FF9ECF', '#8B5A2B', '#FFFFFF'].forEach((c, i) => {
      const b = btn(tools, 'pt-sw', `Colour ${c}`);
      b.style.background = c;
      if (i === 0) b.classList.add('on');
      b.addEventListener('click', () => { color = c; erase = false; tools.querySelectorAll('.pt-sw,.pt-er').forEach((x) => x.classList.toggle('on', x === b)); });
    });
    el('span', 'pt-sep', tools);
    [[4, 'Thin'], [8, 'Medium'], [18, 'Thick']].forEach(([s, l], i) => {
      const b = btn(tools, 'pt-size', `${l} brush`, `<i style="width:${s + 2}px;height:${s + 2}px"></i>`);
      if (i === 1) b.classList.add('on');
      b.addEventListener('click', () => { size = s; tools.querySelectorAll('.pt-size').forEach((x) => x.classList.toggle('on', x === b)); });
    });
    el('span', 'pt-sep', tools);
    const er = btn(tools, 'ap-btn pt-er', null, 'Eraser');
    er.addEventListener('click', () => { erase = true; tools.querySelectorAll('.pt-sw,.pt-er').forEach((x) => x.classList.toggle('on', x === er)); });
    btn(tools, 'ap-btn', null, 'Clear').addEventListener('click', () => { g.fillStyle = '#fff'; g.fillRect(0, 0, cv.width, cv.height); pop(300); });
    let n = 1;
    btn(tools, 'ap-btn ap-btn-main', null, 'Save').addEventListener('click', () => {
      const nm = `Drawing ${n++}.png`;
      fs.pictures.items.push({ name: nm, type: 'img', src: cv.toDataURL('image/png') });
      fsChanged();
      toast(`Saved ${nm} in Pictures`, 'image');
    });
    let last = null;
    const at = (e) => { const r = cv.getBoundingClientRect(); return [((e.clientX - r.left) * cv.width) / r.width, ((e.clientY - r.top) * cv.height) / r.height]; };
    cv.addEventListener('pointerdown', (e) => { e.preventDefault(); cv.setPointerCapture(e.pointerId); last = at(e); stroke(last, last); });
    cv.addEventListener('pointermove', (e) => { if (!last) return; const p = at(e); stroke(last, p); last = p; });
    const end = () => { last = null; };
    cv.addEventListener('pointerup', end);
    cv.addEventListener('pointercancel', end);
    function stroke(a, b) {
      g.strokeStyle = erase ? '#fff' : color;
      g.lineWidth = erase ? 26 : size;
      g.lineCap = 'round';
      g.lineJoin = 'round';
      g.beginPath();
      g.moveTo(a[0], a[1]);
      g.lineTo(b[0], b[1]);
      g.stroke();
    }
    return {};
  }

  function appSnake(body, _a, w) {
    body.classList.add('ap-snake');
    const head = el('div', 'sn-head', body, { innerHTML: '<span>Score <b>0</b></span><span>Best <b>0</b></span>' });
    const cv = el('canvas', 'sn-canvas', body, { width: 400, height: 400 });
    cv.setAttribute('aria-label', 'Snake game: use the arrow keys or the buttons');
    const pad = el('div', 'sn-pad', body);
    const g = cv.getContext('2d'), N = 20, C = 20;
    let snake, dir, next, food, score, best = 0, dead, paused = false, acc = 0, last = 0, raf = 0, started = false;
    const reset = () => { snake = [[8, 10], [7, 10], [6, 10]]; dir = [1, 0]; next = [1, 0]; score = 0; dead = false; place(); upd(); };
    const place = () => { if (snake.length >= N * N) { food = null; return; } do { food = [Math.floor(Math.random() * N), Math.floor(Math.random() * N)]; } while (snake.some(([x, y]) => x === food[0] && y === food[1])); };
    const upd = () => { const b = head.querySelectorAll('b'); b[0].textContent = score; b[1].textContent = best; };
    const turn = (d) => { if (dead) { reset(); started = true; return; } started = true; if (d[0] !== -dir[0] || d[1] !== -dir[1]) next = d; };
    [['↑', [0, -1], 'Up'], ['←', [-1, 0], 'Left'], ['↓', [0, 1], 'Down'], ['→', [1, 0], 'Right']].forEach(([s, d, l]) => btn(pad, 'sn-k', l, s).addEventListener('click', () => turn(d)));
    w.win.addEventListener('keydown', (e) => {
      const d = { ArrowUp: [0, -1], w: [0, -1], ArrowDown: [0, 1], s: [0, 1], ArrowLeft: [-1, 0], a: [-1, 0], ArrowRight: [1, 0], d: [1, 0] }[e.key];
      if (d) { e.preventDefault(); e.stopPropagation(); turn(d); }
      else if (e.key === ' ') { e.preventDefault(); e.stopPropagation(); if (dead) reset(); started = true; }
    });
    const step = () => {
      dir = next;
      const h = [snake[0][0] + dir[0], snake[0][1] + dir[1]];
      const willGrow = food && h[0] === food[0] && h[1] === food[1];
      const last = snake.length - 1; // the tail cell is vacated this step unless we grow, so moving into it is legal
      const hitSelf = snake.some(([x, y], idx) => x === h[0] && y === h[1] && (willGrow || idx !== last));
      if (h[0] < 0 || h[1] < 0 || h[0] >= N || h[1] >= N || hitSelf) { dead = true; best = Math.max(best, score); upd(); pop(200); return; }
      snake.unshift(h);
      if (willGrow) { score++; upd(); place(); pop(880); } else snake.pop();
    };
    const draw = () => {
      g.fillStyle = '#C8EE5A';
      g.fillRect(0, 0, 400, 400);
      g.fillStyle = 'rgba(0,0,0,.05)';
      for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if ((i + j) % 2) g.fillRect(i * C, j * C, C, C);
      g.fillStyle = '#FF4D4D';
      g.strokeStyle = '#000';
      g.lineWidth = 3;
      g.beginPath(); g.arc(food[0] * C + 10, food[1] * C + 10, 7, 0, 7); g.fill(); g.stroke();
      snake.forEach(([x, y], i) => { g.fillStyle = i ? '#2FBF71' : '#1E8A50'; g.fillRect(x * C + 1, y * C + 1, C - 2, C - 2); g.strokeRect(x * C + 1, y * C + 1, C - 2, C - 2); });
      g.fillStyle = '#000';
      g.textAlign = 'center';
      if (dead || !started) {
        g.fillStyle = 'rgba(255,255,255,.85)';
        g.fillRect(40, 160, 320, 80);
        g.fillStyle = '#000';
        g.font = '24px "Archivo Black", sans-serif';
        g.fillText(dead ? 'Game over' : 'Press an arrow key', 200, 196);
        g.font = '700 16px Archivo, sans-serif';
        g.fillText(dead ? 'Press an arrow or Space to play again' : 'or the buttons below', 200, 222);
      }
    };
    const loop = (t) => {
      raf = requestAnimationFrame(loop);
      const dt = last ? Math.min(0.1, (t - last) / 1000) : 0;
      last = t;
      if (paused) return;
      if (started && !dead) { acc += dt; const every = Math.max(0.065, 0.14 - score * 0.004); while (acc > every) { acc -= every; step(); if (dead) break; } }
      draw();
    };
    reset();
    raf = requestAnimationFrame(loop);
    return { destroy: () => cancelAnimationFrame(raf), pause: () => { paused = true; }, resume: () => { paused = false; last = 0; } };
  }

  function appTerm(body, _a, w) {
    body.classList.add('ap-term');
    const out = el('div', 'tm-out', body);
    const line = el('label', 'tm-line', body);
    const prompt = `${SYS.user}@${SYS.host}:~$`;
    el('span', 'tm-prompt', line, { textContent: prompt });
    const input = el('input', 'tm-in', line, { type: 'text', spellcheck: false, autocomplete: 'off' });
    input.setAttribute('aria-label', 'Command');
    const hist = [];
    let hi = 0;
    const print = (s, cls = '') => { el('div', `tm-row ${cls}`, out, { textContent: s }); out.scrollTop = out.scrollHeight; };
    print(`Welcome to ${os.name}. Type "help" to see what you can do.`, 'tm-dim');
    const files = () => fs.documents.items.map((i) => i.name);
    const CMDS = {
      help: () => 'Commands: help, ls, cat <file>, echo <text>, date, whoami, uname, neofetch, fortune, apt install <app>, sudo <command>, clear, exit',
      ls: () => ['Documents', 'Pictures', 'Music', 'Downloads', ...files().map((f) => `Documents/${f}`)].join('   '),
      cat: (a) => { const it = fs.documents.items.find((i) => i.name.toLowerCase() === a.join(' ').replace(/^documents\//i, '').toLowerCase()); return it ? it.body : `cat: ${a.join(' ') || '?'}: No such file (try: ls)`; },
      echo: (a) => a.join(' '),
      date: () => new Date().toString().split(' (')[0],
      whoami: () => SYS.user,
      uname: () => 'Linux',
      neofetch: () => `${SYS.user}@${SYS.host}\n-----------------\nOS: ${os.name} (a copy inside a web page)\nKernel: Linux\nShell: bash\nNetwork: offline (that's fine)\nMemory: enough for school`,
      fortune: () => ['A computer that works offline is a computer that works.', 'One USB stick, a hundred PCs.', 'Today you will learn something new.', 'Save your work often.'][Math.floor(Math.random() * 4)],
      apt: (a) => (a[0] === 'install' && a[1] ? `Reading package lists... Done\nE: Unable to fetch ${a[1]}: no internet connection.\nTip: on these PCs, new apps arrive on a USB stick.` : 'Usage: apt install <app>'),
      sudo: (a) => (a.length ? `[sudo] password for ${SYS.user}: \nNice try. This demo doesn’t have a password.` : 'usage: sudo <command>'),
      clear: () => { out.replaceChildren(); return null; },
      exit: () => { setTimeout(() => closeWin(w), 150); return 'logout'; },
    };
    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') { e.preventDefault(); if (hi > 0) input.value = hist[--hi]; return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); hi = Math.min(hist.length, hi + 1); input.value = hist[hi] || ''; return; }
      if (e.key !== 'Enter') return;
      const v = input.value.trim();
      input.value = '';
      print(`${prompt} ${v}`, 'tm-cmd');
      if (!v) return;
      hist.push(v);
      hi = hist.length;
      const [c, ...a] = v.split(/\s+/);
      const f = CMDS[c.toLowerCase()];
      const r = f ? f(a) : `${c}: command not found (try: help)`;
      if (r !== null && r !== undefined) print(r);
      pop(500);
    });
    body.addEventListener('pointerup', () => { if (!window.getSelection()?.toString()) input.focus({ preventScroll: true }); });
    return { focus: () => input.focus({ preventScroll: true }) };
  }

  function appWiki(body, query, w) {
    body.classList.add('ap-wiki');
    const side = el('div', 'wk-side', body);
    const sb = el('label', 'wk-search', side, { innerHTML: G.search });
    const input = el('input', '', sb, { type: 'search', placeholder: 'Search the Encyclopedia', spellcheck: false });
    input.setAttribute('aria-label', 'Search the Encyclopedia');
    const list = el('div', 'wk-list', side);
    el('p', 'wk-badge', side, { textContent: 'Works without internet' });
    const art = el('article', 'wk-art', body);
    const show = (i) => {
      const [t, icon, paras] = WIKI[i];
      art.innerHTML = `<div class="wk-hero"><span class="wk-ic">${ICONS[icon]}</span><h3>${esc(t)}</h3></div>${paras.map((p) => `<p>${esc(p)}</p>`).join('')}`;
      art.scrollTop = 0;
      list.querySelectorAll('.wk-item').forEach((b) => b.classList.toggle('on', +b.dataset.i === i));
      w.setTitle(`${t} – ${APPS.wiki.name}`);
      pop(560);
    };
    const render = () => {
      const q = input.value.trim().toLowerCase();
      list.replaceChildren();
      const hits = WIKI.map((a, i) => [a, i]).filter(([[t, , p]]) => !q || t.toLowerCase().includes(q) || p.join(' ').toLowerCase().includes(q));
      hits.forEach(([[t], i]) => { const b = btn(list, 'wk-item', null, esc(t)); b.dataset.i = i; b.addEventListener('click', () => show(i)); });
      if (!hits.length) el('p', 'ds-empty', list, { textContent: 'No articles match.' });
      return hits;
    };
    input.addEventListener('input', render);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') list.querySelector('.wk-item')?.click(); });
    const open = (q) => {
      if (typeof q === 'string') { input.value = q; const hits = render(); if (hits.length) show(hits[0][1]); }
    };
    render();
    show(0);
    open(query);
    return { open, focus: () => input.focus({ preventScroll: true }) };
  }

  function appTyping(body, _a, w) {
    body.classList.add('ap-typing');
    el('p', 'ty-help', body, { textContent: 'Type the sentence. Green letters are right, red ones need fixing.' });
    const target = el('div', 'ty-target', body);
    const input = el('input', 'ty-in', body, { type: 'text', spellcheck: false, autocomplete: 'off' });
    input.setAttribute('aria-label', 'Type here');
    const stats = el('div', 'ty-stats', body);
    const nextB = btn(body, 'ap-btn ap-btn-main', null, 'Next sentence');
    let k = 0, t0 = 0;
    const load = () => { input.value = ''; t0 = 0; render(); input.focus({ preventScroll: true }); };
    const render = () => {
      const s = LESSONS[k % LESSONS.length], v = input.value;
      target.innerHTML = [...s].map((ch, i) => `<span class="${i < v.length ? (v[i] === ch ? 'ok' : 'bad') : i === v.length ? 'cur' : ''}">${ch === ' ' ? '&nbsp;' : esc(ch)}</span>`).join('');
      const right = [...v].filter((ch, i) => ch === s[i]).length;
      const acc = v.length ? Math.round((right / v.length) * 100) : 100;
      const mins = t0 ? (performance.now() - t0) / 60000 : 0;
      const wpm = mins > 0.02 ? Math.round(right / 5 / mins) : 0;
      stats.textContent = v === s ? `Done! ${wpm} words a minute, ${acc}% right.` : `${acc}% right${wpm ? `, ${wpm} words a minute` : ''}`;
      if (v === s) { pop(880); nextB.focus({ preventScroll: true }); }
    };
    input.addEventListener('input', () => { if (!t0) t0 = performance.now(); render(); pop(520); });
    nextB.addEventListener('click', () => { k++; load(); });
    render();
    return { focus: () => input.focus({ preventScroll: true }) };
  }

  function appPhotos(body, name, w) {
    body.classList.add('ap-photos');
    const view = el('div', 'ph-view', body);
    const strip = el('div', 'ph-strip', body);
    let cur = 0;
    const items = () => fs.pictures.items;
    const show = (i) => {
      const it = items()[i];
      if (!it) { view.innerHTML = '<p class="ds-empty">No pictures yet.</p>'; return; }
      cur = i;
      view.innerHTML = `<img src="${it.src}" alt="${esc(it.name)}">`;
      strip.querySelectorAll('.ph-th').forEach((b) => b.classList.toggle('on', +b.dataset.i === i));
      w.setTitle(`${it.name} – Photos`);
    };
    const render = () => {
      strip.replaceChildren();
      items().forEach((it, i) => { const b = btn(strip, 'ph-th', it.name, `<img src="${it.src}" alt="">`); b.dataset.i = i; b.addEventListener('click', () => show(i)); });
      show(Math.min(cur, items().length - 1));
    };
    const open = (n) => { const i = items().findIndex((x) => x.name === n); if (i >= 0) show(i); };
    fsListeners.add(render);
    render();
    open(name);
    return { open, destroy: () => fsListeners.delete(render) };
  }

  function appSettings(body) {
    body.classList.add('ap-settings');
    const row = (title, sub) => { const r = el('div', 'st-row', body); el('div', 'st-txt', r, { innerHTML: `<b>${esc(title)}</b><span>${esc(sub)}</span>` }); return r; };
    const walls = el('div', 'st-walls', row('Background', 'Pick a picture for the desktop'));
    ['Default', 'Candy', 'Night', 'Sea'].forEach((n, i) => {
      const b = btn(walls, `st-wall st-wall-${os.id}`, `${n} background`);
      b.dataset.i = i;
      if (i === prefs.wall) b.classList.add('on');
      b.addEventListener('click', () => { prefs.wall = i; paintWall(); walls.querySelectorAll('.st-wall').forEach((x) => x.classList.toggle('on', x === b)); pop(600); });
    });
    const toggle = (title, sub, key, apply) => {
      const r = row(title, sub);
      const sw = btn(r, 'st-switch', title);
      sw.setAttribute('role', 'switch');
      const set = () => { sw.setAttribute('aria-checked', String(prefs[key])); apply(prefs[key]); };
      sw.addEventListener('click', () => { prefs[key] = !prefs[key]; set(); pop(prefs[key] ? 700 : 450); });
      set();
    };
    toggle('Dark windows', 'Easier on the eyes at night', 'dark', (v) => scr.classList.toggle('ds-dark', v));
    toggle('Bigger text', 'Makes the words in apps larger', 'big', (v) => scr.classList.toggle('ds-big', v));
    toggle('Night light', 'Warmer colours on the screen', 'night', (v) => night.classList.toggle('on', v));
    const about = row('About this computer', `${os.name}, a working copy for our school presentation`);
    about.classList.add('st-about');
    return {};
  }

  function appStore(body) {
    body.classList.add('ap-store');
    el('p', 'so-note', body, { textContent: 'These apps are already on this computer and work without internet. New apps and updates can arrive on a USB stick.' });
    const list = el('div', 'so-list', body);
    SYS.home.filter((id) => id !== 'store').forEach((id) => {
      const card = el('div', 'so-card', list, { innerHTML: `<span class="so-ic">${ICONS[APPS[id].icon]}</span><b>${esc(APPS[id].name)}</b><span class="so-chip">Installed</span>` });
      btn(card, 'ap-btn', `Open ${APPS[id].name}`, 'Open').addEventListener('click', () => openApp(id));
    });
    return {};
  }

  // ---------- keys: the viewer asks first, so arrows and Escape go to the right place ----------
  function onKey(e) {
    if (e.key === 'Escape') {
      if (popover) { closePop(); return true; }
      if (menuOpen) { menuSet(false); menuBtn?.focus({ preventScroll: true }); return true; }
      if (os.id === 'endless' && document.activeElement === homeSearch && homeSearch.value) { homeSearch.value = ''; homeSearch.dispatchEvent(new Event('input')); return true; }
      return false;
    }
    if (e.key === 'Tab') return false;
    const t = e.target;
    if (t && t.closest?.('.ds') && (t.matches('input, textarea, select, [contenteditable]') || t.closest('[data-keys]'))) return true;
    return false;
  }

  let introduced = false;
  return {
    scr,
    onKey,
    intro() {
      menuSet(false);
      closePop();
      if (!introduced) {
        introduced = true;
        if (os.id === 'endless') setTimeout(() => homeSearch?.focus({ preventScroll: true }), 700);
        else setTimeout(() => openApp('editor', { folder: 'documents', name: 'Welcome.txt' }, [640, 760]), reduceMotion ? 0 : 700);
      }
      if (reduceMotion) return;
      const items = os.id === 'endless' ? scr._tiles : [...deskIcons.children];
      items?.forEach((b, i) => b.animate([{ transform: 'translateY(40px) scale(0)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 460, delay: 200 + i * 40, easing: 'cubic-bezier(.2,.9,.3,1.35)', fill: 'backwards' }));
      panel.animate([{ transform: 'translateY(100%)' }, { transform: 'none' }], { duration: 420, delay: 120, easing: 'cubic-bezier(.2,.9,.3,1.2)', fill: 'backwards' });
    },
    destroy() { clearInterval(clockTimer); wins.slice().forEach(closeWin); },
  };
}
