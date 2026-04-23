# SEO / AEO Audit — exportdesi.com
**Date:** April 20, 2026  
**Auditor:** Claude (Cowork)  
**Scope:** Full site + Answer Engine Optimization (AEO/GEO)

---

## Executive Summary

Export Desi has a **solid technical SEO foundation** for a site that launched in 2024 — Helmet-driven per-page meta tags, JSON-LD structured data, a canonical strategy, sitemap, and an excellent `llms.txt` for AI crawlers. The biggest risk is the **React SPA architecture with no server-side rendering**, which means search engines and AI crawlers must execute JavaScript to see any content at all. Combined with a near-empty blog (1 post) and competitors publishing 5,000–8,000-word comprehensive guides, Export Desi is essentially invisible for the high-intent informational queries where B2B buyers do their research.

**Top 3 priorities:**
1. Add a minimum of 8–10 comprehensive AEO-optimized blog/guide pages covering buyer questions with FAQ schema — this is the single highest-ROI action.
2. Fix the homepage title tag (it currently appends "| Export Desi" twice, producing a 100+ character duplicate title).
3. Implement per-page keyword meta tags and expand the product schema on non-makhana product pages to match the depth of the Makhana page.

**Overall assessment:** Strong foundation, critical content gap. The technical scaffolding is ahead of most competitors in the space — the problem is that it's nearly empty of indexable content. Fix that, and this site could rank well within 3–6 months.

---

## 1. Keyword Opportunity Table

No SEO tool is connected, so volume signals are estimated from search result density, competitor targeting, and market data. Connect Ahrefs, Semrush, or Google Search Console for precise volume and position data.

| Keyword | Est. Difficulty | Opportunity | Est. Monthly Searches | Intent | Recommended Content Type |
|---|---|---|---|---|---|
| makhana exporter India | Medium | **High** | 500–1K | Commercial | Product page (exists, expand) |
| bulk fox nuts supplier India | Medium | **High** | 300–700 | Commercial | Product page / landing |
| buy makhana wholesale India | Medium | **High** | 400–800 | Transactional | Product page CTA |
| how to import makhana from India | Low | **High** | 600–1.2K | Informational | Blog post (exists — push it) |
| makhana grades 5 suta 6 suta 7 suta | Low | **High** | 200–500 | Informational | Blog / Product page expansion |
| makhana HS code export India | Low | **High** | 300–600 | Informational | Blog post |
| dehydrated onion exporter India | Medium | **High** | 800–2K | Commercial | Product page (expand) |
| dehydrated garlic powder supplier India | Medium | **High** | 500–1K | Commercial | Product page (expand) |
| Lakadong turmeric exporter | Low | **High** | 200–500 | Commercial | Product page + blog |
| moringa powder bulk exporter India | Low–Medium | **High** | 400–800 | Commercial | Product page (expand) |
| Indian food ingredients B2B export | Medium | **High** | 300–700 | Commercial | Homepage / pillar |
| APEDA certified food exporter India | Low | **Medium** | 150–400 | Commercial | Compliance/About page |
| makhana export price per kg India | Low | **Medium** | 400–900 | Informational | Blog post |
| dehydrated onion flakes vs powder | Low | **Medium** | 200–500 | Informational | Blog / product expansion |
| what is makhana fox nuts | Low | **Medium** | 2K–5K | Informational | Blog post / FAQ |
| turmeric curcumin content India supplier | Low | **Medium** | 300–600 | Informational | Blog + product |
| export management company India food | Medium | **Medium** | 200–500 | Commercial | Homepage / About |
| makhana FSSAI certification | Low | **Medium** | 100–300 | Informational | Blog + compliance page |
| moringa leaf powder USDA organic India | Low | **Medium** | 300–600 | Commercial | Product page |
| banana powder exporter India | Low | **Medium** | 150–400 | Commercial | New product page |
| GI tag makhana Bihar | Low | **Low** | 500–1K | Informational | Blog |
| jute bag exporter India bulk | Medium | **Low** | 400–900 | Commercial | Bags page (exists) |
| Indian spice exporter FSSAI APEDA | Low | **Low** | 100–250 | Commercial | Certifications section |
| phytosanitary certificate food export India | Low | **Low** | 200–500 | Informational | How We Work / Blog |

