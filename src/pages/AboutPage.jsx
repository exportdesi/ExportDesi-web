import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';
import ImageGrid from '../components/ImageGrid';
import FloatingProductNav from '../components/FloatingProductNav';
import { MotionSection, MotionCard } from '../components/MotionWrapper';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Helmet } from 'react-helmet-async';
import { getOrganizationSchema, getBreadcrumbSchema } from '../utils/schemaGenerator';

const INFO_PAGES = [
    { label: 'Compliance', name: 'Export Compliance', href: '/compliance' },
    { label: 'How We Work', name: 'Our Process', href: '/how-we-work' },
    { label: 'About', name: 'About Us', href: '/about' },
];

const ABOUT_IMAGES = [
    { src: '/images/products/makhana/makhna-field.webp', alt: 'Indian spices and ingredients', caption: 'Bihar Sourcing', subcaption: 'Mithila region processor network' },
    { src: '/images/products/dehydrated/white-onion-flakes.jpg', alt: 'Food processing facility', caption: 'Gujarat Sourcing', subcaption: 'Mahuva dehydration cluster' },
    { src: '/images/products/makhana/makhana-packing.png', alt: 'Container shipping for export', caption: 'Export Dispatch', subcaption: 'Pre-dispatch verification complete' },
];

const PERSON_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rajiv Dudeja',
    jobTitle: 'Founder & Principal',
    worksFor: { '@id': 'https://exportdesi.com/#organization' },
    email: 'mailto:rajiv@exportdesi.com',
    telephone: '+91-9289790283',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Gurgaon',
        addressRegion: 'Haryana',
        addressCountry: 'IN',
    },
};

export default function AboutPage() {
    return (
        <>
            <SEOMeta
                title="About Export Desi | Indian Food Ingredients Exporter Since 2024"
                description="Export Desi coordinates processor qualification, documentation, and shipment for Indian food ingredients. 10+ years, 50+ countries served. Response within 48 hours."
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(PERSON_SCHEMA)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(getOrganizationSchema())}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(getBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'About', url: '/about' }
                    ]))}
                </script>
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <HeroSection
                    label="About"
                    title="Your Partner for Indian Food Ingredient Exports Since 2024."
                    subtitle="We coordinate the Indian side of the export process for international buyers sourcing food ingredients. Processor qualification, documentation preparation, pre-dispatch verification, and port coordination, managed from Gurgaon, Haryana. 50+ countries served."
                    background="white"
                />
            </motion.div>

            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={200}>
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="What We Are"
                            heading="An export management operation, not a trading house."
                            paragraphs={[
                                'We do not hold stock. We do not own processing facilities. We identify processors who can meet a buyer\'s specification, verify them against compliance and quality criteria, manage the full documentation cycle, and coordinate the shipment through to Bill of Lading issuance.',
                                'Buyers get processor-level pricing without having to manage multiple vendor relationships, chase documentation across time zones, or absorb the cost of building an in-country sourcing team.',
                            ]}
                        />
                        <ContentBlock
                            label="How We Operate"
                            heading="Processor relationships built on shipment history, not directories."
                            paragraphs={[
                                'Every processor in our active network has been through a pre-qualification: FSSAI and APEDA compliance check, facility review, sample assessment, and prior export documentation review. We do not source from processors we have not assessed.',
                                'Our operations are based in Gurgaon, Haryana. Processor relationships currently cover Bihar for Makhana and Gujarat for dehydrated ingredients. We do not expand categories without first establishing the same processor-level groundwork.',
                            ]}
                        />
                    </div>
                </div>
            </MotionSection>

            {/* Founder */}
            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={400}>
                <div className="page-container section-pad">
                    <p className="section-label mb-8">Founder</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="aspect-square bg-surface border border-border flex items-center justify-center overflow-hidden"
                            >
                                <img
                                    src="/rajiv-dudeja-founder.png"
                                    alt="Rajiv Dudeja - Founder"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-bold mb-4">Rajiv Dudeja</h3>
                            <p className="text-xs font-semibold text-muted mb-4 uppercase tracking-wide">Founder & Principal</p>
                            <div className="space-y-4 text-muted text-sm leading-relaxed">
                                <p>
                                    Established Export Desi in 2024 with a focus on helping Indian manufacturers and processors reach international buyers in a structured and scalable way.
                                </p>
                                <p>
                                    His background spans product design and development, working with international businesses to bring consumer products from concept to market. This experience shaped a buyer-first approach to export management — understanding specification requirements, packaging expectations, and quality standards that international markets demand.
                                </p>
                                <p>
                                    Based in Gurgaon, Haryana, he oversees processor qualification, buyer relationship management, and the overall export coordination framework. He is the primary contact for commercial discussions and partnership enquiries.
                                </p>
                            </div>
                            <div className="mt-6 flex gap-4">
                                <a href="mailto:rajiv@exportdesi.com" className="text-brand font-medium text-sm hover:underline underline-offset-2">
                                    rajiv@exportdesi.com
                                </a>
                                <a href="https://in.linkedin.com/in/rajeev-dudeja" target="_blank" rel="noopener noreferrer" className="text-brand font-medium text-sm hover:underline underline-offset-2 flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* Team */}
            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={500}>
                <div className="page-container section-pad">
                    <p className="section-label mb-8">The Team</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                        <div className="bg-white p-6 border border-border rounded-xl">
                            <div className="w-2 h-2 bg-brand mb-4" />
                            <p className="text-base font-bold text-brand mb-1">Hemant Kumar</p>
                            <p className="text-xs font-semibold text-muted mb-4 uppercase tracking-wide">Sourcing and Processor Relations</p>
                            <p className="text-sm text-muted leading-relaxed mb-4">Oversees processor identification, qualification, and ongoing supply relationships.</p>
                            <div className="flex items-center gap-4 text-xs">
                                <a href="mailto:hemant@exportdesi.com" className="text-brand hover:underline">
                                    hemant@exportdesi.com
                                </a>
                                <a href="https://in.linkedin.com/in/hemant-kumar-470a203b8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-brand hover:underline">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                        <div className="bg-white p-6 border border-border rounded-xl">
                            <div className="w-2 h-2 bg-brand mb-4" />
                            <p className="text-base font-bold text-brand mb-1">Nishant Chaudhary</p>
                            <p className="text-xs font-semibold text-muted mb-4 uppercase tracking-wide">Risk & Strategy Relations</p>
                            <p className="text-sm text-muted leading-relaxed">Oversees order execution, pre-dispatch verification, and documentation accuracy for every consignment.</p>
                        </div>
                    </div>
                </div>
            </MotionSection>

            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={600}>
                <div className="page-container section-pad">
                    <ContentBlock
                        label="Location"
                        heading="Gurgaon, Haryana. UTC+5:30."
                        paragraphs={[
                            'We operate on Indian Standard Time. New enquiries are responded to within 48 business hours. If the requirement falls outside our current scope, we confirm that at first response.',
                        ]}
                    />
                    <div className="mt-8 space-y-1.5 text-sm text-muted">
                        {/* Contact details removed from location section as per feedback */}
                    </div>
                </div>
            </MotionSection>

            <CTASection
                heading="Ready to Source from India? Get a Quote in 48 Hours."
                subtext="Share your product specification, destination, and volume. We assess processor availability and respond with indicative pricing within 48 business hours."
                primaryCTA={{ label: 'Get a Sourcing Quote', href: '/contact' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                background="dark"
            />

            {/* Floating Navigation */}
            <FloatingProductNav
                items={INFO_PAGES}
                currentPath="/about"
                categoryLabel="Quick Links"
            />
        </>
    );
}
