# Export Desi - Image Sourcing Guide for Launch

**Created:** April 7, 2026
**Status:** Ready for manual image sourcing

---

## Quick Start (15 minutes)

Search these terms on **Pexels**, **Pixabay**, or **Unsplash**. Download 1-2 images per row.

| Product | Search Term 1 | Search Term 2 | Search Term 3 |
|---------|---------------|---------------|---------------|
| **Makhana** | `lotus seeds` | `dried lotus seeds` | `indian snacks white` |
| **Turmeric** | `turmeric powder` | `turmeric fingers` | `indian spices yellow` |
| **Dehydrated Onion** | `dried onion flakes` | `dehydrated vegetables` | `onion powder` |
| **Dehydrated Garlic** | `dried garlic` | `garlic granules` | `garlic powder` |
| **Moringa** | `green powder` | `matcha powder` (as proxy) | `moringa leaves` |
| **Warehouse** | `warehouse interior` | `food warehouse` | `industrial warehouse` |
| **Packaging** | `kraft paper bags` | `bulk food packaging` | `25kg bags` |

---

## Direct Search Links

### Additional Free Stock Sites
- [Good Free Photos](https://www.goodfreephotos.com/) — Free stock photos, no attribution required
- [Picture Cave](https://www.picturecave.com/) — Free commercial use photos
- [StockPhotos.io](http://ww1.stockphotos.io/) — Curated free stock photos

### Makhana / Fox Nuts
- [Pexels: lotus seeds](https://www.pexels.com/search/lotus%20seeds/)
- [Pixabay: lotus seeds](https://pixabay.com/images/search/lotus%20seeds/)
- [Unsplash: lotus seeds](https://unsplash.com/s/photos/lotus%20seeds)

### Turmeric
- [Pexels: turmeric](https://www.pexels.com/search/turmeric/)
- [Pixabay: turmeric](https://pixabay.com/images/search/turmeric/)
- [Unsplash: turmeric](https://unsplash.com/s/photos/turmeric)

### Dehydrated Ingredients
- [Pexels: dried onion](https://www.pexels.com/search/dried%20onion/)
- [Pixabay: dried garlic](https://pixabay.com/images/search/dried%20garlic/)
- [Unsplash: dehydrated food](https://unsplash.com/s/photos/dehydrated%20food)

### Warehouse / Context
- [Pexels: warehouse](https://www.pexels.com/search/warehouse/)
- [Pixabay: warehouse](https://pixabay.com/images/search/warehouse/)
- [Unsplash: warehouse](https://unsplash.com/s/photos/warehouse)

---

## Image Requirements

### For Product Pages (Makhana, Turmeric, Dehydrated)

| Image Type | Dimensions | Count | Use |
|------------|------------|-------|-----|
| Hero | 900x700px | 1 per page | Top of page, behind title |
| Product Grid | 800x600px | 4 per page | Product close-ups |
| Process Grid | 800x600px | 2 per page | Facility, packaging |

### For Home Page
- Hero background: 900x700px (export/warehouse context)

---

## What to Look For

### Good Images ✅
- Natural lighting (not overly staged)
- White/neutral backgrounds
- Visible texture (powder granularity, makhana puff texture)
- Export context (warehouse, packaging, inspection tables)
- Indian origin cues (Kerala/Meghalaya for turmeric, Bihar for makhana if possible)

### Avoid ❌
- Heavy text overlays
- Watermarks
- Artificial styling (marble surfaces, studio lighting)
- Western kitchen contexts
- Fresh produce (we need dried/processed)

---

## After Downloading

1. **Rename files:**
   ```
   makhana-hero.jpg
   makhana-product-1.jpg
   makhana-product-2.jpg
   makhana-product-3.jpg
   makhana-product-4.jpg
   makhana-process-1.jpg
   makhana-process-2.jpg
   
   turmeric-hero.jpg
   turmeric-product-1.jpg
   ... (same pattern)
   
   dehydrated-hero.jpg
   ... (same pattern)
   ```

2. **Save to:**
   ```
   website-v2/public/images/products/makhana/
   website-v2/public/images/products/turmeric/
   website-v2/public/images/products/dehydrated/
   ```

3. **Update the page files:**
   - `src/pages/MakhanaPage.jsx` - Replace `MAKHANA_IMAGES` array
   - `src/pages/TurmericPage.jsx` - Replace `TURMERIC_IMAGES` array
   - `src/pages/DehydratedPage.jsx` - Replace `DEHYDRATED_IMAGES` array

---

## Current Placeholder Images (Working, Can Keep)

These Unsplash images are already in use and free to use:

**Makhana Page:**
- `https://images.unsplash.com/photo-1606851096778-8a75441979ae` (hero)
- `https://images.unsplash.com/photo-1626125345510-0b71848ca92c` (grade comparison)
- `https://images.unsplash.com/photo-1599307767118-26b08808376f` (quality)
- `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d` (packaging)

**Turmeric Page:**
- `https://images.unsplash.com/photo-1596040033229-a9821eb5d91b` (hero + product)

**Dehydrated Page:**
- `https://images.unsplash.com/photo-1615485925763-867862780c32` (product)
- `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d` (packaging)

**These work fine for launch.** Replace later with real product photos when available.

---

## AI Generation (Optional, Later)

Use the prompts in `export-desi-business/05_Sales_Marketing/product-catalog/image-prompts.md` with:
- Gemini web (free): https://gemini.google.com
- FAL.ai (paid, ~$0.05/image): https://fal.ai

---

## Checklist

- [ ] Download 7-10 images for Makhana page
- [ ] Download 7-10 images for Turmeric page
- [ ] Download 7-10 images for Dehydrated page
- [ ] Save to `public/images/products/[product]/`
- [ ] Update page files with new image paths
- [ ] Test build: `npm run build`
- [ ] Deploy to Vercel

---

**Next:** After images are in place, the site is ready for launch.
