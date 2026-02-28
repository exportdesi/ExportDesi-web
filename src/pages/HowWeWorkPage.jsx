import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ProcessSteps from '../components/ProcessSteps';
import CTASection from '../components/CTASection';
import ContentBlock from '../components/ContentBlock';
import StructuredList from '../components/StructuredList';

const STEPS = [
    {
        number: 1,
        title: 'Requirement Qualification',
        description: 'The buyer provides product specification, destination market, required certifications, volume, and delivery timeline. We assess supply feasibility internally before accepting the enquiry — against current processor availability, seasonal constraints, and documentation requirements for the destination market. If we cannot fulfil reliably, we communicate that at this stage rather than after order placement.',
    },
    {
        number: 2,
        title: 'Processor Identification and Verification',
        description: 'We identify processors from our active network whose output matches the confirmed specification. Eligibility is assessed across four criteria: prior export documentation compliance, facility hygiene and FSSAI standing, grading consistency across lots, and capacity relative to the required volume and timeline. Processors not previously assessed undergo a structured pre-qualification before any order is placed with them.',
    },
    {
        number: 3,
        title: 'Order Confirmation and Commercial Terms',
        description: 'We issue a Proforma Invoice specifying product grade, quantity, pricing, Incoterm, packaging format, and the full documentation list to be provided with the shipment. The order is not placed with the processor until the PI is counter-signed and the agreed advance is received. This is the point at which the supply commitment is made.',
    },
    {
        number: 4,
        title: 'Pre-Dispatch Verification',
        description: 'Before container stuffing, we conduct a physical verification of the lot: grade and size conformance, moisture check, packaging integrity, label accuracy, and documentary completeness. Batch photographs are taken and shared with the buyer. Third-party pre-shipment inspection is coordinated where required by the destination market or buyer specification. The container is not released for stuffing until verification is complete.',
    },
    {
        number: 5,
        title: 'Shipment and Post-Dispatch Documentation',
        description: 'Once the container is sealed, the Bill of Lading is obtained and the full document set — BL, commercial invoice, packing list, certificate of origin, phytosanitary certificate, and lab reports — is dispatched to the buyer electronically on the same working day. We remain the primary contact for any post-shipment documentation requirements raised by the importing country\'s authorities.',
    },
];

export default function HowWeWorkPage() {
    return (
        <>
            <SEOMeta
                title="How We Work"
                description="Export Desi's five-step export execution process — from requirement qualification to post-shipment documentation. No intermediary layers. Defined outcomes at each stage."
            />

            <HeroSection
                label="Export Execution Model"
                title="How We Work."
                subtitle="Five sequential steps. Each stage has a defined output. The next step does not begin until the current one is complete and verified."
                background="surface"
            />

            {/* 5-Step Process */}
            <ProcessSteps
                label="The Process"
                heading="Five steps. A single accountable contact throughout."
                steps={STEPS}
            />

            {/* What we don't do */}
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Service Boundary"
                            heading="What falls outside our scope."
                            paragraphs={[
                                'The following are explicitly not part of our service. Buyers should make independent arrangements for these functions before or alongside engaging us.',
                            ]}
                        />
                        <StructuredList
                            items={[
                                'Manufacturing, processing, or modification of any product',
                                'Customs clearance at the destination port — buyer\'s freight forwarder or customs broker',
                                'Last-mile delivery or distribution within the destination country',
                                'Import duty or tariff classification advice — consult your customs broker',
                                'Engaging processors who have not completed our pre-qualification process',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Trial order note */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <ContentBlock
                        label="First Shipment"
                        heading="Begin with a trial order."
                        paragraphs={[
                            'A trial order is the correct starting point for any new supply relationship. We support reduced minimum quantities for initial shipments — sufficient to validate grade conformance, documentation accuracy, and process fit prior to commercial volume commitment.',
                            'Trial orders follow the same five-step process as commercial orders. Verification and documentation standards are not reduced for smaller volumes.',
                        ]}
                    />
                </div>
            </section>

            <CTASection
                heading="Ready to submit a requirement?"
                subtext="Share your specification, destination, and volume. We assess feasibility and respond within 48 business hours."
                primaryCTA={{ label: 'Request Export Details', href: '/contact' }}
                secondaryCTA={{ label: 'View Compliance Framework', href: '/compliance' }}
                background="dark"
            />
        </>
    );
}
