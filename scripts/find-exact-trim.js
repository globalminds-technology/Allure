const { execFileSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');

const times = ['36.5', '37.0', '37.5', '38.0', '38.3', '38.6'];
const inputPath = path.resolve('public/videos/input.mp4');

for (const t of times) {
  const outPath = path.resolve(`public/videos/trim_${t}.jpg`);
  const args = ['-y', '-ss', t, '-i', inputPath, '-vframes', '1', '-q:v', '2', outPath];
  try {
    execFileSync(ffmpegPath, args);
    console.log(`Saved trim_${t}.jpg`);
  } catch (e) {
    console.error(`Failed at ${t}:`, e.message);
  }
}

