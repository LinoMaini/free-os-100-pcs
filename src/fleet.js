// The audience's phones become the 100 PCs. The presenter opens a room with the phone button (or J); the class
// scans the QR code; every phone gets a PC number and follows the tour on its own screen. At "How to install it"
// the phones install Endless OS ten at a time, like the ten USB sticks, and this grid fills up live.
import { encode } from 'uqr';
import { createBus, randomId } from './mq.js';
import { MAX_PCS, newCode, okCode, okId, topics, readMsg, seq, brokers, installPlan, installProgress } from './room.js';

const KEY = 'wrg-room';

function qrSvg(text) {
  const { data, size } = encode(text, { ecc: 'M', border: 2 });
  let d = '';
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (data[y][x]) d += `M${x} ${y}h1v1h-1z`;
  return `<svg viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges" aria-hidden="true"><rect width="${size}" height="${size}" fill="#fff"/><path d="${d}"/></svg>`;
}

export function initFleet({ reduceMotion = false } = {}) {
  const btn = document.getElementById('joinBtn');
  if (!btn) return;
  const params = new URLSearchParams(location.search);
  const brokerList = brokers(params);
  const custom = params.get('mq');
  const base = /^https?:$/.test(location.protocol) ? location.origin + location.pathname.replace(/[^/]*$/, '') : 'https://wedarealgoat.dev/';
  const html = document.documentElement;
  const tourbar = document.getElementById('tourbar');

  const el = document.createElement('aside');
  el.className = 'fleet';
  el.hidden = true;
  el.setAttribute('aria-label', 'Phones in the room');
  el.innerHTML = `
    <div class="rm-qr"></div>
    <div class="rm-side">
      <p class="rm-title"><span class="rm-dot"></span>Scan to join</p>
      <p class="rm-url"><span class="rm-host"></span><b class="rm-code"></b></p>
      <p class="rm-warn" hidden>No connection</p>
      <div class="rm-grid" aria-hidden="true"></div>
      <p class="rm-count"><b class="rm-n">0</b><span class="rm-of">/100</span></p>
      <div class="rm-actions"><button class="btn small rm-end" type="button">End</button></div>
    </div>
    <button class="rm-x" type="button" aria-label="Hide">×</button>`;
  document.body.append(el);
  const $ = (s) => el.querySelector(s);
  const grid = $('.rm-grid'), nEl = $('.rm-n'), ofEl = $('.rm-of'), dot = $('.rm-dot'), warn = $('.rm-warn');
  const cells = Array.from({ length: MAX_PCS }, () => document.createElement('i'));
  grid.append(...cells);
  const badge = document.createElement('span');
  badge.className = 'badge';
  badge.hidden = true;
  btn.append(badge);

  let room = null, mode = 'off', scene = 'world', pubT = 0, beat = 0, tick = 0, warnT = 0;
  const touring = () => tourbar && !tourbar.hidden;

  function save() {
    if (!room) return;
    try { sessionStorage.setItem(KEY, JSON.stringify({ code: room.code, hostId: room.hostId, roster: room.roster })); } catch (e) { /* private mode */ }
  }
  function status(up, total) {
    dot.classList.toggle('up', up > 0);
    dot.title = `${up}/${total}`;
    if (up > 0) { clearTimeout(warnT); warn.hidden = true; }
    else if (room && warn.hidden) { clearTimeout(warnT); warnT = setTimeout(() => { if (room && !room.bus.up()) warn.hidden = false; }, 9000); }
  }
  function publishNow() {
    clearTimeout(pubT);
    if (!room) return;
    const msg = { v: 1, k: 'h', id: room.hostId, q: seq(), t: Date.now(), st: scene, ro: room.roster, ins: room.ins, end: room.ended };
    room.bus.publish(topics(room.code).host, msg, true);
  }
  const publish = () => { clearTimeout(pubT); pubT = setTimeout(publishNow, 200); };

  function onPhone(m) {
    if (!room || !m || m.k !== 'p') return;
    const known = room.lastQ.has(m.id);
    if (!known && room.lastQ.size > 400) return; // someone flooding made-up phones
    if (m.q <= (room.lastQ.get(m.id) || 0)) return; // a copy from another broker, or old
    room.lastQ.set(m.id, m.q);
    room.seen.set(m.id, Date.now());
    let i = room.roster.indexOf(m.id);
    if (m.e === 'hi' && i < 0 && room.roster.length < MAX_PCS) {
      room.roster.push(m.id);
      i = room.roster.length - 1;
      save();
      publishNow(); // the phone is waiting for its number
      pop(i, 'new');
    } else if (m.e === 'tap' && i >= 0) {
      const t = room.taps.get(m.id) || 0;
      if (Date.now() - t > 900) { room.taps.set(m.id, Date.now()); pop(i, 'tap'); }
    }
    render();
  }
  function pop(i, cls) {
    if (reduceMotion || mode === 'off') return;
    const c = cells[i];
    c.classList.remove('tap', 'new');
    void c.offsetWidth;
    c.classList.add(cls);
  }

  function render() {
    const n = room ? room.roster.length : 0;
    const now = Date.now();
    for (let i = 0; i < MAX_PCS; i++) {
      const c = cells[i];
      const id = room && room.roster[i];
      c.classList.toggle('on', !!id);
      c.classList.toggle('idle', !!id && now - (room.seen.get(id) || 0) > 75000);
      if (!id) { c.classList.remove('done', 'ins'); c.style.removeProperty('--p'); }
    }
    badge.hidden = !room;
    badge.textContent = String(n);
    if (el.dataset.mode !== 'install') { nEl.textContent = String(n); ofEl.textContent = '/' + MAX_PCS; }
  }
  // install progress on the grid, from the same plan the phones use
  function renderInstall() {
    if (!room || !room.ins) return;
    const now = Date.now();
    let done = 0;
    room.roster.forEach((id, i) => {
      const p = installProgress(room.ins, i, id, now) ?? 0;
      const c = cells[i];
      c.style.setProperty('--p', p.toFixed(3));
      c.classList.toggle('ins', p > 0 && p < 1);
      c.classList.toggle('done', p >= 1);
      if (p >= 1) done++;
    });
    nEl.textContent = String(done);
    ofEl.textContent = '/' + room.roster.length;
    if (done >= room.roster.length) { clearInterval(tick); tick = 0; }
  }

  function setMode(m) {
    mode = m;
    el.hidden = m === 'off';
    const inst = m === 'mini' && scene === 'install' && room && room.roster.length > 0;
    el.dataset.mode = inst ? 'install' : m;
    btn.setAttribute('aria-pressed', String(m !== 'off'));
    if (inst) { renderInstall(); if (!tick) tick = setInterval(renderInstall, 120); } else { clearInterval(tick); tick = 0; render(); }
  }

  function openRoom(saved) {
    const code = saved && okCode(saved.code) ? saved.code : newCode();
    room = {
      code,
      hostId: saved && okId(saved.hostId) ? saved.hostId : randomId(10),
      roster: (saved && Array.isArray(saved.roster) ? saved.roster.filter(okId) : []).slice(0, MAX_PCS),
      seen: new Map(), lastQ: new Map(), taps: new Map(), ins: null, insLeft: 0, ended: false, bus: null,
    };
    const t = topics(code);
    const url = `${base}join/#${code}${custom ? '&mq=' + encodeURIComponent(custom) : ''}`;
    $('.rm-qr').innerHTML = qrSvg(url);
    $('.rm-host').textContent = new URL(base).host + '/join';
    $('.rm-code').textContent = code;
    room.bus = createBus({
      brokers: brokerList,
      onMessage: (topic, bytes) => { if (topic === t.phones) onPhone(readMsg(bytes)); },
      onStatus: (up, total) => { status(up, total); if (up) publishNow(); },
    });
    room.bus.subscribe(t.phones);
    status(0, room.bus.total());
    save();
    clearInterval(beat);
    beat = setInterval(() => { publishNow(); render(); }, 15000);
    render();
  }
  function endRoom() {
    if (!room) return;
    room.ended = true;
    publishNow();
    const bus = room.bus;
    setTimeout(() => bus.close(), 1500);
    clearInterval(beat);
    room = null;
    try { sessionStorage.removeItem(KEY); } catch (e) { /* private mode */ }
    warn.hidden = true;
    setMode('off');
    render();
  }

  function toggle() {
    if (!room) { openRoom(); setMode(touring() ? 'mini' : 'big'); return; }
    setMode(mode === 'big' ? 'mini' : 'big');
  }
  btn.addEventListener('click', toggle);
  $('.rm-x').addEventListener('click', () => setMode('off'));
  $('.rm-end').addEventListener('click', endRoom);
  el.addEventListener('click', (e) => { if (el.dataset.mode !== 'big' && !e.target.closest('button')) setMode('big'); });
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'j' && e.key !== 'J') return;
    if (e.metaKey || e.ctrlKey || e.altKey || html.classList.contains('osv-lock')) return;
    if (e.target.closest && e.target.closest('input, textarea, select, [contenteditable]')) return;
    toggle();
  });
  // the tour starting shrinks the big panel out of the way
  if (tourbar) new MutationObserver(() => { if (touring() && mode === 'big') setMode('mini'); }).observe(tourbar, { attributes: true, attributeFilter: ['hidden'] });

  // which scene is in the middle of the screen; the phones follow it, with or without the tour
  const scenes = [...document.querySelectorAll('[data-scene]')];
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        const s = en.target.dataset.scene;
        if (s === scene) continue;
        if (scene === 'install' && room) room.insLeft = Date.now();
        scene = s;
        if (room && s === 'install' && (!room.ins || Date.now() - room.insLeft > 15000)) room.ins = installPlan(room.roster.length);
        if (room) publish();
        if (mode !== 'off') setMode(mode);
      }
    }, { rootMargin: '-50% 0px -50% 0px' });
    scenes.forEach((s) => io.observe(s));
  }

  // a reload in the middle of the presentation keeps the same room, numbers and phones
  let saved = null;
  try { saved = JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (e) { saved = null; }
  if (saved) { openRoom(saved); setMode('mini'); }
}
