// Click a desktop (the 3D screen, or the monitor button next to a system's name) to open it full screen.
// It corkscrews out of the scene; inside, the menu, windows and apps respond to clicks.
// Tabs, the arrow buttons or ← → switch systems with a 3D flip; Esc, × or the backdrop close it.
import { drawMint, drawZorin, drawEndless } from './osui.js';
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
  const place = (n, x, y, w, h) => {
    n.style.left = `${x}px`;
    n.style.top = `${y}px`;
    if (w !== undefined) n.style.width = `${w}px`;
    if (h !== undefined) n.style.height = `${h}px`;
    return n;
  };
  const hot = (parent, x, y, w, h, label, cls = '') => {
    const b = el('button', `osv-hs ${cls}`, parent, { type: 'button' });
    b.setAttribute('aria-label', label);
    return place(b, x, y, w, h);
  };
  const layer = (parent, canvas, x, y) => {
    canvas.classList.add('osv-layer');
    parent.appendChild(place(canvas, x, y));
    return canvas;
  };
  const pop = (f) => sfx.pop(f);
  let scale = 1; // screen px → viewport px, for dragging

  // ---------- one desktop, built on first use ----------
  function makeWindow(scr, canvas, x, y, w, h, closeAt, task, open0) {
    const win = el('div', 'osv-win', scr);
    place(win, x, y, w, h);
    win.appendChild(canvas);
    const state = { open: false, x, y, task };
    const show = (fromX, fromY) => {
      if (state.open) return;
      state.open = true;
      win.classList.add('open');
      task?.classList.add('on');
      pop(560);
      if (!reduceMotion) {
        const dx = fromX - (state.x + w / 2), dy = fromY - (state.y + h / 2);
        win.animate([{ transform: `translate(${dx}px,${dy}px) scale(.06)`, opacity: 0 }, { transform: 'none', opacity: 1 }],
          { duration: 460, easing: 'cubic-bezier(.2,.9,.3,1.18)' });
      }
    };
    const hide = (toX, toY) => {
      if (!state.open) return;
      state.open = false;
      pop(380);
      const done = () => { win.classList.remove('open'); if (toX === undefined) task?.classList.remove('on'); };
      if (reduceMotion) return done();
      const dx = (toX ?? state.x + w / 2) - (state.x + w / 2), dy = (toY ?? state.y + h / 2) - (state.y + h / 2);
      win.animate([{ transform: 'none', opacity: 1 }, { transform: `translate(${dx}px,${dy}px) scale(${toX === undefined ? 0.7 : 0.05})`, opacity: 0 }],
        { duration: 300, easing: 'cubic-bezier(.6,0,.8,.4)' }).onfinish = done;
    };
    const [cx, cy, minX] = closeAt;
    hot(win, cx - 14, cy - 14, 28, 28, 'Close window').addEventListener('click', () => hide());
    if (minX !== undefined) hot(win, minX - 12, cy - 12, 24, 24, 'Minimise window').addEventListener('click', () => hide(task ? parseFloat(task.style.left) + 85 : x, task ? parseFloat(task.style.top) + 18 : 790));
    // drag by the title bar
    const bar = hot(win, 0, 0, w - 110, 44, 'Move window', 'osv-drag');
    bar.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      bar.setPointerCapture(e.pointerId);
      const sx = e.clientX, sy = e.clientY, ox = state.x, oy = state.y;
      const move = (ev) => {
        state.x = Math.max(-w + 120, Math.min(1280 - 120, ox + (ev.clientX - sx) / scale));
        state.y = Math.max(0, Math.min(700, oy + (ev.clientY - sy) / scale));
        place(win, state.x, state.y);
      };
      const up = () => { bar.removeEventListener('pointermove', move); bar.removeEventListener('pointerup', up); };
      bar.addEventListener('pointermove', move);
      bar.addEventListener('pointerup', up);
    });
    const reset = () => { state.open = false; state.x = x; state.y = y; place(win, x, y); win.classList.remove('open'); task?.classList.remove('on'); if (open0) setTimeout(() => show(open0[0], open0[1]), 650); };
    return { win, state, show, hide, reset };
  }

  function makeMenu(scr, canvas, x, y, w, h) {
    const menu = el('div', 'osv-menu', scr);
    place(menu, x, y, w, h);
    menu.appendChild(canvas);
    let open = false;
    const set = (v) => {
      if (v === open) return;
      open = v;
      pop(v ? 700 : 420);
      if (v) {
        menu.classList.add('open');
        if (!reduceMotion) menu.animate([{ transform: 'translateY(40px) scaleY(.2)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 320, easing: 'cubic-bezier(.2,.9,.3,1.25)' });
      } else if (reduceMotion) menu.classList.remove('open');
      else menu.animate([{ transform: 'none', opacity: 1 }, { transform: 'translateY(30px) scaleY(.3)', opacity: 0 }], { duration: 200, easing: 'ease-in' }).onfinish = () => { if (!open) menu.classList.remove('open'); };
    };
    return { menu, set, toggle: () => set(!open), get open() { return open; } };
  }

  function buildDesk(os, D, cfg) {
    const scr = el('div', 'osv-screen');
    scr.style.setProperty('--hi', os.hi);
    layer(scr, D.wall, 0, 0);
    const task = layer(scr, D.taskBtn, cfg.task[0], cfg.task[1]);
    task.classList.add('osv-task');
    const win = makeWindow(scr, D.win, ...cfg.win, cfg.close, task, cfg.autoOpen);
    cfg.desktop?.forEach(([x, y, label, act, opens]) => hot(scr, x, y, 84, 96, label, 'osv-icon').addEventListener('click', () => (opens ? win.show(x + 42, y + 48) : pop(500))));
    layer(scr, D.panel, 0, cfg.panelY).classList.add('osv-panel');
    scr.appendChild(task);
    const menu = makeMenu(scr, D.menu, ...cfg.menu);
    const files = hot(menu.menu, ...cfg.filesRow, 'Files', 'osv-row');
    files.addEventListener('click', () => { menu.set(false); win.show(cfg.filesFrom[0], cfg.filesFrom[1]); });
    cfg.extraRows?.forEach((r) => hot(menu.menu, ...r, 'Open', 'osv-row').addEventListener('click', () => { menu.set(false); win.show(cfg.filesFrom[0], cfg.filesFrom[1]); }));
    const menuBtn = hot(scr, ...cfg.menuBtn, 'Menu', 'osv-top osv-menubtn osv-pulse');
    menuBtn.addEventListener('click', (e) => { e.stopPropagation(); menuBtn.classList.remove('osv-pulse'); menu.toggle(); });
    hot(scr, ...cfg.launcher, 'Files', 'osv-top').addEventListener('click', () => (win.state.open ? win.hide() : win.show(cfg.launcher[0] + 16, cfg.launcher[1] + 18)));
    const taskHot = hot(scr, cfg.task[0], cfg.task[1], 170, 36, 'Files window', 'osv-top');
    taskHot.addEventListener('click', () => (win.state.open ? win.hide(cfg.task[0] + 85, cfg.task[1] + 18) : win.show(cfg.task[0] + 85, cfg.task[1] + 18)));
    scr.addEventListener('pointerdown', (e) => { if (menu.open && !e.target.closest('.osv-menu') && !e.target.closest('.osv-menubtn')) menu.set(false); });
    const desk = { scr, intro() { menu.set(false); menuBtn.classList.add('osv-pulse'); win.reset(); } };
    return desk;
  }

  function buildEndless(os, D) {
    const scr = el('div', 'osv-screen');
    scr.style.setProperty('--hi', os.hi);
    layer(scr, D.wall, 0, 0);
    const search = el('button', 'osv-search', scr, { type: 'button' });
    search.setAttribute('aria-label', 'Search');
    place(search, 340, 50, 600, 56).appendChild(D.search);
    el('span', 'osv-caret', search);
    search.addEventListener('click', () => { search.classList.toggle('typing'); pop(620); });
    const apps = D.icons.map((cv, i) => {
      const b = el('button', 'osv-app', scr, { type: 'button' });
      b.setAttribute('aria-label', ['Encyclopedia', 'Browser', 'Files', 'Writer', 'Photos', 'Videos', 'Typing', 'Maps', 'Weather', 'Games', 'Learn', 'App Center'][i]);
      place(b, 140 + (i % 6) * 170, 200 + Math.floor(i / 6) * 200).appendChild(cv);
      return b;
    });
    layer(scr, D.panel, 0, 752);
    const win = makeWindow(scr, D.win, 100, 64, 1080, 640, [1054, 27], null, null);
    hot(win.win, 12, 9, 38, 38, 'Back').addEventListener('click', () => win.hide(215, 280));
    apps.forEach((b, i) => b.addEventListener('click', () => {
      if (i === 0) return win.show(215, 280);
      pop(480 + i * 30);
      if (!reduceMotion) b.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.25,.8)' }, { transform: 'scale(.9,1.15)' }, { transform: 'scale(1)' }], { duration: 420, easing: 'ease-out' });
    }));
    apps[0].classList.add('osv-pulse-app');
    return {
      scr,
      intro() {
        win.reset();
        search.classList.remove('typing');
        if (reduceMotion) return;
        apps.forEach((b, i) => b.animate([{ transform: 'translateY(40px) scale(0)', opacity: 0 }, { transform: 'none', opacity: 1 }],
          { duration: 480, delay: 250 + i * 45, easing: 'cubic-bezier(.2,.9,.3,1.35)', fill: 'backwards' }));
        search.animate([{ transform: 'translateY(-60px)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 450, delay: 150, easing: 'cubic-bezier(.2,.9,.3,1.25)', fill: 'backwards' });
      },
    };
  }

  const builders = {
    mint: () => buildDesk(OS[0], drawMint(), {
      panelY: 756, task: [172, 760], win: [330, 110, 780, 480], close: [756, 22, 706], autoOpen: [66, 778],
      menu: [0, 276, 560, 480], filesRow: [276, 106, 272, 32], filesFrom: [400, 398],
      extraRows: [[276, 68, 272, 32], [276, 144, 272, 32], [276, 182, 272, 32]],
      menuBtn: [6, 760, 36, 36], launcher: [50, 758, 32, 40],
      desktop: [[28, 22, 'Computer', null, false], [28, 140, 'Home', null, true], [28, 258, 'Trash', null, false]],
    }),
    zorin: () => buildDesk(OS[1], drawZorin(), {
      panelY: 754, task: [176, 759], win: [440, 96, 760, 470], close: [736, 22, 680], autoOpen: [70, 777],
      menu: [8, 222, 620, 520], filesRow: [18, 122, 340, 40], filesFrom: [200, 364],
      extraRows: [[380, 80, 222, 40], [380, 124, 222, 40]],
      menuBtn: [8, 759, 36, 36], launcher: [54, 756, 32, 42],
      desktop: [[28, 22, 'Home', null, true], [28, 140, 'Trash', null, false]],
    }),
    endless: () => buildEndless(OS[2], drawEndless()),
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
      if (e.key === 'Escape') { e.stopImmediatePropagation(); close(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); switchTo((current + 1) % 3, 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); switchTo((current + 2) % 3, -1); }
      else if (e.key === 'Tab') {
        const f = [...root.querySelectorAll('button')].filter((b) => b.offsetParent !== null);
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
