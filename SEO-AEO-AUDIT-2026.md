# Export Desi SEO + AEO Audit & Strategy
**Date:** 2026-04-20  
**Domain:** exportdesi.com  
**Stack:** React 19 + Vite + react-helmet-async  
**Status:** Audit Complete → Implementation Ready

---

## Executive Summary

**Current State:**
- ✅ Basic SEO implemented (meta tags, sitemap, schema.org)
- ✅ Open Graph tags for social sharing
- ✅ Schema.org structured data (Organization, Product, Breadcrumb, Person)
- ✅ robots.txt allows AI bots (GPTBot, PerplexityBot, ClaudeBot)
- ⚠️ No blog/content marketing engine
- ⚠️ Limited keyword targeting on core pages
- ⚠️ No AI-specific optimization (AEO/GEO/LLMO)

**Priority Actions:**
1. **P0** — Add target keywords to existing product pages
2. **P1** — Create 10 blog posts for informational keywords
3. **P2** — Optimize for AI Overview citations (definitions, stats, FAQs)
4. **P3** — Build market-specific landing pages (UAE, USA, Europe)

---

## 1. Current Keyword Targeting Audit

### Homepage (`/`)
**Current Meta:**
```
Title: Indian Food Ingredients & Packaging Exporter | Makhana, Moringa, Bags | Export Desi
Description: Export Desi manages processor qualification, documentation, and shipment for Indian food ingredients and eco-friendly packaging. FSSAI, APEDA certified.
Keywords: export from India, food ingredients, makhana, dehydrated onion, dehydrated garlic, moringa powder, banana powder, Indian spices, B2B export
```

**Missing Keywords:**
- bulk supplier India
- wholesale exporter
- APEDA certified spice exporter
- FSSAI certified supplier

### Makhana Page (`/industries/food-ingredients/makhana`)
**Current Schema Description:**
> "Export Desi supplies 6 & 7 Suta export-grade makhana (phool makhana / fox nuts) from Bihar, India. FSSAI, APEDA, GI-tagged. COA available. Bulk & retail-ready."

**Missing Keywords:**
- bulk makhana supplier India
- phool makhana exporter
- fox nuts wholesale
- Mithila GI tagged makhana
- private label makhana manufacturer

### Turmeric Page (`/industries/food-ingredients/turmeric`)
**Current Schema Description:**
> "Export Desi supplies Alleppey and Lakadong turmeric with 5-9% curcumin. FSSAI, APEDA certified. Bulk export from India."

**Missing Keywords:**
- Lakadong turmeric supplier
- high curcumin turmeric
- organic turmeric exporter
- turmeric importers UAE

### Dehydrated Page (`/industries/food-ingredients/dehydrated-ingredients`)
**Missing Keywords:**
- dehydrated onion powder exporter
- garlic flakes supplier Gujarat
- onion granules 6-80 mesh

### Moringa Page (`/industries/food-ingredients/moringa`)
**Missing Keywords:**
- moringa leaf powder bulk exporter
- organic moringa powder
- moringa for nutraceutical industry

---

## 2. Target Keyword Strategy (50 Keywords)

### High Priority Transactional (15 keywords) — P0 Implementation

| Keyword | Current Rank | Target Page | Action |
|---------|--------------|-------------|--------|
| bulk makhana supplier India | Not ranked | /makhana | Add to H1, meta, first 100 words |
| buy makhana wholesale | Not ranked | /makhana | Add to meta, FAQ |
| phool makhana exporter India | Not ranked | /makhana | Add to H2, meta |
| fox nuts bulk importer | Not ranked | /makhana | Add to product snapshot |
| 5 suta 6 suta makhana price | Not ranked | /makhana | Create pricing table |
| Lakadong turmeric supplier | Not ranked | /turmeric | Add to H1, meta |
| bulk turmeric powder India | Not ranked | /turmeric | Add to meta, H2 |
| high curcumin turmeric supplier | Not ranked | /turmeric | Add curcumin section |
| dehydrated onion powder exporter | Not ranked | /dehydrated | Add to meta, H2 |
| dehydrated garlic flakes supplier | Not ranked | /dehydrated | Add to meta |
| moringa leaf powder bulk exporter | Not ranked | /moringa | Add to meta, H1 |
| Indian spice exporters APEDA | Not ranked | /compliance | Add certification section |
| FSSAI certified spice supplier | Not ranked | /compliance | Add to meta |
| bulk spice suppliers food manufacturers | Not ranked | /how-we-work | Add industry section |
| organic spice exporters India | Not ranked | /products/organic | Create new page |

