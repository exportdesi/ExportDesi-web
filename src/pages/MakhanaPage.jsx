import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import SpecTable from '../components/SpecTable';
import StructuredList from '../components/StructuredList';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import TwoColumnSection from '../components/TwoColumnSection';
import { makhanaSpecs } from '../data/makhana';
import { Link } from 'react-router-dom';

export default function MakhanaPage() {
    return (
        <>
            <SEOMeta
                title="Makhana (Fox Nuts) Export from India"
                description="Export Desi supplies Makhana (Fox Nuts) in multiple size grades from verified Bihar processors. Full documentation, pre-dispatch verification, and international export support."
            />

            {/* Product Hero */}
            <HeroSection
                label="Food & Ingredients — Makhana"
                title="Makhana (Fox Nuts)"
                subtitle="Available in four size grades from 12mm to 18mm+. Sourced from processing units in Bihar's Mithila cluster. Supplied with pre-dispatch verification and a complete export documentation package."
                primaryCTA={{ label: 'Request Sample', href: '/contact?product=makhana&type=sample' }}
                secondaryCTA={{ label: 'Discuss Supply', href: '/contact?product=makhana&type=supply' }}
            />

            {/* Supply Structure */}
            <TwoColumnSection
                leftContent={
                    <ContentBlock
                        label="Supply Structure"
                        heading="Grade-separated supply from pre-qualified processing units."
                        paragraphs={[
                            'All Makhana is sourced from processing units in the Mithila cluster of Bihar — the concentrated production region for Indian Fox Nuts. The cluster accounts for the predominant share of India\'s commercial Makhana output.',
                            'Processor eligibility requires: FSSAI licence, prior export documentation history, mechanical grading equipment (not manual sorting), and moisture-controlled storage. Processors are assessed per these criteria before any commercial order is placed.',
                            'Grade separation is maintained at the processor level. We do not blend or re-sort at an intermediate stage. Mixed or non-graded stock is not accepted for export consignments.',
                        ]}
                    />
                }
                rightContent={
                    <div>
                        <p className="section-label">Available Grades</p>
                        <StructuredList
                            items={[
                                'Standard — 12–14 mm',
                                'Select — 14–16 mm',
                                'Premium — 16–18 mm',
                                'Extra Premium — 18+ mm',
                            ]}
                        />
                        <div className="mt-8 pt-6 border-t border-border">
                            <p className="text-xs text-muted">Moisture specifications and broken percentage per grade available in the specification table below.</p>
                        </div>
                    </div>
                }
            />

            {/* Grade Specification Table */}
            <SpecTable
                label="Product Specifications"
                heading="Grade Specifications"
                caption="All parameters are indicative. Exact specifications confirmed per lot at time of order."
                headers={makhanaSpecs.gradeTable.headers}
                rows={makhanaSpecs.gradeTable.rows}
            />

            {/* Packaging Table */}
            <SpecTable
                label="Packaging"
                heading="Standard Pack Formats"
                headers={makhanaSpecs.packagingTable.headers}
                rows={makhanaSpecs.packagingTable.rows}
            />

            {/* Mid-page CTA */}
            <CTASection
                heading="Evaluating Makhana for your supply chain?"
                subtext="Trial samples are available for serious buyers. Share your grade requirement and destination — we confirm availability, sample weight, and logistics costs before shipment."
                primaryCTA={{ label: 'Request Sample', href: '/contact?product=makhana&type=sample' }}
                background="surface"
            />

            {/* Documentation & Compliance */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Documentation"
                            heading="Full documentation set verified before the container is stuffed."
                            paragraphs={[
                                'No Makhana consignment is released for loading until the complete document set is assembled, cross-checked against the shipment details, and confirmed accurate. This includes HS code verification, certificate issuer validity, and lab report traceability to the specific lot being shipped.',
                            ]}
                        />
                        <StructuredList
                            heading="Documents Provided"
                            items={[
                                'Certificate of Origin (India)',
                                'Phytosanitary Certificate (NPPO India)',
                                'Commercial Invoice & Packing List',
                                'Bill of Lading / Airway Bill',
                                'Third-party Lab Report (moisture, purity, microbial)',
                                'Pre-shipment Inspection Certificate (on request)',
                            ]}
                        />
                    </div>

                    <div className="mt-12 pt-8 border-t border-border">
                        <p className="text-sm text-muted max-w-2xl">
                            Destination-specific requirements — health certificates, fumigation certificates, halal certification — are identified at enquiry stage and coordinated as part of the shipment preparation, not added after booking.{' '}
                            <Link to="/compliance" className="text-brand font-medium underline underline-offset-2">
                                View Compliance Framework →
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQAccordion
                label="Common Questions"
                heading="Makhana Supply — Frequently Asked Questions"
                items={makhanaSpecs.faqs}
            />

            {/* Bottom CTA */}
            <CTASection
                heading="Discuss a Makhana supply requirement."
                subtext="Send us your grade, target volume, pack format, destination market, and required timeline. We confirm processor availability and indicative pricing within 48 business hours."
                primaryCTA={{ label: 'Discuss Supply', href: '/contact?product=makhana&type=supply' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                background="dark"
            />
        </>
    );
}
