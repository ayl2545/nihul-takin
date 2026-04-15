// Remove the white (and near-white) background from the logo PNG.
//
// Two-stage mask:
//   pixel fully transparent  if min(r,g,b) >= HARD
//   pixel fully opaque       if min(r,g,b) <= SOFT
//   otherwise fades linearly between the two
//
// We intentionally do NOT un-premultiply colors — the original master
// has a faint grid texture hidden inside the "white" background, and
// true color-to-alpha surfaces it as noise against dark backgrounds.
//
// Run: `node scripts/make-logo-transparent.mjs`
// Input: public/images/logo-original.png  (pristine master)
// Output: public/images/logo.png

import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, "..", "public/images/logo-original.png");
const dst = resolve(__dirname, "..", "public/images/logo.png");

const HARD = 240;
const SOFT = 205;
const BAND = HARD - SOFT;

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

let cleared = 0;
let faded = 0;

for (let i = 0; i < data.length; i += 4) {
  const minC = Math.min(data[i], data[i + 1], data[i + 2]);

  if (minC >= HARD) {
    data[i + 3] = 0;
    cleared++;
  } else if (minC > SOFT) {
    const t = (minC - SOFT) / BAND;
    data[i + 3] = Math.round(data[i + 3] * (1 - t));
    faded++;
  }
}

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toFile(dst);

console.log(
  `Wrote ${dst} — ${info.width}x${info.height}, cleared ${cleared} px, faded ${faded} px`
);
