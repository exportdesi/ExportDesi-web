import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ComplianceGrid from '../components/ComplianceGrid';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';
import StructuredList from '../components/StructuredList';
import { Link } from 'react-router-dom';

const REGISTRATIONS = [
    { label: 'IEC — Importer Exporter Code', sublabel: 'DGFT. Required for all export transactions.' },
    { label: 'FSSAI License', sublabel: 'Mandatory for export of food and food-derived products.' },
    { label: 'APEDA Registration', sublabel: 'Agricultural & Processed Food Products Export Development Authority.' },
    { label: 'GST Registration', sublabel: 'GST-compliant invoicing and export refund eligibility.' },
    { label: 'Spice Board Registration', sublabel: 'Required for export of spices and condiment categories.' },
    { label: 'RCMC — Export Promotion Council', sublabel: 'Registration–cum–Membership Certificate for relevant EPC.' },
];

const DOCUMENT_TYPES = [
    { label: 'Certificate of Origin', sublabel: 'Issued by FIEO or Chamber of Commerce.' },
    { label: 'Phytosanitary Certificate', sublabel: 'Issued by NPPO India. Required for all agricultural exports.' },
    { label: 'Commercial Invoice', sublabel: 'Prepared per buyer and destination bank requirements.' },
    { label: 'Packing List', sublabel: 'Item-level breakdown — quantities, weights, pack counts.' },
    { label: 'Bill of Lading / AWB', sublabel: 'Issued by carrier. Dispatched electronically same day as vessel departure.' },
    { label: 'Third-Party Lab Report', sublabel: 'Moisture, purity, microbiology, pesticide residue — per lot.' },
    { label: 'Pre-Shipment Inspection Certificate', sublabel: 'Third-party PSI on buyer request or market requirement.' },
    { label: 'Health / Sanitary Certificate', sublabel: 'Destination-specific. Coordinated with relevant Indian authority.' },
];

export default function CompliancePage() {
    return (
        <>
            <SEOMeta
                title="Export Compliance Framework"
                description="Export Desi's compliance approach for Indian food ingredient exports — licencing alignment, documentation preparation, and destination-market-specific requirements."
            />

            <HeroSection
                label="Compliance"
                title="Export Compliance Framework."
                subtitle="Every Export Desi shipment is prepared against a defined compliance checklist. Documentation is verified before the container is stuffed. There is no post-dispatch document recovery process."
                background="surface"
            />

            {/* Registration Grid */}
            <ComplianceGrid
                label="Licencing & Registration"
                heading="Regulatory Standing"
                items={REGISTRATIONS}
                columns={3}
            />

            {/* Documentation */}
            <ComplianceGrid
                label="Per-Shipment Documentation"
                heading="Standard Export Document Set"
                items={DOCUMENT_TYPES}
                columns={4}
            />

            {/* Documentation management */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Document Control"
                            heading="Every document is checked against the shipment before dispatch."
                            paragraphs={[
                                'For each consignment, we maintain a document checklist covering: exporter and consignee details, HS code accuracy, Incoterm consistency, lab report lot traceability, and certificate validity dates. The container is not released for stuffing until all items on the checklist are confirmed.',
                                'Post-dispatch document corrections require re-issuance of original documents through the relevant issuing authority — a process that introduces port delays at origin and clearance delays at destination. We treat pre-dispatch verification as non-negotiable.',
                            ]}
                        />
                        <ContentBlock
                            label="Processor Compliance"
                            heading="Compliance standing is assessed before any order is placed."
                            paragraphs={[
                                'Processor pre-qualification includes: FSSAI license verification, APEDA or relevant EPC registration status, facility inspection report review, and prior export documentation history. Any lapse in a processor\'s compliance standing suspends their eligibility until resolved.',
                                'We do not source from processors who cannot produce current, valid licences for the product category being shipped.',
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
                            heading="Documentation is built to the destination market's import requirements."
                            paragraphs={[
                                'Import requirements differ materially across destination markets — in document format, issuing authority, and phytosanitary treatment requirements. We do not use a generic document template. Each shipment is prepared against the confirmed requirements of the destination country.',
                                'Where additional destination-specific documentation is required, we identify and coordinate the relevant Indian certifying bodies as part of the pre-dispatch process — not as a post-booking addition.',
                            ]}
                        />
                        <div>
                            <StructuredList
                                heading="Destination-Specific Documents We Coordinate"
                                items={[
                                    'Import Health Certificates — format per destination authority specification',
                                    'Fumigation Certificates — methyl bromide or heat treatment as required',
                                    'Halal Certification — issued by accredited third-party certifying body',
                                    'Organic Transaction Certificates — where organic supply is contracted',
                                    'Country-of-Origin Documents — for preferential duty regime applicability',
                                    'Phytosanitary Treatment Reports — treatment type and dosage per market requirement',
                                ]}
                            />
                            <p className="text-xs text-muted mt-6">
                                Import permit requirements at the destination are the buyer's responsibility to confirm with their customs broker prior to order placement.{' '}
                                <Link to="/how-we-work" className="text-brand underline underline-offset-2">
                                    See our process →
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                heading="Need documentation confirmed for a specific market?"
                subtext="Share your product and destination at enquiry stage. We identify the required document set and confirm it before order placement."
                primaryCTA={{ label: 'Request Export Details', href: '/contact' }}
                background="dark"
            />
        </>
    );
}
