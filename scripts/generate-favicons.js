const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');

const sizes = {
  'favicon-16x16.png': [16, 16],
  'favicon-32x32.png': [32, 32],
  'apple-touch-icon.png': [180, 180],
  'android-chrome-192x192.png': [192, 192],
  'android-chrome-512x512.png': [512, 512],
  'og-image.png': [1200, 630],
  'twitter-image.png': [1200, 630]
};

const inputFile = path.join(__dirname, '../public/LOGO.png');

async function generateFavicons() {
  try {
    // Generate PNG files
    for (const [filename, [width, height]] of Object.entries(sizes)) {
      const outputFile = path.join(__dirname, '../public', filename);
      await sharp(inputFile)
        .resize(width, height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputFile);
      console.log(`Generated ${filename}`);
    }

    // Generate multiple sizes for favicon.ico
    const sizes = [16, 32];
    const pngFiles = await Promise.all(
      sizes.map(async size => {
        const tempFile = path.join(__dirname, `../public/temp-${size}.png`);
        await sharp(inputFile)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .png()
          .toFile(tempFile);
        return tempFile;
      })
    );

    // Convert to ICO with multiple sizes
    const icoBuffer = await pngToIco(pngFiles);
    fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
    console.log('Generated favicon.ico');

    // Clean up temporary files
    pngFiles.forEach(file => fs.unlinkSync(file));

  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 