import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import SpecTable from '../components/SpecTable';
import StructuredList from '../components/StructuredList';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import ContentAccordion from '../components/ContentAccordion';
import ProductSnapshot from '../components/ProductSnapshot';
import FloatingProductNav from '../components/FloatingProductNav';
import { MotionSection } from '../components/MotionWrapper';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useRef } from 'react';
import { getOrganizationSchema, getBreadcrumbSchema } from '../utils/schemaGenerator';
import {
    dehydratedSpecTable,
    dehydratedFaqs,
    dehydratedExportDocuments,
    dehydratedCertifications
} from '../data/dehydrated';

const FOOD_INGREDIENTS_PRODUCTS = [
    { label: 'Fox Nuts', name: 'Makhana', href: '/industries/food-ingredients/makhana' },
    { label: 'Dehydrated', name: 'Onion & Garlic', href: '/industries/food-ingredients/dehydrated-ingredients' },
    { label: 'Ayurvedic', name: 'Moringa', href: '/industries/food-ingredients/moringa' },
];

const PRODUCT_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
        {
            '@type': 'Product',
            name: 'Dehydrated Onion',
            description: 'Export Desi is a dehydrated onion powder exporter in India, supplying flakes, minced, granules, and powder from Gujarat. Moisture ≤6%, HPLC lab reports. Bulk wholesale.',
            image: 'https://exportdesi.com/images/products/dehydrated/dehydrated-onion.webp',
            brand: { '@type': 'Brand', name: 'Export Desi' },
            category: 'Food Ingredients',
            countryOfOrigin: 'IN',
            offers: {
                '@type': 'AggregateOffer',
                lowPrice: '1',
                highPrice: '5',
                priceCurrency: 'USD',
                priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'KGM' },
                seller: { '@type': 'Organization', name: 'Export Desi' },
            },
        },
        {
            '@type': 'Product',
            name: 'Dehydrated Garlic',
            description: 'Export Desi supplies dehydrated garlic flakes and powder from Gujarat processors. Machine cleaned, double sorted, HS Code 0712.90.20. Lab-tested for allicin content.',
            image: 'https://exportdesi.com/images/products/dehydrated/dehydrated-garlic.webp',
            brand: { '@type': 'Brand', name: 'Export Desi' },
            category: 'Food Ingredients',
            countryOfOrigin: 'IN',
            offers: {
                '@type': 'AggregateOffer',
                lowPrice: '2',
                highPrice: '9',
                priceCurrency: 'USD',
                priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'KGM' },
                seller: { '@type': 'Organization', name: 'Export Desi' },
            },
        },
    ],
};

// ============================================================================
// IMAGE ASSETS — All from /public/images/products/dehydrated/
// ============================================================================

const HERO_IMAGE = '/images/products/dehydrated/white-onion-flakes.jpg';

// Product Reference (What You Are Sourcing - 6 images)
const PRODUCT_IMAGES = [
    { src: '/images/products/dehydrated/white-onion-flakes.jpg', alt: 'Dehydrated white onion flakes', label: 'White Onion Flakes' },
    { src: '/images/products/dehydrated/white-onion-powder.jpg', alt: 'Dehydrated white onion powder', label: 'White Onion Powder' },
    { src: '/images/products/dehydrated/red-onion-flakes.jpg', alt: 'Dehydrated red onion flakes', label: 'Red Onion Flakes' },
    { src: '/images/products/dehydrated/garlic-flakes.jpg', alt: 'Dehydrated garlic flakes', label: 'Garlic Flakes' },
    { src: '/images/products/dehydrated/garlic-powder.jpg', alt: 'Dehydrated garlic powder', label: 'Garlic Powder' },
    { src: '/images/products/dehydrated/garlic-in-bag.jpg', alt: 'Export packaging', label: 'Export Packaging' },
];