---

## 2. On-Page Issues

### Critical

| Page | Issue | Severity | Recommended Fix |
|---|---|---|---|
| All pages | **React SPA — no SSR/SSG.** Search engines and AI crawlers (Perplexity, ChatGPT browsing) must fully render JavaScript to see any content. A CSR-only React app creates rendering delays and crawl budget risk — Google may cache a blank page if Googlebot's JS rendering queue is busy. | **Critical** | Migrate to Astro (static) or add Vite SSR / React Server Components. Alternatively use a pre-rendering service (prerender.io) or Vercel's Edge SSR. **This is the #1 technical SEO risk.** |
| Homepage | **Title tag duplicates "Export Desi."** `SEOMeta` appends `| Export Desi` to every title. HomePage already passes `"...| Export Desi"` as the title prop, resulting in: *"Bulk Indian Spice Exporter \| Makhana, Turmeric, Dehydrated \| APEDA Certified \| Export Desi \| Export Desi"* — 100+ chars, brand name twice. | **Critical** | Remove "Export Desi" from the `title` prop in `HomePage.jsx`. Let `SEOMeta` handle the brand suffix. Same audit needed on all pages. |
| Makhana, Dehydrated, Moringa, Turmeric, Bags pages | **Product schema missing `offers` price info.** `aggregateRating` on MakhanaPage uses `ratingCount: 1, reviewCount: 0` — Google may suppress or penalize schema with a rating based on no actual reviews. | **Critical** | Remove the `aggregateRating` block entirely until you have real reviews. Use the `getProductSchema()` utility from `schemaGenerator.js` consistently across all product pages with proper `offers` data. |
| All pages | **Same `keywords` meta tag on every page.** `SEOMeta.jsx` hardcodes one global keyword string regardless of page. While Google ignores keywords, Bing and some AI crawlers still read them. | **High** | Make `keywords` a prop in `SEOMeta` so each page can pass relevant terms. |
| SearchAction schema | **`potentialAction` target is `/contact?q=` which has no actual search.** Google may flag this as misleading structured data. | **High** | Either implement a real site search, or remove the `SearchAction` from the WebSite schema. |
| Blog post pages | **No `Article` schema.** BlogPost.jsx has no `Article` or `BlogPosting` JSON-LD — this is required for Google's "Top Stories" carousel and AI Overview citations for content. | **High** | Add `Article` schema to `BlogPost.jsx` with `datePublished`, `dateModified`, `author` (Person schema), `publisher` (Organization schema). |

### High

| Page | Issue | Severity | Recommended Fix |
|---|---|---|---|
| Sitemap | **Static `lastmod` dates.** All 13 URLs show `2026-04-15` — Google devalues static lastmod, reducing crawl frequency signals. Blog posts are not in the sitemap at all. | **High** | Generate sitemap dynamically at build time (use `vite-plugin-sitemap` or a build script). Add all blog post slugs with accurate publish dates. |
| How We Work | **No `HowTo` schema.** This page describes a step-by-step process — exactly what `HowTo` structured data is for. Missing an easy AEO win for "how does Indian food export work" queries. | **High** | Add `HowTo` schema with steps matching the page's process sections. |
| /info page | **Should be `noindex`.** The `/info` QR-code landing page is a visiting card shortcut — it's in the sitemap with `priority: 0.8`, which is higher than the About page. It adds no SEO value and wastes crawl budget. | **High** | Add `<meta name="robots" content="noindex, follow">` to InfoPage and remove from sitemap. |
| Compliance page | **No `FAQPage` schema.** Compliance information is exactly what buyers search for — "what certifications do Indian food exporters need?" Missing FAQ schema means missing People Also Ask boxes. | **High** | Extract Q&A pairs from compliance content and add `FAQPage` schema. |

