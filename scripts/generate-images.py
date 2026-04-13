#!/usr/bin/env python3
"""
Export Desi Website - Image Generation Script
Generates realistic product and business images using free AI APIs
"""

import requests
import os
import time
from pathlib import Path

# Output directory
OUTPUT_DIR = Path(__file__).parent.parent / "dist" / "images" / "generated"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Image prompts for Export Desi website
IMAGE_PROMPTS = {
    "hero-banner": {
        "prompt": "Professional B2B warehouse and shipping facility, Indian spices and food ingredients export, containers and logistics, modern industrial photography, clean corporate style, warm lighting, photorealistic, 8k quality --ar 16:9",
        "filename": "hero-banner.jpg",
        "description": "Homepage hero banner - warehouse/shipping"
    },
    "makhana-product": {
        "prompt": "Premium quality fox nuts makhana in different sizes, clean product photography, white background, food grade packaging, professional commercial photography, highly detailed, 8k --ar 4:3",
        "filename": "makhana-product.jpg",
        "description": "Makhana product page - fox nuts display"
    },
    "makhana-fields": {
        "prompt": "Makhana lotus fields in Bihar India, traditional farming, agricultural landscape, rural India, documentary photography style, natural lighting --ar 16:9",
        "filename": "makhana-fields.jpg",
        "description": "Makhana page - origin fields"
    },
    "dehydrated-onion": {
        "prompt": "Dehydrated onion flakes and powder, close-up food ingredient photography, clean white background, commercial food photography, highly detailed texture --ar 4:3",
        "filename": "dehydrated-onion.jpg",
        "description": "Dehydrated ingredients - onion products"
    },
    "dehydrated-garlic": {
        "prompt": "Dehydrated garlic flakes granules powder, food ingredient photography, white background, professional commercial style, 8k quality --ar 4:3",
        "filename": "dehydrated-garlic.jpg",
        "description": "Dehydrated ingredients - garlic products"
    },
    "banana-powder": {
        "prompt": "Banana powder fine texture, food ingredient close-up, clean commercial photography, white background, professional lighting --ar 4:3",
        "filename": "banana-powder.jpg",
        "description": "Dehydrated ingredients - banana powder"
    },
    "quality-control": {
        "prompt": "Food quality control laboratory, technician testing ingredients, modern lab equipment, professional corporate photography, clean sterile environment --ar 16:9",
        "filename": "quality-control.jpg",
        "description": "How We Work - QC process"
    },
    "packaging-process": {
        "prompt": "Industrial food packaging facility, workers in protective gear, packaging machinery, clean modern factory, professional industrial photography --ar 16:9",
        "filename": "packaging-process.jpg",
        "description": "How We Work - packaging"
    },
    "shipping-port": {
        "prompt": "Indian shipping port with containers, cargo ships, logistics and export, professional corporate photography, golden hour lighting --ar 16:9",
        "filename": "shipping-port.jpg",
        "description": "How We Work - shipping logistics"
    },
    "office-professional": {
        "prompt": "Modern corporate office in Gurgaon India, professional business environment, meeting room, corporate photography, natural lighting, clean contemporary design --ar 16:9",
        "filename": "office-professional.jpg",
        "description": "About page - office environment"
    },
    "team-meeting": {
        "prompt": "Professional business team meeting, Indian corporate office, diverse team collaboration, modern workplace, natural lighting, photorealistic --ar 16:9",
        "filename": "team-meeting.jpg",
        "description": "About page - team"
    },
    "certificates-display": {
        "prompt": "Professional certificate display wall, APEDA FIEO FSSAI certifications, corporate office, clean modern design, shallow depth of field --ar 16:9",
        "filename": "certificates-display.jpg",
        "description": "Compliance page - certificates"
    },
    "indian-spices-market": {
        "prompt": "Traditional Indian spices market, colorful spices in sacks, vibrant authentic India, documentary photography style, warm natural lighting --ar 16:9",
        "filename": "indian-spices-market.jpg",
        "description": "Homepage - Indian heritage"
    },
    "container-shipping": {
        "prompt": "Shipping containers being loaded on cargo ship, international trade, export logistics, professional industrial photography, clear sky --ar 16:9",
        "filename": "container-shipping.jpg",
        "description": "Homepage - global shipping"
    },
    "food-ingredients-spread": {
        "prompt": "Array of Indian food ingredients in bowls, makhana onion garlic spices, flat lay photography, white background, professional food photography, 8k --ar 16:9",
        "filename": "food-ingredients-spread.jpg",
        "description": "Food ingredients category page"
    }
}


def generate_with_pollinations(prompt: str, filename: str, width: int = 1920, height: int = 1080) -> bool:
    """
    Generate image using Pollinations.ai (free, no API key required)
    https://pollinations.ai/
    """
    try:
        # Pollinations API endpoint
        encoded_prompt = requests.utils.quote(prompt)
        url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width={width}&height={height}&model=flux&nologo=true"
        
        print(f"Generating: {filename}")
        print(f"  URL: {url[:100]}...")
        
        response = requests.get(url, timeout=60)
        response.raise_for_status()
        
        output_path = OUTPUT_DIR / filename
        with open(output_path, 'wb') as f:
            f.write(response.content)
        
        file_size = output_path.stat().st_size / (1024 * 1024)  # MB
        print(f"  ✓ Saved: {output_path.name} ({file_size:.2f} MB)")
        return True
        
    except Exception as e:
        print(f"  ✗ Error: {e}")
        return False


def generate_with_perchance(prompt: str, filename: str) -> bool:
    """
    Alternative: Generate using Perchance AI
    Note: This requires browser automation or API access
    """
    # Placeholder - would need Selenium or API integration
    print(f"  ⊘ Perchance requires browser automation - skipped")
    return False


def main():
    print("=" * 60)
    print("Export Desi Website - AI Image Generation")
    print("=" * 60)
    print(f"Output directory: {OUTPUT_DIR}")
    print(f"Total images to generate: {len(IMAGE_PROMPTS)}")
    print()
    
    # Track results
    results = {"success": [], "failed": []}
    
    # Generate images
    for key, config in IMAGE_PROMPTS.items():
        print(f"\n[{len(results['success']) + len(results['failed']) + 1}/{len(IMAGE_PROMPTS)}] {config['description']}")
        
        # Try Pollinations first (most reliable free option)
        success = generate_with_pollinations(
            prompt=config['prompt'],
            filename=config['filename']
        )
        
        if success:
            results["success"].append(key)
        else:
            results["failed"].append(key)
        
        # Rate limiting - be respectful
        time.sleep(2)
    
    # Summary
    print("\n" + "=" * 60)
    print("GENERATION COMPLETE")
    print("=" * 60)
    print(f"✓ Success: {len(results['success'])}")
    print(f"✗ Failed: {len(results['failed'])}")
    
    if results["success"]:
        print(f"\nGenerated images saved to: {OUTPUT_DIR}")
        print("\nNext steps:")
        print("1. Review generated images in the output directory")
        print("2. Copy/move images to appropriate locations in src/assets or dist/images")
        print("3. Update component image references in React components")
    
    if results["failed"]:
        print(f"\nFailed to generate: {', '.join(results['failed'])}")
        print("You can manually generate these using the prompts in IMAGE_PROMPTS")


if __name__ == "__main__":
    main()
