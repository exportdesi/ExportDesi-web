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
import { Helmet } from 'react-helmet-async';

const PRODUCT_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Makhana (Fox Nuts)',
    description: 'Indian Makhana (Euryale ferox) in four size grades from 12mm to 18mm+, sourced from pre-qualified processors in Bihar. Available in Standard, Select, Premium, and Extra Premium grades.',
    brand: { '@type': 'Brand', name: 'Export Desi' },
    category: 'Food Ingredients',
    countryOfOrigin: 'IN',
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        offerCount: 4,
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'Export Desi', url: 'https://exportdesi.com' },
    },
};

const MOQ_NOTE = 'Minimum order quantities vary by grade and packing format. Trial quantities are structured for new buyers. Contact us to confirm current availability before placing an order.';

export default function MakhanaPage() {
    return (
        <>
            <SEOMeta
                title="Makhana (Fox Nuts) Export from India"
                description="Export Desi supplies Makhana in four size grades from pre-qualified Bihar processors. Pre-dispatch lot verification, grade-specific lab reports, and full export documentation."
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(PRODUCT_SCHEMA)}
                </script>
            </Helmet>

            {/* Definition block for SEO / AI extraction */}
            <div className="bg-surface border-b border-border">
                <div className="page-container py-4">
                    <p className="text-xs text-muted">
                        <strong>Makhana (Fox Nuts)</strong> is a processed seed sourced from the <em>Euryale ferox</em> plant, used in snack, retail, and food ingredient supply chains. India is the dominant global producer, with the Mithila region of Bihar accounting for the majority of commercial output.
                    </p>
                </div>
            </div>

            <HeroSection
                label="Food and Ingredients: Makhana"
                title="Makhana (Fox Nuts)"
                subtitle="Four size grades from 12mm to 18mm+. Sourced from processing units in Bihar's Mithila cluster. Each lot is verified before dispatch. Certificate of Origin, phytosanitary certificate, grade-specific lab report, and packing list are included as standard."
                primaryCTA={{ label: 'Request Sample', href: '/contact?product=makhana&type=sample' }}
                secondaryCTA={{ label: 'Discuss Supply', href: '/contact?product=makhana&type=supply' }}
            />

            <TwoColumnSection
                leftContent={
                    <ContentBlock
                        label="Supply Structure"
                        heading="Supply is grade-separated and sourced from pre-qualified processing units."
                        paragraphs={[
                            'All Makhana is sourced from the Mithila cluster in Bihar, the production region that accounts for the majority of India\'s commercial Fox Nut output. Processing units are assessed before any order is placed. Criteria: FSSAI licence, APEDA registration, mechanical grading equipment (not manual sorting), moisture-controlled storage, and prior export documentation history.',
                            'Grade separation is done at the processor. We do not blend grades or re-sort at an intermediate point. Mixed or non-conforming stock is rejected before packing.',
                        ]}
                    />
                }
                rightContent={
                    <div>
                        <p className="section-label">Available Grades</p>
                        <StructuredList
                            items={[
                                'Standard: 12 to 14 mm',
                                'Select: 14 to 16 mm',
                                'Premium: 16 to 18 mm',
                                'Extra Premium: 18mm and above',
                            ]}
                        />
                        <div className="mt-8 pt-6 border-t border-border">
                            <p className="text-xs text-muted">
                                Moisture tolerance and maximum broken percentage per grade are detailed in the specification table below.
                            </p>
                        </div>
                    </div>
                }
            />

            <SpecTable
                label="Product Specifications"
                heading="Grade Specifications"
                caption="Parameters are indicative. Exact specification including moisture and broken percentage is confirmed for each lot at order stage."
                headers={makhanaSpecs.gradeTable.headers}
                rows={makhanaSpecs.gradeTable.rows}
            />

            <SpecTable
                label="Packaging"
                heading="Standard Pack Formats"
                headers={makhanaSpecs.packagingTable.headers}
                rows={makhanaSpecs.packagingTable.rows}
            />

            {/* MOQ note */}
            <section className="bg-surface border-b border-border">
                <div className="page-container py-6">
                    <p className="text-sm text-muted max-w-2xl">{MOQ_NOTE}</p>
                </div>
            </section>

            <CTASection
                heading="Evaluating Makhana for your supply chain?"
                subtext="Trial samples are available. Share your grade requirement and destination and we will confirm processor availability, sample weight, and freight cost before dispatch."
                primaryCTA={{ label: 'Request Sample', href: '/contact?product=makhana&type=sample' }}
                background="surface"
            />

            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Documentation"
                            heading="Document set verified against the lot before the container is released."
                            paragraphs={[
                                'HS classification is verified before PI confirmation. Before container stuffing is authorised, we verify commercial invoice values against the packing list line-by-line, phytosanitary certificate validity relative to sailing date, and lab report traceability to the specific batch being shipped. No container moves with an outstanding document.',
                            ]}
                        />
                        <StructuredList
                            heading="Documents Provided"
                            items={[
                                'Certificate of Origin: issued by FIEO or Chamber of Commerce',
                                'Phytosanitary Certificate: NPPO India',
                                'Commercial Invoice and Packing List',
                                'Bill of Lading or Airway Bill',
                                'Third-party Lab Report: moisture, purity, microbial count',
                                'Pre-shipment Inspection Certificate: on request or per destination requirement',
                            ]}
                        />
                    </div>

                    <div className="mt-12 pt-8 border-t border-border">
                        <p className="text-sm text-muted max-w-2xl">
                            Destination-specific requirements such as fumigation certificates, health certificates, or halal certification are confirmed at enquiry stage and coordinated before loading.{' '}
                            <Link to="/compliance" className="text-brand font-medium underline underline-offset-2">
                                View full compliance framework
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            <FAQAccordion
                label="Common Questions"
                heading="Makhana Supply: Frequently Asked Questions"
                items={makhanaSpecs.faqs}
            />

            <CTASection
                heading="Discuss a Makhana supply requirement."
                subtext="Send us your grade, target volume, pack format, destination market, and timeline. We confirm processor availability and indicative pricing within 48 business hours."
                primaryCTA={{ label: 'Submit Your Requirement', href: '/contact?product=makhana&type=supply' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                background="dark"
            />
        </>
    );
}
