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
        description: 'Buyer shares product specification, destination market, required certifications, volume, and timeline. We review feasibility before accepting the enquiry. If we cannot reliably supply, we say so at this stage.',
    },
    {
        number: 2,
        title: 'Processor Identification & Verification',
        description: 'We identify processors in our network who match the specification. Processor eligibility is assessed on: export track record, facility hygiene standard, compliance documentation status, and grading/processing consistency. New processors undergo a structured pre-qualification before acceptance.',
    },
    {
        number: 3,
        title: 'Order Confirmation & Commercial Terms',
        description: 'On agreeing to proceed, we issue a Proforma Invoice covering product specification, quantity, pricing, Incoterm, packaging, and documentation list. No order is placed without a confirmed PI and deposit.',
    },
    {
        number: 4,
        title: 'Pre-Dispatch Quality Verification',
        description: 'Before the container is stuffed, we verify: packaging conformance, label accuracy, documentation set completeness, and physical lot condition via batch photography. Third-party inspection is coordinated on request or as required by the destination market.',
    },
    {
        number: 5,
        title: 'Shipment, Documentation & Post-Dispatch',
        description: 'Container is sealed, Bill of Lading is issued, and the full document set is dispatched electronically on the same day. Marine insurance coordination is available. We remain the point of contact for any post-shipment documentation requirements from the importing country.',
    },
];

export default function HowWeWorkPage() {
    return (
        <>
            <SEOMeta
                title="How We Work"
                description="Export Desi's 5-step export execution model. From requirement qualification to post-dispatch documentation. Structured, accountable, no intermediary layers."
            />

            <HeroSection
                label="Export Execution Model"
                title="How We Work."
                subtitle="A structured, five-step export execution process. Each stage has a defined outcome. Nothing moves to the next step until the current one is complete."
                background="surface"
            />

            {/* 5-Step Process */}
            <ProcessSteps
                label="The Process"
                heading="Five steps. One accountable partner."
                steps={STEPS}
            />

            {/* What we don't do */}
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Scope of Service"
                            heading="What is explicitly outside our scope."
                            paragraphs={[
                                'Clarity on what we do not do is as important as what we do. The following are not part of our service model.',
                            ]}
                        />
                        <StructuredList
                            items={[
                                'Manufacturing or processing of any product',
                                'Customs clearance at the destination port (buyer\'s responsibility)',
                                'Distribution or end-customer logistics at destination',
                                'Advisory on tariff classification or import duty (consult your customs broker)',
                                'Working with processors we have not pre-qualified',
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Trial order note */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <ContentBlock
                        label="Getting Started"
                        heading="Trial orders are the correct way to begin."
                        paragraphs={[
                            'If you are evaluating a new product or a new supply source, a trial order is the appropriate starting point. We accommodate flexible minimum quantities for trial shipments to allow buyers to validate quality, documentation, and process fit before committing to commercial volumes.',
                            'A trial order follows the same five-step process as a commercial order. There are no shortcuts on documentation or verification for smaller volumes.',
                        ]}
                    />
                </div>
            </section>

            <CTASection
                heading="Ready to start the process?"
                subtext="Share your requirement. We confirm feasibility and respond within 48 hours."
                primaryCTA={{ label: 'Request Export Details', href: '/contact' }}
                secondaryCTA={{ label: 'View Compliance Framework', href: '/compliance' }}
                background="dark"
            />
        </>
    );
}
