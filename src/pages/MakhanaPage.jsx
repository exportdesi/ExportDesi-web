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
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { makhanaSpecs } from '../data/makhana';
import { Helmet } from 'react-helmet-async';
import { useRef } from 'react';
import { getOrganizationSchema, getBreadcrumbSchema } from '../utils/schemaGenerator';

const FOOD_INGREDIENTS_PRODUCTS = [
    { label: 'Fox Nuts', name: 'Makhana', href: '/industries/food-ingredients/makhana' },
    { label: 'Dehydrated', name: 'Onion & Garlic', href: '/industries/food-ingredients/dehydrated-ingredients' },
    { label: 'Ayurvedic', name: 'Moringa', href: '/industries/food-ingredients/moringa' },
];

const PRODUCT_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Makhana (Fox Nuts)',
    description: 'Export Desi supplies 6 & 7 Suta export-grade makhana (phool makhana / fox nuts) from Bihar, India. FSSAI, APEDA, GI-tagged. COA available. Bulk & retail-ready.',
    brand: { '@type': 'Brand', name: 'Export Desi' },
    category: 'Food Ingredients',
    countryOfOrigin: 'IN',
    offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://exportdesi.com/#organization' },
    },
};

// ============================================================================
// IMAGE ASSETS — All from /public/images/products/makhana/
// ============================================================================

const HERO_IMAGE = '/images/products/makhana/makhana-hero.webp';

// Product Reference (What You Are Sourcing - 6 images)
const PRODUCT_IMAGES = [
    { src: '/images/products/makhana/raw-on-white.webp', alt: 'Raw makhana', label: 'Raw Makhana' },
    { src: '/images/products/makhana/big-sized-makhana.jpg', alt: 'Large size makhana', label: 'Big Sized Makhana' },
    { src: '/images/products/makhana/size-graded-makhana.jpg', alt: 'Size graded makhana', label: 'Size Graded' },
    { src: '/images/products/makhana/storage-makhana.jpg', alt: 'Seed storage', label: 'Seed Storage' },
    { src: '/images/products/makhana/big-packing-makhana.jpg', alt: 'Bulk packing', label: 'Bulk Packing' },
    { src: '/images/products/makhana/makhna-collage.webp', alt: 'Product collage', label: 'Product Range' },
];

// Processing Journey (9 images/videos in sequence: Field → Pick → Seeds → Roast → Pop → Grade → Pack)
const PROCESS_IMAGES = [
    { src: '/images/products/makhana/makhna-field.webp', alt: 'Makhana pond with workers harvesting', label: 'Harvesting from Pond' },
    { src: '/images/products/makhana/hand-picking-makhana.webp', alt: 'Workers hand picking makhana', label: 'Hand Collection' },
    { src: '/images/products/makhana/makhana-Hand-Picked.webp', alt: 'Fresh picked makhana seeds', label: 'Hand Picking' },
    { src: '/images/products/makhana/makhana-roasting.webp', alt: 'Traditional roasting process', label: 'Traditional Roasting' },
    { src: '/images/products/makhana/makhana-popping.webp', alt: 'Makhana popping/expansion', label: 'Popping Process' },
    { src: '/images/products/makhana/makhana-popping-machine.webp', alt: 'Machine assisted popping', label: 'Machine Processing' },
    { src: '/images/products/makhana/makhana-manual-grading.mp4', alt: 'Manual grading by size', label: 'Size Grading', isVideo: true, poster: '/images/products/makhana/makhana-Hand-Picked.webp' },

    { src: '/images/products/makhana/makhana-seeds.png', alt: 'Processed makhana seeds ready for packing', label: 'Processed Seeds' },
    { src: '/images/products/makhana/makhana-retail-packaging.webp', alt: 'Export packing cartons', label: 'Export Packaging' },
];

