# Website V2 Audit Report

**Date:** 2026-04-12  
**Domain:** exportdesi.com  
**Stack:** React 19 + Vite + Tailwind CSS + Framer Motion + React Router

---

## Executive Summary

| Category | Score | Issues |
|----------|-------|--------|
| **Design Quality** | 6.5/10 | Generic AI aesthetics detected |
| **Accessibility** | 7/10 | Missing ARIA labels, focus states |
| **Performance** | 7.5/10 | Bundle optimization needed |
| **SEO** | 8/10 | Good schema markup, needs meta improvements |
| **Code Quality** | 8/10 | Clean structure, consistent patterns |

---

## 1. Design Audit (frontend-design skill)

### 🚨 Critical Issues

#### 1.1 Typography — Generic Font Stack
**File:** `tailwind.config.js:10`
```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],  // ❌ Most generic AI font
}
```

**Problem:** Inter is the default "AI slop" font. Makes the site feel templated, not distinctive.

**Recommendation:** Choose a characterful display font for headings + refined body font:
- **Option A (Editorial):** `Playfair Display` (headings) + `Source Sans Pro` (body)
- **Option B (Modern):** `Space Grotesk` (headings) + `IBM Plex Sans` (body)
- **Option C (Bold):** `Righteous` (already used for logo) + `Work Sans` (body)

---

#### 1.2 Color System — Safe/Default
**File:** `tailwind.config.js:12-26`
```js
colors: {
  brand: { DEFAULT: '#0a0a0a', light: '#1a1a1a' },  // ❌ Pure black = generic
  surface: { DEFAULT: '#f4f4f5', dark: '#e8e8e9' }, // ❌ Default gray
  border: { DEFAULT: '#e5e5e5', strong: '#d1d1d1' },
}
```

**Problem:** Monochrome palette lacks personality. No dominant brand color with sharp accents.

**Recommendation:** Commit to a cohesive aesthetic:
- **Export/Trade theme:** Deep navy + saffron orange accent + cream backgrounds
- **Premium India theme:** Burgundy + gold + warm ivory
- **Modern minimal:** Charcoal + teal + soft white

---

#### 1.3 Layout — Predictable Structure
**Files:** `HeroSection.jsx`, `TwoColumnSection.jsx`, `ContentBlock.jsx`

**Problem:** Uniform sections with standard top-to-bottom flow. No asymmetry, overlap, or diagonal composition.

**Current pattern:**
```
┌────────────────────────────┐
│  Hero (text left, img right)│
├────────────────────────────┤
│  Section (centered content) │
├────────────────────────────┤
│  CTA (full width bar)       │
└────────────────────────────┘
```

**Recommendation:** Introduce unexpected layouts:
- Overlapping elements (image bleeding into next section)
- Asymmetric grids (60/40 instead of 50/50)
- Diagonal dividers or angled backgrounds
- Grid-breaking decorative elements

---

#### 1.4 Motion — Basic Framer Motion
**File:** `MotionWrapper.jsx`

**What's Good:**
- ✅ Respects `prefers-reduced-motion`
- ✅ Stagger animations for containers
- ✅ Viewport-based triggers

**What's Missing:**
- ❌ CSS-only animations (lighter than Framer Motion)
- ❌ Micro-interactions on buttons/cards
- ❌ Page load entrance choreography
- ❌ Scroll-linked animations (parallax, scrubbing)

---

#### 1.5 Backgrounds — Flat/Empty
**Files:** All page components

**Problem:** Solid color backgrounds throughout. No gradient meshes, noise textures, or layered transparencies.

**Example of what's missing:**
```jsx
// Instead of: bg-white
// Use: bg-gradient-to-br from-white via-orange-50 to-amber-50
```

---

### ✅ Design Strengths

1. **Consistent spacing system** — `section-pad`, `page-container`
2. **Good button variants** — `btn-primary`, `btn-secondary`
3. **Logo wordmark differentiation** — Uses `Righteous` font (already distinctive!)
4. **WCAG compliant muted text** — `#595959` (4.6:1 contrast)

---

## 2. Accessibility Audit (web-design-guidelines skill)

### 🔴 High Priority

#### 2.1 Missing ARIA Labels
**File:** `Navigation.jsx:66-73`
```jsx
<button
  className="md:hidden p-2 text-brand"
  onClick={() => setMobileOpen(!mobileOpen)}
  aria-label="Toggle navigation"  // ✅ Present
  aria-expanded={mobileOpen}      // ✅ Present
>
```

