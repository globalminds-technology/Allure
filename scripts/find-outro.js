const { execFileSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const timestamps = [25, 30, 35, 37, 39, 41, 43, 44];
const inputPath = path.resolve('public/videos/input.mp4');

for (const t of timestamps) {
  const outPath = path.resolve(`public/videos/frame_${t}.jpg`);
  const args = ['-y', '-ss', String(t), '-i', inputPath, '-vframes', '1', '-q:v', '2', outPath];
  try {
    execFileSync(ffmpegPath, args);
    console.log(`Saved frame_${t}.jpg`);
  } catch (e) {
    console.error(`Failed at ${t}:`, e.message);
  }
}

