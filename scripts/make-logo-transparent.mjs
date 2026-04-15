// Remove the background from the logo PNG by flood-filling from the
// image edges. Only pixels that are reachable from the border AND
// within colour tolerance of white become transparent — that way any
// white pixels living inside the logo itself (e.g. bright highlights)
// are safe, and the faint halo around the monitor gets cleared too.
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

// A pixel is "background-ish" when every channel is at least this value.
// 170 is permissive enough to catch the halo around the monitor without
// biting into the mid-tone shadows of the hardware.
const BG_MIN_CHANNEL = 170;

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width: W, height: H } = info;
const N = W * H;
const visited = new Uint8Array(N); // 1 = queued/processed
const bg = new Uint8Array(N); // 1 = classified as background
const queue = new Int32Array(N);
let qHead = 0;
let qTail = 0;

const isBgColor = (idx) => {
  const o = idx * 4;
  return (
    data[o] >= BG_MIN_CHANNEL &&
    data[o + 1] >= BG_MIN_CHANNEL &&
    data[o + 2] >= BG_MIN_CHANNEL
  );
};

const enqueue = (idx) => {
  if (visited[idx]) return;
  visited[idx] = 1;
  if (isBgColor(idx)) {
    bg[idx] = 1;
    queue[qTail++] = idx;
  }
};

// Seed every edge pixel.
for (let x = 0; x < W; x++) {
  enqueue(x);
  enqueue((H - 1) * W + x);
}
for (let y = 0; y < H; y++) {
  enqueue(y * W);
  enqueue(y * W + (W - 1));
}

// BFS 4-connected.
while (qHead < qTail) {
  const idx = queue[qHead++];
  const x = idx % W;
  const y = (idx - x) / W;
  if (x > 0) enqueue(idx - 1);
  if (x < W - 1) enqueue(idx + 1);
  if (y > 0) enqueue(idx - W);
  if (y < H - 1) enqueue(idx + W);
}

// First pass: clear pixels classified as background.
let cleared = 0;
for (let idx = 0; idx < N; idx++) {
  if (bg[idx]) {
    data[idx * 4 + 3] = 0;
    cleared++;
  }
}

// Second pass: feather the boundary. Any opaque pixel sitting next to
// a now-transparent one gets its alpha scaled by how bright it is —
// bright edge pixels (residue of anti-aliased background) fade,
// darker in-logo pixels stay solid.
let feathered = 0;
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const idx = y * W + x;
    if (bg[idx]) continue;

    let touchesBg = false;
    if (x > 0 && bg[idx - 1]) touchesBg = true;
    else if (x < W - 1 && bg[idx + 1]) touchesBg = true;
    else if (y > 0 && bg[idx - W]) touchesBg = true;
    else if (y < H - 1 && bg[idx + W]) touchesBg = true;
    if (!touchesBg) continue;

    const o = idx * 4;
    const minC = Math.min(data[o], data[o + 1], data[o + 2]);
    if (minC > 140) {
      // 140..255 → fade 1..0
      const t = Math.min(1, (minC - 140) / 115);
      data[o + 3] = Math.round(data[o + 3] * (1 - t));
      feathered++;
    }
  }
}

await sharp(data, {
  raw: { width: W, height: H, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toFile(dst);

console.log(
  `Wrote ${dst} — ${W}x${H}, cleared ${cleared} px, feathered ${feathered} edge px`
);
