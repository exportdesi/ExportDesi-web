import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import SpecTable from '../components/SpecTable';
import StructuredList from '../components/StructuredList';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import ContentAccordion from '../components/ContentAccordion';
import ProductSnapshot from '../components/ProductSnapshot';
import FloatingProductNav from '../components/FloatingProductNav';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MotionSection, MotionCard } from '../components/MotionWrapper';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getOrganizationSchema, getBreadcrumbSchema } from '../utils/schemaGenerator';

const FOOD_INGREDIENTS_PRODUCTS = [
    { label: 'Fox Nuts', name: 'Makhana', href: '/industries/food-ingredients/makhana' },
    { label: 'Dehydrated', name: 'Onion & Garlic', href: '/industries/food-ingredients/dehydrated-ingredients' },
    { label: 'Ayurvedic', name: 'Moringa', href: '/industries/food-ingredients/moringa' },
];

const PRODUCT_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Moringa Products',
    description: 'Export Desi is a bulk moringa leaf powder exporter in India, supplying organic moringa powder, capsules, and tablets from South India. USDA, EU Organic certified. Rich in vitamins, minerals, 46+ antioxidants. Nutraceutical grade.',
    image: 'https://exportdesi.com/images/products/moringa/moringa-hero.webp',
    brand: { '@type': 'Brand', name: 'Export Desi' },
    category: 'Ayurvedic & Wellness',
    countryOfOrigin: 'IN',
};

const MORINGA_SNAPSHOT = [
    { label: 'Products', value: 'Powder · Capsules · Tablets', sub: '100% pure moringa oleifera' },
    { label: 'Origin', value: 'South India', sub: 'Certified organic farms' },
    { label: 'MOQ', value: '50 kg', sub: 'Sample orders 5-10 kg available' },
    { label: 'Certifications', value: 'USDA · EU Organic', sub: 'NPOP, NOP certified' },
];

const MORINGA_SPECS = {
    headers: ['Product Form', 'Particle Size', 'Moisture', 'Pack Format', 'Shelf Life'],
    rows: [
        ['Moringa Leaf Powder (Fine)', '80-100 mesh', '≤6%', '5/10/25 kg aluminum-lined bags', '24 months'],
        ['Moringa Leaf Powder (Regular)', '40-60 mesh', '≤6%', '5/10/25 kg aluminum-lined bags', '24 months'],
        ['Moringa Capsules (500mg)', 'N/A', '≤6%', '60/90/120 capsules per bottle', '24 months'],
        ['Moringa Tablets (500mg)', 'N/A', '≤6%', '60/90/120 tablets per bottle', '24 months'],
    ],
};

const MORINGA_FAQS = [
    {
        question: 'What is the source of your moringa?',
        answer: 'Our moringa is sourced from certified organic farms in Tamil Nadu and Karnataka, South India. The region\'s tropical climate and nutrient-rich soil produce moringa with high concentrations of vitamins, minerals, and antioxidants.',
    },
    {
        question: 'Do you supply organic-certified moringa?',
        answer: 'Yes. We supply USDA Organic, EU Organic, and India Organic (NPOP) certified moringa products. Certificates are issued by accredited bodies (Ecocert, Control Union, OneCert) and are verifiable online.',
    },
    {
        question: 'What is the minimum order quantity?',
        answer: 'Minimum order is 50 kg for powder and 100 bottles for capsules/tablets. Sample orders of 5-10 kg (powder) or 10-20 bottles (capsules/tablets) are available at cost for quality evaluation.',
    },
    {
        question: 'What are the key nutritional benefits?',
        answer: 'Moringa is rich in vitamins (A, C, E, B-complex), minerals (calcium, potassium, iron, magnesium), all 9 essential amino acids, and over 46 antioxidants. It supports immune function, energy levels, and overall wellness.',
    },
    {
        question: 'Can you do private label packaging?',
        answer: 'Yes. We offer private label packaging for capsules and tablets with custom bottle sizes, label design, and branding. Lead time for private label orders is 4-6 weeks.',
    },
    {
        question: 'What testing is provided?',
        answer: 'Every batch includes third-party lab reports for heavy metals, pesticide residue, microbiology (E. coli, Salmonella, Staph), and nutritional analysis. Buyer-specified labs can be used at buyer cost.',
    },
];

