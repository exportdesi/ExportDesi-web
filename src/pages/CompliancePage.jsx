import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ComplianceGrid from '../components/ComplianceGrid';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';
import StructuredList from '../components/StructuredList';
import FloatingProductNav from '../components/FloatingProductNav';
import { MotionSection } from '../components/MotionWrapper';
import { motion } from 'framer-motion';  
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getOrganizationSchema, getBreadcrumbSchema, getFAQSchema } from '../utils/schemaGenerator';

const INFO_PAGES = [
    { label: 'Compliance', name: 'Export Compliance', href: '/compliance' },
    { label: 'How We Work', name: 'Our Process', href: '/how-we-work' },
    { label: 'About', name: 'About Us', href: '/about' },
];

const REGISTRATIONS = [
    { label: 'IEC: Importer Exporter Code', sublabel: 'DGFT. Required for all export transactions from India.' },
    { label: 'FSSAI License', sublabel: 'Food safety authority licence. Mandatory for food product exports.' },
    { label: 'APEDA Registration', sublabel: 'Agricultural and Processed Food Products Export Development Authority.' },
    { label: 'FIEO Registration', sublabel: 'Federation of Indian Export Organisations. Issues Certificate of Origin and supports export documentation.' },
    { label: 'GST Registration', sublabel: 'GST-compliant invoicing and export refund eligibility.' },
    { label: 'Spice Board Registration', sublabel: 'Required for spice and condiment category exports.' },
];

const DOCUMENT_TYPES = [
    { label: 'Certificate of Origin', sublabel: 'Issued by FIEO or Chamber of Commerce. Required by most destination customs authorities.' },
    { label: 'Phytosanitary Certificate', sublabel: 'Issued by NPPO India. Mandatory for all agricultural and food commodity exports.' },
    { label: 'Commercial Invoice', sublabel: 'Prepared to match LC terms: Incoterm, unit value, currency, and consignee details.' },
    { label: 'Packing List', sublabel: 'Item-level: carton count, net and gross weights, lot or batch reference.' },
    { label: 'Bill of Lading or AWB', sublabel: 'Carrier-issued. Dispatched to buyer electronically on the day of vessel departure.' },
    { label: 'Third-Party Lab Report', sublabel: 'Moisture, purity, microbiology, pesticide residue. Per lot, not per category.' },
    { label: 'Pre-Shipment Inspection Certificate', sublabel: 'Third-party PSI coordinated where required by the destination market or buyer.' },
    { label: 'Health or Sanitary Certificate', sublabel: 'Format per destination authority. Coordinated with the relevant Indian issuing body.' },
];

const CERTIFICATION_LOGOS = [
    { id: 'fssai', src: '/fssai-Certificate.webp', label: 'FSSAI', desc: 'Food Safety License', details: ['License No: 10824999000454', 'Mandatory for all food product exports from India', 'Covers: Makhana, Dehydrated Ingredients, Moringa'] },
    { id: 'apeda', src: '/APEDA-Certificate.webp', label: 'APEDA', desc: 'Export Registration', details: ['RCMC No: 06757/2024-2025', 'Agricultural and Processed Food Products', 'Covers: All food ingredients'] },
    { id: 'spice-board', src: '/Spice-Board-Certificate.webp', label: 'Spice Board', desc: 'Spice Export License', details: ['Registration No: CRES/SBCB/23080/2024-2025', 'Required for spice category exports', 'Covers: Turmeric, Dehydrated spices'] },
    { id: 'fieo', src: '/FIEO-Certificate.webp', label: 'FIEO', desc: 'Export House', details: ['Registration No: 13083/2025-2026', 'Federation of Indian Export Organisations', 'Issues Certificate of Origin'] },
    { id: 'iec', src: '/ICE-Certificate.webp', label: 'IEC', desc: 'Import Export Code', details: ['IEC No: ALYPD9414C', 'Issued by DGFT', 'Required for all export transactions'] },
    { id: 'gst', src: '/GST-Certificate.webp', label: 'GST', desc: 'Tax Registration', details: ['GSTIN: 06ALYPD9414C1Z1', 'GST-compliant invoicing', 'Export refund eligibility'] },
];

