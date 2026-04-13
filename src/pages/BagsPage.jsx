import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ProductSnapshot from '../components/ProductSnapshot';
import StructuredList from '../components/StructuredList';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import ContentAccordion from '../components/ContentAccordion';
import ImageGrid from '../components/ImageGrid';
import FloatingProductNav from '../components/FloatingProductNav';
import { MotionSection, MotionCard } from '../components/MotionWrapper';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PRODUCT_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Jute and Non-Woven Bags',
    description: 'Custom-manufactured jute and non-woven bags for retail, promotional, and industrial applications. Eco-friendly, biodegradable, print-ready.',
    brand: { '@type': 'Brand', name: 'Export Desi' },
    category: 'Eco-Friendly Packaging',
    countryOfOrigin: 'IN',
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        offerCount: '100+',
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'Export Desi', url: 'https://exportdesi.com' },
    },
};

const INFO_PAGES = [
    { label: 'Compliance', name: 'Export Compliance', href: '/compliance' },
    { label: 'How We Work', name: 'Our Process', href: '/how-we-work' },
    { label: 'About', name: 'About Us', href: '/about' },
];

// Product Images - Jute Bags
const JUTE_IMAGES = [
    { src: '/images/products/Jute-bags/Jute-hero.png', alt: 'Jute shopping bags', caption: 'Jute Shopping Bags', subcaption: '300-400 GSM, custom sizes' },
    { src: '/images/products/Jute-bags/Jute-bags-1.png', alt: 'Jute wine bags', caption: 'Jute Wine Bags', subcaption: 'Single and double bottle configurations' },
    { src: '/images/products/Jute-bags/Jute-bags-2.png', alt: 'Jute gift bags', caption: 'Jute Gift Bags', subcaption: 'Premium lamination, reinforced bottom' },
];

// Product Images - Non-Woven Bags
const NON_WOVEN_IMAGES = [
    { src: '/images/products/non-woven-bags/non-woven-bags.png', alt: 'Non-woven D-cut bags', caption: 'Non-Woven D-Cut Bags', subcaption: '70-120 GSM, die-cut handles' },
    { src: '/images/products/other-shopping-bags/other-shopping-bags.png', alt: 'Other shopping bags', caption: 'Specialty Bags', subcaption: 'Box bags, roll bags, custom formats' },
];

const BAGS_SNAPSHOT = [
    { label: 'Products', value: 'Jute · Non-Woven', sub: 'Custom sizes & printing' },
    { label: 'Origin', value: 'West Bengal · Gujarat', sub: 'Traditional mills, modern units' },
    { label: 'MOQ', value: '500 pieces', sub: 'Sample orders available' },
    { label: 'Customization', value: 'Size · GSM · Handle · Print', sub: 'Full bespoke manufacturing' },
];

const BAGS_FAQS = [
    {
        question: 'What customization options are available for jute and non-woven bags?',
        answer: 'We offer full customization across size, GSM (fabric weight), handle type (die-cut, stitched, loop), closure (drawstring, flap, open-top), and printing (screen, offset, digital, laminated). Share your dimensions, artwork, and quantity — we confirm feasibility and provide a quote within 48 hours.',
    },
    {
        question: 'What are the standard sizes for jute shopping bags?',
        answer: 'Standard jute shopping bag sizes range from 30x25x10 cm (small) to 45x35x15 cm (large). Custom dimensions are available for orders above 1,000 pieces. GSM typically ranges from 300-400 for shopping bags, with 400+ GSM for heavy-duty bulk bags.',
    },
    {
        question: 'What is the MOQ for custom-printed bags?',
        answer: 'The standard MOQ for custom-printed jute and non-woven bags is 500 pieces per design. For plain bags without printing, MOQs start at 200 pieces. Sample orders (50-100 pieces) are available for quality evaluation before bulk orders.',
    },
    {
        question: 'Are jute bags eco-friendly and biodegradable?',
        answer: 'Yes. Jute is 100% biodegradable, compostable, and renewable. It decomposes within 1-2 years, leaving no toxic residue. Jute cultivation absorbs CO2 — 1 hectare of jute plants consumes ~15 tons of CO2 during the growing season.',
    },
    {
        question: 'What printing methods are available for non-woven bags?',
        answer: 'We offer screen printing (cost-effective for solid colors), offset printing (high-detail, multi-color), digital printing (photographic quality, low MOQ), and heat transfer (metallic/special effects). The method is selected based on artwork complexity, quantity, and budget.',
    },
    {
        question: 'Can you manufacture bags for specific retail or industrial applications?',
        answer: 'Yes. We work with manufacturers across West Bengal (jute) and Gujarat (non-woven) who produce application-specific bags: wine bags with dividers, grocery bags with lamination, roll bags for dispensers, gift bags with satin handles, and bulk bags with reinforced stress points.',
    },
];