### Medium

| Page | Issue | Severity | Recommended Fix |
|---|---|---|---|
| All pages | **No `hreflang` tags.** Site has English, German, and Spanish translations (i18next) but zero hreflang implementation. Google will treat all language variants as duplicate content. | **Medium** | Add `<link rel="alternate" hreflang="de">` etc. in SEOMeta or generate them server-side. Short-term: redirect i18n to separate URL prefixes (`/de/`, `/es/`) and add hreflang. |
| About page | **`Person` schema references `rajiv@exportdesi.com` publicly.** The founder email in the schema is exposed in the page source — privacy concern and spam magnet. | **Medium** | Remove the `email` field from the Person schema or replace with the generic contact address. |
| All product pages | **Images served without explicit `width` and `height` attributes.** Multiple product image components don't pass dimensions, causing Cumulative Layout Shift (CLS) — a Core Web Vital that directly affects rankings. | **Medium** | Audit all `<img>` and image component usages; ensure `width` and `height` props are set on all product images. |
| OG image | **Single global OG image (`/og-image.jpg`) used on all pages.** When Makhana page is shared on LinkedIn or WhatsApp, it shows the generic Export Desi banner instead of a makhana product photo. | **Medium** | Create product-specific OG images (1200×630) and pass the correct `image` prop to `SEOMeta` on each product page. |
| Twitter handle | **`@exportdesi` Twitter handle in SEOMeta but account status unknown.** If no Twitter/X account exists, this is just metadata noise; if it does exist, verify handle matches. | **Medium** | Confirm the X/Twitter handle exists and is active, or remove it from the template. |

### Low

| Page | Issue | Severity | Recommended Fix |
|---|---|---|---|
| All pages | **Preconnect to `https://images.unsplash.com` in `index.html`** even if no Unsplash images are used in production. Extra preconnect is wasted DNS resolution time. | **Low** | Remove preconnect to domains that aren't used in production. |
| Company Profile page | **Not enough SEO signal.** `/company-profile` appears to serve as a PDF download landing — check if the PDF itself is indexed and whether there's enough text content on the HTML page. | **Low** | Ensure the page has 200+ words of indexable text, not just an embedded PDF or download button. |
| Blog | **Only 1 post.** A blog with 1 post looks abandoned to both users and search engines. Thin content risk applies at the site level. | **Low** (now) → **High** (60 days) | Publish minimum 6 blog posts within 60 days (see Content Gap section). |

---

## 3. Content Gap Analysis

This is the most significant gap on the site. Competitors like Darnif Exim are publishing 6,000-word comprehensive buyer guides with pricing tables, HS codes, compliance checklists, and FAQ sections — the exact format that wins Google's featured snippets and AI Overviews. Export Desi has 1 blog post.

### Immediate Content Gaps (Missing Pages That Competitors Own)

