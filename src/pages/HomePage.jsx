import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';
import StructuredList from '../components/StructuredList';
import CertificateMarquee from '../components/CertificateMarquee';
import { MotionSection, MotionCard, staggerContainer } from '../components/MotionWrapper';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ORGANIZATION_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Export Desi',
    url: 'https://exportdesi.com',
    logo: 'https://exportdesi.com/logo.png',
    description: 'Merchant export management for Indian food ingredients - Makhana, Dehydrated Onion, Garlic, Banana Powder, Moringa',
    foundingDate: '2013',
    founder: {
        '@type': 'Person',
        name: 'Rajiv Dudeja',
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Gurgaon',
        addressRegion: 'Haryana',
        addressCountry: 'IN',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9289790283',
        email: 'contact@exportdesi.com',
        contactType: 'customer service',
        availableLanguage: 'English',
    },
    sameAs: [
        'https://www.linkedin.com/company/exportdesi',
    ],
};

const WEBSITE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Export Desi',
    url: 'https://exportdesi.com',
    potentialAction: {
        '@type': 'SearchAction',
        target: 'https://exportdesi.com/contact',
        'query-input': 'required name=search_term_string',
    },
};

export default function HomePage() {
    return (
        <>
            <SEOMeta
                title="Indian Food Ingredients & Packaging Exporter | Makhana, Moringa, Bags | Export Desi"
                description="Export Desi manages processor qualification, documentation, and shipment for Indian food ingredients and eco-friendly packaging. FSSAI, APEDA certified. Get a quote within 48 hours."
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(ORGANIZATION_SCHEMA)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(WEBSITE_SCHEMA)}
                </script>
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <HeroSection
                    label="Export Partner for Indian Food Ingredients"
                    title="From Processor to Port: Single-Point Export Management."
                    subtitle="We qualify processors, manage documentation, and coordinate shipments for international buyers sourcing Indian food ingredients. FSSAI, APEDA, Spice Board certified."
                    primaryCTA={{ label: 'Get a Sourcing Quote', href: '/contact' }}
                    secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                    imageUrl="/home-hero-3.jpg"
                />
            </motion.div>

            {/* Active Products - moved up below hero */}
            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={150}>
                <div className="page-container section-pad">
                    <div className="mb-14">
                        <p className="section-label">Active Products</p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl">
                            Product Categories
                        </h2>
                        <p className="text-muted mt-4 max-w-xl">
                            We source within categories where we have active processor relationships, prior shipment history, and a documented compliance pathway for the product. We do not list products we have not shipped.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
                        <Link to="/industries/food-ingredients/makhana" className="bg-surface p-8 hover:bg-white/5 transition-colors block">
                            <p className="section-label">Fox Nuts</p>
                            <h3 className="text-xl font-bold mb-3">Makhana</h3>
                            <p className="text-muted text-sm mb-6">
                                Four size grades from 12mm to 18mm+, sourced from processing units in Bihar's Mithila cluster. Each shipment includes Certificate of Origin, phytosanitary certificate, grade-specific third-party lab report, and packing list.
                            </p>
                            <span className="text-sm font-semibold text-brand border-b border-brand pb-0.5">
                                View Grades and Specifications
                            </span>
                        </Link>

                        <Link to="/industries/food-ingredients/dehydrated-ingredients" className="bg-surface p-8 hover:bg-white/5 transition-colors block">
                            <p className="section-label">Dehydrated</p>
                            <h3 className="text-xl font-bold mb-3">Onion & Garlic</h3>
                            <p className="text-muted text-sm mb-6">
                                Flakes, minced, granules, and powder forms from Gujarat. Moisture ≤6%, third-party lab reports per lot. Trial orders welcome.
                            </p>
                            <span className="text-sm font-semibold text-brand border-b border-brand pb-0.5">
                                View Product Range
                            </span>
                        </Link>

                        <Link to="/industries/food-ingredients/moringa" className="bg-surface p-8 hover:bg-white/5 transition-colors block">
                            <p className="section-label">Ayurvedic & Wellness</p>
                            <h3 className="text-xl font-bold mb-3">Moringa Products</h3>
                            <p className="text-muted text-sm mb-6">
                                Moringa leaf powder, capsules, and tablets. Sourced from certified organic farms. Rich in vitamins, minerals, and antioxidants. USDA/EU Organic available.
                            </p>
                            <span className="text-sm font-semibold text-brand border-b border-brand pb-0.5">
                                View Specifications
                            </span>
                        </Link>

                        <Link to="/industries/food-ingredients/turmeric" className="bg-surface p-8 hover:bg-white/5 transition-colors block">
                            <p className="section-label">Spices</p>
                            <h3 className="text-xl font-bold mb-3">Turmeric</h3>
                            <p className="text-muted text-sm mb-6">
                                Alleppey and Lakadong turmeric with 5-9% curcumin. Sourced from Kerala and Meghalaya. FSSAI, APEDA, and Organic certified lots.
                            </p>
                            <span className="text-sm font-semibold text-brand border-b border-brand pb-0.5">
                                View Turmeric Grades
                            </span>
                        </Link>
                    </div>
                </div>
            </MotionSection>

            {/* Definition block */}
            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={300}>
                <div className="page-container section-pad">
                    <div className="max-w-2xl">
                        <p className="section-label">What We Are</p>
                        <p className="text-base text-muted leading-[1.85] max-w-2xl mb-5">
                            Export Desi is a merchant export management operation based in Gurgaon, India. We structure international B2B supply of Indian food ingredients across defined product categories: verifying processors, managing documentation, and coordinating shipments from purchase order through to Bill of Lading.
                        </p>
                        <p className="text-base text-muted leading-[1.85] max-w-2xl">
                            We handle processor qualification, pre-dispatch verification, documentation alignment, and port coordination for international buyers sourcing Indian food ingredients. You work with one point of contact. Each shipment moves with a complete, verified document set.
                        </p>
                    </div>
                </div>
            </MotionSection>

            {/* Certificate marquee - moved below "What We Are" */}
            <MotionSection variant="fadeIn" delay={350}>
                <CertificateMarquee />
            </MotionSection>


            {/* Execution Model */}
            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={400}>
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="The Model"
                            heading="We do not manufacture. We qualify processors and manage the shipment."
                            paragraphs={[
                                'Export Desi works directly with processing units across active product categories. Before any order is placed, processors are assessed on four criteria: current FSSAI compliance status, prior export documentation track record, mechanical grading capability, and moisture-controlled storage. Processors who do not meet all four are not used.',
                                'HS classification is verified before the Proforma Invoice is issued. Packing lists are matched line-by-line against invoice values before the container is released. Phytosanitary certificate validity is checked against the confirmed sailing date.',
                            ]}
                        />
                        <div className="space-y-6 pt-2 md:pt-14">
                            <StructuredList
                                items={[
                                    'Processor identification and pre-qualification against buyer grade specification',
                                    'Pre-dispatch lot inspection: size, moisture, purity, and packaging conformance',
                                    'Documentation preparation: commercial invoice, packing list, CoO, phytosanitary certificate, lab reports',
                                    'Port coordination: stuffing schedule, container seal, and BL issuance',
                                    'Full document set dispatched to buyer electronically on the day of departure',
                                ]}
                                ordered
                            />
                        </div>
                    </div>
                </div>
            </MotionSection>

            <MotionSection variant="fadeUp" delay={500}>
                <CTASection
                    heading="Have a supply requirement?"
                    subtext="Send us the product, grade or specification, destination market, and target volume. We assess processor availability and respond with indicative pricing within 48 business hours."
                    primaryCTA={{ label: 'Submit Your Requirement', href: '/contact' }}
                    secondaryCTA={{ label: 'View Compliance Framework', href: '/compliance' }}
                    background="dark"
                />
            </MotionSection>
        </>
    );
}
