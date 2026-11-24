// The phone page: a phone that scanned the QR code becomes one of the 100 PCs and follows the presentation.
import { createBus, randomId } from './mq.js';
import { STOPS, okCode, topics, readMsg, seq, brokers, installProgress } from './room.js';

const $ = (s) => document.querySelector(s);
// which picture each tour stop puts on the phone's screen
const SCREEN = { world: 'globe', top: 'boot', teardown: 'bits', challenge: 'boot', method: 'filter', mint: 'mint', zorin: 'zorin', endless: 'endless', scores: 'scores', energy: 'scores', access: 'scores', pick: 'pick', install: 'install', plan: 'endless', end: 'end', bonus: 'heavy' };
const store = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { /* private mode */ } return null; };
const buzz = (p) => { try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) { /* not allowed */ } };

let lock = null;
async function keepAwake() {
  try { if (!lock && 'wakeLock' in navigator && document.visibilityState === 'visible') { lock = await navigator.wakeLock.request('screen'); lock.addEventListener('release', () => { lock = null; }); } } catch (e) { lock = null; }
}

// about 100 in, 3 out: a hundred little systems, three survive
function drawFilter() {
  let r = '';
  for (let i = 0; i < 100; i++) {
    const k = [23, 56, 88].indexOf(i) + 1;
    r += `<rect x="${31.5 + (i % 10) * 10}" y="${4.6 + Math.floor(i / 10) * 9.3}" width="7" height="7" rx="1.2"${k ? ` class="k k${k}"` : ''}/>`;
  }
  $('.s-filter').innerHTML = `<svg viewBox="0 0 160 100">${r}</svg>`;
}

function start(code, params) {
  drawFilter();
  document.body.dataset.view = 'pc';
  const t = topics(code);
  let id = store('wrg-id-' + code);
  if (!id || !/^[a-z0-9]{6,16}$/.test(id)) { id = randomId(10); store('wrg-id-' + code, id); }
  const scr = $('#scr'), num = $('#num'), cap = $('#cap'), dot = $('#dot'), bar = $('#bar'), pct = $('#pct'), pc = $('#pc'), note = $('#note');
  let host = null, lastQ = 0, offset = 0, shown = '', loop = 0, doneFor = 0, lastTap = 0, wasUp = false, noteT = 0;

  const hello = () => bus.publish(t.phones, { v: 1, k: 'p', id, q: seq(), e: 'hi' });
  const bus = createBus({
    brokers: brokers(params),
    onMessage(topic, bytes) {
      if (topic !== t.host) return;
      const m = readMsg(bytes);
      if (!m || m.k !== 'h' || m.q <= lastQ) return; // copies from the other brokers, or old news
      lastQ = m.q;
      if (Number.isFinite(m.t)) offset = m.t - Date.now(); // the presenter's clock, for the install rounds
      host = { st: typeof m.st === 'string' ? m.st : 'top', ro: Array.isArray(m.ro) ? m.ro : [], ins: m.ins && Number.isFinite(m.ins.t0) && m.ins.per > 0 && m.ins.dur > 0 ? m.ins : null, end: m.end === true };
      render();
    },
    onStatus(up) {
      dot.classList.toggle('up', up > 0);
      if (up > 0 && !wasUp) hello();
      wasUp = up > 0;
      clearTimeout(noteT);
      if (up > 0) note.hidden = true;
      else noteT = setTimeout(() => { note.hidden = false; }, 10000);
    },
  });
  bus.subscribe(t.host);
  setInterval(() => { if (document.visibilityState === 'visible' && bus.up()) hello(); }, 25000);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') { keepAwake(); if (bus.up()) hello(); } });
  noteT = setTimeout(() => { if (!bus.up()) note.hidden = false; }, 10000);

  function render() {
    if (!host) return;
    const idx = host.ro.indexOf(id);
    num.textContent = idx >= 0 ? String(idx + 1) : '…';
    const stop = host.end ? 'end' : (Object.hasOwn(STOPS, host.st) ? host.st : 'top');
    const s = SCREEN[stop] || 'boot';
    cap.textContent = STOPS[stop];
    if (s !== shown) {
      if (shown) buzz(25);
      shown = s;
      scr.dataset.s = s;
      scr.classList.remove('in');
      void scr.offsetWidth;
      scr.classList.add('in');
    }
    cancelAnimationFrame(loop);
    if (s === 'install') installing(idx);
  }
  function installing(idx) {
    const p = installProgress(host.ins, idx, id, Date.now() + offset);
    const phase = p == null ? 'wait' : p <= 0 ? 'wait' : p < 1 ? 'run' : 'done';
    scr.dataset.i = phase;
    bar.style.transform = `scaleX(${p || 0})`;
    pct.textContent = Math.floor((p || 0) * 100) + '%';
    if (phase === 'done' && host.ins && doneFor !== host.ins.t0) { doneFor = host.ins.t0; buzz([40, 50, 90]); }
    if (phase !== 'done' && host.ins) loop = requestAnimationFrame(() => installing(idx));
  }

  pc.addEventListener('pointerdown', () => {
    keepAwake();
    pc.classList.remove('boop');
    void pc.offsetWidth;
    pc.classList.add('boop');
    if (Date.now() - lastTap > 1000 && bus.up()) { lastTap = Date.now(); bus.publish(t.phones, { v: 1, k: 'p', id, q: seq(), e: 'tap' }); }
  });
  keepAwake();
}

// the code comes in the address (#K7M2QX), or is typed in
function codeFromHash() {
  const h = new URLSearchParams(location.hash.slice(1).replace(/^([A-Z0-9]{6})(?=&|$)/i, 'c=$1'));
  const c = (h.get('c') || '').toUpperCase();
  return { code: okCode(c) ? c : '', params: h };
}
const first = codeFromHash();
if (first.code) start(first.code, first.params);
else {
  document.body.dataset.view = 'code';
  const form = $('#codeForm'), input = $('#code');
  input.addEventListener('input', () => { input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6); });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const c = input.value.toUpperCase();
    if (!okCode(c)) { input.setAttribute('aria-invalid', 'true'); input.focus(); return; }
    history.replaceState(null, '', '#' + c);
    start(c, new URLSearchParams());
  });
}
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register('../sw.js', { scope: '../' }).catch(() => {});