| Topic / Keyword | Why It Matters | Format | Priority | Est. Effort |
|---|---|---|---|---|
| **Makhana grades explained (4 Suta to 7 Suta)** — "what are makhana grades", "5 suta vs 6 suta vs 7 suta makhana" | Buyers search grade specs before contacting — this is a qualification question. Darnif Exim ranks for this with a table. | Blog post + spec table | **High** | Moderate (half day) |
| **Makhana export price guide** — "makhana price per kg export India 2026" | High commercial intent. Buyers research price before reaching out. Being the source that publishes transparent pricing (even ranges) builds enormous trust. | Blog post with price table by grade | **High** | Moderate |
| **Dehydrated onion vs. garlic: forms, specs, and export guide** — "dehydrated onion flakes vs powder", "garlic granules supplier India" | Natural Dehydration and Joshi Spices rank for these. Export Desi has the product but no supporting content. | Product expansion + dedicated sub-pages | **High** | Substantial |
| **Lakadong turmeric: what it is and why it commands a premium** — "Lakadong turmeric curcumin content", "high curcumin turmeric supplier India" | Highly differentiated product. Almost no one else specifically positions on Lakadong for B2B export. Low competition, high value. | Blog post + product page expansion | **High** | Moderate |
| **How to import moringa powder from India** — "moringa powder bulk India", "organic moringa exporter" | Grenera, Terry Exports, and MoringaOrganicIndia dominate this. Export Desi offers the product but has no content. | Blog post (mirror the makhana import guide format) | **High** | Moderate |
| **Export documentation checklist for India food export** — "India food export documents list", "phytosanitary certificate food export" | Buyers want to know what paperwork they'll need. This content positions Export Desi as the expert, drives How-We-Work page traffic, and wins PAA boxes. | Blog post / checklist | **High** | Quick (1–2 hrs) |
| **Makhana nutritional information for food manufacturers** — "makhana nutrition facts wholesale", "fox nuts protein content" | Food manufacturers need this data before formulating products. Zero coverage on the site currently. | Blog / product page section | **Medium** | Quick |
| **Dehydrated onion and garlic HS codes and import duties by country** | HS code queries are pure B2B — buyers are mid-funnel. Darnif Exim has a full HS code table. | Blog post / table | **Medium** | Quick |
| **APEDA, FSSAI, Spice Board — what they mean for buyers** | Buyers in the US and EU don't know what Indian export certifications mean. This content converts certification awareness into trust. | Blog post | **Medium** | Quick |
| **Private label / OEM makhana packaging guide** — "private label makhana India" | OEM is mentioned in `llms.txt` but has no dedicated content page. This is a high-margin service. | Landing page | **Medium** | Moderate |
| **Banana powder export from India** | Mentioned in business context but no product page exists. Thin listing with no content. | Product page | **Medium** | Moderate |
| **Makhana vs fox nuts vs lotus seeds — terminology guide** | "What is makhana?" drives 2,000–5,000 searches/month — mostly consumer, but high brand awareness value. Darnif Exim uses this for top-of-funnel. | Blog post | **Low** | Quick |

### Funnel Gaps

- **Awareness (top of funnel):** Almost no content. Need 4–5 educational posts about makhana, turmeric, moringa at the "what is" and "why" level.
- **Consideration (mid-funnel):** 1 post exists (how to import makhana). Need guides for each product category.
- **Decision (bottom-funnel):** Product pages exist but need expansion — pricing ranges, MOQ tables, sample process, lead time breakdowns.

---

## 4. Technical SEO Checklist

