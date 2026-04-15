import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, "..", "public/images/logo.png");
const dst = resolve(__dirname, "..", "public/images/logo-transparent.png");

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const THRESHOLD = 232;
const FEATHER = 16;
let changed = 0;

for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const minC = Math.min(r, g, b);

  if (minC >= THRESHOLD) {
    data[i + 3] = 0;
    changed++;
  } else if (minC >= THRESHOLD - FEATHER) {
    const falloff = (minC - (THRESHOLD - FEATHER)) / FEATHER;
    data[i + 3] = Math.round(data[i + 3] * (1 - falloff));
  }
}

await sharp(data, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .png({ compressionLevel: 9 })
  .toFile(dst);

console.log(
  `Wrote ${dst} (${info.width}x${info.height}), ${changed} px fully transparent`
);