export default function CompliancePage() {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <>
                <SEOMeta
                    title="Export Compliance Framework"
                    description="Export Desi's compliance approach for Indian food ingredient exports: licencing, documentation preparation, and destination-specific requirements verified before dispatch."
                    keywords="India food export certifications, APEDA registration exporter, FSSAI export licence, phytosanitary certificate India, export documentation India food, Certificate of Origin India, Spice Board registration"
                />
                <Helmet>
                    <script type="application/ld+json">
                        {JSON.stringify(getOrganizationSchema())}
                    </script>
                    <script type="application/ld+json">
                        {JSON.stringify(getBreadcrumbSchema([
                            { name: 'Home', url: '/' },
                            { name: 'Compliance', url: '/compliance' }
                        ]))}
                    </script>
                    <script type="application/ld+json">
                        {JSON.stringify(getFAQSchema([
                            {
                                question: 'What certifications does Export Desi hold for food ingredient exports from India?',
                                answer: 'Export Desi holds: FSSAI food safety licence (No. 10824999000454), APEDA RCMC (No. 06757/2024-2025) covering all food ingredients, Spice Board RCMC (No. CRES/SBCB/23080/2024-2025) for turmeric and dehydrated spices, FIEO Registration (No. 13083/2025-2026) for Certificate of Origin issuance, IEC (Import Export Code: ALYPD9414C) required for all export transactions, and GST Registration (GSTIN: 06ALYPD9414C1Z1). All registrations are current and verified.',
                            },
                            {
                                question: 'What export documents does Export Desi provide with each shipment?',
                                answer: 'Export Desi provides the following per-shipment documents: Certificate of Origin (issued by FIEO or Chamber of Commerce), Phytosanitary Certificate (issued by NPPO India), Commercial Invoice (aligned to LC terms and Incoterm), Packing List (item-level with carton count and batch reference), Bill of Lading or Airway Bill, Third-Party Lab Report (moisture, purity, microbiology, pesticide residue — per lot), Pre-Shipment Inspection Certificate where required, and Health or Sanitary Certificate as required by the destination authority.',
                            },
                            {
                                question: 'Does Export Desi handle customs clearance at the destination?',
                                answer: 'No. Customs clearance at the destination port is the buyer\'s responsibility and must be arranged with their freight forwarder or customs broker. Export Desi manages all origin-side documentation, processor compliance verification, pre-dispatch inspection, and port coordination up to vessel departure.',
                            },
                            {
                                question: 'How does Export Desi verify that processors meet export compliance standards?',
                                answer: 'Processor pre-qualification includes verification of current FSSAI licence validity, APEDA or relevant EPC registration status, and prior export documentation history. Processors with lapsed licences or unresolved compliance issues are not used for orders until those are resolved. Export Desi does not route consignments through processors who cannot produce valid, current documentation for the product category being exported.',
                            },
                            {
                                question: 'Can Export Desi prepare documentation for specific destination markets such as the EU or USA?',
                                answer: 'Yes. Export Desi reviews destination-specific requirements at enquiry stage — including EU SPS requirements, US FDA FSMA compliance, UAE certificate formats, and Southeast Asian labelling specifications. Additional documents that can be coordinated include: Import Health Certificates, Fumigation Certificates, Halal Certification, Organic Transaction Certificates, and Country-of-Origin Documents for preferential duty regimes.',
                            },
                        ]))}
                    </script>
                </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <HeroSection
                    label="Compliance"
                    title="Export Compliance Framework."
                    subtitle="Documentation is assembled and verified against the specific shipment before the container is stuffed. HS code accuracy, certificate issuer validity, and lot traceability are confirmed as part of every pre-dispatch review."
                    background="white"
                />
            </motion.div>

            <MotionSection variant="fadeUp" delay={200}>
                <div className="page-container section-pad">
                    <p className="section-label mb-3">Licencing and Registration</p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Regulatory Standing</h2>
                    <p className="text-sm text-muted mb-6 max-w-3xl">
                        All registrations are current and verified. Click any certificate to view registration number and scope.
                    </p>

                    {/* Certification Logos with Tooltips */}
                    <div className="mb-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                            {CERTIFICATION_LOGOS.map((cert) => (
                                <motion.div
                                    key={cert.id}
                                    className="group relative cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCert(selectedCert?.id === cert.id ? null : cert)}
                                >
                                    <div className="aspect-square bg-white border border-border rounded-xl p-3 flex items-center justify-center hover:border-brand/50 hover:shadow-lg transition-all">
                                        <img
                                            src={cert.src}
                                            alt={cert.label}
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    <p className="text-[10px] text-brand font-bold uppercase tracking-wider text-center mt-2">{cert.label}</p>
                                    <p className="text-[10px] text-muted text-center leading-tight">{cert.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Selected Certification Details */}
                        {selectedCert && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 p-6 bg-surface border border-border rounded-xl"
                            >
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3">
                                        <img src={selectedCert.src} alt={selectedCert.label} className="w-10 h-10 object-contain" />
                                        <div>
                                            <h3 className="text-base font-bold text-brand">{selectedCert.label}</h3>
                                            <p className="text-xs text-muted">{selectedCert.desc}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="text-muted hover:text-brand transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <ul className="space-y-2">
                                    {selectedCert.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                                            <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </div>
            </MotionSection>

            <MotionSection variant="fadeUp" delay={300}>
                <ComplianceGrid
                    label="Per-Shipment Documentation"
                    heading="Standard Export Document Set"
                    items={DOCUMENT_TYPES}
                    columns={4}
                />
            </MotionSection>

            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={400}>
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Document Control"
                            heading="Every document is checked against the shipment before dispatch."
                            paragraphs={[
                                'HS classification is verified before the Proforma Invoice is confirmed. For each consignment, we run a pre-dispatch document review covering: Incoterm consistency between the commercial invoice and the Proforma Invoice, packing list reconciliation line-by-line against the actual lot loaded, phytosanitary certificate validity relative to the sailing date, and lab report traceability to the specific batch being shipped.',
                                'Post-dispatch corrections require re-engagement with the original issuing authority and typically cause delays at both the origin port and destination customs. We treat the pre-dispatch review as the only point at which errors can be caught without cost.',
                            ]}
                        />
                        <ContentBlock
                            label="Processor Compliance"
                            heading="Compliance standing is verified before any order is placed."
                            paragraphs={[
                                'Processor pre-qualification includes a check on current FSSAI licence validity, APEDA or relevant EPC registration status, and prior export documentation history. A processor with a lapsed FSSAI licence or an unresolved compliance issue is not activated for an order until those are resolved.',
                                'We do not route consignments through processors who cannot produce valid, current documentation for the product category being exported.',
                            ]}
                        />
                    </div>
                </div>
            </MotionSection>

            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={500}>
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Destination Market Alignment"
                            heading="Documentation is built to the destination's import requirements, not a generic template."
                            paragraphs={[
                                'Import documentation requirements differ by country and by product category. The EU, USA, UAE, and Southeast Asian markets each carry different SPS requirements, certificate formats, and labelling specifications. We review destination-specific requirements at enquiry stage, not after order placement.',
                                'Where a market requires documentation beyond the standard set, we identify the relevant Indian certifying body and coordinate issuance as part of the pre-dispatch process.',
                            ]}
                        />
                        <div>
                            <StructuredList
                                heading="Destination-Specific Documents We Coordinate"
                                items={[
                                    'Import Health Certificates: format and content per destination country authority',
                                    'Fumigation Certificates: methyl bromide or heat treatment, dosage and duration per market requirement',
                                    'Halal Certification: issued by an accredited third-party certifying body',
                                    'Organic Transaction Certificates: where organic supply has been contracted and certified',
                                    'Country-of-Origin Documents: for preferential duty regime applicability under bilateral trade agreements',
                                ]}
                            />
                            <p className="text-xs text-muted mt-6">
                                Buyers are responsible for confirming import permit and licence requirements at the destination with their customs broker before order placement.{' '}
                                <Link to="/how-we-work" className="text-brand underline underline-offset-2">
                                    See our process
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* Internal links to product pages */}
            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={600}>
                <div className="page-container section-pad">
                    <p className="section-label mb-6">Product-Specific Documentation</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Makhana */}
                        <div className="border border-border p-6 hover:border-brand/40 transition-colors">
                            <p className="font-semibold text-sm mb-2">Makhana (Fox Nuts)</p>
                            <p className="text-xs text-muted mb-4 leading-relaxed">
                                Certificate of Origin, phytosanitary certificate, grade-specific lab report, and packing list. Destination-specific coordination at enquiry stage.
                            </p>
                            <Link to="/industries/food-ingredients/makhana" className="text-xs text-brand font-medium underline underline-offset-2">
                                View Makhana specifications
                            </Link>
                        </div>
                        {/* Dehydrated Ingredients */}
                        <div className="border border-border p-6 hover:border-brand/40 transition-colors">
                            <p className="font-semibold text-sm mb-2">Dehydrated Onion & Garlic</p>
                            <p className="text-xs text-muted mb-4 leading-relaxed">
                                Per-product lab reports, line-by-line packing list, and consolidated documentation for multi-SKU consignments.
                            </p>
                            <Link to="/industries/food-ingredients/dehydrated-ingredients" className="text-xs text-brand font-medium underline underline-offset-2">
                                View dehydrated ingredient specifications
                            </Link>
                        </div>
                        {/* Moringa */}
                        <div className="border border-border p-6 hover:border-brand/40 transition-colors">
                            <p className="font-semibold text-sm mb-2">Moringa Products</p>
                            <p className="text-xs text-muted mb-4 leading-relaxed">
                                USDA Organic, EU Organic certificates. Third-party lab reports for heavy metals, pesticides, and microbiology.
                            </p>
                            <Link to="/industries/food-ingredients/moringa" className="text-xs text-brand font-medium underline underline-offset-2">
                                View Moringa specifications
                            </Link>
                        </div>
                        {/* Jute Bags */}
                        <div className="border border-border p-6 hover:border-brand/40 transition-colors">
                            <p className="font-semibold text-sm mb-2">Jute Bags & Packaging</p>
                            <p className="text-xs text-muted mb-4 leading-relaxed">
                                Certificate of Origin, fumigation certificate for natural fibers, material composition reports and custom packing documentation.
                            </p>
                            <Link to="/industries/bags" className="text-xs text-brand font-medium underline underline-offset-2">
                                View Jute Bags specifications
                            </Link>
                        </div>
                        {/* Non-Woven Bags */}
                        <div className="border border-border p-6 hover:border-brand/40 transition-colors">
                            <p className="font-semibold text-sm mb-2">Non-Woven Bags</p>
                            <p className="text-xs text-muted mb-4 leading-relaxed">
                                Material safety data sheets (MSDS), REACH compliance (EU), and phthalate-free certification for retail use.
                            </p>
                            <Link to="/industries/bags" className="text-xs text-brand font-medium underline underline-offset-2">
                                View Non-Woven Bags specifications
                            </Link>
                        </div>
                    </div>
                </div>
            </MotionSection>

            <MotionSection variant="fadeUp" delay={650}>
                <CTASection
                    heading="Need documentation confirmed for a specific market?"
                    subtext="Share your product and destination at enquiry stage. We identify the required document set before order placement."
                    primaryCTA={{ label: 'Submit Your Requirement', href: '/contact' }}
                    background="dark"
                />
            </MotionSection>

            {/* Floating Navigation */}
            <FloatingProductNav
                items={INFO_PAGES}
                currentPath="/compliance"
                categoryLabel="Quick Links"
            />
        </>
    );
}
