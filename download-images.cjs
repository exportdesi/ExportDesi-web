// Download all Unsplash images used in the website
// Run with: node download-images.js

const fs = require('fs');
const path = require('path');
const https = require('https');
const { exec } = require('child_process');

// Unique images list (no duplicates)
const IMAGES = [
    // Makhana
    { url: 'https://images.unsplash.com/photo-1606851096778-8a75441979ae?w=1200&h=900&fit=crop&q=80', file: 'makhana-hero.jpg', folder: 'products/makhana' },
    { url: 'https://images.unsplash.com/photo-1626125345510-0b71848ca92c?w=800&h=600&fit=crop&q=80', file: 'makhana-grade-comparison.jpg', folder: 'products/makhana' },
    { url: 'https://images.unsplash.com/photo-1599307767118-26b08808376f?w=800&h=600&fit=crop&q=80', file: 'makhana-quality.jpg', folder: 'products/makhana' },
    { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80', file: 'packaging-bulk.jpg', folder: 'products/makhana' },
    { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aeece3?w=800&h=600&fit=crop&q=80', file: 'processing-facility.jpg', folder: 'products/makhana' },
    { url: 'https://images.unsplash.com/photo-1578575437130-527eed58ec44?w=800&h=600&fit=crop&q=80', file: 'container-loading.jpg', folder: 'products/makhana' },

    // Turmeric
    { url: 'https://images.unsplash.com/photo-1596040033229-a9821eb5d91b?w=1200&h=900&fit=crop&q=80', file: 'turmeric-hero.jpg', folder: 'products/turmeric' },
    { url: 'https://images.unsplash.com/photo-1615485925763-867862780c32?w=800&h=600&fit=crop&q=80', file: 'turmeric-product.jpg', folder: 'products/turmeric' },

    // Dehydrated
    { url: 'https://images.unsplash.com/photo-1615485925763-867862780c32?w=1200&h=900&fit=crop&q=80', file: 'dehydrated-hero.jpg', folder: 'products/dehydrated' },

    // Blog
    { url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=900&fit=crop&q=80', file: 'blog-hero.jpg', folder: 'blog' },

    // About
    { url: 'https://images.unsplash.com/photo-1606851096778-8a75441979ae?w=800&h=600&fit=crop&q=80', file: 'about-bihar.jpg', folder: 'about' },
    { url: 'https://images.unsplash.com/photo-1596040033229-a9821eb5d91b?w=800&h=600&fit=crop&q=80', file: 'about-gujarat.jpg', folder: 'about' },
    { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80', file: 'about-export.jpg', folder: 'about' },

    // Home
    { url: 'https://images.unsplash.com/photo-1596040033229-a9821eb5d91b?w=1200&h=900&fit=crop&q=80', file: 'home-hero.jpg', folder: '.' },

    // Company Profile
    { url: 'https://images.unsplash.com/photo-1621255554851-9a254f0e3e93?w=400&h=250&fit=crop&auto=format', file: 'profile-1.jpg', folder: 'company-profile' },
    { url: 'https://images.unsplash.com/photo-1615485500704-8e99099928b3?w=400&h=250&fit=crop&auto=format', file: 'profile-2.jpg', folder: 'company-profile' },
    { url: 'https://images.unsplash.com/photo-1615485290382-441e4d099928b3?w=400&h=250&fit=crop&auto=format', file: 'profile-3.jpg', folder: 'company-profile' },
    { url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=250&fit=crop&auto=format', file: 'profile-4.jpg', folder: 'company-profile' },
];

const BASE_DIR = path.join(__dirname, 'public', 'images', 'downloaded');

// Create directories
function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Download image
function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);

        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }

            response.pipe(file);

            file.on('finish', () => {
                file.close();
                resolve(filepath);
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {}); // Delete file on error
            reject(err);
        });
    });
}

// Main function
async function main() {
    console.log('📥 Downloading Unsplash images...\n');

    ensureDir(BASE_DIR);

    // Create subdirectories
    ['products/makhana', 'products/turmeric', 'products/dehydrated', 'blog', 'about', 'company-profile'].forEach(folder => {
        ensureDir(path.join(BASE_DIR, folder));
    });

    let success = 0;
    let failed = 0;

    for (const img of IMAGES) {
        const destDir = path.join(BASE_DIR, img.folder);
        const destPath = path.join(destDir, img.file);

        ensureDir(destDir);

        try {
            await downloadImage(img.url, destPath);
            console.log(`✅ ${img.file} (${img.folder || 'root'})`);
            success++;
        } catch (err) {
            console.error(`❌ ${img.file}: ${err.message}`);
            failed++;
        }
    }

    console.log(`\n📊 Summary:`);
    console.log(`   ✅ Downloaded: ${success}`);
    console.log(`   ❌ Failed: ${failed}`);
    console.log(`   📁 Saved to: ${BASE_DIR}`);
}

main().catch(console.error);
