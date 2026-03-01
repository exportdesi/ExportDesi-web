import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import SpecTable from '../components/SpecTable';
import StructuredList from '../components/StructuredList';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import ImageGrid from '../components/ImageGrid';
import { dehydratedSpecTable, dehydratedFaqs } from '../data/dehydrated';
import { Link } from 'react-router-dom';

const SNAPSHOT = [
    { label: 'Products', value: 'Onion · Garlic · Banana · Moringa', sub: 'Flakes, powder, granule, minced forms' },
    { label: 'MOQ', value: 'Trial quantities from 50 kg', sub: 'Multi-SKU consolidation available' },
    { label: 'Pack Formats', value: '5 kg · 10 kg · 25 kg', sub: 'Individually labelled corrugated cartons' },
    { label: 'Samples', value: 'Available', sub: 'Per product, with lab report on request' },
];

const DEHYDRATED_IMAGES = [
    { src: 'https://placehold.co/800x600/f3f4f6/6b7280/png?text=Flakes+vs+Powder+(Comparison)', alt: 'Flakes vs Powder comparison', caption: 'Form Comparison', subcaption: 'Dehydrated Onion Flakes vs Powder' },
    { src: 'https://placehold.co/800x600/f3f4f6/6b7280/png?text=Garlic+vs+Onion+(Texture)', alt: 'Garlic vs Onion texture', caption: 'Texture Reference', subcaption: 'Minced Garlic vs Minced Onion' },
    { src: 'https://placehold.co/800x600/f3f4f6/6b7280/png?text=Product+Close-up+(Raw)', alt: 'Raw dehydrated product close-up', caption: 'Product Close-up', subcaption: 'Natural lighting, true colour representation' },
    { src: 'https://placehold.co/800x600/f3f4f6/6b7280/png?text=PE+Lined+Carton+(Packed)', alt: 'Packaging PE lined carton', caption: 'Packaging Format', subcaption: 'PE Liner inside Corrugated Carton' },
];

const DEHYDRATED_PROCESS_IMAGES = [
    { src: 'https://placehold.co/800x600/f3f4f6/6b7280/png?text=Dehydration+Plant+(Gujarat)', alt: 'Dehydration facility in Gujarat', caption: 'Processing Infrastructure', subcaption: 'Temperature-controlled processing environment' },
    { src: 'https://placehold.co/800x600/f3f4f6/6b7280/png?text=Stacked+Cartons+(Dispatch)', alt: 'Dehydrated ingredients stacked cartons', caption: 'Dispatch Readiness', subcaption: 'Cartons palletised and ready for container loading' },
];

const JUMP_LINKS = [
    { label: 'Products', href: '#products' },
    { label: 'Specifications', href: '#specs' },
    { label: 'Logistics', href: '#logistics' },
    { label: 'Documentation', href: '#documentation' },
    { label: 'FAQ', href: '#faq' },
];

const DEHYDRATED_FAQS_EXTENDED = [
    ...dehydratedFaqs,
    {
        question: 'Can multiple dehydrated products be shipped in the same container?',
        answer: 'Yes. We coordinate consolidated shipments covering multiple SKUs — for example, dehydrated onion flakes and garlic powder in the same FCL or LCL consignment. Each product is packed separately with its own inner packaging, documented individually on the packing list, and covered by a product-specific lab report. A single commercial invoice and CoO covers the full consignment.',
    },
    {
        question: 'What is the minimum order quantity?',
        answer: 'Minimum quantities vary by product and form. For trial purposes, we can structure smaller quantities across multiple products to allow buyers to verify specifications before committing to commercial volumes. Contact us to confirm current processor availability and feasibility.',
    },
    {
        question: 'What packaging formats are available for mixed SKU orders?',
        answer: 'For mixed-SKU consignments, each product is packed in its standard export format: 5 kg, 10 kg, or 25 kg cartons depending on the product. Cartons are individually labelled with product name, batch reference, and net weight. Palletisation and container packing layout are confirmed with the buyer before stuffing.',
    },
];

