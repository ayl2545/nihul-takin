// Composite the transparent logo onto the site's navy colour so we can
// visually verify there are no halos/smudges before deploying.

import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, "..", "public/images/logo.png");
const dst = resolve(__dirname, "..", "public/images/logo-preview.png");

const logo = sharp(src);
const { width, height } = await logo.metadata();

await sharp({
  create: {
    width,
    height,
    channels: 3,
    background: { r: 11, g: 21, b: 42 }, // navy-950
  },
})
  .composite([{ input: src, top: 0, left: 0 }])
  .png()
  .toFile(dst);

console.log(`Preview on navy-950: ${dst}`);