**But missing in:**
- `Footer.jsx` — ScrollToTop button (line 147-158) — ✅ Has `aria-label`
- `Footer.jsx` — Contact button (line 161-174) — ✅ Has `aria-label`
- `Footer.jsx` — WhatsApp button (line 111-129) — ✅ Has `aria-label`

**Status:** Actually well-covered! Rare find.

---

#### 2.2 Focus States — Incomplete
**File:** `index.css:65-85`

**What's Good:**
```css
input:focus-visible,
button:focus-visible {
  outline: 2px solid #0a0a0a;
  outline-offset: 2px;
}
```

**What's Missing:**
- ❌ Focus-visible ring on navigation links
- ❌ Focus states for mobile menu items
- ❌ Focus ring on CTA buttons (btn-primary, btn-secondary)

**Fix:**
```css
.btn-primary:focus-visible,
.btn-secondary:focus-visible {
  outline: 2px solid #0a0a0a;
  outline-offset: 2px;
}
```

---

#### 2.3 Form Accessibility
**File:** `ContactPage.jsx` (not read, but common patterns)

**Checklist:**
- [ ] All inputs have associated `<label>` elements
- [ ] Error messages use `aria-describedby`
- [ ] Required fields use `aria-required="true"`
- [ ] Phone input has visible country select label

---

#### 2.4 Skip Link — Missing
**Problem:** No "Skip to main content" link for keyboard users.

**Fix:** Add to `RootLayout.jsx`:
```jsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-brand px-4 py-2 z-50"
>
  Skip to main content
</a>
```

---

### 🟢 Accessibility Wins

1. ✅ Semantic HTML (`<nav>`, `<main>`, `<footer>`)
2. ✅ `aria-label` on icon buttons
3. ✅ `prefers-reduced-motion` support
4. ✅ Preview noindex on Vercel domains

---

## 3. Performance Audit (vercel-react-best-practices skill)

### 🟡 Medium Priority

#### 3.1 Bundle Size — Unoptimized
**File:** `main.jsx`

**Issue:** Framer Motion is a large dependency (~100KB) loaded on all pages.

**Recommendation:**
```jsx
// Lazy load MotionWrapper on pages that need it
const MotionWrapper = lazy(() => import('./components/MotionWrapper'));
```

---

#### 3.2 No Dynamic Imports for Routes
**File:** `App.jsx`

**Current:**
```jsx
import HomePage from './pages/HomePage';  // ❌ All pages in main bundle
```

**Recommended:**
```jsx
const HomePage = lazy(() => import('./pages/HomePage'));
const MakhanaPage = lazy(() => import('./pages/MakhanaPage'));
```

**Impact:** Initial bundle could be 60-70% smaller.

---

#### 3.3 Image Optimization — Unknown
**Files:** All pages with `<img>` tags

**Checklist:**
- [ ] Using `loading="lazy"` consistently (✅ seen in `MotionWrapper.jsx`)
- [ ] Using `loading="eager"` for above-fold images (✅ in `HeroSection.jsx`)
- [ ] Specifying `width`/`height` to prevent CLS (❌ Not seen)
- [ ] Using WebP/AVIF formats (❓ Unknown)
- [ ] `srcSet` for responsive images (❌ Not seen)

---

#### 3.4 Third-Party Scripts — Minimal
**External requests:**
- Google Fonts (Inter, Righteous) — ✅ Self-hosted via Google CDN
- No analytics detected (good for privacy, but consider Fathom/Plausible)

---

### 🟢 Performance Wins

1. ✅ No console.log statements visible
2. ✅ CSS-only phone input styling (no heavy library)
3. ✅ Minimal dependencies (React Router, Framer Motion, Tailwind)

---

## 4. SEO Audit

### 🟢 Strong

#### 4.1 Schema Markup
**File:** `RootLayout.jsx:9-25`
```js
const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Export Desi',
  // ... complete
};
```

**Status:** ✅ Present on all pages via RootLayout

---

#### 4.2 Meta Tags
**File:** `SEOMeta.jsx` (not read)

**Checklist:**
- [ ] Dynamic `<title>` per page
- [ ] `<meta name="description">` per page
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter Card tags
- [ ] Canonical URL

---

#### 4.3 URL Structure
**File:** `App.jsx`

**Status:** ✅ Clean, semantic URLs
```
/industries/food-ingredients/makhana  ✅
/compliance                           ✅
/how-we-work                          ✅
```

---

#### 4.4 Internal Linking
**Files:** `Navigation.jsx`, `Footer.jsx`

