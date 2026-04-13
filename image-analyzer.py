#!/usr/bin/env python3
"""
Image Analysis System for Export Desi
Analyzes website images and provides recommendations
"""

import os
import sys
from pathlib import Path
from PIL import Image
from PIL.ExifTags import TAGS
import json
from datetime import datetime

class ImageAnalyzer:
    def __init__(self, image_path):
        self.image_path = Path(image_path)
        self.analysis = {}
        
    def analyze(self):
        """Complete image analysis"""
        try:
            with Image.open(self.image_path) as img:
                self.analysis = {
                    'filename': self.image_path.name,
                    'path': str(self.image_path),
                    'format': img.format,
                    'mode': img.mode,
                    'size': {
                        'width': img.width,
                        'height': img.height,
                        'aspect_ratio': round(img.width / img.height, 2)
                    },
                    'file_size_mb': round(self.image_path.stat().st_size / (1024 * 1024), 2),
                    'dpi': img.info.get('dpi', 'Unknown'),
                    'color_depth': self._get_color_depth(img),
                    'is_optimized': self._check_optimization(),
                    'recommendations': self._generate_recommendations(img),
                    'suitable_for': self._determine_use_cases(img)
                }
                return self.analysis
        except Exception as e:
            return {'error': str(e), 'path': str(self.image_path)}
    
    def _get_color_depth(self, img):
        """Determine color depth"""
        mode_depth = {
            '1': '1-bit (Black & White)',
            'L': '8-bit (Grayscale)',
            'P': '8-bit (Indexed Color)',
            'RGB': '24-bit (16.7M colors)',
            'RGBA': '32-bit (16.7M + Alpha)',
            'CMYK': '32-bit (Print)',
            'I': '32-bit (Integer)',
            'F': '32-bit (Float)'
        }
        return mode_depth.get(img.mode, f'{img.mode} (Unknown)')
    
    def _check_optimization(self):
        """Check if image is web-optimized"""
        size_mb = self.image_path.stat().st_size / (1024 * 1024)
        
        if size_mb > 5:
            return {'status': 'NOT OPTIMIZED', 'issue': f'File too large ({round(size_mb, 1)}MB). Should be under 500KB for web.'}
        elif size_mb > 1:
            return {'status': 'NEEDS COMPRESSION', 'issue': f'Large file ({round(size_mb, 1)}MB). Consider compressing to under 500KB.'}
        else:
            return {'status': 'OPTIMIZED', 'issue': None}
    
    def _generate_recommendations(self, img):
        """Generate recommendations"""
        recs = []
        size_mb = self.image_path.stat().st_size / (1024 * 1024)
        
        # File size check
        if size_mb > 2:
            recs.append(f"⚠️ CRITICAL: File is {round(size_mb, 1)}MB. Compress to under 500KB for web use.")
        elif size_mb > 0.5:
            recs.append(f"⚡ Compress file ({round(size_mb, 2)}MB) to improve loading speed.")
        
        # Dimensions check
        if img.width < 800:
            recs.append(f"📏 Image is small ({img.width}x{img.height}px). Consider larger source for hero banners.")
        elif img.width > 3000:
            recs.append(f"📐 Image is very large ({img.width}px). Resize to 1920px for web use.")
        
        # Format check
        if img.format == 'PNG' and size_mb > 1:
            recs.append("🔄 Convert PNG to JPG for photos (smaller file size). Keep PNG only if transparency needed.")
        elif img.format == 'BMP' or img.format == 'TIFF':
            recs.append(f"🔄 Convert {img.format} to JPG for web compatibility.")
        
        # Aspect ratio check
        ratio = img.width / img.height
        if 1.9 < ratio < 2.1:  # ~16:9
            recs.append("✅ Good aspect ratio (16:9) for hero banners and widescreen displays.")
        elif 1.3 < ratio < 1.4:  # ~4:3
            recs.append("✅ Good aspect ratio (4:3) for product cards and galleries.")
        elif ratio < 0.8 or ratio > 2.5:
            recs.append("⚠️ Unusual aspect ratio. May need cropping for standard web layouts.")
        
        if not recs:
            recs.append("✅ Image looks good for web use!")
        
        return recs
    
    def _determine_use_cases(self, img):
        """Determine suitable use cases"""
        use_cases = []
        size_mb = self.image_path.stat().st_size / (1024 * 1024)
        
        if img.width >= 1920 and img.height >= 1080 and size_mb < 1:
            use_cases.append("🎯 Homepage Hero Banner")
        
        if img.width >= 800 and img.height >= 600:
            use_cases.append("📦 Product Page Hero")
        
        if img.width >= 400 and img.height >= 300:
            use_cases.append("🖼️ Product Gallery Thumbnail")
        
        if img.width >= 1200:
            use_cases.append("📱 High-Res Download / Zoom")
        
        if size_mb > 2:
            use_cases.append("❌ NOT SUITABLE for web (too large)")
            use_cases.append("✅ Use for: Print materials, internal documentation")
        
        return use_cases
    
    def print_report(self):
        """Print formatted report"""
        if 'error' in self.analysis:
            print(f"❌ Error analyzing {self.analysis['path']}: {self.analysis['error']}")
            return
        
        print("\n" + "="*70)
        print(f"📷 IMAGE ANALYSIS REPORT")
        print("="*70)
        print(f"\n📝 Filename: {self.analysis['filename']}")
        print(f"📍 Location: {self.analysis['path']}")
        print(f"\n📊 BASIC INFO:")
        print(f"   Format: {self.analysis['format']}")
        print(f"   Dimensions: {self.analysis['size']['width']} x {self.analysis['size']['height']} px")
        print(f"   Aspect Ratio: {self.analysis['size']['aspect_ratio']}")
        print(f"   File Size: {self.analysis['file_size_mb']} MB")
        print(f"   Color Mode: {self.analysis['color_depth']}")
        print(f"   DPI: {self.analysis['dpi']}")
        
        print(f"\n🔍 OPTIMIZATION STATUS:")
        status = self.analysis['is_optimized']
        if status['status'] == 'OPTIMIZED':
            print(f"   ✅ {status['status']}")
        else:
            print(f"   ⚠️  {status['status']}")
            if status['issue']:
                print(f"      Issue: {status['issue']}")
        
        print(f"\n💡 RECOMMENDATIONS:")
        for rec in self.analysis['recommendations']:
            print(f"   {rec}")
        
        print(f"\n🎯 SUITABLE FOR:")
        for use in self.analysis['suitable_for']:
            print(f"   {use}")
        
        print("\n" + "="*70 + "\n")


