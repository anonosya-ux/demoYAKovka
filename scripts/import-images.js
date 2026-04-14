const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sourceDir = '/Users/macbook/Desktop/сайт Отеля/Облако Mail';
const targetDir = './public/images/gallery';
const targetRoomsDir = './public/images/rooms';

if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
if (!fs.existsSync(targetRoomsDir)) fs.mkdirSync(targetRoomsDir, { recursive: true });

const files = fs.readdirSync(sourceDir);
let counter = 1;

files.forEach(file => {
  if (file.match(/\.(jpe?g|png|webp)$/i)) {
    const srcPath = path.join(sourceDir, file);
    const ext = path.extname(file).toLowerCase();
    const destName = `gallery_${counter}${ext}`;
    const destPath = path.join(targetDir, destName);
    
    console.log(`Processing ${file} -> ${destName}`);
    try {
      // Basic resize with sips
      execSync(`sips -Z 1920 -s format jpeg -s formatOptions 80 "${srcPath}" --out "${destPath}" 2>/dev/null`);
      counter++;
    } catch (e) {
      console.error(`Failed to process ${file}`);
    }
  }
});

console.log(`Successfully processed ${counter - 1} images.`);
