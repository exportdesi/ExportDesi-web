#!/bin/bash
# Download all Unsplash images used in the website
# Run with: bash download-images.sh

BASE_DIR="public/images/downloaded"

# Create directories
mkdir -p "$BASE_DIR/products/makhana"
mkdir -p "$BASE_DIR/products/turmeric"
mkdir -p "$BASE_DIR/products/dehydrated"
mkdir -p "$BASE_DIR/blog"
mkdir -p "$BASE_DIR/about"
mkdir -p "$BASE_DIR/company-profile"

echo "📥 Downloading Unsplash images..."
echo ""

# Counter
success=0
failed=0

# Function to download image
download() {
    local url="$1"
    local output="$2"

    if curl -sL -A "Mozilla/5.0" "$url" -o "$output"; then
        if [ -s "$output" ]; then
            echo "✅ $output"
            ((success++))
        else
            echo "❌ $output (empty file)"
            ((failed++))
        fi
    else
        echo "❌ $output (download failed)"
        ((failed++))
    fi
}

# Makhana
download "https://images.unsplash.com/photo-1606851096778-8a75441979ae?w=1200&h=900&fit=crop&q=80" "$BASE_DIR/products/makhana/makhana-hero.jpg"
download "https://images.unsplash.com/photo-1626125345510-0b71848ca92c?w=800&h=600&fit=crop&q=80" "$BASE_DIR/products/makhana/makhana-grade-comparison.jpg"
download "https://images.unsplash.com/photo-1599307767118-26b08808376f?w=800&h=600&fit=crop&q=80" "$BASE_DIR/products/makhana/makhana-quality.jpg"
download "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80" "$BASE_DIR/products/makhana/packaging-bulk.jpg"
download "https://images.unsplash.com/photo-1581091226825-a6a2a5aeece3?w=800&h=600&fit=crop&q=80" "$BASE_DIR/products/makhana/processing-facility.jpg"
download "https://images.unsplash.com/photo-1578575437130-527eed58ec44?w=800&h=600&fit=crop&q=80" "$BASE_DIR/products/makhana/container-loading.jpg"

# Turmeric
download "https://images.unsplash.com/photo-1596040033229-a9821eb5d91b?w=1200&h=900&fit=crop&q=80" "$BASE_DIR/products/turmeric/turmeric-hero.jpg"
download "https://images.unsplash.com/photo-1615485925763-867862780c32?w=800&h=600&fit=crop&q=80" "$BASE_DIR/products/turmeric/turmeric-product.jpg"

# Dehydrated
download "https://images.unsplash.com/photo-1615485925763-867862780c32?w=1200&h=900&fit=crop&q=80" "$BASE_DIR/products/dehydrated/dehydrated-hero.jpg"

# Blog
download "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=900&fit=crop&q=80" "$BASE_DIR/blog/blog-hero.jpg"

# About
download "https://images.unsplash.com/photo-1606851096778-8a75441979ae?w=800&h=600&fit=crop&q=80" "$BASE_DIR/about/about-bihar.jpg"
download "https://images.unsplash.com/photo-1596040033229-a9821eb5d91b?w=800&h=600&fit=crop&q=80" "$BASE_DIR/about/about-gujarat.jpg"
download "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80" "$BASE_DIR/about/about-export.jpg"

# Home
download "https://images.unsplash.com/photo-1596040033229-a9821eb5d91b?w=1200&h=900&fit=crop&q=80" "$BASE_DIR/home-hero.jpg"

# Company Profile
download "https://images.unsplash.com/photo-1621255554851-9a254f0e3e93?w=400&h=250&fit=crop&auto=format" "$BASE_DIR/company-profile/profile-1.jpg"
download "https://images.unsplash.com/photo-1615485500704-8e99099928b3?w=400&h=250&fit=crop&auto=format" "$BASE_DIR/company-profile/profile-2.jpg"
download "https://images.unsplash.com/photo-1615485290382-441e4d099928b3?w=400&h=250&fit=crop&auto=format" "$BASE_DIR/company-profile/profile-3.jpg"
download "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=250&fit=crop&auto=format" "$BASE_DIR/company-profile/profile-4.jpg"

echo ""
echo "📊 Summary:"
echo "   ✅ Downloaded: $success"
echo "   ❌ Failed: $failed"
echo "   📁 Saved to: $BASE_DIR"