def analyze_folder(folder_path):
    """Analyze all images in a folder"""
    folder = Path(folder_path)
    
    if not folder.exists():
        print(f"❌ Folder not found: {folder_path}")
        return
    
    image_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff'}
    images = [f for f in folder.rglob('*') if f.suffix.lower() in image_extensions]
    
    if not images:
        print(f"📂 No images found in {folder_path}")
        return
    
    print(f"\n📂 Analyzing {len(images)} images in {folder_path}...\n")
    
    results = []
    for img_path in images:
        analyzer = ImageAnalyzer(img_path)
        analysis = analyzer.analyze()
        analyzer.print_report()
        results.append(analysis)
    
    # Save summary report
    report_path = folder / 'image-analysis-report.json'
    with open(report_path, 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"📄 Full report saved to: {report_path}")
    
    # Print summary
    total_size = sum(r.get('file_size_mb', 0) for r in results if 'error' not in r)
    not_optimized = sum(1 for r in results if r.get('is_optimized', {}).get('status') != 'OPTIMIZED')
    
    print("\n" + "="*70)
    print("📊 SUMMARY")
    print("="*70)
    print(f"   Total Images: {len(results)}")
    print(f"   Total Size: {round(total_size, 2)} MB")
    print(f"   Need Optimization: {not_optimized}")
    print("="*70 + "\n")


def main():
    """Main function"""
    if len(sys.argv) < 2:
        print("Usage:")
        print("  python image-analyzer.py <image_path>     # Analyze single image")
        print("  python image-analyzer.py <folder_path>    # Analyze all images in folder")
        print("\nExamples:")
        print('  python image-analyzer.py "public/images/products/makhana/hero.png"')
        print('  python image-analyzer.py "public/images/products/"')
        sys.exit(1)
    
    path = Path(sys.argv[1])
    
    if path.is_file():
        # Analyze single image
        analyzer = ImageAnalyzer(path)
        analyzer.analyze()
        analyzer.print_report()
    elif path.is_dir():
        # Analyze folder
        analyze_folder(path)
    else:
        print(f"❌ Path not found: {path}")


if __name__ == '__main__':
    main()
