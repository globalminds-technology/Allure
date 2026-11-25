const { execFileSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');

const input = path.resolve('public/videos/input.mp4');
const out = path.resolve('public/videos/delogo_test.jpg');

const args = [
  '-y',
  '-ss', '25',
  '-i', input,
  '-vf', 'delogo=x=190:y=1120:w=340:h=120:show=0',
  '-vframes', '1',
  '-q:v', '2',
  out
];

execFileSync(ffmpegPath, args);
console.log('Saved delogo_test.jpg');