export default function MoringaPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    return (
        <>
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-brand origin-left z-50" style={{ scaleX }} />
            <SEOMeta
                title="Bulk Moringa Leaf Powder Exporter India | Organic Capsules | USDA EU Certified"
                description="Export Desi supplies bulk organic moringa leaf powder, capsules, tablets from South India. USDA, EU Organic (NPOP/NOP) certified. 80-100 mesh. Nutraceutical grade. FOB/CIF quotes in 48 hours."
                keywords="moringa powder exporter India, organic moringa leaf powder bulk, USDA organic moringa supplier, moringa capsules exporter India, moringa tablets wholesale, moringa oleifera powder supplier, EU organic moringa India"
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
                        { name: 'Moringa', url: '/industries/food-ingredients/moringa' }
                    ]))}
                </script>
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <HeroSection
                    label="Ayurvedic & Wellness · USDA Organic · EU Organic"
                    title="Organic Moringa Products from South India"
                    subtitle="Export Desi supplies 100% pure moringa leaf powder, capsules, and tablets from certified organic farms. Rich in vitamins, minerals, and 46+ antioxidants. We serve nutraceutical brands, supplement manufacturers, and wellness retailers worldwide."
                    primaryCTA={{ label: 'Request a Quote', href: '/contact?product=moringa&type=quote' }}
                    secondaryCTA={{ label: 'Request a Sample', href: '/contact?product=moringa&type=sample' }}
                    imageUrl="/images/products/moringa/Moringa-powder.png"
                    imageSize="45%"
                    imagePosition="right bottom"
                />
            </motion.div>

            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={150}>
                <div className="page-container py-8">
                    <ProductSnapshot items={MORINGA_SNAPSHOT} />
                </div>
            </MotionSection>

            {/* Pricing Section */}
            <MotionSection variant="fadeUp" delay={200}>
                <div className="bg-white border-b border-border">
                    <div className="page-container section-pad">
                        <p className="section-label mb-2">Pricing</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand">Indicative Pricing — FOB India</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
                            <MotionCard className="bg-surface p-6 border border-border">
                                <h3 className="text-lg font-bold text-brand mb-2">Moringa Leaf Powder</h3>
                                <p className="text-sm text-muted mb-4">Volume-based FOB pricing</p>
                                <ul className="space-y-2 text-sm text-muted">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>80-100 mesh (fine) or 40-60 mesh (regular)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>5/10/25 kg aluminum-lined bags</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>MOQ: 50 kg (samples available)</span>
                                    </li>
                                </ul>
                            </MotionCard>

                            <MotionCard className="bg-surface p-6 border border-border">
                                <h3 className="text-lg font-bold text-brand mb-2">Moringa Capsules</h3>
                                <p className="text-sm text-muted mb-4">Volume-based FOB pricing</p>
                                <ul className="space-y-2 text-sm text-muted">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>500mg per capsule, vegetarian HPMC shells</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>60/90/120 capsules per bottle</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>MOQ: 100 bottles</span>
                                    </li>
                                </ul>
                            </MotionCard>

                            <MotionCard className="bg-surface p-6 border border-border">
                                <h3 className="text-lg font-bold text-brand mb-2">Moringa Tablets</h3>
                                <p className="text-sm text-muted mb-4">Volume-based FOB pricing</p>
                                <ul className="space-y-2 text-sm text-muted">
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>500mg per tablet, compressed pure leaf</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>60/90/120 tablets per bottle</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        <span>MOQ: 100 bottles</span>
                                    </li>
                                </ul>
                            </MotionCard>
                        </div>
                        <p className="text-xs text-muted mt-6">
                            Pricing varies by order volume, organic certification status, mesh size (for powder), and packaging format. Request a quote with your specifications — we respond within 48 hours with FOB India pricing. CIF pricing available on request.
                        </p>
                    </div>
                </div>
            </MotionSection>

            {/* Nutritional Profile */}
            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={300}>
                <div className="page-container section-pad">
                    <p className="section-label mb-6">Nutritional Benefits</p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-brand">Why Moringa is Called the "Miracle Tree"</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-muted text-sm leading-relaxed mb-6">
                                Moringa oleifera is one of the most nutrient-dense plants on Earth. Every part of the tree has nutritional value, but the leaves are the most concentrated source of vitamins, minerals, and antioxidants.
                            </p>
                            <StructuredList
                                items={[
                                    '7x more Vitamin C than oranges',
                                    '4x more Vitamin A than carrots',
                                    '4x more Calcium than milk',
                                    '3x more Potassium than bananas',
                                    '2x more Protein than yogurt',
                                    'All 9 essential amino acids (rare for plant sources)',
                                ]}
                                ordered
                            />
                        </div>
                        <div className="bg-white p-6 border border-border">
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Key Nutrients per 100g</p>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted">Protein</span>
                                    <span className="font-semibold text-brand">27g</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted">Vitamin A</span>
                                    <span className="font-semibold text-brand">378 mg</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted">Vitamin C</span>
                                    <span className="font-semibold text-brand">51.7 mg</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted">Calcium</span>
                                    <span className="font-semibold text-brand">2003 mg</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted">Iron</span>
                                    <span className="font-semibold text-brand">28.2 mg</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted">Fiber</span>
                                    <span className="font-semibold text-brand">19.2g</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* Specifications & Compliance */}
            <div id="specifications" style={{ scrollMarginTop: '130px' }} />
            <MotionSection variant="fadeUp" delay={400}>
                <div className="bg-gray-50 border-b border-border">
                    <div className="page-container section-pad">
                        <p className="section-label mb-6">Technical Details</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Specifications & Compliance</h2>

                        <div className="space-y-6">
                            <ContentAccordion
                                title="Product Specifications"
                                subtitle="Particle size, moisture, pack formats"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                }
                                defaultOpen={true}
                            >
                                <SpecTable
                                    caption="All values are typical ranges. Exact specifications confirmed at order stage."
                                    headers={MORINGA_SPECS.headers}
                                    rows={MORINGA_SPECS.rows}
                                    compact={true}
                                />
                            </ContentAccordion>

                            <ContentAccordion
                                title="Certifications"
                                subtitle="USDA Organic, EU Organic, NPOP, NOP"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { name: 'USDA Organic', description: 'National Organic Program (NOP) certified' },
                                        { name: 'EU Organic', description: 'European Union organic standards compliant' },
                                        { name: 'India Organic (NPOP)', description: 'National Programme for Organic Production' },
                                        { name: 'FSSAI', description: 'Food Safety and Standards Authority of India' },
                                        { name: 'GMP', description: 'Good Manufacturing Practices certified facility' },
                                        { name: 'HACCP', description: 'Hazard Analysis Critical Control Point' },
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
                                subtitle="USA, EU, UK, Australia requirements"
                                icon={
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-white rounded-lg border border-border">
                                        <h4 className="font-bold text-brand text-sm mb-2">🇺🇸 United States</h4>
                                        <ul className="space-y-1 text-xs text-muted">
                                            <li>• FDA facility registration</li>
                                            <li>• USDA Organic (NOP) compliant</li>
                                            <li>• Prior notice filing</li>
                                            <li>• FSMA compliant</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg border border-border">
                                        <h4 className="font-bold text-brand text-sm mb-2">🇪🇺 European Union</h4>
                                        <ul className="space-y-1 text-xs text-muted">
                                            <li>• EU Organic certification</li>
                                            <li>• EU MRL pesticide limits</li>
                                            <li>• Novel Food compliance (if applicable)</li>
                                            <li>• Traceability documentation</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg border border-border">
                                        <h4 className="font-bold text-brand text-sm mb-2">🇬🇧 United Kingdom</h4>
                                        <ul className="space-y-1 text-xs text-muted">
                                            <li>• UK Organic certification</li>
                                            <li>• Post-Brexit customs docs</li>
                                            <li>• Certificate of Origin</li>
                                            <li>• Phytosanitary certificate</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg border border-border">
                                        <h4 className="font-bold text-brand text-sm mb-2">🇦🇺 Australia</h4>
                                        <ul className="space-y-1 text-xs text-muted">
                                            <li>• TGA compliance (if therapeutic)</li>
                                            <li>• FSANZ food standards</li>
                                            <li>• Biosecurity import permit</li>
                                            <li>• Fumigation certificate</li>
                                        </ul>
                                    </div>
                                </div>
                            </ContentAccordion>
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* Applications */}
            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={500}>
                <div className="page-container section-pad">
                    <p className="section-label mb-6">Applications</p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-brand">How Buyers Use Our Moringa</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Dietary Supplements',
                                description: 'Capsules and tablets for daily nutrition, energy support, and immune function.',
                                icon: '💊',
                            },
                            {
                                title: 'Functional Foods',
                                description: 'Powder added to smoothies, protein bars, cereals, and health food products.',
                                icon: '🥤',
                            },
                            {
                                title: 'Cosmetics & Skincare',
                                description: 'Moringa oil and powder in face masks, creams, and natural beauty products.',
                                icon: '🧴',
                            },
                            {
                                title: 'Tea Blends',
                                description: 'Dried moringa leaves in herbal tea formulations and wellness infusions.',
                                icon: '🍵',
                            },
                            {
                                title: 'Animal Nutrition',
                                description: 'Moringa powder in pet food and livestock feed for enhanced nutrition.',
                                icon: '🐾',
                            },
                            {
                                title: 'Private Label',
                                description: 'Custom-branded moringa products for retailers and wellness brands.',
                                icon: '🏷️',
                            },
                        ].map((app, idx) => (
                            <MotionCard key={idx} className="bg-surface p-6 border border-border">
                                <div className="text-3xl mb-4">{app.icon}</div>
                                <h3 className="text-lg font-bold text-brand mb-2">{app.title}</h3>
                                <p className="text-sm text-muted">{app.description}</p>
                            </MotionCard>
                        ))}
                    </div>
                </div>
            </MotionSection>

            {/* FAQ */}
            <MotionSection variant="fadeUp" delay={600}>
                <FAQAccordion
                    items={MORINGA_FAQS}
                    label="FAQ"
                    heading="Frequently Asked Questions"
                />
            </MotionSection>

            {/* Final CTA */}
            <MotionSection variant="fadeUp" delay={700}>
                <CTASection
                    heading="Ready to Source Organic Moringa?"
                    subtext="Share your product form, volume, and certification requirements. We respond with indicative pricing within 48 business hours."
                    primaryCTA={{ label: 'Get a Quote', href: '/contact?product=moringa&type=quote' }}
                    secondaryCTA={{ label: 'Request a Sample', href: '/contact?product=moringa&type=sample' }}
                    background="dark"
                />
            </MotionSection>

            {/* Floating Product Navigation */}
            <FloatingProductNav
                items={FOOD_INGREDIENTS_PRODUCTS}
                currentPath="/industries/food-ingredients/moringa"
                categoryLabel="Food Ingredients"
            />
        </>
    );
}