// Processing Journey (6 images - using available product images)
const PROCESS_IMAGES = [
    { src: '/images/products/dehydrated/garlic-in-bag.jpg', alt: 'Raw material preparation', label: 'Raw Material Intake' },
    { src: '/images/products/dehydrated/white-onion-flakes.jpg', alt: 'Dehydrated flakes', label: 'Dehydration Process' },
    { src: '/images/products/dehydrated/garlic-flakes.jpg', alt: 'Dried garlic flakes', label: 'Flake Production' },
    { src: '/images/products/dehydrated/white-onion-powder.jpg', alt: 'Fine onion powder', label: 'Pulverizing' },
    { src: '/images/products/dehydrated/garlic-powder.jpg', alt: 'Sorting and grading', label: 'Sorting & Grading' },
    { src: '/images/products/dehydrated/white-onion-flakes.jpg', alt: 'Mixed SKU cartons', label: 'Export Packaging' },
];

const DEHYDRATED_SNAPSHOT = [
    { label: 'Products', value: 'Onion · Garlic', sub: 'Flakes, powder, granule, minced' },
    { label: 'Origin', value: 'Gujarat, India', sub: 'Dehydrated ingredient cluster' },
    { label: 'MOQ', value: 'Trial quantities', sub: 'Multi-SKU consolidation available' },
    { label: 'Moisture', value: '≤ 6%', sub: 'Per lot lab verification' },
];

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================

// Inline CTA — Light background, black text
function InlineCTA({ text = 'Ready to discuss your requirements?', buttonText = 'Get a Quote', href = '/contact?product=dehydrated&type=quote' }) {
    return (
        <div className="bg-surface border-y border-border py-12">
            <div className="page-container flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-xl font-bold text-brand text-center md:text-left">{text}</p>
                <a
                    href={href}
                    className="btn-primary whitespace-nowrap"
                >
                    {buttonText}
                </a>
            </div>
        </div>
    );
}

// Product Image Card with Label
function ProductImageCard({ src, alt, label, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: delay * 0.1 }}
            className="group"
        >
            <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-500 mb-3">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width="400"
                    height="224"
                />
            </div>
            <p className="text-center text-xs font-bold text-brand uppercase tracking-wider">{label}</p>
        </motion.div>
    );
}

// Process Image Card with Label
function ProcessImageCard({ src, alt, label, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: delay * 0.15 }}
            className="group"
        >
            <div className="overflow-hidden rounded-xl border border-border bg-black shadow-lg hover:shadow-2xl transition-all duration-500 mb-3">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width="400"
                    height="256"
                />
            </div>
            <p className="text-center text-xs font-bold text-brand uppercase tracking-wider">{label}</p>
        </motion.div>
    );
}

// Buyer Persona Card — Icon based
function BuyerPersonaCard({ icon, type, description, example, delay }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: delay / 1000 }}
            className="p-6 bg-white border border-border rounded-lg hover:border-brand/50 hover:shadow-lg transition-all"
        >
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                {icon}
            </div>
            <h4 className="font-bold text-brand text-base mb-2">{type}</h4>
            <p className="text-sm text-muted mb-3">{description}</p>
            <div className="pt-3 border-t border-border">
                <p className="text-xs text-muted"><span className="font-semibold">Example:</span> {example}</p>
            </div>
        </motion.div>
    );
}