| Check | Status | Details |
|---|---|---|
| HTTPS / SSL | ✅ Pass | `exportdesi.com` resolves over HTTPS. |
| robots.txt | ✅ Pass | Allows all crawlers, correctly references sitemap. No critical disallow rules. |
| XML Sitemap | ⚠️ Warning | Exists and is valid. Issues: (1) static `lastmod` dates, (2) blog posts absent, (3) `/info` page included unnecessarily, (4) no sitemap index for image sitemap cross-reference. |
| Canonical tags | ✅ Pass | Auto-generated from `useLocation()` in `SEOMeta.jsx` — correct and consistent. |
| Meta robots | ✅ Pass | `index, follow` on all indexed pages. |
| Open Graph tags | ✅ Pass | Present. Warning: single global OG image on all pages. |
| Twitter Card | ✅ Pass | `summary_large_image` configured. Verify handle exists on X/Twitter. |
| Structured Data — Organization | ✅ Pass | ProfessionalService schema with address, geo, founder. |
| Structured Data — Product | ⚠️ Warning | Present on Makhana page; missing on Dehydrated, Moringa, Turmeric, Bags pages. Fake aggregateRating must be removed. |
| Structured Data — Breadcrumb | ✅ Pass | BreadcrumbList schema on nested product pages. |
| Structured Data — Article | ❌ Fail | No Article schema on any blog post. |
| Structured Data — HowTo | ❌ Fail | Missing on How We Work page — clear opportunity. |
| Structured Data — FAQ | ❌ Fail | FAQPage schema missing on Compliance and Contact pages where Q&A content exists. |
| Structured Data — SearchAction | ❌ Fail | WebSite schema has SearchAction pointing to `/contact?q=` — no real search exists at that endpoint. |
| Hreflang | ❌ Fail | Site has EN/DE/ES translations (i18next) but zero hreflang tags. |
| Mobile-friendliness | ✅ Pass | Tailwind CSS responsive design. Viewport meta present. |
| Core Web Vitals — LCP | ⚠️ Warning | React SPA with no SSR means the page is blank until JS loads. LCP (Largest Contentful Paint) will be high. Preconnects help but don't solve the root cause. |
| Core Web Vitals — CLS | ⚠️ Warning | Product image components lack explicit `width`/`height` attributes — layout shift likely on image-heavy pages. |
| Core Web Vitals — INP | ✅ Pass | Framer Motion animations are CSS-based; should not block main thread significantly. |
| Image optimization | ✅ Pass | WebP images used throughout. `loading="lazy"` on most images. Sharp installed. |
| Image alt text | ✅ Pass | Alt text present on product images (verified in MakhanaPage). Audit remaining pages manually. |
| Internal linking | ⚠️ Warning | Product pages link to each other via FloatingProductNav. Blog has only 1 post with no cross-linking. Orphan risk for new pages. |
| 404 handling | ✅ Pass | NotFoundPage component exists as catch-all route. |
| Redirect strategy | ✅ Pass | Legacy `/export-desi-sharing...` URL redirects to `/about`. |
| Page speed — JS bundle size | ⚠️ Warning | Framer Motion + i18next + React Router all load on initial page. No code-splitting visible in vite.config. Large JS bundle delays interactive time. |
| llms.txt (AEO) | ✅ Pass | **Excellent.** Comprehensive, accurate, structured machine-readable file for AI crawlers. Updated 2026-04-20. Industry-leading for a company of this size. |
| Google Analytics | ✅ Pass | GA4 + Microsoft Clarity both configured. |
| Schema validation | ⚠️ Warning | Run all pages through Google's Rich Results Test — specifically the SearchAction and aggregateRating issues. |

---

## 5. Competitor Comparison

Competitors analyzed: Darnif Exim (makhana), Natural Dehydration (dehydrated veg), Joshi Spices (dehydrated/spices).

| Dimension | Export Desi | Darnif Exim | Natural Dehydration | Winner |
|---|---|---|---|---|
| **Content depth (avg product page)** | ~1,000–2,000 words | **6,000–8,000 words** with tables, HS codes, pricing ranges | ~800–1,200 words | Darnif Exim |
| **Blog / content volume** | 1 post | 5+ long-form guides | None | Darnif Exim |
| **Structured data coverage** | Organization, Product (partial), Breadcrumb, Website | FAQ schema on product pages | Minimal | Export Desi |
| **Certifications (mentioned)** | FSSAI, APEDA, Spice Board, FIEO, GI-Tag | FSSAI, APEDA, HACCP, ISO 22000, Halal, Kosher | US FDA, GMP, HACCP | All comparable |
| **AEO / llms.txt** | **✅ llms.txt — industry-leading** | None | None | **Export Desi** |
| **Hreflang / i18n** | i18n present, no hreflang tags | None | None | None (all fail) |
| **Product page spec tables** | ✅ SpecTable component (Makhana) | ✅ Comprehensive with HS codes, tariff info | ❌ | Export Desi / Darnif Exim tied |
| **FAQ sections** | ✅ FAQAccordion component (Makhana) | ✅ FAQ with schema | ❌ | Tied — but Darnif has schema |
| **OEM / private label content** | Mentioned in llms.txt only | Dedicated section | ❌ | Darnif Exim |
| **Pricing transparency** | Not published | Price ranges + grade tables published | Not published | Darnif Exim |
| **Site speed (CSR vs SSR)** | ⚠️ CSR only (React SPA) | Unclear (likely WordPress/static) | Likely SSR | Competitors likely win |
| **Social proof / testimonials** | None visible | None visible | None visible | Tied |
| **Overall SEO foundation** | **Strong technical SEO** | Strong content SEO | Weak | Export Desi (technical), Darnif Exim (content) |

