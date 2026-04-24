import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import SpecTable from '../components/SpecTable';
import StructuredList from '../components/StructuredList';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import ImageGrid from '../components/ImageGrid';
import ProductSnapshot from '../components/ProductSnapshot';
import FloatingProductNav from '../components/FloatingProductNav';
import { MotionSection, MotionCard } from '../components/MotionWrapper';
import { motion, useScroll, useSpring } from 'framer-motion';  
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getOrganizationSchema, getBreadcrumbSchema } from '../utils/schemaGenerator';

const TURMERIC_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Turmeric Powder & Finger',
    description: 'Export Desi is a bulk turmeric supplier in India, exporting Lakadong and Alleppey turmeric (finger and powder) with 5-9% curcumin. FSSAI, APEDA, Spice Board certified. Organic options available. FOB/CIF quotes.',
    image: 'https://exportdesi.com/images/products/turmeric/turmeric-hero.webp',
    brand: { '@type': 'Brand', name: 'Export Desi' },
    category: 'Spices & Condiments',
    countryOfOrigin: 'IN',
    offers: {
        '@type': 'AggregateOffer',
        lowPrice: '2',
        highPrice: '12',
        priceCurrency: 'USD',
        priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'KGM' },
        seller: { '@type': 'Organization', name: 'Export Desi' },
    },
};

const TURMERIC_IMAGES = [
    { src: '/images/products/turmeric/turmeric-collage.jpg', alt: 'Turmeric field, roots and powder', caption: 'Product Forms', subcaption: 'Turmeric Finger vs Powder' },
    { src: '/images/products/turmeric/turmeric-powder.jpg', alt: 'Turmeric powder close-up', caption: 'Color Reference', subcaption: 'Deep orange-yellow indicates high curcumin' },
    { src: '/images/products/turmeric/turmeric-collage.jpg', alt: 'Turmeric cultivation and processing', caption: 'Quality Control', subcaption: 'Farm to export quality assurance' },
    { src: '/images/export-packaging.jpg', alt: 'Export packaging', caption: 'Packaging Format', subcaption: '25kg bags for bulk export' },
];

const TURMERIC_SNAPSHOT = [
    { label: 'Varieties', value: 'Alleppey · Lakadong', sub: 'Kerala and Meghalaya origins' },
    { label: 'Curcumin', value: '5-9%', sub: 'HPLC-tested per shipment' },
    { label: 'MOQ', value: '1 MT', sub: 'Sample orders 5-10 kg available' },
    { label: 'Lead Time', value: '10-15 days', sub: 'Organic: 4-6 weeks' },
];

const TURMERIC_PROCESS_IMAGES = [
    { src: '/images/products/turmeric/turmeric-collage.jpg', alt: 'Turmeric processing — boiling, drying and polishing', caption: 'Processing Infrastructure', subcaption: 'Boiling, drying, and polishing at processing unit' },
    { src: '/images/products/dehydrated/garlic-in-bag.jpg', alt: 'Container loading and export dispatch', caption: 'Export Dispatch', subcaption: 'Container stuffing from Indian ports' },
];