### Commercial Intent (10 keywords) — P1 Implementation

| Keyword | Target Page | Action |
|---------|-------------|--------|
| makhana suppliers UAE Dubai | /markets/uae | Create market page |
| fox nuts importers USA Europe | /markets/usa-europe | Create market page |
| turmeric importers UAE Middle East | /markets/uae | Add to UAE page |
| Indian food ingredients distributors UAE | /markets/uae | Add to UAE page |
| private label makhana manufacturer | /services/oem | Create OEM page |
| flavored makhana OEM manufacturer | /services/oem | Add to OEM page |
| turmeric suppliers nutraceutical | /industries/nutraceutical | Create industry page |
| moringa powder nutraceutical industry | /industries/nutraceutical | Add to industry page |
| custom spice blending manufacturer | /services/custom-blending | Create service page |
| ISO 22000 HACCP spice manufacturer | /compliance | Add certifications |

### Informational (7 keywords) — P2 Blog Content

| Keyword | Blog Post URL | Funnel Stage |
|---------|---------------|--------------|
| makhana grading system explained | /blog/makhana-grading-guide | Top (awareness) |
| makhana export quality standards | /blog/makhana-export-standards | Middle (consideration) |
| how to import turmeric from India | /blog/import-turmeric-guide | Top (awareness) |
| turmeric export documentation India | /blog/spice-export-docs | Middle (consideration) |
| how to import spices from India to USA | /blog/import-spices-usa-guide | Top (awareness) |
| spice import procedure Europe | /blog/import-spices-europe-guide | Top (awareness) |
| organic moringa powder export quality | /blog/moringa-quality-guide | Middle (consideration) |

---

## 3. AI Search Optimization (AEO/LLMO/GEO)

### What is AI Search Optimization?

AI Overviews (Google), ChatGPT, Perplexity, and Claude answer queries by extracting content from web pages. To get cited:

1. **Extractability** — Clear structure, direct answers
2. **Authority** — E-E-A-T signals, expert attribution
3. **Machine-Readable** — Schema markup, clean HTML

### AEO Checklist for Export Desi

#### Structure (Extractability)

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| Clear definition in first paragraph (40-60 words) | ⚠️ Partial | Add to all product pages |
| H2/H3 headings match query patterns | ❌ Missing | Restructure headings |
| Self-contained answer blocks | ⚠️ Partial | Add FAQ sections |
| Statistics with cited sources | ❌ Missing | Add India production stats |
| Comparison tables for "vs" queries | ❌ Missing | Add grading comparison |
| FAQ section with natural questions | ⚠️ Partial | Expand on all pages |

#### Authority (Citability)

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| Named author with credentials | ⚠️ Partial | Add "Reviewed by Rajiv Dudeja" |
| Expert quotes included | ❌ Missing | Add founder insights |
| "Last updated" date visible | ❌ Missing | Add to all pages |
| Original data or unique insights | ❌ Missing | Add export stats, pricing data |
| E-E-A-T signals throughout | ⚠️ Partial | Enhance About page |

#### Machine-Readable

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| Schema markup (FAQ, Product, Article) | ✅ Present | Expand with more types |
| robots.txt allows AI bots | ✅ Complete | GPTBot, PerplexityBot allowed |
| `/llms.txt` or `/pricing.md` | ❌ Missing | Create for AI agents |

### Required Schema Types

| Schema Type | Current | Needed | Pages |
|-------------|---------|--------|-------|
| Organization | ✅ Yes | — | Homepage |
| Product | ✅ Yes | Expand | All product pages |
| BreadcrumbList | ✅ Yes | — | All pages |
| Person (Founder) | ✅ Yes | — | About page |
| FAQPage | ⚠️ Partial | Expand | Product pages |
| Article/BlogPosting | ❌ No | Add | Blog posts |
| HowTo | ❌ No | Add | Process guides |
| AggregateRating | ⚠️ Partial | Add reviews | Product pages |

---

## 4. Implementation Plan

### P0: Keyword Optimization (Week 1)

**Files to Modify:**

