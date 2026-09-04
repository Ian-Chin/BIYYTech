/**
 * Regenerates every favicon / app-icon asset from the master brand mark.
 *
 * The mark is drawn with hairline strokes (~12px on a 1621px canvas, i.e. 0.74%
 * of the width). A plain downscale therefore renders each stroke at a fraction
 * of a pixel — 0.24px at 32x32 — which no resampler can show as a line, so the
 * icon reads as grey mush. Blurring to "fix" it only spreads the mush.
 *
 * The fix is optical sizing: dilate the glyph geometrically at high resolution
 * so that after a single high-quality downscale each stroke lands near 1.5-2px,
 * then encode. Small sizes need more dilation than large ones, so every target
 * gets its own radius. Below 32px the mark's ~9 parallel strokes cannot coexist
 * as lines at any weight, so 16 and 24 use the filled silhouette instead — the
 * outline is what carries recognition at that scale, and a solid shape stays
 * crisp where line art can only turn to mush. 150% Windows scaling asks for
 * 24px, so that size matters as much as 16 and 32 in practice.
 *
 * Requires sharp, which ships with Next.js:
 *   node scripts/generate-icons.mjs
 */
import sharp from 'sharp';
import { Buffer } from 'node:buffer';
import { writeFile } from 'node:fs/promises';

/** Near-black tile behind the mark; matches manifest background_color. */
const BG = { r: 0x0b, g: 0x0b, b: 0x0c, alpha: 1 };
const SRC = 'public/brand/yiy-mark-white.png';
/** Tight bounding box of the ink in SRC, so no target wastes pixels on padding. */
const BOX = { left: 124, top: 47, width: 1375, height: 1529 };
/** Resolution the dilation runs at. Radii below are in these pixels. */
const WORK = 512;

/**
 * Greyscale dilation with a square structuring element, applied separably.
 * Thickens strokes without softening their edges the way a blur would.
 */
function dilate(mask, size, radius) {
  if (radius <= 0) return mask;
  const pass = (input) => {
    const out = new Uint8Array(size * size);
    for (let y = 0; y < size; y++) {
      const row = y * size;
      for (let x = 0; x < size; x++) {
        const lo = Math.max(0, x - radius);
        const hi = Math.min(size - 1, x + radius);
        let max = 0;
        for (let k = lo; k <= hi; k++) {
          const v = input[row + k];
          if (v > max) max = v;
        }
        out[row + x] = max;
      }
    }
    return out;
  };
  const transpose = (input) => {
    const out = new Uint8Array(size * size);
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) out[x * size + y] = input[y * size + x];
    }
    return out;
  };
  return transpose(pass(transpose(pass(mask))));
}

/**
 * Fills the enclosed counters of the line-art mark, yielding its solid
 * silhouette. Anything the flood fill cannot reach from the border is interior.
 */
function silhouette(mask, size, threshold = 90) {
  const ink = new Uint8Array(size * size);
  for (let i = 0; i < size * size; i++) ink[i] = mask[i] > threshold ? 1 : 0;

  const outside = new Uint8Array(size * size);
  const stack = [];
  for (let x = 0; x < size; x++) stack.push(x, (size - 1) * size + x);
  for (let y = 0; y < size; y++) stack.push(y * size, y * size + size - 1);

  while (stack.length) {
    const p = stack.pop();
    if (outside[p] || ink[p]) continue;
    outside[p] = 1;
    const x = p % size;
    const y = (p - x) / size;
    if (x > 0) stack.push(p - 1);
    if (x < size - 1) stack.push(p + 1);
    if (y > 0) stack.push(p - size);
    if (y < size - 1) stack.push(p + size);
  }

  const out = new Uint8Array(size * size);
  for (let i = 0; i < size * size; i++) out[i] = ink[i] || !outside[i] ? 255 : 0;
  return out;
}