const JUTE_PRODUCTS = [
    {
        name: 'Jute Shopping Bags',
        specs: ['300-400 GSM jute fabric', 'Laminated or uncoated finish', 'Die-cut or stitched handles', 'Custom printing: screen, offset, digital'],
        applications: ['Retail shopping', 'Grocery stores', 'Promotional events', 'Gift packaging'],
    },
    {
        name: 'Jute Wine Bags',
        specs: ['Single & double bottle configurations', 'Drawstring or flap closure', 'Natural or printed designs', 'Insert dividers for multi-bottle'],
        applications: ['Wine retailers', 'Corporate gifting', 'Wedding favors', 'Tasting events'],
    },
    {
        name: 'Jute Gift Bags',
        specs: ['Small to XL sizes available', 'Reinforced bottom gusset', 'Satin or jute handles', 'Premium lamination options'],
        applications: ['Luxury retail', 'Corporate gifts', 'Jewelry packaging', 'Fashion accessories'],
    },
    {
        name: 'Jute Bulk Bags',
        specs: ['Industrial-grade 400+ GSM', 'Large capacity (10-50 kg)', 'Reinforced stress points', 'Custom dimensions'],
        applications: ['Agricultural produce', 'Industrial goods', 'Storage solutions', 'Wholesale distribution'],
    },
];

const NON_WOVEN_PRODUCTS = [
    {
        name: 'Non-Woven D-Cut Bags',
        specs: ['70-120 GSM options', 'Die-cut handles for easy carrying', 'Heat-sealed seams', 'Water-resistant coating available'],
        applications: ['Retail shopping', 'Pharmacy bags', 'Food delivery', 'Promotional distribution'],
    },
    {
        name: 'Non-Woven Box Bags',
        specs: ['Gusseted bottom for stability', '80-150 GSM fabric', 'Reinforced base', 'Custom printing available'],
        applications: ['Premium retail', 'Shoe bags', 'Electronics packaging', 'Trade show materials'],
    },
    {
        name: 'Non-Woven Roll Bags',
        specs: ['Continuous roll format', 'Perforated for easy tearing', '70-100 GSM', 'Dispenser-compatible'],
        applications: ['Supermarket checkout', 'Food service', 'Pharmacy dispensing', 'Hospitality'],
    },
];

const COMPLIANCE_DATA = [
    {
        region: 'India',
        rules: ['BIS standards for jute fabric quality', 'FSSAI compliance for food-contact bags', 'Pollution Control Board clearance for manufacturing units'],
        docs: ['GST registration', 'MSME registration (manufacturer)', 'Product testing reports'],
    },
    {
        region: 'USA',
        rules: ['FDA compliance for food-grade bags', 'CPSIA for children\'s product bags', 'State-level plastic bans (jute/non-woven exempt)'],
        docs: ['FDA letter of assurance', 'Product liability insurance', 'Test reports from accredited labs'],
    },
    {
        region: 'EU',
        rules: ['EN 13432 for compostability', 'REACH compliance for dyes and coatings', 'Food contact regulation (EC) No 1935/2004'],
        docs: ['Compliance certificates', 'Material safety data sheets', 'Test reports from EU-notified labs'],
    },
    {
        region: 'UK',
        rules: ['UK Plastic Packaging Tax exemption (jute/non-woven)', 'BS EN 13432 for compostability', 'Food safety regulations'],
        docs: ['UKCA marking (if applicable)', 'Compliance documentation', 'Importer due diligence files'],
    },
];