// Value-Added (3 images)
const VALUE_ADDED_IMAGES = [
    { src: '/images/products/makhana/makhana-flavoured-packs.webp', alt: 'Flavoured packs', label: 'Flavoured Makhana' },
    { src: '/images/products/makhana/makhna-powder-and-kheer-mix.webp', alt: 'Makhana powder', label: 'Makhana Powder' },
    { src: '/images/products/makhana/makhana-cookies.webp', alt: 'Makhana cookies', label: 'Makhana Cookies' },
];

// Certification Logos - actual certificate images from /public/
const CERTIFICATION_LOGOS = [
    { src: '/fssai-Certificate.webp', label: 'FSSAI', desc: 'Food Safety' },
    { src: '/APEDA-Certificate.webp', label: 'APEDA', desc: 'Export Certified' },
    { src: '/Spice-Board-Certificate.webp', label: 'Spice Board', desc: 'Spice Certified' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/ISO_logo_%282016%29.svg/1200px-ISO_logo_%282016%29.svg.png', alt: 'ISO 22000', label: 'ISO 22000', desc: 'Food Safety Mgmt' },
    { src: '/images/Gi-tag-certificate.webp', alt: 'GI Tag', label: 'GI TAG', desc: 'Mithila Origin' },
    { src: '/FIEO-Certificate.webp', label: 'FIEO', desc: 'Export House' },
];

// Navigation Links - removed, not relevant anymore
const JUMP_LINKS = [];

const MAKHANA_SNAPSHOT = [
    { label: 'Grades', value: '5 · 6 · 7 Suta', sub: '15mm to 21mm+ size range' },
    { label: 'Origin', value: 'Bihar, India', sub: 'Mithila region - GI Tagged' },
    { label: 'MOQ', value: '1 MT', sub: 'Sample orders 5-10 kg available' },
    { label: 'Shelf Life', value: '12 Months', sub: 'In sealed moisture-proof pack' },
];

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================

// Inline CTA — Light background, black text, matching "private label" style
function InlineCTA({ text = 'Ready to discuss your requirements?', buttonText = 'Get a Quote', href = '/contact?product=makhana&type=quote' }) {
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
function ProcessImageCard({ src, alt, label, isVideo, poster, delay }) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: delay * 0.15 }}
            className="group"
        >
            <div className="overflow-hidden rounded-xl border border-border bg-black shadow-lg hover:shadow-2xl transition-all duration-500 mb-3">
                {isVideo ? (
                    <video
                        className="w-full h-64 object-cover"
                        controls
                        preload="metadata"
                        poster={poster}
                        width="400"
                        height="256"
                    >
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        width="400"
                        height="256"
                    />
                )}
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