const JUMP_LINKS = [
    { label: 'Overview', href: '#overview' },
    { label: 'Varieties', href: '#varieties' },
    { label: 'Specifications', href: '#specifications' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Packaging', href: '#packaging' },
    { label: 'Markets', href: '#markets' },
    { label: 'FAQ', href: '#faq' },
];

const FOOD_INGREDIENTS_PRODUCTS = [
    { label: 'Fox Nuts', name: 'Makhana', href: '/industries/food-ingredients/makhana' },
    { label: 'Dehydrated', name: 'Onion & Garlic', href: '/industries/food-ingredients/dehydrated-ingredients' },
    { label: 'Ayurvedic', name: 'Moringa', href: '/industries/food-ingredients/moringa' },
    { label: 'Spices', name: 'Turmeric', href: '/industries/food-ingredients/turmeric' },
];

const TURMERIC_SPECS = {
    headers: ['Variety', 'Curcumin', 'Moisture', 'Origin', 'Best For'],
    rows: [
        ['Alleppey Finger', '5-6.5%', '≤10%', 'Kerala', 'Standard spice blends, color + aroma balance'],
        ['Alleppey Powder', '5-6.5%', '≤9%', 'Kerala', 'Food manufacturing, retail packs'],
        ['Lakadong Finger', '7-9%', '≤10%', 'Meghalaya', 'Premium supplements, extracts, nutraceuticals'],
        ['Lakadong Powder', '7-9%', '≤9%', 'Meghalaya', 'High-curcumin products, export premium'],
    ],
};

const TURMERIC_FAQS = [
    {
        question: 'What is the difference between Alleppey and Lakadong turmeric?',
        answer: 'Alleppey turmeric from Kerala has 5-6.5% curcumin with deep orange-yellow color and earthy aroma. Lakadong from Meghalaya has 7-9% curcumin (highest in the world) with golden-yellow color. Alleppey is ideal for standard spice blends; Lakadong is preferred for premium supplements and nutraceutical applications.',
    },
    {
        question: 'Do you supply organic-certified turmeric?',
        answer: 'Yes. We supply USDA Organic and EU Organic certified turmeric on request. Certificates are issued by accredited bodies (Ecocert, Control Union) and are verifiable online. Organic lots require 4-6 weeks lead time.',
    },
    {
        question: 'What is the minimum order quantity for turmeric?',
        answer: 'Minimum order is 1 MT for commercial shipments. Sample orders of 5-10 kg are available at cost for quality evaluation before commercial commitment.',
    },
    {
        question: 'How is curcumin content verified?',
        answer: 'Curcumin content is tested by HPLC (High Performance Liquid Chromatography) at NABL-accredited laboratories. The Certificate of Analysis (COA) with curcumin percentage is provided with every shipment. Buyer-specified labs can be used at buyer cost.',
    },
    {
        question: 'What certifications are provided with turmeric shipments?',
        answer: 'Standard certifications include FSSAI, APEDA RCMC, Phytosanitary Certificate, Certificate of Origin, and COA. Organic certification (USDA/EU), HACCP, ISO 22000, Halal, and Kosher are available on request.',
    },
    {
        question: 'Can you supply turmeric for EU and US markets?',
        answer: 'Yes. We regularly supply turmeric to buyers in the USA, UK, Germany, and other EU markets. All shipments include full documentation for customs clearance. For EU, we ensure compliance with EU MRL pesticide limits and provide necessary traceability documentation.',
    },
    {
        question: 'What packaging formats are available?',
        answer: 'Standard packaging is 25kg woven polypropylene bags with PE liner. Retail-ready packaging (1kg, 5kg vacuum packs) and private label options are available on request with 4-6 weeks lead time.',
    },
    {
        question: 'What are the payment terms?',
        answer: 'We accept LC (Letter of Credit), TT (Telegraphic Transfer) with 30% advance and 70% against BL copy, and 100% advance for sample/trial orders. Terms are confirmed on the Proforma Invoice.',
    },
];

export default function TurmericPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    return (
        <>
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand origin-left z-50" style={{ scaleX }} />
            <SEOMeta
                title="Bulk Turmeric Supplier India | Lakadong & Alleppey | High Curcumin"
                description="Export Desi supplies bulk Lakadong turmeric (7-9% curcumin) and Alleppey turmeric from India. FSSAI, APEDA, Spice Board certified. Organic options. FOB/CIF quotes in 48 hours."
                keywords="turmeric exporter India, Lakadong turmeric supplier, Alleppey turmeric exporter, high curcumin turmeric India, bulk turmeric powder supplier, turmeric finger exporter, APEDA turmeric exporter, organic turmeric India"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(TURMERIC_SCHEMA)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(getOrganizationSchema())}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(getBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Food Ingredients', url: '/industries/food-ingredients' },
                        { name: 'Turmeric', url: '/industries/food-ingredients/turmeric' }
                    ]))}
                </script>
            </Helmet>

            {/* Definition block — SEO / AI extraction */}
            <div className="bg-surface border-b border-border">
                <div className="page-container py-4">
                    <p className="text-xs text-muted">
                        <strong>Turmeric</strong> (<em>Curcuma longa</em>) is one of India's most valuable spice exports. India produces over 75% of global turmeric supply and exports over $212 million annually. The two primary export varieties are <strong>Alleppey</strong> from Kerala (5-6.5% curcumin) and <strong>Lakadong</strong> from Meghalaya (7-9% curcumin).
                    </p>
                </div>
            </div>

            {/* ① Hero */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <HeroSection
                    label="Alleppey · Lakadong · GI-Tagged · FSSAI Certified"
                    title="Turmeric Powder & Finger Export from India"
                    subtitle="Export Desi supplies premium Alleppey turmeric from Kerala and Lakadong turmeric from Meghalaya. Both varieties are sourced from verified processors, lab-tested for curcumin content, and shipped with full export documentation. We serve buyers in the USA, UK, Germany, UAE, and Japan."
                    primaryCTA={{ label: 'Request a Quote', href: '/contact?product=turmeric&type=quote' }}
                    secondaryCTA={{ label: 'Request a Sample', href: '/contact?product=turmeric&type=sample' }}
                    imageUrl="/images/downloaded/products/turmeric/turmeric-hero.jpg"
                    imageSize="45%"
                    imagePosition="right bottom"
                />
            </motion.div>

            {/* Visual Reference — immediately after hero */}
            <MotionSection variant="fadeUp" delay={200}>
                <ImageGrid
                    label="Visual Reference"
                    heading="Product and Processing Imagery"
                    images={TURMERIC_IMAGES}
                    columns={4}
                />
            </MotionSection>

            {/* Product Snapshot */}
            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={250}>
                <div className="page-container py-8">
                    <ProductSnapshot items={TURMERIC_SNAPSHOT} />
                </div>
            </MotionSection>

            {/* Jump links */}
            <nav className="bg-white border-b border-border sticky top-[81px] z-30" aria-label="Page sections">
                <div className="page-container">
                    <div className="flex items-center overflow-x-auto scrollbar-none">
                        {JUMP_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="flex-shrink-0 text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand px-4 py-3.5 border-b-2 border-transparent hover:border-brand transition-all duration-150"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* ② Overview & Varieties */}
            <div id="overview" style={{ scrollMarginTop: '120px' }} />
            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={300}>
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Overview"
                            heading="Two Premium Varieties. One Reliable Supply."
                            paragraphs={[
                                'India exports over $212 million worth of turmeric annually, with two primary varieties serving different market segments. Alleppey turmeric from Kerala offers 5-6.5% curcumin with deep orange-yellow color and strong earthy aroma — ideal for standard spice blends and food manufacturing.',
                                'Lakadong turmeric from Meghalaya delivers 7-9% curcumin (the highest in the world) with golden-yellow color — preferred for premium supplements, nutraceutical extracts, and high-value retail. Both varieties are available as whole fingers and fine powder.',
                            ]}
                        />
                        <div id="varieties">
                            <p className="section-label">Varieties</p>
                            <h2 className="text-xl md:text-2xl font-bold mb-8">Choose by curcumin requirement and application.</h2>
                            <div className="space-y-4">
                                <MotionCard>
                                    <div className="p-6 bg-surface border border-border">
                                        <h3 className="font-bold text-brand text-lg mb-2">Alleppey Turmeric</h3>
                                        <p className="text-sm text-muted mb-3">Kerala origin · 5-6.5% curcumin · Deep orange-yellow</p>
                                        <ul className="text-sm text-muted space-y-2">
                                            <li>• Strong earthy aroma, oily texture</li>
                                            <li>• Best for spice blends, food manufacturing</li>
                                            <li>• Price: $8-12/kg FOB (finger), $10-14/kg (powder)</li>
                                        </ul>
                                    </div>
                                </MotionCard>
                                <MotionCard>
                                    <div className="p-6 bg-surface border border-brand">
                                        <h3 className="font-bold text-brand text-lg mb-2">Lakadong Turmeric <span className="text-xs font-semibold uppercase tracking-widest bg-brand text-white px-2 py-0.5 rounded ml-2">Premium</span></h3>
                                        <p className="text-sm text-muted mb-3">Meghalaya origin · 7-9% curcumin · Golden-yellow</p>
                                        <ul className="text-sm text-muted space-y-2">
                                            <li>• Highest curcumin content globally</li>
                                            <li>• Best for supplements, extracts, nutraceuticals</li>
                                            <li>• Price: $15-22/kg FOB (finger), $18-26/kg (powder)</li>
                                        </ul>
                                    </div>
                                </MotionCard>
                            </div>
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* ③ Specifications Table */}
            <div id="specifications" style={{ scrollMarginTop: '120px' }} />
            <MotionSection variant="fadeUp" delay={400}>
                <SpecTable
                    label="Product Specifications"
                    heading="Curcumin Content and Quality Parameters"
                    caption="Curcumin values are typical ranges. Exact content confirmed by COA per lot."
                    headers={TURMERIC_SPECS.headers}
                    rows={TURMERIC_SPECS.rows}
                />
            </MotionSection>

            {/* Process Anchoring */}
            <MotionSection variant="fadeUp" delay={450}>
                <ImageGrid
                    images={TURMERIC_PROCESS_IMAGES}
                    columns={2}
                />
            </MotionSection>

            {/* ④ Certifications */}
            <div id="certifications" style={{ scrollMarginTop: '120px' }} />
            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={500}>
                <div className="page-container section-pad">
                    <p className="section-label">Certifications</p>
                    <h2 className="text-xl md:text-2xl font-bold mb-8">Mandatory and market-specific compliance.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <MotionCard>
                            <div className="p-6 bg-white border border-border">
                                <h3 className="font-bold text-brand mb-4">Mandatory (All Markets)</h3>
                                <StructuredList
                                    items={[
                                        'FSSAI License — Indian food safety compliance',
                                        'APEDA RCMC — Registered agricultural exporter',
                                        'Phytosanitary Certificate — NPPO India, per shipment',
                                        'Certificate of Origin — FIEO or Chamber of Commerce',
                                        'COA — Curcumin content, microbiology, heavy metals',
                                    ]}
                                />
                            </div>
                        </MotionCard>
                        <MotionCard>
                            <div className="p-6 bg-white border border-border">
                                <h3 className="font-bold text-brand mb-4">On Request (Market-Specific)</h3>
                                <StructuredList
                                    items={[
                                        'USDA Organic — USA, Canada organic markets',
                                        'EU Organic (Ecocert/Control Union) — European markets',
                                        'HACCP / ISO 22000 — Food safety management',
                                        'Halal — UAE, Malaysia, Indonesia',
                                        'Kosher — USA, Israel',
                                        'GI Tag — Meghalaya Lakadong certification',
                                    ]}
                                />
                            </div>
                        </MotionCard>
                    </div>
                </div>
            </MotionSection>

            {/* ⑤ Packaging */}
            <div id="packaging" style={{ scrollMarginTop: '120px' }} />
            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={550}>
                <div className="page-container section-pad">
                    <p className="section-label">Packaging</p>
                    <h2 className="text-xl md:text-2xl font-bold mb-8">Bulk and retail-ready formats.</h2>
                    <div className="max-w-2xl divide-y divide-border border-t border-border">
                        {[
                            { label: 'Bulk (Finger)', detail: '25kg woven PP bags with PE liner, moisture-proof' },
                            { label: 'Bulk (Powder)', detail: '25kg kraft bags with PE liner, nitrogen-flushed on request' },
                            { label: 'Retail-Ready', detail: '1kg, 5kg vacuum-sealed pouches, custom branding available' },
                            { label: 'Private Label', detail: 'Custom packaging, 4-6 weeks lead time, MOQ 500kg' },
                            { label: 'Export Carton', detail: 'Double-wall corrugated, palletized, container-ready' },
                        ].map(({ label, detail }) => (
                            <div key={label} className="flex gap-6 py-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-brand min-w-[120px] pt-0.5">{label}</span>
                                <span className="text-sm text-muted leading-relaxed">{detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </MotionSection>

            {/* ⑥ Target Markets */}
            <div id="markets" style={{ scrollMarginTop: '120px' }} />
            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={600}>
                <div className="page-container section-pad">
                    <p className="section-label">Target Markets</p>
                    <h2 className="text-xl md:text-2xl font-bold mb-8">Serving global buyers with documented supply.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { market: 'USA', buyer: 'Spice importers, supplement brands', detail: '$52M annual imports, 6.2% CAGR' },
                            { market: 'UK / EU', buyer: 'Organic food distributors', detail: 'EU MRL compliance, Ecocert organic' },
                            { market: 'UAE / Middle East', buyer: 'Spice traders, retail chains', detail: 'Halal certified, cultural familiarity' },
                            { market: 'Japan', buyer: 'Nutraceutical manufacturers', detail: 'JAS organic, strict microbial limits' },
                            { market: 'Bangladesh', buyer: 'Spice blenders, food manufacturers', detail: 'Proximity, cost-effective logistics' },
                            { market: 'Australia', buyer: 'Health food importers', detail: 'Growing superfood positioning' },
                        ].map(({ market, buyer, detail }) => (
                            <MotionCard key={market}>
                                <div className="p-5 bg-white border border-border">
                                    <h3 className="font-bold text-brand mb-2">{market}</h3>
                                    <p className="text-sm text-muted mb-2">{buyer}</p>
                                    <p className="text-xs text-muted">{detail}</p>
                                </div>
                            </MotionCard>
                        ))}
                    </div>
                </div>
            </MotionSection>

            {/* ⑦ FAQ */}
            <div id="faq" style={{ scrollMarginTop: '120px' }} />
            <MotionSection variant="fadeUp" delay={650}>
                <FAQAccordion
                    label="Common Questions"
                    heading="Turmeric Export: Frequently Asked Questions"
                    items={TURMERIC_FAQS}
                />
            </MotionSection>

            {/* ⑧ Final CTA */}
            <MotionSection variant="fadeUp" delay={700}>
                <CTASection
                    heading="Source certified turmeric from India."
                    subtext="Send us your curcumin requirement, destination market, and target volume. We confirm variety availability and indicative pricing within 48 business hours."
                    primaryCTA={{ label: 'Submit Your Requirement', href: '/contact?product=turmeric' }}
                    secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                    background="dark"
                />
            </MotionSection>

            {/* Floating Product Navigation */}
            <FloatingProductNav
                items={FOOD_INGREDIENTS_PRODUCTS}
                currentPath="/industries/food-ingredients/turmeric"
                categoryLabel="Food Ingredients"
            />
        </>
    );
}