| File | Changes | Keywords Added |
|------|---------|----------------|
| `src/pages/HomePage.jsx` | Update SEOMeta, first content block | bulk supplier India, wholesale exporter, APEDA certified |
| `src/pages/MakhanaPage.jsx` | Update schema, add H2 | bulk makhana, phool makhana, fox nuts, 5-6-7 suta |
| `src/pages/TurmericPage.jsx` | Update schema, add curcumin section | Lakadong, high curcumin, organic turmeric |
| `src/pages/DehydratedPage.jsx` | Update SEOMeta, H2s | dehydrated onion powder, garlic flakes |
| `src/pages/MoringaPage.jsx` | Update SEOMeta, H1 | moringa leaf powder, organic, nutraceutical |
| `src/pages/CompliancePage.jsx` | Add certification keywords | APEDA, FSSAI, Spice Board, ISO |

**Example Change (MakhanaPage.jsx):**
```jsx
<SEOMeta
  title="Bulk Makhana Supplier India | Fox Nuts Exporter (5-6-7 Suta) | Export Desi"
  description="Export Desi supplies bulk makhana (phool makhana/fox nuts) from Bihar's Mithila region. 5-6-7 Suta grades, FSSAI, APEDA, GI-tagged. COA available. Get quote in 48 hours."
/>
```

### P1: Content Marketing Engine (Week 2-3)

**Create Blog Infrastructure:**

1. **Create `/blog` index page** — List all posts with filters
2. **Create 7 blog posts** (one per informational keyword):
   - `/blog/makhana-grading-guide` — 2,000 words
   - `/blog/makhana-export-standards` — 1,500 words
   - `/blog/import-turmeric-guide` — 2,000 words
   - `/blog/spice-export-docs` — 1,800 words
   - `/blog/import-spices-usa-guide` — 2,500 words
   - `/blog/import-spices-europe-guide` — 2,500 words
   - `/blog/moringa-quality-guide` — 1,500 words

**Each Post Must Include:**
- Definition in first 60 words (for AI Overviews)
- H2/H3 matching search queries
- Statistics with sources (e.g., "India produces 95% of world's makhana")
- FAQ section (3-5 questions)
- Author byline: "Reviewed by Rajiv Dudeja, 20+ years international trade"
- "Last updated" date
- Internal links to product pages
- Schema markup: BlogPosting + FAQPage

### P2: AI Optimization (Week 3-4)

**Create `/llms.txt`:**
```
# /llms.txt for Export Desi
# Machine-readable pricing and product info for AI agents

Company: Export Desi
Location: Gurgaon, Haryana, India
Products: Makhana, Turmeric, Dehydrated Onion/Garlic, Moringa Powder
Certifications: FSSAI, APEDA, Spice Board, ISO 22000
MOQ: 1 MT (varies by product)
Lead Time: 10-15 days (organic: 4-6 weeks)
Response Time: 48 business hours
Contact: contact@exportdesi.com, +91-9289790283
```

**Add AI-Optimized Sections:**

| Page | Section | Purpose |
|------|---------|---------|
| Homepage | "What Export Desi Does" (50-word definition) | AI Overview extraction |
| Makhana | "Makhana Grading System" table | Featured snippet target |
| Turmeric | "Curcumin Content by Grade" table | Comparison query target |
| All products | FAQ section (5+ questions) | People Also Ask targets |

### P3: Market Pages (Week 4-5)

**Create Landing Pages:**

| Page | Target Keywords | Content |
|------|-----------------|---------|
| `/markets/uae-middle-east` | makhana suppliers UAE, turmeric importers Dubai | UAE-specific compliance, Jebel Ali freight, Dubai buyers |
| `/markets/usa-canada` | fox nuts importers USA, organic turmeric USA | FDA requirements, FSMA compliance, US port info |
| `/markets/europe` | spice importers Europe, organic spices EU | EU organic certification, Rotterdam/Hamburg ports |
| `/markets/southeast-asia` | Indian spices Singapore, Malaysia | Singapore re-export, halal certification |

---

## 5. Technical SEO Checklist

| Task | Status | Priority | Owner |
|------|--------|----------|-------|
| Submit sitemap to Google Search Console | ⏳ Pending | P0 | |
| Submit sitemap to Bing Webmaster | ⏳ Pending | P1 | |
| Add Open Graph tags (verify with LinkedIn Inspector) | ⏳ Pending | P0 | |
| Create `/og-image.jpg` (1200x630) | ⏳ Pending | P0 | |
| Add `/llms.txt` for AI agents | ⏳ Pending | P2 | |
| Create blog index page | ⏳ Pending | P1 | |
| Add FAQ schema to product pages | ⏳ Pending | P1 | |
| Add Article schema to blog posts | ⏳ Pending | P1 | |
| Add review/rating schema | ⏳ Pending | P2 | |
| Create market landing pages | ⏳ Pending | P3 | |
| Create industry pages (nutraceutical, food manufacturing) | ⏳ Pending | P3 | |
| Create service pages (OEM, custom blending) | ⏳ Pending | P3 | |

