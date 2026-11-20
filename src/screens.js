// Flat "sticker" drawings on 2D canvases: the monitor's screens and the faces of the floating stickers.
// Everything is drawn with thick black outlines so it matches the toon-shaded 3D models.

export const COLORS = {
  ink: '#000000',
  paper: '#FFFFFF',
  yellow: '#FFE14D',
  mint: '#2FBF71',
  zorin: '#3D7BFF',
  endless: '#FF7A1A',
  grey: '#D9D9D3',
  light: '#ECECE6',
};

export const SW = 1024;
export const SH = 626;

const DISPLAY = '"Archivo Black", "Arial Black", Impact, sans-serif';

function path(g, x, y, w, h, r) {
  g.beginPath();
  if (g.roundRect) { g.roundRect(x, y, w, h, r); return; }
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

function box(g, x, y, w, h, r, fill, lw = 8) {
  path(g, x, y, w, h, r);
  g.fillStyle = fill;
  g.fill();
  if (lw) { g.lineWidth = lw; g.strokeStyle = COLORS.ink; g.stroke(); }
}

function circle(g, x, y, r, fill, lw = 8) {
  g.beginPath();
  g.arc(x, y, r, 0, Math.PI * 2);
  g.fillStyle = fill;
  g.fill();
  if (lw) { g.lineWidth = lw; g.strokeStyle = COLORS.ink; g.stroke(); }
}

function line(g, pts, lw = 10, color = COLORS.ink) {
  g.beginPath();
  g.moveTo(pts[0], pts[1]);
  for (let i = 2; i < pts.length; i += 2) g.lineTo(pts[i], pts[i + 1]);
  g.lineWidth = lw;
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.strokeStyle = color;
  g.stroke();
}

function windowCard(g, x, y, w, h, accent, tint) {
  box(g, x + 12, y + 12, w, h, 18, COLORS.ink, 0);
  box(g, x, y, w, h, 18, COLORS.paper);
  path(g, x + 4, y + 4, w - 8, 52, 14);
  g.fillStyle = COLORS.light;
  g.fill();
  g.fillStyle = COLORS.ink;
  g.fillRect(x + 4, y + 56, w - 8, 6);
  [accent, COLORS.grey, COLORS.grey].forEach((c, i) => circle(g, x + w - 34 - i * 34, y + 30, 11, c, 4));
  const lines = [0.62, 0.8, 0.5];
  lines.forEach((f, i) => box(g, x + 32, y + 92 + i * 34, w * f - 40, 16, 8, COLORS.grey, 0));
  box(g, x + 32, y + 200, w * 0.42, h - 232, 12, tint, 5);
}

function startMenu(g, x, y, w, rows, colors) {
  const h = 70 + rows * 44;
  box(g, x + 10, y + 10, w, h, 16, COLORS.ink, 0);
  box(g, x, y, w, h, 16, COLORS.paper);
  box(g, x + 18, y + 18, w - 36, 34, 17, COLORS.light, 4);
  for (let i = 0; i < rows; i++) {
    const yy = y + 72 + i * 44;
    box(g, x + 22, yy, 26, 26, 6, colors[i % colors.length], 4);
    box(g, x + 64, yy + 7, [150, 110, 170, 130, 140][i % 5], 12, 6, COLORS.grey, 0);
  }
}

const SCREENS = {
  hello(g) {
    g.fillStyle = COLORS.endless;
    g.fillRect(0, 0, SW, SH);
    circle(g, SW / 2 + 16, SH / 2 + 16, 200, COLORS.ink, 0);
    circle(g, SW / 2, SH / 2, 200, COLORS.paper, 10);
    g.fillStyle = COLORS.ink;
    g.font = `300px ${DISPLAY}`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText('?', SW / 2 + 6, SH / 2 + 18);
  },
  grid100(g) {
    g.fillStyle = COLORS.yellow;
    g.fillRect(0, 0, SW, SH);
    const s = 40, gap = 12, cols = 10;
    const total = cols * s + (cols - 1) * gap;
    const x0 = (SW - total) / 2, y0 = (SH - total) / 2;
    for (let i = 0; i < 100; i++) {
      const x = x0 + (i % cols) * (s + gap), y = y0 + Math.floor(i / cols) * (s + gap);
      box(g, x, y, s, s, 8, COLORS.paper, 5);
    }
  },
  funnel(g) {
    g.fillStyle = COLORS.ink;
    g.fillRect(0, 0, SW, SH);
    g.beginPath();
    g.moveTo(262, 110); g.lineTo(762, 110); g.lineTo(580, 330); g.lineTo(580, 450); g.lineTo(444, 450); g.lineTo(444, 330); g.closePath();
    g.fillStyle = COLORS.paper; g.fill();
    g.lineWidth = 10; g.strokeStyle = COLORS.yellow; g.stroke();
    [COLORS.mint, COLORS.zorin, COLORS.endless].forEach((c, i) => circle(g, 412 + i * 100, 530, 30, c, 7));
    g.strokeStyle = COLORS.ink;
  },
  mint(g) {
    g.fillStyle = COLORS.mint;
    g.fillRect(0, 0, SW, SH);
    box(g, 36, 34, 64, 64, 14, COLORS.paper, 6);
    box(g, 36, 130, 64, 64, 14, COLORS.yellow, 6);
    windowCard(g, 420, 60, 560, 410, COLORS.mint, '#CDEFD9');
    startMenu(g, 30, 238, 330, 5, [COLORS.ink, COLORS.grey, COLORS.mint, COLORS.light, COLORS.ink]);
    g.fillStyle = COLORS.ink;
    g.fillRect(0, SH - 62, SW, 62);
    box(g, 22, SH - 50, 38, 38, 8, COLORS.yellow, 0);
    [84, 132, 180].forEach((x) => box(g, x, SH - 46, 34, 30, 6, COLORS.paper, 0));
    box(g, SW - 120, SH - 42, 96, 22, 11, COLORS.paper, 0);
  },
  zorin(g) {
    g.fillStyle = COLORS.zorin;
    g.fillRect(0, 0, SW, SH);
    box(g, 36, 34, 64, 64, 14, COLORS.paper, 6);
    box(g, 36, 130, 64, 64, 14, COLORS.yellow, 6);
    windowCard(g, 150, 70, 480, 380, COLORS.zorin, '#D5E3FF');
    box(g, 690 + 12, 70 + 12, 290, 250, 22, COLORS.ink, 0);
    box(g, 690, 70, 290, 250, 22, COLORS.paper);
    const cx = 835, cy = 250, r = 92;
    g.lineCap = 'round';
    g.beginPath(); g.arc(cx, cy, r, Math.PI, 0); g.lineWidth = 22; g.strokeStyle = COLORS.light; g.stroke();
    g.beginPath(); g.arc(cx, cy, r, Math.PI, Math.PI * 1.25); g.strokeStyle = COLORS.zorin; g.stroke();
    line(g, [cx, cy, cx + Math.cos(Math.PI * 1.2) * 74, cy + Math.sin(Math.PI * 1.2) * 74], 12);
    circle(g, cx, cy, 14, COLORS.ink, 0);
    startMenu(g, 30, 300, 300, 3, [COLORS.zorin, COLORS.ink, COLORS.grey]);
    g.fillStyle = COLORS.paper;
    g.fillRect(0, SH - 62, SW, 62);
    g.fillStyle = COLORS.ink;
    g.fillRect(0, SH - 66, SW, 6);
    box(g, 22, SH - 50, 38, 38, 8, COLORS.zorin, 5);
    [84, 132].forEach((x) => box(g, x, SH - 46, 34, 30, 6, '#777770', 0));
    box(g, SW - 120, SH - 42, 96, 22, 11, '#777770', 0);
  },
  endless(g) {
    g.fillStyle = COLORS.endless;
    g.fillRect(0, 0, SW, SH);
    box(g, 300, 40, 424, 64, 32, COLORS.paper, 7);
    circle(g, 340, 72, 13, COLORS.paper, 6);
    line(g, [350, 82, 362, 94], 7);
    box(g, 380, 64, 200, 14, 7, COLORS.grey, 0);
    const fills = [COLORS.paper, COLORS.ink, COLORS.yellow];
    for (let i = 0; i < 18; i++) {
      const x = 182 + (i % 6) * 112, y = 140 + Math.floor(i / 6) * 128;
      const f = fills[(i + Math.floor(i / 6)) % 3];
      box(g, x, y, 84, 84, 22, f, 7);
      const gc = f === COLORS.paper ? COLORS.endless : (f === COLORS.ink ? COLORS.yellow : COLORS.ink);
      if (i % 3 === 0) circle(g, x + 42, y + 42, 17, gc, 0);
      else if (i % 3 === 1) box(g, x + 26, y + 26, 32, 32, 7, gc, 0);
      else { box(g, x + 22, y + 28, 40, 10, 5, gc, 0); box(g, x + 22, y + 46, 28, 10, 5, gc, 0); }
    }
    g.fillStyle = COLORS.ink;
    g.fillRect(0, SH - 56, SW, 56);
    for (let k = 0; k < 5; k++) circle(g, SW / 2 - 100 + k * 50, SH - 28, 11, COLORS.paper, 0);
    circle(g, 930, 72, 44, COLORS.ink, 0);
    g.lineCap = 'round';
    [12, 24, 36].forEach((rr) => {
      g.beginPath(); g.arc(930, 92, rr, Math.PI * 1.25, Math.PI * 1.75);
      g.lineWidth = 6; g.strokeStyle = COLORS.paper; g.stroke();
    });
    line(g, [904, 44, 956, 100], 8, COLORS.yellow);
  },
  chart(g) {
    g.fillStyle = COLORS.paper;
    g.fillRect(0, 0, SW, SH);
    const base = SH - 90;
    const data = [[18, COLORS.mint], [16, COLORS.zorin], [20, COLORS.endless]];
    data.forEach(([v, c], i) => {
      const h = v / 25 * 420, x = 222 + i * 210;
      box(g, x + 14, base - h + 14, 150, h, 10, COLORS.ink, 0);
      box(g, x, base - h, 150, h, 10, c);
    });
    line(g, [120, base + 4, SW - 120, base + 4], 12);
  },
  access(g) {
    g.fillStyle = COLORS.zorin;
    g.fillRect(0, 0, SW, SH);
    circle(g, SW / 2 + 16, SH / 2 + 16, 220, COLORS.ink, 0);
    circle(g, SW / 2, SH / 2, 220, COLORS.paper, 10);
    const cx = SW / 2, cy = SH / 2;
    circle(g, cx, cy - 118, 34, COLORS.ink, 0);
    line(g, [cx - 130, cy - 54, cx + 130, cy - 54], 30);
    line(g, [cx, cy - 54, cx, cy + 40], 30);
    line(g, [cx, cy + 40, cx - 66, cy + 150], 30);
    line(g, [cx, cy + 40, cx + 66, cy + 150], 30);
  },
  check(g) {
    g.fillStyle = COLORS.endless;
    g.fillRect(0, 0, SW, SH);
    circle(g, SW / 2 + 16, SH / 2 + 16, 210, COLORS.ink, 0);
    circle(g, SW / 2, SH / 2, 210, COLORS.paper, 10);
    line(g, [SW / 2 - 104, SH / 2 + 6, SW / 2 - 30, SH / 2 + 82, SW / 2 + 112, SH / 2 - 76], 46);
  },
  usb(g) {
    g.fillStyle = COLORS.yellow;
    g.fillRect(0, 0, SW, SH);
    g.save();
    g.translate(SW / 2, SH / 2);
    g.rotate(-0.35);
    box(g, -260 + 18, -95 + 18, 360, 190, 30, COLORS.ink, 0);
    box(g, -260, -95, 360, 190, 30, COLORS.ink, 0);
    box(g, -200, -50, 200, 100, 14, COLORS.endless, 7);
    box(g, 100, -66, 170, 132, 12, COLORS.paper, 9);
    box(g, 150, -34, 34, 26, 4, COLORS.ink, 0);
    box(g, 150, 10, 34, 26, 4, COLORS.ink, 0);
    g.restore();
  },
  smile(g) {
    g.fillStyle = COLORS.mint;
    g.fillRect(0, 0, SW, SH);
    circle(g, SW / 2 + 16, SH / 2 + 16, 220, COLORS.ink, 0);
    circle(g, SW / 2, SH / 2, 220, COLORS.yellow, 10);
    circle(g, SW / 2 - 76, SH / 2 - 50, 26, COLORS.ink, 0);
    circle(g, SW / 2 + 76, SH / 2 - 50, 26, COLORS.ink, 0);
    g.beginPath();
    g.arc(SW / 2, SH / 2 + 10, 120, 0.15 * Math.PI, 0.85 * Math.PI);
    g.lineWidth = 26; g.lineCap = 'round'; g.strokeStyle = COLORS.ink; g.stroke();
  },
};

export const SCREEN_NAMES = Object.keys(SCREENS);

export function drawScreen(name, canvas) {
  const c = canvas || document.createElement('canvas');
  c.width = SW;
  c.height = SH;
  const g = c.getContext('2d');
  g.clearRect(0, 0, SW, SH);
  g.lineJoin = 'round';
  SCREENS[name](g);
  return c;
}

// A rectangular sticker face with its text fitted inside.
export function drawLabel(text, fill, color, canvas) {
  const c = canvas || document.createElement('canvas');
  c.width = 640;
  c.height = 208;
  const g = c.getContext('2d');
  g.clearRect(0, 0, c.width, c.height);
  box(g, 9, 9, c.width - 18, c.height - 18, 22, fill, 18);
  let size = 96;
  g.font = `${size}px ${DISPLAY}`;
  while (g.measureText(text).width > c.width - 110 && size > 40) {
    size -= 4;
    g.font = `${size}px ${DISPLAY}`;
  }
  g.fillStyle = color;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(text, c.width / 2, c.height / 2 + size * 0.06);
  return c;
}

// A round sticker face with a single glyph.
export function drawRound(glyph, fill, color, canvas) {
  const c = canvas || document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 256, 256);
  circle(g, 128, 128, 116, fill, 14);
  g.fillStyle = color;
  g.font = `160px ${DISPLAY}`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(glyph, 128, 140);
  return c;
}
