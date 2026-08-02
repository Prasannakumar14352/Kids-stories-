// One-off generator for placeholder PNG assets used by the landing page.
// Produces simple geometric placeholders (no external deps) so the repo
// builds and renders without real artwork. Swap these files in /public
// with real illustrations/screenshots before launch.
import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function encodePNG(width, height, pixels) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 2; // color type RGB
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;
  const ihdr = chunk("IHDR", ihdrData);

  const raw = Buffer.alloc((width * 3 + 1) * height);
  for (let y = 0; y < height; y++) {
    const rowStart = y * (width * 3 + 1);
    raw[rowStart] = 0; // filter: none
    pixels[y].copy(raw, rowStart + 1);
  }
  const idat = chunk("IDAT", deflateSync(raw, { level: 9 }));
  const iend = chunk("IEND", Buffer.alloc(0));
  return Buffer.concat([signature, ihdr, idat, iend]);
}

function makeCanvas(width, height, [r, g, b]) {
  const rows = [];
  for (let y = 0; y < height; y++) {
    const row = Buffer.alloc(width * 3);
    for (let x = 0; x < width; x++) {
      row[x * 3] = r;
      row[x * 3 + 1] = g;
      row[x * 3 + 2] = b;
    }
    rows.push(row);
  }
  return rows;
}

function fillRect(rows, x0, y0, w, h, [r, g, b]) {
  const height = rows.length;
  const width = rows[0].length / 3;
  const x1 = Math.min(width, x0 + w);
  const y1 = Math.min(height, y0 + h);
  for (let y = Math.max(0, y0); y < y1; y++) {
    for (let x = Math.max(0, x0); x < x1; x++) {
      rows[y][x * 3] = r;
      rows[y][x * 3 + 1] = g;
      rows[y][x * 3 + 2] = b;
    }
  }
}

function fillRectAlpha(rows, x0, y0, w, h, [r, g, b], alpha) {
  const height = rows.length;
  const width = rows[0].length / 3;
  const x1 = Math.min(width, x0 + w);
  const y1 = Math.min(height, y0 + h);
  for (let y = Math.max(0, y0); y < y1; y++) {
    for (let x = Math.max(0, x0); x < x1; x++) {
      const idx = x * 3;
      rows[y][idx] = Math.round(rows[y][idx] * (1 - alpha) + r * alpha);
      rows[y][idx + 1] = Math.round(rows[y][idx + 1] * (1 - alpha) + g * alpha);
      rows[y][idx + 2] = Math.round(rows[y][idx + 2] * (1 - alpha) + b * alpha);
    }
  }
}

function verticalGradient(width, height, colorTop, colorBottom) {
  const rows = [];
  for (let y = 0; y < height; y++) {
    const t = y / (height - 1);
    const r = Math.round(colorTop[0] + (colorBottom[0] - colorTop[0]) * t);
    const g = Math.round(colorTop[1] + (colorBottom[1] - colorTop[1]) * t);
    const b = Math.round(colorTop[2] + (colorBottom[2] - colorTop[2]) * t);
    const row = Buffer.alloc(width * 3);
    for (let x = 0; x < width; x++) {
      row[x * 3] = r;
      row[x * 3 + 1] = g;
      row[x * 3 + 2] = b;
    }
    rows.push(row);
  }
  return rows;
}

function save(name, width, height, rows) {
  writeFileSync(`public/${name}`, encodePNG(width, height, rows));
  console.log(`generated public/${name}`);
}

const ORANGE = [255, 106, 26];
const ORANGE_LIGHT = [255, 138, 51];
const ORANGE_DARK = [244, 81, 30];
const INK = [14, 15, 19];
const WHITE = [255, 255, 255];

// Note: the ProdX Store wordmark lives in public/logo.svg (hand-built, not generated here).

// hero-mockup.png — fanned stack of dark story-cover cards on a black/orange-glow backdrop
{
  const w = 900, h = 700;
  const rows = makeCanvas(w, h, INK);
  // soft orange glow behind the stack
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = (x - w * 0.55) / (w * 0.5);
      const dy = (y - h * 0.35) / (h * 0.5);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const alpha = Math.max(0, 0.35 - dist * 0.35);
      if (alpha > 0) {
        rows[y][x * 3] = Math.min(255, rows[y][x * 3] + ORANGE_LIGHT[0] * alpha);
        rows[y][x * 3 + 1] = Math.min(255, rows[y][x * 3 + 1] + ORANGE_LIGHT[1] * alpha * 0.6);
        rows[y][x * 3 + 2] = Math.min(255, rows[y][x * 3 + 2] + ORANGE_LIGHT[2] * alpha * 0.3);
      }
    }
  }
  const cardW = 260, cardH = 380;
  const centers = [-260, -130, 0, 130, 260];
  centers.forEach((offset, i) => {
    const x = Math.round(w / 2 - cardW / 2 + offset * 0.75);
    const y = Math.round(h / 2 - cardH / 2 + Math.abs(offset) * 0.12);
    fillRect(rows, x - 2, y - 2, cardW + 4, cardH + 4, [255, 255, 255]);
    fillRectAlpha(rows, x - 2, y - 2, cardW + 4, cardH + 4, ORANGE, 0.25);
    fillRect(rows, x, y, cardW, cardH, [24, 25, 31]);
    fillRect(rows, x + 20, y + 24, cardW - 40, cardH - 140, ORANGE);
    fillRect(rows, x + 20, y + cardH - 96, cardW - 40, 14, WHITE);
    fillRect(rows, x + 20, y + cardH - 66, cardW - 80, 10, [154, 160, 166]);
  });
  save("hero-mockup.png", w, h, rows);
}

// sample-1..6.png — story-page placeholders, each a distinct pastel with a simple layout
const pastels = [
  [255, 224, 189],
  [255, 209, 178],
  [255, 197, 143],
  [250, 214, 165],
  [255, 190, 152],
  [253, 202, 178],
];
pastels.forEach((color, i) => {
  const w = 640, h = 800;
  const rows = makeCanvas(w, h, [255, 250, 244]);
  fillRect(rows, 0, 0, w, h, [255, 255, 255]);
  fillRect(rows, 24, 24, w - 48, h - 48, color);
  fillRect(rows, 60, 60, w - 120, h - 320, WHITE);
  fillRectAlpha(rows, 60, 60, w - 120, h - 320, ORANGE, 0.18);
  fillRect(rows, 60, h - 220, w - 120, 16, INK);
  fillRect(rows, 60, h - 180, w - 220, 10, [154, 160, 166]);
  fillRect(rows, 60, h - 150, w - 260, 10, [154, 160, 166]);
  fillRect(rows, 60, h - 120, w - 300, 10, [154, 160, 166]);
  save(`sample-${i + 1}.png`, w, h, rows);
});
