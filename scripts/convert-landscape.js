const { execFileSync } = require('child_process');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const cwd = path.resolve(__dirname, '../public/videos');
const outputPath = path.resolve(cwd, 'output-landscape.mp4');
const posterPath = path.resolve(cwd, 'output-landscape-poster.jpg');

// 1. Remove Gowri Signatures watermark with delogo filter
// 2. Trim outro shop details at 37.5s
// 3. Convert to 1920x1080 landscape with soft blurred wings
const args = [
  '-y',
  '-i', 'input.mp4',
  '-t', '37.5',
  '-filter_complex',
  '[0:v]delogo=x=190:y=1120:w=340:h=120,split=2[bg][fg];[bg]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,boxblur=20:5[bg];[fg]scale=-2:1080[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2',
  '-c:v', 'libx264',
  '-crf', '23',
  '-preset', 'fast',
  '-threads', '2',
  '-c:a', 'aac',
  'output-landscape.mp4'
];

console.log('Encoding clean landscape video with delogo and trim...');
execFileSync(ffmpegPath, args, { cwd, stdio: 'inherit' });
console.log('Clean landscape video created successfully!');

// Re-generate poster from second 2 (which now has NO watermark!)
console.log('Generating updated watermark-free poster...');
execFileSync(ffmpegPath, ['-y', '-ss', '00:00:02', '-i', 'output-landscape.mp4', '-vframes', '1', '-q:v', '2', 'output-landscape-poster.jpg'], { cwd, stdio: 'inherit' });

// Copy to amura-hero.mp4
fs.copyFileSync(outputPath, path.resolve(cwd, 'amura-hero.mp4'));
console.log('Synced to amura-hero.mp4');

// Clean up temporary debug frames
fs.readdirSync(cwd).forEach(file => {
  if (file.startsWith('frame_') || file.startsWith('trim_') || file.startsWith('logo_') || file.startsWith('delogo_')) {
    try { fs.unlinkSync(path.resolve(cwd, file)); } catch(e) {}
  }
});
console.log('Cleaned up debug frames.');