export default function DehydratedPage() {
    return (
        <>
            <SEOMeta
                title="Dehydrated and Dried Ingredients Export from India"
                description="Export Desi supplies dehydrated onion, garlic, banana powder, and moringa from pre-qualified Indian processors. Multiple forms and grades, third-party lab reports per lot."
            />

            {/* ① Hero */}
            <HeroSection
                label="Food and Ingredients: Dehydrated"
                title="Dehydrated and Dried Ingredients"
                subtitle="Onion, garlic, banana powder, and moringa from pre-qualified processors in Gujarat. Multiple forms per product. Third-party lab reports per lot."
                primaryCTA={{ label: 'Request Specifications', href: '/contact?type=dehydrated' }}
                secondaryCTA={{ label: 'Request Sample', href: '/contact?type=dehydrated&subtype=sample' }}
            />

            {/* Jump links */}
            <nav className="bg-white border-b border-border sticky top-[73px] z-30" aria-label="Page sections">
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

            {/* ② Quick Snapshot Box */}
            <section className="bg-brand border-b border-brand-light">
                <div className="page-container">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-light">
                        {SNAPSHOT.map(({ label, value, sub }) => (
                            <div key={label} className="px-6 py-8 md:px-8 md:py-10">
                                <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
                                    {label}
                                </p>
                                <p className="text-base md:text-lg font-bold text-white leading-snug mb-1.5">
                                    {value}
                                </p>
                                <p className="text-xs text-white/60 leading-relaxed">
                                    {sub}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ③ Supply Structure */}
            <div id="products" style={{ scrollMarginTop: '120px' }} />
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Sourcing Model"
                            heading="Multiple products. One shipment. One document package."
                            paragraphs={[
                                "Buyers sourcing more than one dehydrated ingredient can consolidate into a single shipment rather than managing separate vendor relationships for each SKU. We source each product from a pre-qualified processor in Gujarat's dehydrated ingredient clusters and coordinate the combined consignment with a single packing list and unified document set.",
                                'Lab reports, quality parameters, and compliance documentation are confirmed per product per lot. There is no category-wide certificate that substitutes for lot-level verification.',
                            ]}
                        />
                        <div>
                            <StructuredList
                                heading="Products Available"
                                items={[
                                    'Dehydrated Onion: Flakes, Minced, Chopped, Granules, Powder (white and red variants)',
                                    'Dehydrated Garlic: Flakes, Minced, Granules, Powder (double-sorted, machine cleaned)',
                                    'Banana Powder: Natural and green banana. Food supplement and ingredient grade.',
                                    'Moringa Powder: Leaf powder, cold-milled. Organic-compliant supply available.',
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Evidence */}
            <ImageGrid
                label="Visual Reference"
                heading="Product and Form Imagery"
                images={DEHYDRATED_IMAGES}
                columns={4}
            />

            {/* ④ Specification Table */}
            <div id="specs" style={{ scrollMarginTop: '120px' }} />
            <SpecTable
                label="Product Specifications"
                heading="Forms, Moisture, and Pack Formats"
                caption="Moisture values are maximum permitted. Exact parameters confirmed at order stage per product and form."
                headers={dehydratedSpecTable.headers}
                rows={dehydratedSpecTable.rows}
            />

            {/* Process Anchoring */}
            <ImageGrid
                images={DEHYDRATED_PROCESS_IMAGES}
                columns={2}
            />

            {/* ⑤ Logistics */}
            <div id="logistics" style={{ scrollMarginTop: '120px' }} />
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <p className="section-label">Logistics</p>
                    <h2 className="text-xl md:text-2xl font-bold mb-8">Shipment structure for dehydrated ingredients.</h2>
                    <div className="max-w-2xl divide-y divide-border border-t border-border">
                        {[
                            { label: 'Sea Freight', detail: 'LCL or FCL depending on total volume. Multi-SKU consolidation in one container.' },
                            { label: 'Primary Ports', detail: 'Nhava Sheva and Mundra. Port selected by processor location and freight conditions.' },
                            { label: 'Air Freight', detail: 'Available for samples and urgent dispatches.' },
                            { label: 'Incoterms', detail: 'FOB, CIF, or DAP confirmed at the Proforma Invoice stage.' },
                            { label: 'Lead Time', detail: 'In-stock: 10–15 working days. Custom or organic: 4–6 weeks advance notice required.' },
                        ].map(({ label, detail }) => (
                            <div key={label} className="flex gap-6 py-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-brand min-w-[110px] pt-0.5">{label}</span>
                                <span className="text-sm text-muted leading-relaxed">{detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ⑥ Documentation */}
            <div id="documentation" style={{ scrollMarginTop: '120px' }} />
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Documentation"
                            heading="Per-product, per-lot documentation. Not category certificates."
                            paragraphs={[
                                'Each product in a consolidated shipment carries its own lab report, moisture test, and packing list entry. HS classification is verified per product before PI confirmation. Destination-specific requirements — fumigation, health certificates, country of origin specifics — are confirmed at enquiry stage.',
                            ]}
                        />
                        <StructuredList
                            heading="Standard Documents Per Lot"
                            items={[
                                'Certificate of Origin: FIEO or Chamber of Commerce',
                                'Phytosanitary Certificate: NPPO India',
                                'Commercial Invoice and Packing List',
                                'Bill of Lading or Airway Bill',
                                'Third-party Lab Report: moisture, microbiology, pesticide residue, heavy metals',
                                'Pre-shipment Inspection Certificate: on request',
                            ]}
                        />
                    </div>
                    <div className="mt-12 pt-8 border-t border-border">
                        <p className="text-sm text-muted max-w-2xl">
                            Buyer-specified testing labs and additional accreditation requirements can be accommodated with advance notice.{' '}
                            <Link to="/compliance" className="text-brand font-medium underline underline-offset-2">
                                View full compliance framework
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* ⑦ FAQ */}
            <div id="faq" style={{ scrollMarginTop: '120px' }} />
            <FAQAccordion
                label="Common Questions"
                heading="Dehydrated Ingredients: Frequently Asked Questions"
                items={DEHYDRATED_FAQS_EXTENDED}
            />

            {/* ⑧ Final CTA */}
            <CTASection
                heading="Discuss a dehydrated ingredient requirement."
                subtext="Send us the product, form, target volume, pack format, and destination. We confirm processor availability and indicative pricing within 48 business hours."
                primaryCTA={{ label: 'Submit Your Requirement', href: '/contact?type=dehydrated' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                background="dark"
            />
        </>
    );
}