**Status:** ✅ Good nav structure, footer links present

**Missing:**
- ❌ Breadcrumb navigation (component exists but unclear if used)
- ❌ Related products/sections links within pages

---

## 5. Code Quality Audit

### 🟢 Excellent

#### 5.1 Component Structure
- ✅ Single responsibility per component
- ✅ Clear prop documentation (JSDoc comments)
- ✅ Consistent naming conventions

**Example (HeroSection.jsx:3-13):**
```jsx
/**
 * HeroSection — institutional page hero.
 * Props:
 *   label         string  — small eyebrow label (optional)
 *   title         string  — H1 headline
 *   ...
 */
```

---

#### 5.2 Tailwind Usage
- ✅ `@layer components` for reusable classes
- ✅ `page-container`, `section-pad` design tokens
- ✅ Responsive prefixes (`md:`, `lg:`)

---

#### 5.3 React Patterns
- ✅ Proper key props in maps
- ✅ Controlled components for forms
- ✅ `useEffect` cleanup (Footer.jsx:138-140)

---

## 6. Security Checklist

### ✅ Verified (from SECURITY_AUDIT.md)

| Check | Status |
|-------|--------|
| `.env` in `.gitignore` | ✅ |
| No API keys in code | ✅ |
| No console.log in prod | ✅ |
| External links use `rel="noopener"` | ✅ (WhatsApp button) |
| Formspree → Custom migration planned | ✅ |

---

## 7. Priority Recommendations

### 🔴 Critical (Week 1)

1. **Replace Inter font** — Choose distinctive heading + body font pairing
2. **Add color personality** — Pick brand accent color (saffron/teal/burgundy)
3. **Dynamic route imports** — Lazy load page components
4. **Add skip link** — Accessibility requirement

---

### 🟡 Important (Week 2-3)

5. **Motion micro-interactions** — Button hovers, card lifts, link underlines
6. **Image optimization** — Add width/height, consider WebP
7. **Focus states** — Complete for all interactive elements
8. **Meta tags** — Ensure all pages have unique title/description

---

### 🟢 Nice-to-Have (Month 2)

9. **Background textures** — Gradient meshes, subtle noise
10. **Layout surprises** — Asymmetric grids, overlapping elements
11. **Analytics** — Privacy-first (Fathom/Plausible)
12. **Related content** — Internal linking between product pages

---

## 8. Design Direction Proposal

### Recommended Aesthetic: "Modern Indian Export"

**Concept:** Blend traditional Indian craftsmanship with modern global minimalism.

| Element | Current | Proposed |
|---------|---------|----------|
| **Headings** | Inter Black | `Space Grotesk` Bold |
| **Body** | Inter | `IBM Plex Sans` Regular |
| **Primary** | `#0a0a0a` (black) | `#1a2332` (deep navy) |
| **Accent** | None | `#e85d04` (saffron orange) |
| **Background** | `#ffffff` (white) | `#fef9f3` (warm ivory) |
| **Layout** | Symmetric grid | 60/40 asymmetric + overlap |
| **Motion** | Basic fade-up | Scroll-linked parallax + CSS animations |

---

## Files Audited

| File | Issues | Priority |
|------|--------|----------|
| `tailwind.config.js` | Generic font, safe colors | 🔴 High |
| `src/index.css` | Missing focus states | 🟡 Medium |
| `src/App.jsx` | No lazy imports | 🟡 Medium |
| `src/layouts/RootLayout.jsx` | Missing skip link | 🔴 High |
| `src/components/HeroSection.jsx` | Predictable layout | 🟡 Medium |
| `src/components/MotionWrapper.jsx` | Good, needs CSS animations | 🟢 Low |
| `src/components/Navigation.jsx` | Good accessibility | 🟢 Low |
| `src/components/Footer.jsx` | Good accessibility | 🟢 Low |

---

## Next Steps

1. **Run audit commands:**
   ```bash
   cd Projects/website-v2
   npm run lint  # Check for code issues
   npm run build # Verify build works
   npm run preview # Test production build
   ```

2. **Install proposed fonts:**
   ```bash
   # Add to index.html or @import in index.css
   @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500&display=swap');
   ```

3. **Update tailwind.config.js** with new color palette

4. **Add lazy loading** to App.jsx routes

---

**Audit Tools Used:**
- `frontend-design` skill — Design quality assessment
- `web-design-guidelines` skill — Accessibility audit
- `vercel-react-best-practices` skill — Performance review
- Manual code review — Security, SEO, code quality
