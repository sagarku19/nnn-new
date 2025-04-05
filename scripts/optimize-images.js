const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(publicDir, 'optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir);
}

// Image optimization settings
const settings = {
  jpg: {
    quality: 80,
    mozjpeg: true
  },
  png: {
    quality: 80,
    compressionLevel: 9
  }
};

// Function to optimize an image
async function optimizeImage(file) {
  const ext = path.extname(file).toLowerCase();
  const inputPath = path.join(publicDir, file);
  const outputPath = path.join(optimizedDir, file);

  try {
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(inputPath)
        .jpeg(settings.jpg)
        .toFile(outputPath);
    } else if (ext === '.png') {
      await sharp(inputPath)
        .png(settings.png)
        .toFile(outputPath);
    }
    console.log(`Optimized: ${file}`);
  } catch (error) {
    console.error(`Error optimizing ${file}:`, error);
  }
}

// Optimize all images
async function optimizeAll() {
  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file) && 
    !file.includes('favicon') && 
    !file.includes('apple-touch-icon')
  );

  for (const file of imageFiles) {
    await optimizeImage(file);
  }
}

optimizeAll(); 