export default function BagsPage() {
    return (
        <>
            <SEOMeta
                title="Jute Bags & Non-Woven Bags Manufacturer | Custom Eco-Friendly Packaging | Export Desi"
                description="Export Desi connects you with Indian manufacturers of jute and non-woven bags. Custom sizes, GSM, handles, and printing. MOQ 500 pieces. FOB pricing. Get a quote within 48 hours."
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(PRODUCT_SCHEMA)}
                </script>
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <HeroSection
                    label="Eco-Friendly Packaging"
                    title="Jute and Non-Woven Bags: Custom Manufacturing from India."
                    subtitle="We connect you with established manufacturers across West Bengal's jute mills and Gujarat's non-woven units. Full customization — size, GSM, handle type, printing — with export-ready documentation and FOB pricing."
                    primaryCTA={{ label: 'Request a Quote', href: '/contact?product=bags&type=quote' }}
                    secondaryCTA={{ label: 'Request a Sample', href: '/contact?product=bags&type=sample' }}
                    imageUrl="/images/products/Jute-bags/Jute-hero.png"
                    imageSize="45%"
                    imagePosition="right bottom"
                />
            </motion.div>

            {/* Product Snapshot */}
            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={150}>
                <div className="page-container py-8">
                    <ProductSnapshot items={BAGS_SNAPSHOT} />
                </div>
            </MotionSection>

            {/* Jute Bags */}
            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={200}>
                <div className="page-container section-pad">
                    <p className="section-label mb-6">Jute Bags</p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-brand">Traditional Craftsmanship from West Bengal</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {JUTE_PRODUCTS.map((product) => (
                            <MotionCard key={product.name} className="bg-surface p-6 border border-border">
                                <h3 className="text-lg font-bold text-brand mb-4">{product.name}</h3>
                                <StructuredList items={product.specs} ordered={false} />
                                <div className="mt-4 pt-4 border-t border-border">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">Applications</p>
                                    <div className="flex flex-wrap gap-2">
                                        {product.applications.map((app) => (
                                            <span key={app} className="px-2.5 py-1 bg-white rounded text-xs text-muted">
                                                {app}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </MotionCard>
                        ))}
                    </div>
                    <div className="max-w-2xl">
                        <p className="text-muted leading-relaxed">
                            Jute bags are sourced from traditional mills in West Bengal, where skilled craftsmanship meets modern manufacturing standards. Each bag is biodegradable, compostable, and renewable — making it the ideal choice for eco-conscious retailers and brands.
                        </p>
                    </div>
                </div>
            </MotionSection>

            {/* Non-Woven Bags */}
            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={300}>
                <div className="page-container section-pad">
                    <p className="section-label mb-6">Non-Woven Bags</p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-brand">Modern Manufacturing from Gujarat</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {NON_WOVEN_PRODUCTS.map((product) => (
                            <MotionCard key={product.name} className="bg-white p-6 border border-border">
                                <h3 className="text-lg font-bold text-brand mb-4">{product.name}</h3>
                                <StructuredList items={product.specs} ordered={false} />
                                <div className="mt-4 pt-4 border-t border-border">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">Applications</p>
                                    <div className="flex flex-wrap gap-2">
                                        {product.applications.map((app) => (
                                            <span key={app} className="px-2.5 py-1 bg-surface rounded text-xs text-muted">
                                                {app}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </MotionCard>
                        ))}
                    </div>
                    <div className="max-w-2xl">
                        <p className="text-muted leading-relaxed">
                            Non-woven polypropylene bags offer a lightweight, water-resistant, and cost-effective alternative to traditional plastic bags. Manufactured in Gujarat's modern facilities, they are recyclable and suitable for high-volume retail and industrial applications.
                        </p>
                    </div>
                </div>
            </MotionSection>

            {/* Specifications & Compliance */}
            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={400}>
                <div className="page-container section-pad">
                    <p className="section-label mb-6">Technical Details</p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-brand">Specifications & Compliance</h2>

                    <div className="space-y-6">
                        <ContentAccordion
                            title="Product Specifications"
                            subtitle="GSM, handle types, printing, closure options"
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            }
                            defaultOpen={true}
                        >
                            <div className="space-y-0 divide-y divide-border border-t border-border">
                                {[
                                    { label: 'Jute GSM', detail: '300-400 GSM (shopping), 400+ GSM (bulk bags)' },
                                    { label: 'Non-Woven GSM', detail: '70-120 GSM (D-cut), 80-150 GSM (box bags)' },
                                    { label: 'Handle Types', detail: 'Die-cut, stitched, loop, satin ribbon, reinforced' },
                                    { label: 'Printing', detail: 'Screen, offset, digital, heat transfer, laminated finish' },
                                    { label: 'Closure', detail: 'Open-top, drawstring, flap with snap/button, zipper' },
                                    { label: 'Sizes', detail: 'Custom dimensions from 15x20 cm to 50x60 cm' },
                                ].map(({ label, detail }) => (
                                    <div key={label} className="flex gap-6 py-4">
                                        <span className="text-xs font-bold uppercase tracking-widest text-brand min-w-[140px] pt-0.5">{label}</span>
                                        <span className="text-sm text-muted leading-relaxed">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </ContentAccordion>

                        <ContentAccordion
                            title="Certifications"
                            subtitle="FSSAI, ISO, REACH compliance"
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { name: 'FSSAI', description: 'Food Safety and Standards Authority of India - For food-grade packaging' },
                                    { name: 'ISO 9001', description: 'Quality Management System certified manufacturers' },
                                    { name: 'REACH Compliance', description: 'EU Regulation 1907/2006 - Phthalate-free, heavy metal-free' },
                                    { name: 'RoHS Compliant', description: 'Restriction of Hazardous Substances - Lead, cadmium, mercury-free' },
                                    { name: 'BPA-Free', description: 'Bisphenol A-free materials for food contact applications' },
                                    { name: 'Biodegradable (Jute)', description: '100% natural, compostable, leaves no toxic residue' },
                                ].map((cert, idx) => (
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

                        <ContentAccordion
                            title="Market Compliance"
                            subtitle="India, USA, EU, UK regulations and documents"
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {COMPLIANCE_DATA.map((region) => (
                                    <div key={region.region} className="p-4 bg-surface border border-border">
                                        <h4 className="font-bold text-brand text-sm mb-3">{region.region}</h4>
                                        <div className="space-y-3">
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">Regulations</p>
                                                <ul className="space-y-1 text-xs text-muted">
                                                    {region.rules.map((rule) => (
                                                        <li key={rule} className="flex gap-1.5">
                                                            <span className="text-brand">•</span>
                                                            <span>{rule}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">Documents</p>
                                                <ul className="space-y-1 text-xs text-muted">
                                                    {region.docs.map((doc) => (
                                                        <li key={doc} className="flex gap-1.5">
                                                            <span className="text-brand">•</span>
                                                            <span>{doc}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ContentAccordion>
                    </div>
                </div>
            </MotionSection>

            {/* FAQ */}
            <MotionSection variant="fadeUp" delay={500}>
                <FAQAccordion
                    items={BAGS_FAQS}
                    label="FAQs"
                    heading="Frequently Asked Questions"
                />
            </MotionSection>

            {/* Product Images - Jute */}
            <MotionSection variant="fadeUp" delay={450}>
                <ImageGrid
                    label="Jute Bags"
                    heading="Traditional Craftsmanship from West Bengal"
                    images={JUTE_IMAGES}
                    columns={3}
                />
            </MotionSection>

            {/* Product Images - Non-Woven */}
            <MotionSection variant="fadeUp" delay={500}>
                <ImageGrid
                    label="Non-Woven Bags"
                    heading="Modern Manufacturing from Gujarat"
                    images={NON_WOVEN_IMAGES}
                    columns={2}
                />
            </MotionSection>

            {/* Final CTA */}
            <MotionSection variant="fadeUp" delay={600}>
                <CTASection
                    heading="Need custom bags for your business?"
                    subtext="Share your size, GSM, handle type, printing requirements, and quantity. We confirm manufacturer availability and provide FOB pricing within 48 hours."
                    primaryCTA={{ label: 'Request a Quote', href: '/contact?product=bags&type=quote' }}
                    background="dark"
                />
            </MotionSection>

            {/* Floating Navigation */}
            <FloatingProductNav
                items={INFO_PAGES}
                currentPath="/industries/bags"
                categoryLabel="Quick Links"
            />
        </>
    );
}
