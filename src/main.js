import { createStage } from './scene.js';
import { initCrazy } from './crazy.js';

{
  // Many school PCs have Windows animations switched off, which browsers report as "reduce motion".
  // The site respects that, but the presenter can turn the animations back on with a switch in the bar
  // (remembered on that computer), or by opening the page with ?motion=on.
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = (k, v) => { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { /* private mode */ } return null; };
  const motionParam = new URLSearchParams(location.search).get('motion');
  if (motionParam === 'on' || motionParam === 'off') store('motion', motionParam === 'on' ? 'on' : null);
  const forceMotion = prefersReduce && store('motion') === 'on';
  const reduceMotion = prefersReduce && !forceMotion;
  document.documentElement.classList.add('js');
  document.documentElement.classList.toggle('motion-on', forceMotion);
  if (prefersReduce) {
    const btn = document.createElement('button');
    btn.className = 'btn icon-btn';
    btn.id = 'motionBtn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Animations');
    btn.setAttribute('aria-pressed', String(forceMotion));
    btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/><path class="mo-off" d="M3 3l18 18"/></svg>';
    btn.addEventListener('click', () => { store('motion', forceMotion ? null : 'on'); location.reload(); });
    document.getElementById('soundBtn')?.before(btn);
  }

  // Where the computer sits for each section: ax/ay = screen position (0–1), m* = phone values,
  // az/el = camera orbit, zoom = distance factor, screen = what the monitor shows, bg = page colour,
  // inside = the world inside the computer (the camera dives through the screen), crowd/lit = the other 99 PCs.
  const SCENES = {
    world:     { inside: 'globe', ax: 0.66, ay: 0.5, max: 0.5, may: 0.66, az: 0, el: 0, zoom: 0.72, mzoom: 0.95, bg: '#16123A' },
    top:       { ax: 0.77, ay: 0.54, max: 0.5, may: 0.8, az: -0.5, el: 0.12, zoom: 1.12, mzoom: 1.4, screen: 'hello', bg: '#FFE14D' },
    teardown:  { inside: 'teardown', ax: 0.5, ay: 0.52, max: 0.5, may: 0.5, az: 0.22, el: 0.08, zoom: 0.62, mzoom: 0.9, bg: '#9FF2C8' },
    challenge: { ax: 0.27, ay: 0.52, max: 0.5, may: 0.28, az: 0.42, el: 0.3, zoom: 1.2, mzoom: 1.3, screen: 'grid100', crowd: 1, bg: '#FF9ECF' },
    method:    { inside: 'funnel', ax: 0.72, ay: 0.5, max: 0.5, may: 0.28, az: -0.2, el: 0.28, zoom: 1.05, crowd: 1, bg: '#B7A3FF' },
    mint:      { inside: 'mint', ax: 0.27, ay: 0.5, max: 0.5, may: 0.28, az: 0.32, el: 0.1, zoom: 1.0, bg: '#FF8F8F' },
    zorin:     { inside: 'zorin', ax: 0.73, ay: 0.5, max: 0.5, may: 0.28, az: -0.32, el: 0.1, zoom: 1.0, bg: '#FFB07A' },
    endless:   { inside: 'endless', ax: 0.27, ay: 0.5, max: 0.5, may: 0.28, az: 0.32, el: 0.1, zoom: 1.0, bg: '#7CC8FF' },
    scores:    { inside: 'scores', ax: 0.83, ay: 0.5, max: 0.5, may: 0.28, az: -0.45, el: 0.22, zoom: 1.38, mzoom: 1.1, bg: '#C8EE5A' },
    energy:    { inside: 'energy', ax: 0.27, ay: 0.5, max: 0.5, may: 0.28, az: 0.45, el: 0.18, zoom: 1.05, bg: '#6EE2D0' },
    access:    { inside: 'access', ax: 0.74, ay: 0.5, max: 0.5, may: 0.28, az: -0.3, el: 0.12, zoom: 1.0, bg: '#FF9ECF' },
    pick:      { inside: 'pick', ax: 0.72, ay: 0.5, max: 0.5, may: 0.28, az: -0.15, el: 0.16, zoom: 1.0, bg: '#B7A3FF', confetti: true },
    install:   { inside: 'install', ax: 0.66, ay: 0.5, max: 0.5, may: 0.34, az: 0.1, el: 0.12, zoom: 0.95, mzoom: 1.22, bg: '#5CE1E6' },
    plan:      { ax: 0.27, ay: 0.5, max: 0.5, may: 0.28, az: 0.45, el: 0.3, zoom: 1.2, mzoom: 1.3, screen: 'usb', crowd: 1, lit: 1, bg: '#FFE14D' },
    bonus:     { inside: 'mainframe', ax: 0.27, ay: 0.52, max: 0.5, may: 0.28, az: 0.35, el: 0.16, zoom: 1.05, bg: '#A6C8FF' },
    end:       { ax: 0.72, ay: 0.52, max: 0.5, may: 0.28, az: -0.4, el: 0.22, zoom: 1.15, mzoom: 1.3, screen: 'smile', crowd: 1, lit: 1, bg: '#FFE14D', confetti: true },
  };

  const sections = [...document.querySelectorAll('[data-scene]')];
  const canvas = document.getElementById('stage');
  let stage = null;
  try {
    const probe = document.createElement('canvas');
    if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) throw new Error('no webgl');
    const nav = document.querySelector('.nav');
    stage = createStage(canvas, SCENES, sections, {
      reduceMotion,
      flash: document.getElementById('flash'),
      burst: document.getElementById('burst'),
      onBg: (hex) => {
        document.body.style.backgroundColor = hex;
        if (!nav) return;
        nav.style.backgroundColor = hex;
        // on the night sky of the opening world the bar's words turn white
        const n = parseInt(hex.slice(1), 16), lum = (0.2126 * (n >> 16) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255;
        nav.classList.toggle('on-dark', lum < 0.35);
      },
    });
    document.fonts?.ready.then(() => stage.redrawText());
  } catch (err) { console.error('stage failed', err?.stack || err);
    document.documentElement.classList.add('no-webgl');
  }
  initCrazy(stage, { reduceMotion });

  // the presentation starts after the opening world: the title pops and the stickers slap on when the hero first shows
  const hero = document.getElementById('top');
  if (hero && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      hero.classList.add('seen');
      stage?.replayStickers?.();
      io.disconnect();
    }, { threshold: 0.45 });
    io.observe(hero);
  } else hero?.classList.add('seen');

  // ---------- count-up on "100" ----------
  const countEl = document.querySelector('[data-count]');
  if (countEl && !reduceMotion) {
    const countObs = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      countObs.disconnect();
      const end = Number(countEl.dataset.count);
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / 1100);
        countEl.textContent = String(Math.round(end * (1 - (1 - p) ** 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.6 });
    countObs.observe(countEl);
  }

  // ---------- active link in the navigation ----------
  const navLinks = [...document.querySelectorAll('.links a')];
  const navObs = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (!en.isIntersecting) continue;
      const id = en.target.closest('[data-nav]')?.dataset.nav;
      navLinks.forEach((a) => a.toggleAttribute('aria-current', a.getAttribute('href') === '#' + id));
    }
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('[data-nav]').forEach((el) => navObs.observe(el));

  // ---------- interactive scorecard ----------
  const OS = [
    { key: 'mint', name: 'Linux Mint' },
    { key: 'zorin', name: 'Zorin OS Lite' },
    { key: 'endless', name: 'Endless OS' },
  ];
  const CRITERIA = [
    { id: 'easy', label: 'Easy to learn', s: [4, 4, 5] },
    { id: 'offline', label: 'Works offline', s: [2, 2, 5] },
    { id: 'energy', label: 'Low energy', s: [3, 5, 2] },
    { id: 'access', label: 'Accessibility', s: [4, 3, 4] },
    { id: 'future', label: 'Future updates', s: [5, 2, 4] },
  ];
  const PRESETS = {
    equal: [1, 1, 1, 1, 1],
    offline: [1, 3, 1, 1, 1],
    power: [1, 1, 3, 1, 1],
    long: [1, 1, 1, 1, 3],
  };
  const weights = [...PRESETS.equal];
  const table = document.getElementById('scoreTable');
  const squares = (n, key) => Array.from({ length: 5 }, (_, i) => `<i class="sq${i < n ? ' on' : ''}" data-os="${key}"></i>`).join('');
  table.innerHTML =
    `<div class="srow shead"><span>Criterion</span><span>How much it matters</span>${OS.map((o) => `<span class="h-${o.key}">${o.name}</span>`).join('')}</div>` +
    CRITERIA.map((c, r) => `<div class="srow">
      <span class="crit">${c.label}</span>
      <label class="weight"><span class="vh">How much ${c.label.toLowerCase()} matters</span>
        <input type="range" min="0" max="3" step="1" value="1" id="w-${c.id}" data-row="${r}">
        <output id="o-${c.id}">×1</output></label>
      ${c.s.map((v, i) => `<span class="cell" aria-label="${OS[i].name}: ${v} out of 5"><b class="mob">${OS[i].name}</b>${squares(v, OS[i].key)}</span>`).join('')}
    </div>`).join('') +
    `<div class="srow stot"><span class="crit">Total</span><span class="weight" id="maxNote"></span>${OS.map((o) => `<span class="cell tot" id="t-${o.key}"></span>`).join('')}</div>`;

  function renderTotals() {
    stage?.setScores(weights, CRITERIA.map((c) => c.s));
    const max = 5 * weights.reduce((a, b) => a + b, 0);
    const totals = OS.map((_, i) => CRITERIA.reduce((sum, c, r) => sum + c.s[i] * weights[r], 0));
    const best = Math.max(...totals);
    const leaders = totals.filter((v) => v === best).length;
    document.getElementById('maxNote').textContent = max ? `out of ${max}` : 'pick at least one';
    OS.forEach((o, i) => {
      const el = document.getElementById('t-' + o.key);
      const pct = max ? Math.round((totals[i] / max) * 100) : 0;
      const top = max && totals[i] === best;
      el.innerHTML = `<b class="mob">${o.name}</b><strong>${totals[i]}</strong><span class="meter"><i style="width:${pct}%"></i></span>${top ? `<em class="lead">${leaders > 1 ? 'Tied top' : 'Top score'}</em>` : ''}`;
    });
    CRITERIA.forEach((c, r) => {
      document.getElementById('w-' + c.id).value = String(weights[r]);
      document.getElementById('o-' + c.id).textContent = '×' + weights[r];
    });
  }
  table.addEventListener('input', (e) => {
    const r = e.target.dataset.row;
    if (r === undefined) return;
    weights[Number(r)] = Number(e.target.value);
    document.querySelectorAll('.presets button').forEach((b) => b.setAttribute('aria-pressed', 'false'));
    renderTotals();
  });
  document.querySelectorAll('.presets button').forEach((btn) => {
    btn.addEventListener('click', () => {
      PRESETS[btn.dataset.preset].forEach((w, i) => { weights[i] = w; });
      document.querySelectorAll('.presets button').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      renderTotals();
    });
  });
  renderTotals();

  // ---------- autoplay tour ----------
  const stops = [...document.querySelectorAll('[data-stop]')];
  const bar = document.getElementById('tourbar');
  const tbStep = document.getElementById('tbStep');
  const tbName = document.getElementById('tbName');
  const tbFill = document.getElementById('tbFill');
  const tbPause = document.getElementById('tbPause');
  const navH = () => document.querySelector('.nav').offsetHeight;
  const tour = { on: false, paused: false, i: 0, left: 0, raf: 0, scrolling: false };
  const DWELL = 6500;

  const html = document.documentElement;
  // offsetTop, not the on-screen box: the sections skew like jelly while the page moves, which would shift the box
  const stopTop = (el) => { let y = 0; for (let n = el; n; n = n.offsetParent) y += n.offsetTop; return Math.round(y - navH()); };
  let tweens = 0;
  function scrollToEl(el, done, keepGoing = () => tour.on) { scrollToY(stopTop(el), done, keepGoing); }
  function scrollToY(to, done, keepGoing = () => tour.on) {
    if (reduceMotion) { html.style.scrollBehavior = 'auto'; window.scrollTo(0, to); html.style.scrollBehavior = ''; done(); return; }
    const from = window.scrollY, dist = to - from, t0 = performance.now();
    const dur = Math.min(1600, 600 + Math.abs(dist) * 0.5);
    tweens++;
    tour.scrolling = true;
    html.style.scrollBehavior = 'auto';
    const end = () => { if (--tweens === 0) { tour.scrolling = false; html.style.scrollBehavior = ''; } };
    const step = (now) => {
      if (!keepGoing()) { end(); return; }
      const p = Math.min(1, (now - t0) / dur);
      const e = p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2;
      window.scrollTo(0, from + dist * e);
      if (p < 1) requestAnimationFrame(step);
      else { end(); done(); }
    };
    requestAnimationFrame(step);
  }

  function go(i) {
    if (!tour.on) return;
    if (i >= stops.length) { stopTour(); return; }
    tour.i = i;
    tbStep.textContent = `${i + 1} / ${stops.length}`;
    tbName.textContent = stops[i].dataset.stop;
    tbFill.style.width = '0%';
    scrollToEl(stops[i], () => {
      const extra = reduceMotion ? 0 : Math.max(0, stops[i].offsetHeight - window.innerHeight * 1.2);
      const dwell = DWELL + (extra / window.innerHeight) * 3200, y0 = window.scrollY;
      tour.left = dwell;
      let last = performance.now();
      const tick = (now) => {
        if (!tour.on) return;
        if (!tour.paused) tour.left -= now - last;
        last = now;
        const prog = Math.min(1, 1 - tour.left / dwell);
        if (extra > 0) { html.style.scrollBehavior = 'auto'; window.scrollTo(0, y0 + extra * (prog < 0.5 ? 2 * prog * prog : 1 - (-2 * prog + 2) ** 2 / 2)); }
        tbFill.style.width = `${prog * 100}%`;
        if (tour.left <= 0) { if (extra > 0) html.style.scrollBehavior = ''; go(i + 1); }
        else tour.raf = requestAnimationFrame(tick);
      };
      tour.raf = requestAnimationFrame(tick);
    });
  }

  const tourButtons = [...document.querySelectorAll('[data-tour-start]')];
  const navTour = document.getElementById('tourBtn');
  function startTour() {
    tour.on = true;
    tour.paused = false;
    bar.hidden = false;
    tbPause.textContent = 'Pause';
    navTour.textContent = 'Stop the tour';
    navTour.setAttribute('aria-pressed', 'true');
    go(0);
  }
  function stopTour() {
    tour.on = false;
    cancelAnimationFrame(tour.raf);
    bar.hidden = true;
    navTour.textContent = 'Play the tour';
    navTour.setAttribute('aria-pressed', 'false');
  }
  tourButtons.forEach((b) => b.addEventListener('click', startTour));
  navTour.addEventListener('click', () => (tour.on ? stopTour() : startTour()));
  tbPause.addEventListener('click', () => {
    tour.paused = !tour.paused;
    tbPause.textContent = tour.paused ? 'Resume' : 'Pause';
  });
  document.getElementById('tbStop').addEventListener('click', stopTour);
  const userTakesOver = (e) => {
    if (!tour.on) return;
    if (e.target.closest && e.target.closest('.tourbar, .nav')) return;
    stopTour();
  };
  window.addEventListener('wheel', userTakesOver, { passive: true });
  window.addEventListener('touchstart', userTakesOver, { passive: true });
  // During the tour a presentation clicker (or the arrow keys) moves between stops.
  window.addEventListener('keydown', (e) => {
    if (!tour.on) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      e.preventDefault();
      cancelAnimationFrame(tour.raf);
      if (!tour.scrolling) go(tour.i + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      cancelAnimationFrame(tour.raf);
      if (!tour.scrolling) go(Math.max(0, tour.i - 1));
    } else if (e.key === 'Escape' || ['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) {
      stopTour();
    }
  });

  // ---------- presenting: a clicker or the arrow keys step through the same stops, F for full screen ----------
  let jump = 0, jumpTo = -1; // jump counts presses, so a newer press takes over; jumpTo is where the current one is heading
  window.addEventListener('wheel', () => { jump++; jumpTo = -1; }, { passive: true });
  window.addEventListener('keydown', (e) => {
    if (tour.on || e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target.closest?.('input,textarea,select,[contenteditable]') || html.classList.contains('osv-lock')) return;
    if (e.key === 'f' || e.key === 'F') {
      if (document.fullscreenElement) document.exitFullscreen?.();
      else html.requestFullscreen?.().catch(() => {});
      return;
    }
    const next = e.key === 'PageDown' || e.key === 'ArrowRight';
    const prev = e.key === 'PageUp' || e.key === 'ArrowLeft';
    if (!next && !prev) return;
    e.preventDefault();
    const y = window.scrollY, H = window.innerHeight, tops = [];
    // tall sections (the opening world, the opened computer) get a stop every 0.6 screens, so the clicker plays them
    stops.forEach((el) => {
      const t0 = stopTop(el);
      tops.push(t0);
      if (el.offsetHeight > H * 1.6) for (let t = t0 + H * 0.6; t < t0 + el.offsetHeight - H * 0.9; t += H * 0.6) tops.push(Math.round(t));
    });
    let target;
    if (jumpTo >= 0) target = Math.max(0, Math.min(tops.length - 1, jumpTo + (next ? 1 : -1)));
    else {
      let i = -1;
      tops.forEach((t, k) => { if (t <= y + 4) i = k; });
      target = next ? Math.min(tops.length - 1, i + 1) : (i >= 0 && y > tops[i] + 4 ? i : Math.max(0, i - 1));
    }
    const id = ++jump;
    jumpTo = target;
    scrollToY(tops[target], () => { if (id === jump) jumpTo = -1; }, () => id === jump);
  });
}