---

## 6. Content Calendar (90 Days)

### Week 1-2: Foundation
- [ ] Optimize 5 product pages with target keywords
- [ ] Create og-image.jpg
- [ ] Submit to Google Search Console
- [ ] Create blog index page

### Week 3-4: Content Creation
- [ ] Publish 3 blog posts (makhana grading, turmeric import, spice docs)
- [ ] Add FAQ sections to all product pages
- [ ] Create `/markets/uae` landing page
- [ ] Create `/llms.txt`

### Week 5-6: Expansion
- [ ] Publish 4 more blog posts (USA guide, Europe guide, moringa, export standards)
- [ ] Create `/markets/usa` and `/markets/europe` pages
- [ ] Add AI-optimized definition sections
- [ ] Create industry pages (nutraceutical, food manufacturing)

### Week 7-8: Authority Building
- [ ] Add expert quotes to all content
- [ ] Create comparison tables (grading, curcumin content)
- [ ] Add "Last updated" dates
- [ ] Create service pages (OEM, custom blending)

### Week 9-12: Distribution
- [ ] Share each blog post on LinkedIn (3 posts/week)
- [ ] Outreach to 10 industry blogs for backlinks
- [ ] Submit guest posts to food industry publications
- [ ] Monitor AI Overview citations (weekly check)

---

## 7. Success Metrics

| Metric | Current | 30-Day Target | 90-Day Target |
|--------|---------|---------------|---------------|
| Google indexed pages | ~15 | 25 | 50+ |
| Organic impressions (GSC) | TBD | 1,000 | 5,000 |
| Organic clicks | TBD | 50 | 300 |
| AI Overview citations | 0 | 2 | 10 |
| Blog posts published | 0 | 3 | 10 |
| Backlinks | TBD | 5 | 25 |

---

## 8. Competitive Analysis

### Competitors Targeting Same Keywords

| Competitor | Strength | Weakness | Opportunity |
|------------|----------|----------|-------------|
| prangroup.com | Brand authority, PRAN brand | Consumer-focused, not B2B | Target B2B buyers specifically |
| acigroup.com | Diversified product range | Complex navigation | Simpler, buyer-first UX |
| spicestar.ae | UAE-based, local presence | Limited product info | More detailed specs, compliance |
| oceanpathexport.com | Strong product pages | No blog content | Content marketing advantage |

### Differentiation Strategy

1. **Transparency:** Publish pricing ranges, lead times, MOQ
2. **Compliance-first:** Highlight FSSAI, APEDA, Spice Board on every page
3. **Buyer education:** Blog posts that answer real buyer questions
4. **AI visibility:** Optimize for AI Overviews before competitors do

---

## 9. Tools & Resources

### Required
- **Google Search Console** — Index tracking, keyword visibility
- **Bing Webmaster Tools** — Import from GSC
- **LinkedIn Post Inspector** — Test OG tags
- **Google Rich Results Test** — Validate schema

### Optional (Paid)
- **Ahrefs/Semrush** — Keyword research, competitor analysis ($99-199/mo)
- **Arvow** — AI content generation ($249/mo)
- **Blotato** — Social media scheduling (subscription)

### Free Alternatives
- **Google Trends** — Keyword interest over time
- **AnswerThePublic** — Question-based keywords
- **AlsoAsked.com** — People Also Ask questions
- **Ubersuggest (free tier)** — Basic keyword research

---

## 10. Next Steps

**Immediate (This Week):**
1. Review and approve this strategy
2. Implement P0 keyword optimizations on product pages
3. Create og-image.jpg and verify with LinkedIn Inspector
4. Submit sitemap to Google Search Console

**Next Session:**
- Start with P0 implementations (product page keyword optimization)
- Create first 3 blog posts
- Set up GSC and Bing Webmaster

---

**Sources:**
- [Makhana exporters and grading](https://www.makhanabazar.com/index.html)
- [Turmeric exporters India](https://spicecentra.com/turmeric-exporters-in-india-how-quality-differentiation-shapes-global-buyer-preference-in-2026/)
- [B2B SEO strategy guide](https://akselera.tech/en/insights/guides/b2b-seo-strategy-guide)
- [AI SEO best practices](https://arvow.com/ai-seo-guide)
