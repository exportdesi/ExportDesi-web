#!/usr/bin/env node
/**
 * Export Desi Website - Image Generation Script
 * Generates realistic product and business images using free AI APIs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Output directory
const OUTPUT_DIR = path.join(__dirname, '..', 'dist', 'images', 'generated');
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Image prompts for Export Desi website
const IMAGE_PROMPTS = {
    "hero-banner": {
        prompt: "Professional B2B warehouse and shipping facility, Indian spices and food ingredients export, containers and logistics, modern industrial photography, clean corporate style, warm lighting, photorealistic, 8k quality --ar 16:9",
        filename: "hero-banner.jpg",
        description: "Homepage hero banner - warehouse/shipping"
    },
    "makhana-product": {
        prompt: "Premium quality fox nuts makhana in different sizes, clean product photography, white background, food grade packaging, professional commercial photography, highly detailed, 8k --ar 4:3",
        filename: "makhana-product.jpg",
        description: "Makhana product page - fox nuts display"
    },
    "makhana-fields": {
        prompt: "Makhana lotus fields in Bihar India, traditional farming, agricultural landscape, rural India, documentary photography style, natural lighting --ar 16:9",
        filename: "makhana-fields.jpg",
        description: "Makhana page - origin fields"
    },
    "dehydrated-onion": {
        prompt: "Dehydrated onion flakes and powder, close-up food ingredient photography, clean white background, commercial food photography, highly detailed texture --ar 4:3",
        filename: "dehydrated-onion.jpg",
        description: "Dehydrated ingredients - onion products"
    },
    "dehydrated-garlic": {
        prompt: "Dehydrated garlic flakes granules powder, food ingredient photography, white background, professional commercial style, 8k quality --ar 4:3",
        filename: "dehydrated-garlic.jpg",
        description: "Dehydrated ingredients - garlic products"
    },
    "banana-powder": {
        prompt: "Banana powder fine texture, food ingredient close-up, clean commercial photography, white background, professional lighting --ar 4:3",
        filename: "banana-powder.jpg",
        description: "Dehydrated ingredients - banana powder"
    },
    "quality-control": {
        prompt: "Food quality control laboratory, technician testing ingredients, modern lab equipment, professional corporate photography, clean sterile environment --ar 16:9",
        filename: "quality-control.jpg",
        description: "How We Work - QC process"
    },
    "packaging-process": {
        prompt: "Industrial food packaging facility, workers in protective gear, packaging machinery, clean modern factory, professional industrial photography --ar 16:9",
        filename: "packaging-process.jpg",
        description: "How We Work - packaging"
    },
    "shipping-port": {
        prompt: "Indian shipping port with containers, cargo ships, logistics and export, professional corporate photography, golden hour lighting --ar 16:9",
        filename: "shipping-port.jpg",
        description: "How We Work - shipping logistics"
    },
    "office-professional": {
        prompt: "Modern corporate office in Gurgaon India, professional business environment, meeting room, corporate photography, natural lighting, clean contemporary design --ar 16:9",
        filename: "office-professional.jpg",
        description: "About page - office environment"
    },
    "team-meeting": {
        prompt: "Professional business team meeting, Indian corporate office, diverse team collaboration, modern workplace, natural lighting, photorealistic --ar 16:9",
        filename: "team-meeting.jpg",
        description: "About page - team"
    },
    "certificates-display": {
        prompt: "Professional certificate display wall, APEDA FIEO FSSAI certifications, corporate office, clean modern design, shallow depth of field --ar 16:9",
        filename: "certificates-display.jpg",
        description: "Compliance page - certificates"
    },
    "indian-spices-market": {
        prompt: "Traditional Indian spices market, colorful spices in sacks, vibrant authentic India, documentary photography style, warm natural lighting --ar 16:9",
        filename: "indian-spices-market.jpg",
        description: "Homepage - Indian heritage"
    },
    "container-shipping": {
        prompt: "Shipping containers being loaded on cargo ship, international trade, export logistics, professional industrial photography, clear sky --ar 16:9",
        filename: "container-shipping.jpg",
        description: "Homepage - global shipping"
    },
    "food-ingredients-spread": {
        prompt: "Array of Indian food ingredients in bowls, makhana onion garlic spices, flat lay photography, white background, professional food photography, 8k --ar 16:9",
        filename: "food-ingredients-spread.jpg",
        description: "Food ingredients category page"
    }
};

/**
 * Generate image using Pollinations.ai (free, no API key required)
 * https://pollinations.ai/
 */
async function generateWithPollinations(prompt, filename, width = 1920, height = 1080) {
    try {
        const encodedPrompt = encodeURIComponent(prompt);
        const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&model=flux&nologo=true&seed=${Math.floor(Math.random() * 10000)}`;
        
        console.log(`Generating: ${filename}`);
        console.log(`  URL: ${url.substring(0, 100)}...`);
        
        const response = await fetch(url, {
            method: 'GET',
            timeout: 60000
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const buffer = await response.arrayBuffer();
        const outputPath = path.join(OUTPUT_DIR, filename);
        fs.writeFileSync(outputPath, Buffer.from(buffer));
        
        const fileSize = (buffer.byteLength / (1024 * 1024)).toFixed(2);
        console.log(`  ✓ Saved: ${filename} (${fileSize} MB)`);
        return true;
        
    } catch (error) {
        console.error(`  ✗ Error: ${error.message}`);
        return false;
    }
}

/**
 * Sleep utility
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Main execution
 */
async function main() {
    console.log('='.repeat(60));
    console.log('Export Desi Website - AI Image Generation');
    console.log('='.repeat(60));
    console.log(`Output directory: ${OUTPUT_DIR}`);
    console.log(`Total images to generate: ${Object.keys(IMAGE_PROMPTS).length}`);
    console.log();
    
    const results = { success: [], failed: [] };
    
    // Generate images
    const entries = Object.entries(IMAGE_PROMPTS);
    for (let i = 0; i < entries.length; i++) {
        const [key, config] = entries[i];
        
        console.log(`\n[${results.success.length + results.failed.length + 1}/${entries.length}] ${config.description}`);
        
        // Try Pollinations first (most reliable free option)
        const success = await generateWithPollinations(config.prompt, config.filename);
        
        if (success) {
            results.success.push(key);
        } else {
            results.failed.push(key);
        }
        
        // Rate limiting - be respectful
        await sleep(2000);
    }
    
    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('GENERATION COMPLETE');
    console.log('='.repeat(60));
    console.log(`✓ Success: ${results.success.length}`);
    console.log(`✗ Failed: ${results.failed.length}`);
    
    if (results.success.length > 0) {
        console.log(`\nGenerated images saved to: ${OUTPUT_DIR}`);
        console.log('\nNext steps:');
        console.log('1. Review generated images in the output directory');
        console.log('2. Copy/move images to appropriate locations in src/assets or dist/images');
        console.log('3. Update component image references in React components');
    }
    
    if (results.failed.length > 0) {
        console.log(`\nFailed to generate: ${results.failed.join(', ')}`);
        console.log('You can manually generate these using the prompts in IMAGE_PROMPTS');
    }
}

// Run
main().catch(console.error);
