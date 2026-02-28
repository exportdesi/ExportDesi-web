import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ComplianceGrid from '../components/ComplianceGrid';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';
import StructuredList from '../components/StructuredList';
import { Link } from 'react-router-dom';

const REGISTRATIONS = [
    { label: 'IEC — Importer Exporter Code', sublabel: 'DGFT registration for export eligibility' },
    { label: 'FSSAI License', sublabel: 'Food safety compliance for food product exports' },
    { label: 'APEDA Registration', sublabel: 'Agricultural and processed food exports authority' },
    { label: 'GST Registration', sublabel: 'Goods & Services Tax compliance' },
    { label: 'Spice Board Registration', sublabel: 'For applicable spice and condiment categories' },
    { label: 'RCMC — Raw Commodity', sublabel: 'For export promotion council eligibility' },
];

const DOCUMENT_TYPES = [
    { label: 'Certificate of Origin', sublabel: 'Issued by FIEO / Chamber of Commerce' },
    { label: 'Phytosanitary Certificate', sublabel: 'Issued by NPPO India (plant quarantine)' },
    { label: 'Commercial Invoice', sublabel: 'Per shipper and buyer specification' },
    { label: 'Packing List', sublabel: 'Item-level consignment detail' },
    { label: 'Bill of Lading / AWB', sublabel: 'Carrier-issued shipping document' },
    { label: 'Third-Party Lab Reports', sublabel: 'Moisture, purity, microbiology, pesticide' },
    { label: 'Inspection Certificate', sublabel: 'PSI coordination on request' },
    { label: 'Health Certificate', sublabel: 'Destination-market specific, as required' },
];

export default function CompliancePage() {
    return (
        <>
            <SEOMeta
                title="Export Compliance Framework"
                description="Export Desi's structured export compliance approach — registrations, documentation handling, and destination-market alignment for Indian food ingredient exports."
            />

            <HeroSection
                label="Compliance"
                title="Export Compliance Framework."
                subtitle="All Export Desi shipments are structured around full regulatory compliance at origin. Documentation is complete before the container moves. No documentation is an afterthought."
                background="surface"
            />

            {/* Registration Grid */}
            <ComplianceGrid
                label="Regulatory Standing"
                heading="Registration and Licencing Alignment"
                items={REGISTRATIONS}
                columns={3}
            />

            {/* Documentation */}
            <ComplianceGrid
                label="Documentation"
                heading="Standard Export Document Set"
                items={DOCUMENT_TYPES}
                columns={4}
            />

            {/* Documentation management section */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Document Management"
                            heading="Documentation is prepared and checked before dispatch."
                            paragraphs={[
                                'We maintain a document checklist per shipment. No container is released for stuffing until the full document set is confirmed complete and verified for accuracy — including shipper details, HS codes, Incoterm, and consignee information.',
                                'Corrections after shipment create delays at both origin and destination. Our process is designed to eliminate post-dispatch documentation issues.',
                            ]}
                        />
                        <ContentBlock
                            label="Processor Compliance"
                            heading="Processor-level compliance is a pre-qualification condition."
                            paragraphs={[
                                'Processors are assessed for FSSAI licensing status, relevant export authority registration, facility hygiene standards, and their history of export documentation compliance before any order is placed.',
                                'We do not route consignments through processors who cannot produce the required licence and registration documentation for the intended product category.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Destination market alignment */}
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Destination Market Alignment"
                            heading="Documentation adapted to destination requirements."
                            paragraphs={[
                                'Import requirements vary significantly across destination markets. We do not maintain a blanket documentation template — each shipment is reviewed against the specific import requirements of the destination country and buyer requirements.',
                                'Where destination-specific documentation is required — health certificates, fumigation certificates, halal certification, country-specific SPS compliance — we coordinate the relevant authorities and certifying bodies as part of the shipment preparation.',
                            ]}
                        />
                        <div>
                            <StructuredList
                                heading="Destination-Specific Requirements We Coordinate"
                                items={[
                                    'Import Health Certificates (destination authority specification)',
                                    'Fumigation Certificates (methyl bromide / heat treatment)',
                                    'Halal Certification (third-party certifying body)',
                                    'Organic Certificates (where organic supply is contracted)',
                                    'Phytosanitary treatment reports (as required)',
                                    'Country-of-origin documentation for preferential tariff regimes',
                                ]}
                            />
                            <p className="text-xs text-muted mt-6">
                                Buyers are responsible for confirming import permit requirements with their customs broker before order confirmation.{' '}
                                <Link to="/how-we-work" className="text-brand underline underline-offset-2">
                                    See our process →
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                heading="Questions on documentation requirements for your market?"
                subtext="We review destination-specific requirements at enquiry stage. Share your product and destination and we will confirm what documentation will be prepared."
                primaryCTA={{ label: 'Request Export Details', href: '/contact' }}
                background="dark"
            />
        </>
    );
}
