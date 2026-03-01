import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import SpecTable from '../components/SpecTable';
import StructuredList from '../components/StructuredList';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import TwoColumnSection from '../components/TwoColumnSection';
import ImageGrid from '../components/ImageGrid';
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

const MAKHANA_IMAGES = [
    { src: 'https://placehold.co/800x600/f3f4f6/6b7280/png?text=Raw+Makhana+(Close-up)', alt: 'Raw Makhana close-up', caption: 'Product Close-up', subcaption: 'Natural lighting, true colour representation' },
    { src: 'https://placehold.co/800x600/f3f4f6/6b7280/png?text=18mm+vs+12mm+(Comparison)', alt: 'Grade comparison 18mm vs 12mm', caption: 'Grade Variation', subcaption: 'Extra Premium (18mm+) vs Standard (12mm) size check' },
    { src: 'https://placehold.co/800x600/f3f4f6/6b7280/png?text=Broken+Percentage+(Visual)', alt: 'Broken percentage check', caption: 'Tolerance Validation', subcaption: 'Visual representation of ≤ 2% broken tolerance' },
    { src: 'https://placehold.co/800x600/f3f4f6/6b7280/png?text=20kg+PP+Woven+(Packed)', alt: 'Packaging 20kg PP Woven bag', caption: 'Packaging Format', subcaption: '20kg PP Woven Bag (Loose vs Packed)' },
];

const MAKHANA_PROCESS_IMAGES = [
    { src: 'https://placehold.co/800x600/f3f4f6/6b7280/png?text=Sorting+Line+(Processor)', alt: 'Makhana sorting line in Bihar', caption: 'Grade Separation', subcaption: 'Mechanical sorting at pre-qualified Mithila processor' },
    { src: 'https://placehold.co/800x600/f3f4f6/6b7280/png?text=Container+Loading+(Dispatch)', alt: 'Makhana container stuffing', caption: 'Dispatch Readiness', subcaption: 'Container stuffing post-clearance' },
];

const MOQ_NOTE = 'Minimum order quantities vary by grade and packing format. Trial quantities are structured for new buyers. Contact us to confirm current availability before placing an order.';
const SNAPSHOT = [
    { label: 'Grade Range', value: 'Standard to Extra Premium', sub: '12mm – 18mm+, four grades' },
    { label: 'MOQ', value: 'Trial from 100 kg', sub: 'Commercial from 1 MT per grade' },
    { label: 'Pack Formats', value: '5 kg · 10 kg · 20 kg', sub: 'PP woven bag or corrugated carton' },
    { label: 'Samples', value: 'Available', sub: 'Grade, weight, and freight confirmed upfront' },
];

const JUMP_LINKS = [
    { label: 'Grades', href: '#grades' },
    { label: 'Packaging', href: '#packaging' },
    { label: 'Logistics', href: '#logistics' },
    { label: 'Documentation', href: '#documentation' },
    { label: 'FAQ', href: '#faq' },
];

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

            {/* Definition block — SEO / AI extraction */}
            <div className="bg-surface border-b border-border">
                <div className="page-container py-4">
                    <p className="text-xs text-muted">
                        <strong>Makhana (Fox Nuts)</strong> is a processed seed sourced from the <em>Euryale ferox</em> plant, used in snack, retail, and food ingredient supply chains. India is the dominant global producer, with the Mithila region of Bihar accounting for the majority of commercial output.
                    </p>
                </div>
            </div>

            {/* ① Hero */}
            <HeroSection
                label="Food and Ingredients: Makhana"
                title="Makhana (Fox Nuts)"
                subtitle="Four size grades from 12mm to 18mm+. Sourced from processing units in Bihar's Mithila cluster. Each lot is verified before dispatch."
                primaryCTA={{ label: 'Request Sample', href: '/contact?product=makhana&type=sample' }}
                secondaryCTA={{ label: 'Discuss Supply', href: '/contact?product=makhana&type=supply' }}
                imageUrl="https://placehold.co/900x700/f3f4f6/6b7280/png?text=Makhana+Product"
            />

            {/* Visual Reference — immediately after hero */}
            <ImageGrid
                label="Visual Reference"
                heading="Product and Packing Imagery"
                images={MAKHANA_IMAGES}
                columns={4}
            />

            {/* Jump links */}
            <nav className="bg-white border-b border-border sticky top-[81px] z-30" aria-label="Page sections">
                <div className="page-container">
                    <div className="flex items-center overflow-x-auto scrollbar-none">
                        {JUMP_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="flex-shrink-0 text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand px-4 py-3.5 border-b-2 border-transparent hover:border-brand transition-all duration-150"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* ② Quick Snapshot Box — removed */}

            {/* ③ Supply Structure */}
            <div id="grades" style={{ scrollMarginTop: '130px' }} />
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

            {/* ④ Grade Table */}
            <SpecTable
                label="Product Specifications"
                heading="Grade Specifications"
                caption="Parameters are indicative. Exact specification including moisture and broken percentage is confirmed for each lot at order stage."
                headers={makhanaSpecs.gradeTable.headers}
                rows={makhanaSpecs.gradeTable.rows}
            />

            {/* ⑤ Packaging Table */}
            <div id="packaging" style={{ scrollMarginTop: '130px' }} />
            <SpecTable
                label="Packaging"
                heading="Standard Pack Formats"
                headers={makhanaSpecs.packagingTable.headers}
                rows={makhanaSpecs.packagingTable.rows}
            />

            {/* Process Anchoring */}
            <ImageGrid
                images={MAKHANA_PROCESS_IMAGES}
                columns={2}
            />

            {/* ⑥ Logistics */}
            <div id="logistics" style={{ scrollMarginTop: '130px' }} />
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <p className="section-label">Logistics</p>
                    <h2 className="text-xl md:text-2xl font-bold mb-8">Shipment structure for Makhana.</h2>
                    <div className="max-w-2xl divide-y divide-border border-t border-border">
                        {[
                            { label: 'Sea Freight', detail: 'LCL (consolidated) or FCL (full container) depending on order volume.' },
                            { label: 'Primary Ports', detail: 'Nhava Sheva and Kolkata. Port selected based on processor location.' },
                            { label: 'Air Freight', detail: 'Available for samples and urgent dispatches.' },
                            { label: 'Incoterms', detail: 'FOB, CIF, or DAP confirmed at the Proforma Invoice stage.' },
                            { label: 'Lead Time', detail: 'Production and documentation lead time confirmed per processor at order stage.' },
                        ].map(({ label, detail }) => (
                            <div key={label} className="flex gap-6 py-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-brand min-w-[110px] pt-0.5">{label}</span>
                                <span className="text-sm text-muted leading-relaxed">{detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ⑦ Documentation */}
            <div id="documentation" style={{ scrollMarginTop: '130px' }} />
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

            {/* ⑧ FAQ */}
            <div id="faq" style={{ scrollMarginTop: '130px' }} />
            <FAQAccordion
                label="Common Questions"
                heading="Makhana Supply: Frequently Asked Questions"
                items={makhanaSpecs.faqs}
            />

            {/* ⑨ Final CTA */}
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
