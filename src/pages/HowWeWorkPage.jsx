import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ProcessSteps from '../components/ProcessSteps';
import CTASection from '../components/CTASection';
import ContentBlock from '../components/ContentBlock';
import StructuredList from '../components/StructuredList';
import FloatingProductNav from '../components/FloatingProductNav';
import { MotionSection } from '../components/MotionWrapper';
import { motion } from 'framer-motion';  
import { Helmet } from 'react-helmet-async';
import { getOrganizationSchema, getBreadcrumbSchema, getHowToSchema } from '../utils/schemaGenerator';

const INFO_PAGES = [
    { label: 'Compliance', name: 'Export Compliance', href: '/compliance' },
    { label: 'How We Work', name: 'Our Process', href: '/how-we-work' },
    { label: 'About', name: 'About Us', href: '/about' },
];

const STEPS = [
    {
        number: 1,
        title: 'Requirement Qualification',
        description: 'The buyer provides product specification, destination market, required certifications, volume, and delivery timeline. We assess feasibility against current processor availability, seasonal stock position, and the documentation requirements of the destination market before accepting the enquiry. Timelines are confirmed only after processor capacity and documentation readiness are reviewed. If a requirement falls outside what we can reliably fulfil, we confirm that at this stage.',
    },
    {
        number: 2,
        title: 'Processor Identification and Verification',
        description: 'We identify processing units from our active network whose output matches the confirmed specification. Each processor is assessed on: current FSSAI licence status, prior export documentation compliance, use of mechanical grading equipment (not manual sorting), and moisture-controlled storage. Processors not yet in our network go through a pre-qualification covering facility review, sample assessment, and documentation check before being approved for an order.',
    },
    {
        number: 3,
        title: 'Order Confirmation and Commercial Terms',
        description: 'We issue a Proforma Invoice specifying product grade, quantity, unit price, Incoterm, packaging format, and the exact list of documents to be provided. The order is not placed with the processor until the PI is counter-signed by the buyer and the agreed advance is received. This is the point at which the supply commitment is formally made.',
    },
    {
        number: 4,
        title: 'Pre-Dispatch Verification',
        description: 'Before container stuffing, we conduct a physical lot verification: size and grade conformance, moisture check, packaging integrity, and label accuracy. The document set is reviewed in parallel, covering HS code accuracy, phytosanitary certificate validity, commercial invoice alignment with the Proforma, and packing list reconciliation against the actual lot. Batch photographs are shared with the buyer. Where the destination market or buyer specification requires third-party PSI, we coordinate that as part of this stage.',
    },
    {
        number: 5,
        title: 'Shipment and Post-Dispatch Documentation',
        description: 'Once the container is sealed, the Bill of Lading is obtained and the full document set is sent to the buyer electronically on the same working day as vessel departure. This includes the BL, commercial invoice, packing list, certificate of origin, phytosanitary certificate, and lab reports. We remain the point of contact for any documentation queries raised by the importing country\'s customs or port health authority.',
    },
];

export default function HowWeWorkPage() {
    return (
        <>
            <SEOMeta
                title="How We Work"
                description="Export Desi's five-step export execution process: requirement qualification, processor verification, order confirmation, pre-dispatch inspection, and post-shipment documentation."
                keywords="how to import food from India, Indian food export process, export management company India, how to source from India, food ingredient import process"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(getOrganizationSchema())}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(getBreadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'How We Work', url: '/how-we-work' }
                    ]))}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(getHowToSchema({
                        name: 'How to Source Indian Food Ingredients from Export Desi',
                        description: 'Five sequential steps to source and import Indian food ingredients — makhana, turmeric, dehydrated onion & garlic, and moringa — through Export Desi, an APEDA and FSSAI certified merchant exporter.',
                        steps: STEPS.map(s => ({ name: s.title, text: s.description })),
                    }))}
                </script>
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <HeroSection
                    label="Export Execution Model"
                    title="How We Work."
                    subtitle="Five sequential steps. Each has a defined output. The next step does not begin until the current one is complete."
                    background="white"
                />
            </motion.div>

            <MotionSection variant="fadeUp" delay={200}>
                <ProcessSteps
                    label="The Process"
                    heading="Five steps. One contact throughout."
                    steps={STEPS}
                />
            </MotionSection>

            <MotionSection className="bg-surface border-b border-border" variant="fadeUp" delay={300}>
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Service Boundary"
                            heading="What falls outside our scope."
                            paragraphs={[
                                'The following are not part of our service. Buyers should arrange these independently, before or alongside engaging us.',
                            ]}
                        />
                        <StructuredList
                            items={[
                                'Manufacturing, processing, or modification of any product',
                                'Customs clearance at the destination port. This is the buyer\'s freight forwarder or customs broker.',
                                'Last-mile delivery or distribution within the destination country',
                                'Import duty or HS classification advice. Consult your customs broker.',
                                'Sourcing from processors who have not completed our pre-qualification',
                            ]}
                        />
                    </div>
                </div>
            </MotionSection>

            <MotionSection className="bg-white border-b border-border" variant="fadeUp" delay={400}>
                <div className="page-container section-pad">
                    <ContentBlock
                        label="First Shipment"
                        heading="Begin with a trial order."
                        paragraphs={[
                            'A trial shipment is the correct starting point. We support reduced minimum quantities, sufficient to verify grade conformance, document accuracy, and transit performance before a commercial volume commitment is made.',
                            'Trial orders follow the same five steps as commercial orders. Verification and documentation standards do not change for smaller volumes.',
                        ]}
                    />
                </div>
            </MotionSection>

            <MotionSection variant="fadeUp" delay={450}>
                <CTASection
                    heading="Ready to submit a requirement?"
                    subtext="Share your specification, destination, and volume. We assess feasibility and respond within 48 business hours."
                    primaryCTA={{ label: 'Submit Your Requirement', href: '/contact' }}
                    secondaryCTA={{ label: 'View Compliance Framework', href: '/compliance' }}
                    background="dark"
                />
            </MotionSection>

            {/* Floating Navigation */}
            <FloatingProductNav
                items={INFO_PAGES}
                currentPath="/how-we-work"
                categoryLabel="Quick Links"
            />
        </>
    );
}
