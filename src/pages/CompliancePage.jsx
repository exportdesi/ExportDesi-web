import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ComplianceGrid from '../components/ComplianceGrid';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';
import StructuredList from '../components/StructuredList';
import { Link } from 'react-router-dom';

const REGISTRATIONS = [
    { label: 'IEC: Importer Exporter Code', sublabel: 'DGFT. Required for all export transactions from India.' },
    { label: 'FSSAI License', sublabel: 'Food safety authority licence. Mandatory for food product exports.' },
    { label: 'APEDA Registration', sublabel: 'Agricultural and Processed Food Products Export Development Authority.' },
    { label: 'GST Registration', sublabel: 'GST-compliant invoicing and export refund eligibility.' },
    { label: 'Spice Board Registration', sublabel: 'Required for spice and condiment category exports.' },
    { label: 'RCMC', sublabel: 'Registration-cum-Membership Certificate from the relevant Export Promotion Council.' },
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

export default function CompliancePage() {
    return (
        <>
            <SEOMeta
                title="Export Compliance Framework"
                description="Export Desi's compliance approach for Indian food ingredient exports: licencing, documentation preparation, and destination-specific requirements verified before dispatch."
            />

            <HeroSection
                label="Compliance"
                title="Export Compliance Framework."
                subtitle="Documentation is assembled and verified against the specific shipment before the container is stuffed. HS code accuracy, certificate issuer validity, and lot traceability are confirmed as part of every pre-dispatch review."
                background="surface"
            />

            <ComplianceGrid
                label="Licencing and Registration"
                heading="Regulatory Standing"
                items={REGISTRATIONS}
                columns={3}
            />

            <ComplianceGrid
                label="Per-Shipment Documentation"
                heading="Standard Export Document Set"
                items={DOCUMENT_TYPES}
                columns={4}
            />

            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Document Control"
                            heading="Every document is checked against the shipment before dispatch."
                            paragraphs={[
                                'For each consignment, we run a pre-dispatch document review covering: Incoterm consistency between the commercial invoice and the Proforma Invoice, packing list reconciliation against the actual lot loaded, phytosanitary certificate validity relative to the sailing date, and lab report traceability to the specific batch being shipped.',
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
            </section>

            <section className="bg-surface border-b border-border">
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
            </section>

            <CTASection
                heading="Need documentation confirmed for a specific market?"
                subtext="Share your product and destination at enquiry stage. We identify the required document set before order placement."
                primaryCTA={{ label: 'Request Export Details', href: '/contact' }}
                background="dark"
            />
        </>
    );
}
