// Graphics quality for the 3D stage, so the site stays smooth on school PCs.
// 0 full · 1 fewer pixels (phones start here) · 2 pixel ratio 1, no extra samples · 3 lightest (software or very slow graphics).
// It starts from what the graphics chip is, then steps down while the frame rate stays low.
// ?q=0…3 in the address fixes the level by hand.
export const perf = {
  level: 0,
  forced: false,
  gpu: '',
  subs: new Set(),
  set(l) {
    l = Math.max(0, Math.min(3, l | 0));
    if (l === this.level) return;
    this.level = l;
    document.documentElement.classList.toggle('q-low', l >= 3);
    document.documentElement.dataset.q = String(l);
    for (const f of this.subs) f(l);
  },
  on(f) { this.subs.add(f); },
};
document.documentElement.dataset.q = '0';

export function detectGpu(gl) {
  let name = '';
  try {
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    name = String(gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER) || '');
  } catch (e) { /* some browsers hide it */ }
  perf.gpu = name;
  const q = new URLSearchParams(location.search).get('q');
  if (q !== null && /^[0-3]$/.test(q)) { perf.forced = true; perf.set(Number(q)); return; }
  if (/swiftshader|llvmpipe|softpipe|basic render|software/i.test(name)) perf.set(3);
  // older Intel graphics on Windows (most school desktops): start without the extra pixels
  else if (/intel/i.test(name) && /direct3d|d3d/i.test(name) && !/iris\(r\) xe|iris xe|\barc\b/i.test(name)) perf.set(1);
  else if ((navigator.hardwareConcurrency || 8) <= 2) perf.set(2);
  // phones and tablets: many pixels for a small chip, so they start one step lighter
  else if (window.matchMedia?.('(pointer: coarse)').matches && Math.min(screen.width, screen.height) < 900) perf.set(1);
}

// Called once per frame with the real frame time. Every 2 s it checks the average:
// too slow → one level down; if a step down did not help (for example a 30 fps battery cap), step back and stop.
const watch = { acc: 0, n: 0, t: 0, before: 0, done: false };
export function perfTick(dtReal) {
  if (perf.forced || watch.done || document.hidden) return;
  watch.t += dtReal;
  if (watch.t < 3) return; // skip the loading and the intro
  watch.acc += Math.min(dtReal, 0.1);
  watch.n++;
  if (watch.acc < 2) return;
  const avg = watch.acc / watch.n;
  watch.acc = 0;
  watch.n = 0;
  if (watch.before && avg > watch.before * 0.9) {
    perf.set(perf.level - 1);
    watch.done = true;
    return;
  }
  watch.before = 0;
  if (avg > 1 / 42 && perf.level < 3) {
    watch.before = avg;
    perf.set(perf.level + 1);
  }
}