export default function DehydratedPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    return (
        <>
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand origin-left z-50" style={{ scaleX }} />
            <SEOMeta
                title="Dehydrated Onion Powder Exporter India | Garlic Flakes | Gujarat Supplier"
                description="Export Desi supplies bulk dehydrated onion powder and garlic flakes from Gujarat. Flakes, minced, granules. ≤6% moisture, lab-tested. FOB/CIF quotes in 48 hours."
                keywords="dehydrated onion exporter India, dehydrated garlic supplier India, onion powder exporter Gujarat, garlic flakes wholesale, dehydrated onion flakes bulk, garlic powder exporter India, dehydrated vegetable supplier"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(PRODUCT_SCHEMA)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(getOrganizationSchema())}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(getBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Food Ingredients', url: '/industries/food-ingredients' },
                        { name: 'Dehydrated Ingredients', url: '/industries/food-ingredients/dehydrated-ingredients' }
                    ]))}
                </script>
            </Helmet>

            {/* =================================================================
                1. HERO SECTION
            ================================================================= */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <HeroSection
                    label="FSSAI Certified · APEDA Registered · Gujarat Sourced"
                    title="Dehydrated Onion & Garlic from Gujarat — Flakes, Powder, Granules. ≤6% Moisture, Lab-Tested."
                    subtitle="Export-grade dehydrated ingredients from Gujarat. Multiple forms (flakes, minced, granules, powder). Moisture-tested, lab-verified, packed for international freight."
                    primaryCTA={{ label: 'Request a Quote', href: '/contact?product=dehydrated&type=quote' }}
                    secondaryCTA={{ label: 'Request a Sample', href: '/contact?product=dehydrated&type=sample' }}
                    imageUrl="/images/products/dehydrated/white-onion-flakes.jpg"
                    imageSize="45%"
                    imagePosition="right bottom"
                />
            </motion.div>

            {/* Product Snapshot */}
            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={150}>
                <div className="page-container py-8">
                    <ProductSnapshot items={DEHYDRATED_SNAPSHOT} />
                </div>
            </MotionSection>

            {/* =================================================================
                2. PRODUCT GALLERY
            ================================================================= */}
            <MotionSection variant="fadeUp" delay={200}>
                <div className="bg-white border-b border-border">
                    <div className="page-container section-pad">
                        <p className="section-label mb-2">Product Gallery</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand">What You Are Sourcing</h2>
                        <p className="text-muted text-sm max-w-3xl mb-10">
                            Export-grade dehydrated onion and garlic in multiple forms — from flakes to powder, all moisture-tested and lab-verified.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                            {PRODUCT_IMAGES.map((img, idx) => (
                                <ProductImageCard
                                    key={idx}
                                    src={img.src}
                                    alt={img.alt}
                                    label={img.label}
                                    delay={idx}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* =================================================================
                3. PRODUCT OVERVIEW — Global Positioning + Stats
            ================================================================= */}
            <MotionSection variant="fadeUp" delay={300}>
                <div id="overview" style={{ scrollMarginTop: '130px' }} className="bg-gray-50 border-b border-border">
                    <div className="page-container section-pad">
                        <p className="section-label mb-3">Why Gujarat</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand">India's Dehydrated Ingredient Hub</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div>
                                <p className="text-muted text-sm leading-relaxed mb-4">
                                    <strong>Gujarat accounts for 70% of India's dehydrated onion and garlic production</strong>, with clusters in Kutch, Saurashtra, and North Gujarat. The region's dry climate, modern processing infrastructure, and proximity to Mundra/Nhava Sheva ports make it ideal for export-grade production.
                                </p>
                                <p className="text-muted text-sm leading-relaxed">
                                    We work directly with ISO 22000 and HACCP certified processors who maintain moisture-controlled storage, mechanical grading systems, and in-house quality labs. Every lot is verified before dispatch.
                                </p>
                            </div>

                            {/* Benefits & Why Dehydrated */}
                            <div className="bg-white p-6 border border-border">
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Why Dehydrated Ingredients</p>
                                <ul className="space-y-3 text-sm text-muted">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span><strong>Extended Shelf Life:</strong> 12-18 months in sealed packaging, no refrigeration needed</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span><strong>Consistent Quality:</strong> Standardized moisture (≤6%), uniform particle size, no seasonal variation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span><strong>Cost Efficient:</strong> Lower freight costs (90% weight reduction vs. fresh), reduced waste</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span><strong>Multi-Form Supply:</strong> Flakes, minced, granules, powder — customized to your application</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span><strong>Multi-SKU Consolidation:</strong> Mix onion, garlic, and other dehydrated ingredients in one shipment</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 border border-border">
                                    <p className="text-2xl font-bold text-brand">70%</p>
                                    <p className="text-xs text-muted mt-1">Gujarat's Production Share</p>
                                </div>
                                <div className="bg-white p-4 border border-border">
                                    <p className="text-2xl font-bold text-brand">≤6%</p>
                                    <p className="text-xs text-muted mt-1">Moisture Content</p>
                                </div>
                                <div className="bg-white p-4 border border-border">
                                    <p className="text-2xl font-bold text-brand">12-18</p>
                                    <p className="text-xs text-muted mt-1">Months Shelf Life</p>
                                </div>
                                <div className="bg-white p-4 border border-border">
                                    <p className="text-2xl font-bold text-brand">10-15</p>
                                    <p className="text-xs text-muted mt-1">Days Lead Time</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </MotionSection>

            {/* Pricing Section */}
            <MotionSection variant="fadeUp" delay={250}>
                <div className="bg-surface border-b border-border">
                    <div className="page-container section-pad">
                        <p className="section-label mb-2">Pricing</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand">Volume-Based FOB Pricing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                            <div className="bg-white p-6 border border-border rounded-lg">
                                <h3 className="text-lg font-bold text-brand mb-2">Dehydrated Onion</h3>
                                <p className="text-sm text-muted mb-4">Volume-based FOB pricing</p>
                                <ul className="space-y-2 text-sm text-muted">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>Flakes, minced, granules, powder</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>White and red onion variants</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>MOQ: 500kg (trial orders welcome)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 border border-border rounded-lg">
                                <h3 className="text-lg font-bold text-brand mb-2">Dehydrated Garlic</h3>
                                <p className="text-sm text-muted mb-4">Volume-based FOB pricing</p>
                                <ul className="space-y-2 text-sm text-muted">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>Flakes, minced, granules, powder</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>Machine cleaned, double sorted</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>Allicin content documentation available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-xs text-muted mt-6">
                            Pricing varies by order volume, product form (flakes/minced/granules/powder), packaging format, and current market conditions. Request a quote with your specifications — we respond within 48 hours with FOB India pricing. CIF pricing available on request.
                        </p>
                    </div>
                </div>
            </MotionSection>

            {/* Inline CTA */}
            <InlineCTA text="Need dehydrated ingredients for your next shipment? Let's discuss specifications." />


            {/* =================================================================
                4. SPECIFICATIONS & COMPLIANCE (Accordions)
            ================================================================= */}
            <div id="specifications" style={{ scrollMarginTop: '130px' }} />
            <MotionSection variant="fadeUp" delay={400}>
                <div className="bg-gray-50 border-b border-border">
                    <div className="page-container section-pad">
                        <p className="section-label mb-6">Technical Details</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Specifications & Compliance</h2>

                        <div className="space-y-6">
                            {/* Product Specs Table */}
                            <ContentAccordion
                                title="Product Specifications"
                                subtitle="Forms, moisture, mesh sizes, and pack formats"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                }
                                defaultOpen={true}
                            >
                                <SpecTable
                                    caption="Moisture values are maximum permitted. Exact parameters confirmed at order stage per product and form."
                                    headers={dehydratedSpecTable.headers}
                                    rows={dehydratedSpecTable.rows}
                                    compact={true}
                                />
                            </ContentAccordion>

                            {/* Certifications */}
                            <ContentAccordion
                                title="Certifications"
                                subtitle="FSSAI, APEDA, ISO, HACCP, GMP"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {dehydratedCertifications.map((cert, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <div>
                                                <p className="font-semibold text-brand text-sm">{cert.name}</p>
                                                <p className="text-xs text-muted">{cert.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ContentAccordion>

                            {/* Compliance */}
                            <div id="compliance" style={{ scrollMarginTop: '130px' }} />
                            <ContentAccordion
                                title="Market Compliance"
                                subtitle="EU, USA, UK, UAE requirements"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-surface rounded-lg">
                                        <h4 className="font-bold text-brand text-sm mb-2">🇪🇺 European Union</h4>
                                        <ul className="space-y-1 text-xs text-muted">
                                            <li>• EU MRL pesticide limits</li>
                                            <li>• Aflatoxin testing required</li>
                                            <li>• Traceability documentation</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-surface rounded-lg">
                                        <h4 className="font-bold text-brand text-sm mb-2">🇺🇸 United States</h4>
                                        <ul className="space-y-1 text-xs text-muted">
                                            <li>• FDA facility registration</li>
                                            <li>• Prior notice filing</li>
                                            <li>• FSMA compliant</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-surface rounded-lg">
                                        <h4 className="font-bold text-brand text-sm mb-2">🇬🇧 United Kingdom</h4>
                                        <ul className="space-y-1 text-xs text-muted">
                                            <li>• Post-Brexit customs docs</li>
                                            <li>• Certificate of Origin</li>
                                            <li>• Phytosanitary certificate</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-surface rounded-lg">
                                        <h4 className="font-bold text-brand text-sm mb-2">🇦🇪 UAE & GCC</h4>
                                        <ul className="space-y-1 text-xs text-muted">
                                            <li>• Chamber attested COO</li>
                                            <li>• Halal certification available</li>
                                            <li>• GSO standards compliant</li>
                                        </ul>
                                    </div>
                                </div>
                            </ContentAccordion>

                            {/* Export Documents */}
                            <ContentAccordion
                                title="Export Documents"
                                subtitle="Complete documentation pack per lot"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                }
                            >
                                <StructuredList items={dehydratedExportDocuments} />
                            </ContentAccordion>
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* =================================================================
                6. BUYER PERSONAS
            ================================================================= */}
            <MotionSection variant="fadeUp" delay={500}>
                <div className="bg-white border-b border-border">
                    <div className="page-container section-pad">
                        <p className="section-label mb-3">Who Buys From Us</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-brand">Our Buyers</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <BuyerPersonaCard
                                icon={
                                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                }
                                type="Food Manufacturers"
                                description="Use dehydrated ingredients in snacks, ready meals, and processed foods"
                                example="Snack brands, instant noodle makers"
                                delay={0}
                            />
                            <BuyerPersonaCard
                                icon={
                                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                }
                                type="Seasoning Blends"
                                description="Use dehydrated onion/garlic as base ingredients in spice mixes"
                                example="Bouillon cubes, seasoning powders"
                                delay={150}
                            />
                            <BuyerPersonaCard
                                icon={
                                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                }
                                type="Retail Buyers"
                                description="Sell retail packs under own brand or import branded products"
                                example="Supermarkets, ethnic food stores"
                                delay={300}
                            />
                            <BuyerPersonaCard
                                icon={
                                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                }
                                type="Foodservice Distributors"
                                description="Distribute bulk dehydrated ingredients to restaurants and caterers"
                                example="HORECA suppliers, institutional caterers"
                                delay={450}
                            />
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* =================================================================
                7. FAQ
            ================================================================= */}
            <div id="faq" style={{ scrollMarginTop: '130px' }} />
            <MotionSection variant="fadeUp" delay={600}>
                <div className="bg-gray-50">
                    <FAQAccordion
                        label="Common Questions"
                        heading="Dehydrated Ingredients: Frequently Asked Questions"
                        items={dehydratedFaqs}
                    />
                </div>
            </MotionSection>

            {/* =================================================================
                8. FINAL CTA
            ================================================================= */}
            <MotionSection variant="fadeUp" delay={750}>
                <section className="bg-white border-t border-border section-pad">
                    <div className="page-container text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-brand mb-4 leading-tight">
                            Ready to Source Dehydrated Ingredients from India?
                        </h2>
                        <p className="text-muted mb-8 max-w-2xl mx-auto">
                            Get customized quotes for multi-SKU shipments or single-product orders. We typically respond within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="/contact?product=dehydrated&type=quote"
                                className="btn-primary"
                            >
                                Get a Quote
                            </a>
                            <a
                                href="/contact?product=dehydrated&type=sample"
                                className="btn-secondary"
                            >
                                Request a Sample
                            </a>
                        </div>
                    </div>
                </section>
            </MotionSection>

            {/* Floating Product Navigation */}
            <FloatingProductNav
                items={FOOD_INGREDIENTS_PRODUCTS}
                currentPath="/industries/food-ingredients/dehydrated-ingredients"
                categoryLabel="Food Ingredients"
            />
        </>
    );
}
