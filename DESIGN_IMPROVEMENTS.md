# Website V2 Design Improvements Plan

**Date:** 2026-04-12  
**Goal:** Elevate design quality while preserving brand identity

---

## Brand Preservation Decisions

### ✅ What Stays (Owner Approved)

| Element | Decision | Reason |
|---------|----------|--------|
| **Black & White UI** | KEEP | Logo provides the color; clean monochrome = professional |
| **Logo Font (Righteous)** | KEEP | Already distinctive, matches brand identity |
| **Color Images** | KEEP | Product photography adds warmth |

### 🎨 What We'll Improve (Without Adding Color)

Instead of adding brand colors, we'll elevate through:

1. **Typography hierarchy** — More contrast between heading/body fonts
2. **Spatial composition** — Unexpected layouts, asymmetry, overlap
3. **Motion design** — Micro-interactions, scroll-linked animations
4. **Background depth** — Subtle textures, gradients (still monochrome)
5. **Focus states** — Complete accessibility coverage

---

## Priority 1: Typography Upgrade (Critical)

### Current State
```css
/* tailwind.config.js */
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

**Problem:** Inter is functional but generic. Used by 80%+ of AI-generated UIs.

### Recommended: Keep Inter for Body, Upgrade Headings

**Option A — Subtle Upgrade (Minimal Change)**
```css
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],  // NEW
}
```
- `Manrope` — Modern, geometric, slightly more character than Inter
- Similar enough to feel cohesive, different enough to feel intentional

**Option B — Editorial Contrast**
```css
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['DM Serif Display', 'serif'],  // NEW — elegant serif
}
```
- High contrast = instant sophistication
- Works beautifully with black/white aesthetic
- "Export/Trade" feeling (like financial times, Bloomberg)

**Option C — Modern Geometric**
```css
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Space Grotesk', 'system-ui', 'sans-serif'],  // NEW
}
```
- Quirky geometric sans with personality
- Tech-forward, modern
- Still feels "clean" like Inter

### Implementation (Once Option Chosen)

**Step 1:** Add to `index.css:1`
```css
/* Option A */
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&display=swap');

/* Option B */
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');

/* Option C */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');
```

**Step 2:** Update `tailwind.config.js:8-11`
```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Manrope', 'system-ui', 'sans-serif'],  // or chosen font
},
```

**Step 3:** Apply to headings in components
```jsx
// Instead of className="text-4xl font-black"
// Use: className="text-4xl font-display font-bold"
```

---

## Priority 2: Focus States (Accessibility — Critical)

### Current State
`index.css:65-85` — Focus states exist for inputs, missing for buttons/links.

### Add to `index.css:104` (after `.btn-secondary`)

```css
/* Complete focus state coverage */
.btn-primary:focus-visible,
.btn-secondary:focus-visible {
    outline: 2px solid #0a0a0a;
    outline-offset: 2px;
}

/* Navigation links */
nav a:focus-visible {
    outline: 2px solid #0a0a0a;
    outline-offset: 2px;
}

/* Mobile menu items */
nav button:focus-visible {
    outline: 2px solid #0a0a0a;
    outline-offset: 2px;
}
```

---

## Priority 3: Skip Link (Accessibility — Critical)

### Add to `RootLayout.jsx:41` (inside return, before Helmet)

```jsx
{/* Skip Link for keyboard users */}
<a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-brand px-4 py-2 z-50 shadow-md rounded"
>
    Skip to main content
</a>
```

### Update `RootLayout.jsx:53`
```jsx
<main className="flex-1" id="main-content">  {/* Add id */}
    <Outlet />
</main>
```

---

## Priority 4: Lazy Loading Routes (Performance — High)

### Update `App.jsx`

```jsx
import { Suspense, lazy } from 'react';