/** Alpha channel of the tightly-cropped mark, squared off at WORK resolution. */
async function loadMask() {
  const { data } = await sharp(SRC)
    .extract(BOX)
    .resize(WORK, WORK, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: 'lanczos3',
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const mask = new Uint8Array(WORK * WORK);
  for (let i = 0; i < WORK * WORK; i++) mask[i] = data[i * 4 + 3];
  return mask;
}

/**
 * White mask over the near-black tile at `size`, with `padding` as a fraction
 * of the tile so the glyph is not flush against the edges at larger sizes.
 */
async function tile(mask, size, padding = 0) {
  const inner = Math.max(1, Math.round(size * (1 - 2 * padding)));
  const rgba = Buffer.alloc(WORK * WORK * 4);
  for (let i = 0; i < WORK * WORK; i++) {
    rgba[i * 4] = 255;
    rgba[i * 4 + 1] = 255;
    rgba[i * 4 + 2] = 255;
    rgba[i * 4 + 3] = mask[i];
  }
  const glyph = await sharp(rgba, { raw: { width: WORK, height: WORK, channels: 4 } })
    .resize(inner, inner, { kernel: 'lanczos3' })
    .png()
    .toBuffer();

  const offset = Math.round((size - inner) / 2);
  return sharp({ create: { width: size, height: size, channels: 4, background: BG } })
    .composite([{ input: glyph, left: offset, top: offset }])
    .png({ compressionLevel: 9, palette: false })
    .toBuffer();
}

/** Packs PNG payloads into an .ico container (PNG-in-ICO, Vista onward). */
function ico(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(entries.length, 4);

  const directory = Buffer.alloc(entries.length * 16);
  let offset = header.length + directory.length;
  entries.forEach(({ size, png }, i) => {
    const at = i * 16;
    directory.writeUInt8(size >= 256 ? 0 : size, at);
    directory.writeUInt8(size >= 256 ? 0 : size, at + 1);
    directory.writeUInt8(0, at + 2);
    directory.writeUInt8(0, at + 3);
    directory.writeUInt16LE(1, at + 4);
    directory.writeUInt16LE(32, at + 6);
    directory.writeUInt32LE(png.length, at + 8);
    directory.writeUInt32LE(offset, at + 12);
    offset += png.length;
  });

  return Buffer.concat([header, directory, ...entries.map((e) => e.png)]);
}

/**
 * Dilation radius per target, tuned so the rendered stroke lands near 1.5-2px.
 * `solid` marks the size that uses the silhouette rather than the line art.
 */
const ICO_SIZES = [
  { size: 16, solid: true },
  { size: 24, solid: true },
  { size: 32, radius: 11 },
  { size: 48, radius: 6 },
  { size: 64, radius: 4 },
];

/**
 * Standalone PNGs. These exist so `metadata.icons` can advertise an exact
 * candidate for every size a browser actually asks for; without them Next
 * declares the .ico as `sizes="16x16"` (it reads only the first directory
 * entry) and Chrome answers a 32px request by downscaling the 192px art, which
 * is the same hairline mush this script exists to avoid.
 */
const PNG_TARGETS = [
  { path: 'public/brand/yiy-icon-16.png', size: 16, solid: true, padding: 0 },
  { path: 'public/brand/yiy-icon-24.png', size: 24, solid: true, padding: 0 },
  { path: 'public/brand/yiy-icon-32.png', size: 32, radius: 11, padding: 0 },
  { path: 'public/brand/yiy-icon-48.png', size: 48, radius: 6, padding: 0 },
  { path: 'public/brand/yiy-icon-192.png', size: 192, radius: 1, padding: 0.04 },
  { path: 'public/brand/yiy-icon-512.png', size: 512, radius: 0, padding: 0.06 },
  { path: 'public/brand/apple-touch-icon.png', size: 180, radius: 1, padding: 0.08 },
];

const base = await loadMask();
const solid = silhouette(base, WORK);

const entries = [];
for (const { size, radius, solid: useSolid } of ICO_SIZES) {
  const mask = useSolid ? solid : dilate(base, WORK, radius);
  entries.push({ size, png: await tile(mask, size) });
}
// Lives in public/ rather than src/app/ so the <link> is declared by
// metadata.icons with its full size list, instead of Next emitting its own tag
// that claims the file is 16x16 only.
await writeFile('public/favicon.ico', ico(entries));
console.log(`public/favicon.ico  ${ICO_SIZES.map((s) => s.size).join('/')}`);

for (const { path, size, radius, padding, solid: useSolid } of PNG_TARGETS) {
  const mask = useSolid ? solid : dilate(base, WORK, radius);
  await writeFile(path, await tile(mask, size, padding));
  console.log(`${path}  ${size}x${size}`);
}
