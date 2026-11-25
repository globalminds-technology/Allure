const { execFileSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');

const input = path.resolve('public/videos/input.mp4');
const out = path.resolve('public/videos/logo_check.jpg');

// Extract frame at 25 seconds
execFileSync(ffmpegPath, ['-y', '-ss', '25', '-i', input, '-vframes', '1', '-q:v', '2', out]);
console.log('Saved logo_check.jpg');

