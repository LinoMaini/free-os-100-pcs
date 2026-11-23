// Click a desktop (the 3D screen, or the monitor button next to a system's name) to open it full screen.
// It corkscrews out of the scene; inside is a small desktop that really works (see desk.js).
// Tabs, the arrow buttons or ← → switch systems with a 3D flip; Esc, × or the backdrop close it.
import { buildDesk } from './desk.js';
import { sfx } from './kit.js';

const OS = [
  { id: 'mint', name: 'Linux Mint', color: '#2FBF71', hi: 'rgba(53,168,84,.5)' },
  { id: 'zorin', name: 'Zorin OS Lite', color: '#3D7BFF', hi: 'rgba(47,109,246,.22)' },
  { id: 'endless', name: 'Endless OS', color: '#FF7A1A', hi: 'rgba(255,255,255,.25)' },
];
const DW = 1316, DH = 836; // device size: 1280 x 800 screen plus the bezel

const ICON = {
  monitor: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M9 20h6M12 16v4"/><path d="M14 7h3v3M17 7l-4 4"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
};

export function initViewer(stage, { reduceMotion }) {
  const el = (tag, cls, parent, props = {}) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    Object.assign(e, props);
    if (parent) parent.appendChild(e);
    return e;
  };
  let scale = 1; // screen px → viewport px, for dragging

  const builders = {
    mint: () => buildDesk(OS[0], { reduceMotion, getScale: () => scale }),
    zorin: () => buildDesk(OS[1], { reduceMotion, getScale: () => scale }),
    endless: () => buildDesk(OS[2], { reduceMotion, getScale: () => scale }),
  };
  const built = {};

  // ---------- the overlay ----------
  let root, fit, device, tabs, current = -1, opener = null, isOpen = false;
  function ensure() {
    if (root) return;
    root = el('div', 'osv', document.body);
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    const burst = el('div', 'osv-burst', root);
    el('div', 'osv-burst-in', burst);
    root._burst = burst;
    const tabBar = el('div', 'osv-tabs', root);
    tabBar.setAttribute('role', 'tablist');
    tabs = OS.map((o, i) => {
      const t = el('button', 'osv-tab', tabBar, { type: 'button', textContent: o.name });
      t.setAttribute('role', 'tab');
      t.style.background = o.color;
      t.addEventListener('click', () => switchTo(i, i > current ? 1 : -1));
      return t;
    });
    const x = el('button', 'osv-x', root, { type: 'button', innerHTML: ICON.close });
    x.setAttribute('aria-label', 'Close');
    x.addEventListener('click', close);
    const prev = el('button', 'osv-nav osv-prev', root, { type: 'button', innerHTML: ICON.prev });
    prev.setAttribute('aria-label', 'Previous system');
    prev.addEventListener('click', () => switchTo((current + 2) % 3, -1));
    const next = el('button', 'osv-nav osv-next', root, { type: 'button', innerHTML: ICON.next });
    next.setAttribute('aria-label', 'Next system');
    next.addEventListener('click', () => switchTo((current + 1) % 3, 1));
    fit = el('div', 'osv-fit', root);
    device = el('div', 'osv-device', fit);
    root.addEventListener('pointerdown', (e) => { if (e.target === root || e.target === root._burst || e.target.parentNode === root._burst) close(); });
    window.addEventListener('resize', () => { if (isOpen) layout(); });
    window.addEventListener('keydown', (e) => {
      if (!isOpen) return;
      // the desktop answers first: Escape closes its menu, arrows stay in text boxes and games
      if (built[OS[current]?.id]?.onKey?.(e)) { if (e.key === 'Escape') e.stopImmediatePropagation(); return; }
      if (e.key === 'Escape') { e.stopImmediatePropagation(); close(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); switchTo((current + 1) % 3, 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); switchTo((current + 2) % 3, -1); }
      else if (e.key === 'Tab') {
        const f = [...root.querySelectorAll('button, input, textarea, [tabindex="0"]')].filter((b) => b.offsetParent !== null && !b.disabled);
        const i = f.indexOf(document.activeElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
      }
    }, true);
  }
  const T = (x, y, s, r = 0) => `translate(${x}px,${y}px) translate(-50%,-50%) scale(${s}) rotate(${r}deg)`;
  function fitBox() {
    const vw = window.innerWidth, vh = window.innerHeight, phone = vw < 820;
    const top = phone ? 140 : 96, bottom = phone ? 90 : 40;
    const s = Math.min((vw * (phone ? 0.96 : 0.86)) / DW, (vh - top - bottom) / DH);
    return { s, cx: vw / 2, cy: top + (vh - top - bottom) / 2 };
  }
  function layout() {
    const f = fitBox();
    scale = f.s;
    fit.style.transform = T(f.cx, f.cy, f.s);
  }
  function show(i) {
    const os = OS[i];
    built[os.id] ||= builders[os.id]();
    device.replaceChildren(built[os.id].scr);
    built[os.id].intro();
    current = i;
    root.setAttribute('aria-label', os.name);
    tabs.forEach((t, k) => t.setAttribute('aria-selected', String(k === i)));
  }
  function switchTo(i, dir) {
    if (i === current || !isOpen) return;
    sfx.whoosh();
    if (reduceMotion) return show(i);
    device.animate([{ transform: 'rotateY(0deg)' }, { transform: `rotateY(${dir * 90}deg)` }], { duration: 220, easing: 'ease-in' }).onfinish = () => {
      show(i);
      device.animate([{ transform: `rotateY(${-dir * 90}deg) scale(.9)` }, { transform: 'rotateY(0deg) scale(1)' }], { duration: 420, easing: 'cubic-bezier(.2,.9,.3,1.25)' });
    };
  }
  function open(id, from, trigger) {
    ensure();
    if (isOpen) return switchTo(OS.findIndex((o) => o.id === id), 1);
    isOpen = true;
    opener = trigger || document.activeElement;
    document.getElementById('tbStop')?.click();
    document.documentElement.classList.add('osv-lock');
    root.classList.add('on');
    show(OS.findIndex((o) => o.id === id));
    layout();
    sfx.whoosh();
    // the 3D page is hidden behind the viewer: stop drawing it so slower school PCs stay smooth
    setTimeout(() => { if (isOpen) stage?.setPaused?.(true); }, reduceMotion ? 0 : 1000);
    const f = fitBox();
    if (!reduceMotion) {
      const r = from || { left: f.cx - 60, top: f.cy - 38, width: 120, height: 76 };
      const fs = Math.max(0.02, r.width / DW);
      fit.animate([
        { transform: T(r.left + r.width / 2, r.top + r.height / 2, fs, -360), filter: 'saturate(2.2)' },
        { transform: T(f.cx, f.cy, f.s * 1.05, 8), offset: 0.72, filter: 'saturate(1.2)' },
        { transform: T(f.cx, f.cy, f.s), filter: 'none' },
      ], { duration: 950, easing: 'cubic-bezier(.2,.8,.2,1)' });
      root._burst.animate([
        { transform: 'translate(-50%,-50%) scale(0)', opacity: 1 },
        { transform: 'translate(-50%,-50%) scale(1.15)', opacity: 0.95, offset: 0.55 },
        { transform: 'translate(-50%,-50%) scale(1)', opacity: 0.22 },
      ], { duration: 1150, easing: 'ease-out' });
      root.animate([{ backgroundColor: 'rgba(12,10,30,0)' }, { backgroundColor: 'rgba(12,10,30,.55)' }], { duration: 420 });
      tabs.forEach((t, k) => t.animate([{ transform: 'translateY(-90px) rotate(-12deg)', opacity: 0 }, { transform: 'none', opacity: 1 }],
        { duration: 520, delay: 420 + k * 90, easing: 'cubic-bezier(.2,.9,.3,1.4)', fill: 'backwards' }));
    }
    setTimeout(() => tabs[current]?.focus({ preventScroll: true }), 60);
  }
  function close() {
    if (!isOpen) return;
    isOpen = false;
    stage?.setPaused?.(false);
    sfx.whoosh();
    const done = () => {
      root.classList.remove('on');
      document.documentElement.classList.remove('osv-lock');
      opener?.focus?.({ preventScroll: true });
    };
    if (reduceMotion) return done();
    const f = fitBox();
    const to = stage?.osScreenRect?.(OS[current].id);
    const opts = { duration: 560, fill: 'forwards' };
    const anims = [
      fit.animate([
        { transform: T(f.cx, f.cy, f.s) },
        to ? { transform: T(to.left + to.width / 2, to.top + to.height / 2, Math.max(0.02, to.width / DW), 360) }
          : { transform: T(f.cx, f.cy, f.s * 0.15, 200), opacity: 0 },
      ], { ...opts, easing: 'cubic-bezier(.6,0,.75,.35)' }),
      root._burst.animate([{ opacity: 0.22, transform: 'translate(-50%,-50%) scale(1)' }, { opacity: 0, transform: 'translate(-50%,-50%) scale(0)' }], { ...opts, easing: 'ease-in' }),
      root.animate([{ backgroundColor: 'rgba(12,10,30,.55)' }, { backgroundColor: 'rgba(12,10,30,0)' }], opts),
    ];
    let finished = false;
    const finish = () => { if (finished) return; finished = true; done(); anims.forEach((a) => a.cancel()); };
    anims[0].onfinish = finish;
    setTimeout(finish, 900);
  }

  // ---------- triggers: a monitor button next to each system's name ----------
  OS.forEach((o) => {
    const h2 = document.querySelector(`#${o.id} .card h2`);
    if (!h2) return;
    const b = el('button', 'os-open', h2, { type: 'button', innerHTML: ICON.monitor });
    b.setAttribute('aria-label', `Show the ${o.name} interface`);
    b.addEventListener('click', () => open(o.id, stage?.osScreenRect?.(o.id) || b.getBoundingClientRect(), b));
    const chip = h2.querySelector('.chip');
    if (chip) {
      chip.classList.add('clickable');
      chip.addEventListener('click', () => open(o.id, stage?.osScreenRect?.(o.id) || chip.getBoundingClientRect(), b));
    }
  });

  return { open, close, get isOpen() { return isOpen; } };
}