**Key insight:** Export Desi has *better technical SEO infrastructure* than its competitors, but *far less content*. Darnif Exim is winning informational queries through content volume and depth, not technical sophistication. Export Desi can overtake them by combining its existing technical foundation with an aggressive content programme.

---

## 6. AEO (Answer Engine Optimization) Assessment

AEO evaluates how well the site will be cited in Google AI Overviews, ChatGPT, Perplexity, and other AI answer engines — increasingly where B2B buyers begin research.

**AEO Strengths:**
- `llms.txt` is excellent — comprehensive, accurate, structured. ChatGPT and Perplexity's crawlers respect this file.
- Organization schema with `sameAs` LinkedIn establishes entity authority.
- Founder name and credentials in Person schema help AI engines build a trusted entity map.
- The one existing blog post ("How to Import Makhana") is well-structured for Q&A extraction.

**AEO Gaps:**
- No FAQPage schema on pages with Q&A content (Compliance, Contact, How We Work).
- Blog has 1 post — AI Overviews prefer to cite sites with multiple corroborating articles on a topic. One post signals thin expertise.
- No HowTo schema on the How We Work page.
- No Article schema on blog posts — required for AI Overview citation eligibility.
- Content is rendered by JavaScript — AI browsing agents (ChatGPT web browsing, Perplexity) that don't execute JS will see a blank page.
- No Wikipedia presence, no third-party editorial mentions, no bylined press mentions — AI engines weight off-site authority heavily. `sameAs` links to LinkedIn only.

**AEO Quick Wins:**
1. Add `FAQPage` schema to Compliance and Contact pages immediately.
2. Add `Article` schema to BlogPost.jsx immediately.
3. Add `HowTo` schema to How We Work page.
4. Publish 2–3 more blog posts with structured FAQ sections — each one is a potential featured snippet / AI Overview citation.
5. Get Export Desi listed on IndiaMART, TradeIndia, and APEDA's exporter directory — these are high-authority third-party citations that AI engines trust.

---

## 7. Prioritized Action Plan

### Quick Wins (Do This Week)

| Action | Expected Impact | Effort | Files to Change |
|---|---|---|---|
| **Fix homepage title tag** — remove "Export Desi" from the `title` prop in `HomePage.jsx` (SEOMeta already appends it). Audit all other pages for same pattern. | High — eliminates duplicate brand tag in title | 30 min | `src/pages/HomePage.jsx` + all page files |
| **Remove fake `aggregateRating`** from `PRODUCT_SCHEMA` in MakhanaPage | High — prevents Google rich result penalty | 15 min | `src/pages/MakhanaPage.jsx` |
| **Remove `SearchAction`** from WebSite schema in `schemaGenerator.js` | Medium — removes invalid schema | 15 min | `src/utils/schemaGenerator.js` |
| **Add `Article` schema to `BlogPost.jsx`** | High — AEO eligibility for blog posts | 1 hr | `src/pages/BlogPost.jsx` |
| **Add `FAQPage` schema to Compliance page** | High — AEO / PAA boxes | 1 hr | `src/pages/CompliancePage.jsx` |
| **Add `HowTo` schema to How We Work page** | High — AEO win | 1 hr | `src/pages/HowWeWorkPage.jsx` |
| **Make `keywords` a prop in SEOMeta** and set per-page relevant keywords | Low (Bing/AI) | 1 hr | `src/components/SEOMeta.jsx` + all pages |
| **Noindex the `/info` page** and remove from sitemap | Low — crawl budget | 15 min | `src/pages/InfoPage.jsx` + `public/sitemap.xml` |
| **Add Product OG images** for Makhana, Dehydrated, Turmeric, Moringa pages | Medium — social sharing CTR | 2 hrs | `src/pages/*.jsx` |