// Lazy load all pages
const HomePage = lazy(() => import('./pages/HomePage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const FoodIngredientsPage = lazy(() => import('./pages/FoodIngredientsPage'));
const MakhanaPage = lazy(() => import('./pages/MakhanaPage'));
const TurmericPage = lazy(() => import('./pages/TurmericPage'));
const DehydratedPage = lazy(() => import('./pages/DehydratedPage'));
const HowWeWorkPage = lazy(() => import('./pages/HowWeWorkPage'));
const CompliancePage = lazy(() => import('./pages/CompliancePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const CompanyProfilePage = lazy(() => import('./pages/CompanyProfilePage'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Loading fallback
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-brand">Loading...</div>
    </div>
);

export default function App() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route index element={<HomePage />} />
                    {/* ... rest of routes unchanged */}
                </Route>
            </Routes>
        </Suspense>
    );
}
```

---

## Priority 5: Background Depth (Design — Medium)

### Add Subtle Gradients (Still Black/White)

**Add to `index.css:111` (before phone input styles)**

```css
/* Subtle background depth — maintains B&W but adds sophistication */
.bg-hero-gradient {
    background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
}

.bg-surface-gradient {
    background: linear-gradient(180deg, #f4f4f5 0%, #e8e8e9 100%);
}

.bg-dark-gradient {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

/* Subtle noise texture for depth (optional — use sparingly) */
.bg-noise {
    background-color: #fafafa;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-size: 128px 128px;
}
```

### Apply to Components

**HeroSection.jsx:23**
```jsx
const bg = background === 'surface' ? 'bg-surface-gradient' : 'bg-hero-gradient';
```

---

## Priority 6: Motion Micro-interactions (Design — Medium)

### Enhance `MotionWrapper.jsx`

**Add after existing exports (line 153)**

```jsx
// Button hover effect — subtle lift
export function MotionButton({ children, className = '' }) {
    const shouldReduceMotion = useReducedMotion();
    
    if (shouldReduceMotion) {
        return <button className={className}>{children}</button>;
    }
    
    return (
        <motion.button
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className={className}
        >
            {children}
        </motion.button>
    );
}

// Card with subtle shadow expansion
export function MotionCard({ children, className = '' }) {
    const shouldReduceMotion = useReducedMotion();
    
    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
```

---

## Priority 7: Image Improvements (Performance/SEO — Medium)

### Add Width/Height to Prevent CLS

**HeroSection.jsx:29-40**
```jsx
<img
    src={imageUrl}
    alt=""
    className="w-full h-full object-cover object-right select-none"
    width="600"
    height="400"
    loading="eager"
    fetchPriority="high"
/>
```

**MotionImage.jsx:128-133**
```jsx
<img
    src={src}
    alt={alt}
    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
    loading="lazy"
    width="400"
    height="300"
/>
```

---

## Priority 8: Layout Surprises (Design — Low)

### Asymmetric Hero Layout

**HeroSection.jsx:26**
```jsx
{/* Change from symmetric to 60/40 split */}
<div className={imageUrl ? 'max-w-[55%] lg:max-w-[60%]' : 'max-w-2xl'}>
```

**HeroSection.jsx:30-32**
```jsx
{/* Add subtle overlap effect */}
<div
    className="absolute top-[-20px] bottom-0 right-0 hidden lg:flex items-center justify-end"
    style={{ width: '45%' }}
    aria-hidden="true"
>
```

---

## Implementation Checklist

### Week 1 (Critical)
- [ ] Choose heading font option (A/B/C)
- [ ] Add skip link to RootLayout
- [ ] Add focus states to index.css
- [ ] Lazy load routes in App.jsx

### Week 2 (Important)
- [ ] Add background gradients
- [ ] Enhance MotionWrapper with micro-interactions
- [ ] Add width/height to images

### Week 3 (Polish)
- [ ] Implement asymmetric layouts
- [ ] Test with keyboard navigation
- [ ] Run Lighthouse audit

---

## Files to Modify

| File | Changes | Priority |
|------|---------|----------|
| `src/index.css` | Focus states, gradients | 🔴 High |
| `src/layouts/RootLayout.jsx` | Skip link, main id | 🔴 High |
| `src/App.jsx` | Lazy imports, Suspense | 🔴 High |
| `src/components/MotionWrapper.jsx` | Micro-interactions | 🟡 Medium |
| `src/components/HeroSection.jsx` | Image attrs, layout | 🟡 Medium |
| `tailwind.config.js` | Font family | 🔴 High |

---

## Design Discussion Points

### For Owner Review

1. **Heading Font Choice** — Which personality fits Export Desi?
   - A: `Manrope` — Subtle, modern, safe
   - B: `DM Serif Display` — Editorial, premium, distinctive
   - C: `Space Grotesk` — Tech-forward, geometric, bold

2. **Background Texture** — Keep it minimal or add subtle noise?
   - Current lean: Very subtle gradients only (no noise)

3. **Motion Intensity** — How "alive" should the site feel?
   - Current: Conservative fade-up
   - Proposed: Subtle lifts, shadow expansion, scroll-linked

4. **Layout Asymmetry** — How bold?
   - Option 1: Keep symmetric (current)
   - Option 2: 60/40 split with slight overlap
   - Option 3: More dramatic (diagonal dividers, grid-breaking)

---

**Next:** Review options above, then implement chosen changes.