// Certification Logo Grid
function CertificationLogos() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {CERTIFICATION_LOGOS.map((cert, idx) => (
                <div key={idx} className="group flex flex-col items-center p-5 bg-white border border-border rounded-xl hover:border-brand/30 hover:shadow-lg transition-all duration-300">
                    <div className="w-20 h-20 mb-3 flex items-center justify-center">
                        <img
                            src={cert.src}
                            alt={cert.label}
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                            width="80"
                            height="80"
                        />
                    </div>
                    <p className="text-xs font-bold text-brand uppercase tracking-wider mb-1">{cert.label}</p>
                    <p className="text-[10px] text-muted text-center leading-tight">{cert.desc}</p>
                </div>
            ))}
        </div>
    );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function MakhanaPage() {
    // Parallax scroll effects - smooth, subtle motion
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 25, damping: 35, restDelta: 0.001 });

    // Product gallery parallax - very subtle
    const galleryY = useTransform(smoothProgress, [0.1, 0.4], [20, -20]);

    // Processing section parallax - minimal
    const processingY = useTransform(smoothProgress, [0.3, 0.6], [15, -15]);

    return (
        <>
                <SEOMeta
                    title="Makhana Exporter from India | GI-Tagged Fox Nuts | Export Desi"
                    description="Export Desi supplies GI-tagged Makhana (fox nuts) from Bihar in 5/6/7 Suta grades. FSSAI, APEDA certified. Size-graded, lab-tested. Quote in 48 hours."
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
                        { name: 'Makhana', url: '/industries/food-ingredients/makhana' }
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
                    label="GI-Tagged · FSSAI Certified · Bihar Sourced"
                    title="GI-Tagged Makhana from Bihar — 5/6/7 Suta Export Grades"
                    subtitle="Export-grade makhana (phool makhana / fox nuts) from Bihar's Mithila region. Size-graded, lab-tested, GI-tagged. Each shipment includes Certificate of Origin, phytosanitary certificate, and third-party lab report."
                    primaryCTA={{ label: 'Request a Quote', href: '/contact?product=makhana&type=quote' }}
                    secondaryCTA={{ label: 'Request a Sample', href: '/contact?product=makhana&type=sample' }}
                    imageUrl="/images/products/makhana/makhana-hero.webp"
                    imageSize="45%"
                    imagePosition="right bottom"
                />
            </motion.div>

            {/* =================================================================
                2. PRODUCT SNAPSHOT
            ================================================================= */}
            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={150}>
                <div className="page-container py-8">
                    <ProductSnapshot items={MAKHANA_SNAPSHOT} />
                </div>
            </MotionSection>


            {/* =================================================================
                2. PRODUCT OVERVIEW — Global Positioning + Stats
            ================================================================= */}
            <MotionSection variant="fadeUp" delay={200}>
                <div id="overview" style={{ scrollMarginTop: '130px' }} className="bg-gray-50 border-b border-border">
                    <div className="page-container section-pad">
                        <p className="section-label mb-3">Global Leader</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand">India's Makhana Dominance</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div>
                                <p className="text-muted text-sm leading-relaxed mb-4">
                                    <strong>India produces 90% of the world's makhana supply</strong>, with Bihar accounting for over 70% of India's production. The Mithila region of Bihar — where we source directly — is the historical heartland of makhana cultivation, recognized with a Geographic Indication (GI) tag.
                                </p>
                                <p className="text-muted text-sm leading-relaxed">
                                    This concentration means buyers get consistent quality, competitive pricing, and reliable supply chains. We work directly with FPOs (Farmer Producer Organizations) in Bihar, eliminating middlemen and ensuring traceability from pond to port.
                                </p>
                            </div>

                            {/* Nutritional Benefits & Why Makhana */}
                            <div className="bg-white p-6 border border-border">
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Why Makhana</p>
                                <ul className="space-y-3 text-sm text-muted">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span><strong>Nutrient Dense:</strong> High protein (9%), low fat, rich in calcium, magnesium & antioxidants</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span><strong>Gluten-Free & Vegan:</strong> Naturally allergen-free, suitable for all dietary preferences</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span><strong>Better Than Popcorn:</strong> 3x more protein, lower calories, non-GMO, no kernel hulls</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span><strong>Purity Guaranteed:</strong> &lt;5% broken, &lt;8% moisture, zero foreign matter</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span><strong>Bulk Export Ready:</strong> From 1 MT to container loads, shipped worldwide (USA, UK, EU, UAE, Australia)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Stats Grid - Compact */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 border border-border">
                                    <p className="text-2xl font-bold text-brand">90%</p>
                                    <p className="text-xs text-muted mt-1">India's Global Share</p>
                                </div>
                                <div className="bg-white p-4 border border-border">
                                    <p className="text-2xl font-bold text-brand">70%+</p>
                                    <p className="text-xs text-muted mt-1">Bihar's Production</p>
                                </div>
                                <div className="bg-white p-4 border border-border">
                                    <p className="text-2xl font-bold text-brand">12</p>
                                    <p className="text-xs text-muted mt-1">Months Shelf Life</p>
                                </div>
                                <div className="bg-white p-4 border border-border">
                                    <p className="text-2xl font-bold text-brand">&lt;5%</p>
                                    <p className="text-xs text-muted mt-1">Broken Ratio</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </MotionSection>

            {/* Inline CTA - Moved here from after Processing */}
            <InlineCTA text="Need makhana for your next shipment? Let's discuss specifications." />

            {/* =================================================================
                3. PRODUCT REFERENCE GALLERY (6 images with labels) - Parallax
            ================================================================= */}
            <MotionSection variant="fadeUp" delay={300}>
                <motion.div
                    style={{ y: galleryY }}
                    className="bg-white border-b border-border"
                >
                    <div className="page-container section-pad">
                        <p className="section-label mb-2">Product Gallery</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand">What You Are Sourcing</h2>
                        <p className="text-muted text-sm max-w-3xl mb-10">
                            Export-grade makhana in various forms — from raw bulk to retail-ready packaged products.
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
                </motion.div>
            </MotionSection>

            {/* =================================================================
                4. VALUE-ADDED PRODUCTS
            ================================================================= */}
            <MotionSection variant="fadeUp" delay={400}>
                <div id="value-added" style={{ scrollMarginTop: '130px' }} className="bg-gray-50 border-b border-border">
                    <div className="page-container section-pad">
                        <p className="section-label mb-2">Retail Ready</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Value-Added Products</h2>
                        <p className="text-muted text-sm max-w-3xl mb-10">
                            In addition to bulk raw makhana, we supply flavoured makhana, makhana powder, and makhana cookies in retail-ready packaging. MOQ: 10 cartons per product.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {VALUE_ADDED_IMAGES.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="overflow-hidden">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-brand text-lg mb-3">{img.label}</h3>
                                        
                                        {idx === 0 && (
                                            <>
                                                <p className="text-muted text-sm mb-4 leading-relaxed">{makhanaSpecs.valueAddedProducts.flavouredMakhana.description}</p>
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted mt-0.5">Flavours</span>
                                                        <span className="text-muted">{makhanaSpecs.valueAddedProducts.flavouredMakhana.flavours.join(', ')}</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted mt-0.5">MOQ</span>
                                                        <span className="text-brand font-semibold">{makhanaSpecs.valueAddedProducts.flavouredMakhana.moq}</span>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        
                                        {idx === 1 && (
                                            <>
                                                <p className="text-muted text-sm mb-4 leading-relaxed">{makhanaSpecs.valueAddedProducts.makhanaPowder.description}</p>
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted mt-0.5">Applications</span>
                                                        <span className="text-muted">{makhanaSpecs.valueAddedProducts.makhanaPowder.applications.slice(0, 2).join(', ')}</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted mt-0.5">MOQ</span>
                                                        <span className="text-brand font-semibold">{makhanaSpecs.valueAddedProducts.makhanaPowder.moq}</span>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        
                                        {idx === 2 && (
                                            <>
                                                <p className="text-muted text-sm mb-4 leading-relaxed">{makhanaSpecs.valueAddedProducts.makhanaCookies.description}</p>
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted mt-0.5">Variants</span>
                                                        <span className="text-muted">{makhanaSpecs.valueAddedProducts.makhanaCookies.variants.join(', ')}</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted mt-0.5">MOQ</span>
                                                        <span className="text-brand font-semibold">{makhanaSpecs.valueAddedProducts.makhanaCookies.moq}</span>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* Inline CTA */}
            <div className="bg-gray-100 border-y border-gray-200 py-12">
                <div className="page-container flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-xl font-bold text-black">Want retail-ready packaging for your brand? We do private label.</p>
                    <a href="/contact" className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">Get Started</a>
                </div>
            </div>

            {/* =================================================================
                5. PROCESSING JOURNEY (4 images with labels) - Parallax
            ================================================================= */}
            <MotionSection variant="fadeUp" delay={500}>
                <motion.div
                    id="processing"
                    style={{ y: processingY }}
                    className="bg-white border-b border-border"
                >
                    <div className="page-container section-pad">
                        <p className="section-label mb-2">From Pond to Port</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand">Processing Journey</h2>
                        <p className="text-muted text-sm max-w-3xl mb-10">
                            Traditional methods meet modern quality control. Every step is documented and monitored.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                            {PROCESS_IMAGES.map((img, idx) => (
                                <ProcessImageCard
                                    key={idx}
                                    src={img.src}
                                    alt={img.alt}
                                    label={img.label}
                                    isVideo={img.isVideo}
                                    poster={img.poster}
                                    delay={idx}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </MotionSection>



            {/* =================================================================
                7. SPECIFICATIONS & COMPLIANCE (Accordions)
            ================================================================= */}
            <div id="specifications" style={{ scrollMarginTop: '130px' }} />
            <MotionSection variant="fadeUp" delay={600}>
                <div className="bg-gray-50 border-b border-border">
                    <div className="page-container section-pad">
                        <p className="section-label mb-6">Technical Details</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Specifications & Compliance</h2>

                        <div className="space-y-6">
                            {/* Grades & Packaging Combined */}
                            <ContentAccordion
                                title="Export Grades & Packaging"
                                subtitle="Size grades and pack formats"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                }
                                defaultOpen={false}
                            >
                                {/* Grade Table */}
                                <SpecTable
                                    caption={`HS Code: ${makhanaSpecs.hsCode} (effective July 2025 for popped makhana)`}
                                    headers={makhanaSpecs.gradeTable.headers}
                                    rows={makhanaSpecs.gradeTable.rows}
                                    compact={true}
                                />

                                {/* Packaging Table */}
                                <div className="mt-6">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">Packaging Formats</p>
                                    <SpecTable
                                        headers={makhanaSpecs.packagingTable.headers}
                                        rows={makhanaSpecs.packagingTable.rows}
                                        compact={true}
                                    />
                                </div>
                            </ContentAccordion>

                            {/* Certifications */}
                            <ContentAccordion
                                title="Certifications"
                                subtitle="FSSAI, APEDA, GI-Tag, Organic"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {makhanaSpecs.certifications.map((cert, idx) => (
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
                                subtitle="Complete documentation pack"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                }
                            >
                                <StructuredList items={makhanaSpecs.exportDocuments} />
                            </ContentAccordion>
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* =================================================================
                8. BUYER PERSONAS — Illustrative Images
            ================================================================= */}
            <MotionSection variant="fadeUp" delay={700}>
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
                                description="Use makhana as ingredient in snacks, cereals, and health foods"
                                example="Snack brands, cereal makers"
                                delay={0}
                            />
                            <BuyerPersonaCard
                                icon={
                                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                }
                                type="Nutraceutical Brands"
                                description="Use makhana powder in supplements and functional foods"
                                example="Protein powders, baby food"
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
                                example="Supermarkets, ethnic stores"
                                delay={300}
                            />
                            <BuyerPersonaCard
                                icon={
                                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                }
                                type="Distributors"
                                description="Distribute bulk makhana to foodservice and wholesale markets"
                                example="Foodservice suppliers, wholesalers"
                                delay={450}
                            />
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* =================================================================
                9. FAQ
            ================================================================= */}
            <div id="faq" style={{ scrollMarginTop: '130px' }} />
            <MotionSection variant="fadeUp" delay={800}>
                <div className="bg-gray-50">
                    <FAQAccordion
                        label="Common Questions"
                        heading="Frequently Asked Questions"
                        items={makhanaSpecs.faqs}
                    />
                </div>
            </MotionSection>

            {/* =================================================================
                10. FINAL CTA — Redesigned for High Contrast
            ================================================================= */}
            <MotionSection variant="fadeUp" delay={850}>
                <section className="bg-white border-t border-border section-pad">
                    <div className="page-container text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-brand mb-4 leading-tight">
                            Ready to Source Export-Grade Makhana from India?
                        </h2>
                        <p className="text-muted mb-8 max-w-2xl mx-auto">
                            Get customized quotes for container loads or private label requirements. We typically respond within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="/contact?product=makhana&type=quote"
                                className="btn-primary"
                            >
                                Get a Quote
                            </a>
                            <a
                                href="/contact?product=makhana&type=sample"
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
                currentPath="/industries/food-ingredients/makhana"
                categoryLabel="Food Ingredients"
            />
        </>
    );
}
