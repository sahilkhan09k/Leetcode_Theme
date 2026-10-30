// scripts/generate-icons.cjs
const { Jimp } = require('jimp');
const { mkdirSync, existsSync } = require('fs');
const { join } = require('path');

// Convert r,g,b,a to unsigned 32-bit int (jimp v1: RGBA big-endian)
function rgba(r, g, b, a = 255) {
  return (((r & 0xFF) * 0x1000000) + ((g & 0xFF) << 16) + ((b & 0xFF) << 8) + (a & 0xFF)) >>> 0;
}

const SIZES = [16, 48, 128];
const publicIcons = join(process.cwd(), 'public', 'icons');
const distIcons   = join(process.cwd(), 'dist',   'icons');
[publicIcons, distIcons].forEach(d => { if (!existsSync(d)) mkdirSync(d, { recursive: true }); });

async function drawIcon(size) {
  const img = new Jimp({ width: size, height: size, color: rgba(6, 8, 16) });

  const cx = size / 2, cy = size / 2;
  const outerR = size * 0.42;
  const innerR  = size * 0.30;

  // Main circle
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      if (dist <= outerR) {
        img.setPixelColor(rgba(20, 16, 50), x, y);
        if (dist <= innerR) {
          const t = 1 - dist / innerR;
          img.setPixelColor(rgba(
            Math.round(20 + t * 79),
            Math.round(16 + t * 86),
            Math.round(50 + t * 205)
          ), x, y);
        }
      }
    }
  }

  // Color palette dots
  const dotR = size * 0.09;
  const dots = [
    { dx: -0.20, dy: -0.08, r: 255, g: 122, b: 178 }, // pink
    { dx:  0.00, dy: -0.20, r:  99, g: 102, b: 241 }, // indigo
    { dx:  0.20, dy: -0.08, r:   0, g: 240, b: 255 }, // cyan
    { dx:  0.14, dy:  0.16, r: 212, g: 160, b:  23 }, // gold
    { dx: -0.14, dy:  0.16, r:  34, g: 197, b:  94 }, // green
  ];

  for (const dot of dots) {
    const dotCx = cx + dot.dx * size;
    const dotCy = cy + dot.dy * size;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const dist = Math.sqrt((x - dotCx) ** 2 + (y - dotCy) ** 2);
        if (dist <= dotR) {
          img.setPixelColor(rgba(dot.r, dot.g, dot.b), x, y);
        }
      }
    }
  }

  // Sparkle cross (48+ only)
  if (size >= 48) {
    const sx = Math.round(size * 0.78);
    const sy = Math.round(size * 0.20);
    const sl = Math.round(size * 0.07);
    for (let i = -sl; i <= sl; i++) {
      if (sx + i >= 0 && sx + i < size) img.setPixelColor(rgba(241, 245, 249), sx + i, sy);
      if (sy + i >= 0 && sy + i < size) img.setPixelColor(rgba(241, 245, 249), sx, sy + i);
    }
  }

  return img;
}

async function main() {
  for (const size of SIZES) {
    process.stdout.write(`Generating ${size}x${size}... `);
    const img = await drawIcon(size);
    await img.write(join(publicIcons, `icon${size}.png`));
    await img.write(join(distIcons,   `icon${size}.png`));
    console.log('done');
  }
  console.log('\n✅ Icons ready in public/icons/ and dist/icons/');
}

main().catch(console.error);