### Strategic Investments (This Quarter)

| Action | Expected Impact | Effort | Dependencies |
|---|---|---|---|
| **Publish 8–10 blog posts** targeting the keyword gaps above. Prioritize: (1) makhana grades guide, (2) price guide, (3) Lakadong turmeric guide, (4) dehydrated onion/garlic guide, (5) export documentation checklist, (6) how to import moringa. Use 2,000–4,000 words per post with spec tables, FAQ sections, and FAQ schema. | **Very High** — this closes the content gap with Darnif Exim | 2–3 weeks | Writer / Claude content generation |
| **Add Product schema to all product pages** (Dehydrated, Moringa, Turmeric, Bags) using the `getProductSchema()` utility | High — rich results eligibility | 2–3 hrs | `schemaGenerator.js` already built |
| **Add sitemap auto-generation** at build time using `vite-plugin-sitemap` or a build script | Medium — accurate crawl signals | 4–6 hrs | Build pipeline update |
| **Implement hreflang** for EN/DE/ES | Medium — multi-language SEO | 4–8 hrs | Requires URL-based language routing (e.g., `/de/`) |
| **Investigate SSR/SSG migration** — evaluate Astro (full SSG), or Vite SSR on Vercel, or a prerender service | **Very High** — eliminates the biggest technical SEO risk | 2–5 days | Architectural decision |
| **Get listed on third-party directories** — IndiaMART (paid featured listing), APEDA exporter directory, TradeIndia, Europages, Alibaba (basic profile) | High — off-site entity authority for AEO | 4–8 hrs | Business decision |
| **Expand Dehydrated page** to include sub-sections for each form (flakes, minced, granules, powder), HS codes, and buyer-targeted FAQ | High — keyword coverage | Half day | Content + dev |
| **Create private label / OEM landing page** | Medium — high-value service, zero current content | Half day | Content |
| **Fix image CLS** — add explicit `width` and `height` to all product `<img>` usages | Medium — Core Web Vitals | 2–3 hrs | Audit all image components |
| **Remove unused preconnect** to `images.unsplash.com` in `index.html` | Low | 5 min | `index.html` |
| **Add code-splitting** in `vite.config.js` to lazy-load heavy libraries (framer-motion, i18next) | Medium — page speed | 2–3 hrs | `vite.config.js` |

---

## Appendix: Key Files Reference

| File | SEO Role | Current Status |
|---|---|---|
| `src/components/SEOMeta.jsx` | Per-page title, description, canonical, OG, Twitter | Good — fix keywords prop |
| `src/utils/schemaGenerator.js` | JSON-LD structured data | Good — remove SearchAction, add more schema types |
| `public/robots.txt` | Crawl rules | ✅ Good |
| `public/sitemap.xml` | URL discovery | ⚠️ Static dates, missing blog posts |
| `public/llms.txt` | AI engine instructions | ✅ Excellent |
| `index.html` | Root HTML template | ⚠️ Remove unused preconnect |
| `src/pages/HomePage.jsx` | Homepage SEO | ⚠️ Fix duplicate brand in title |
| `src/pages/MakhanaPage.jsx` | Primary product page | ⚠️ Remove fake aggregateRating |
| `src/pages/BlogPost.jsx` | Blog article template | ❌ Add Article schema |
| `src/pages/HowWeWorkPage.jsx` | Process page | ❌ Add HowTo schema |
| `src/pages/CompliancePage.jsx` | Trust/compliance | ❌ Add FAQPage schema |
| `src/pages/InfoPage.jsx` | QR visiting card | ❌ Add noindex |

---

*Generated by Claude (Cowork) — Export Desi SEO/AEO Audit, April 2026*
