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
                subtitle="Multiple size grades sourced directly from processing clusters in Bihar. Pre-dispatch verified. Fully documented for international export."
                primaryCTA={{ label: 'Request Sample', href: '/contact?product=makhana&type=sample' }}
                secondaryCTA={{ label: 'Discuss Supply', href: '/contact?product=makhana&type=supply' }}
            />

            {/* Supply Structure */}
            <TwoColumnSection
                leftContent={
                    <ContentBlock
                        label="Supply Structure"
                        heading="Grade-based supply from verified processors."
                        paragraphs={[
                            'All Makhana is sourced from established processing units in the Mithila cluster of Bihar — the primary producing region for Indian Fox Nuts.',
                            'We work with processors who maintain consistent grading standards and have prior export history. Selection criteria include processing hygiene, grading equipment specification, and moisture control capability.',
                            'Supply is grade-separated at source. Mixed or non-graded stock is not accepted for export consignments.',
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
                heading="Interested in a trial sample?"
                subtext="Trial samples are available for qualified buyers. Sample weight and shipping costs are discussed on a case-by-case basis."
                primaryCTA={{ label: 'Request Sample', href: '/contact?product=makhana&type=sample' }}
                background="surface"
            />

            {/* Documentation & Compliance */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Documentation"
                            heading="Standard export documentation package."
                            paragraphs={[
                                'Every Makhana consignment ships with a complete documentation set. Documents are prepared and verified before container stuffing.',
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
                            Destination-market-specific requirements — health certificates, import permits, fumigation certificates — are coordinated on a per-shipment basis.{' '}
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
                heading="Ready to discuss a Makhana supply arrangement?"
                subtext="Share your grade requirement, volume, and destination. We confirm processor availability and indicative pricing within 48 hours."
                primaryCTA={{ label: 'Discuss Supply', href: '/contact?product=makhana&type=supply' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                background="dark"
            />
        </>
    );
}
