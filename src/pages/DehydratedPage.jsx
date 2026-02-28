import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import SpecTable from '../components/SpecTable';
import StructuredList from '../components/StructuredList';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import { dehydratedSpecTable, dehydratedFaqs } from '../data/dehydrated';
import { Link } from 'react-router-dom';

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

            <HeroSection
                label="Food and Ingredients: Dehydrated"
                title="Dehydrated and Dried Ingredients"
                subtitle="Onion and garlic in flakes, minced, chopped, granule, and powder forms. Banana powder. Moringa leaf powder. Process-grade and food-grade supply. Third-party lab reports covering moisture, pesticide residue, and microbiology are included per lot."
                primaryCTA={{ label: 'Request Specifications', href: '/contact?type=dehydrated' }}
                secondaryCTA={{ label: 'Request Sample', href: '/contact?type=dehydrated&subtype=sample' }}
            />

            {/* Sourcing model */}
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Sourcing Model"
                            heading="Multiple products. One shipment. One document package."
                            paragraphs={[
                                'Buyers sourcing more than one dehydrated ingredient can consolidate into a single shipment rather than managing separate vendor relationships for each SKU. We source each product from a pre-qualified processor in Gujarat\'s dehydrated ingredient clusters and coordinate the combined consignment with a single packing list and unified document set.',
                                'Lab reports, quality parameters, and compliance documentation are confirmed per product per lot. There is no category-wide certificate that substitutes for lot-level verification.',
                            ]}
                        />
                        <div>
                            <StructuredList
                                heading="Products Available"
                                items={[
                                    'Dehydrated Onion: Flakes, Minced, Chopped, Granules, Powder (white and red variants)',
                                    'Dehydrated Garlic: Flakes, Minced, Granules, Powder (double-sorted, machine cleaned)',
                                    'Banana Powder: Natural, Green Banana',
                                    'Moringa Powder: Leaf Powder (cold-milled; organic-compliant supply available on request)',
                                ]}
                            />
                            <p className="text-xs text-muted mt-6">
                                Additional products assessed on request. We confirm feasibility before any commitment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <SpecTable
                label="Product Specifications"
                heading="Indicative Specification Summary"
                caption="Exact specifications including moisture, mesh size, and microbial limits are confirmed per lot at order stage."
                headers={dehydratedSpecTable.headers}
                rows={dehydratedSpecTable.rows}
            />

            {/* MOQ note */}
            <section className="bg-surface border-b border-border">
                <div className="page-container py-6">
                    <p className="text-sm text-muted max-w-2xl">
                        Minimum order quantities vary by product and packing format. Trial quantities are structured for new buyers evaluating specifications before committing to commercial volumes.
                    </p>
                </div>
            </section>

            <CTASection
                heading="Evaluating dehydrated ingredients for your supply chain?"
                subtext="Trial samples are available per product. Share the SKUs, forms, and destination and we will confirm availability and logistics cost before dispatch."
                primaryCTA={{ label: 'Request Sample', href: '/contact?type=dehydrated&subtype=sample' }}
                background="surface"
            />

            {/* Documentation */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Documentation"
                            heading="Document set verified before the container is released."
                            paragraphs={[
                                'HS classification is verified before the Proforma Invoice is issued. Before container stuffing is authorised, we verify HS code accuracy on the commercial invoice, phytosanitary certificate validity relative to the sailing date, and lab report traceability to the specific lot being loaded. Packing list quantities are reconciled against actual lot weight and carton count for each SKU. No document is amended or re-issued post-shipment to correct a pre-dispatch oversight.',
                            ]}
                        />
                        <StructuredList
                            heading="Standard Documents"
                            items={[
                                'Certificate of Origin: FIEO or Chamber of Commerce',
                                'Phytosanitary Certificate: NPPO India',
                                'Commercial Invoice and Packing List (line-by-line per SKU)',
                                'Bill of Lading or Airway Bill',
                                'Third-party Lab Report: moisture, microbial count, pesticide residue (per product per lot)',
                            ]}
                        />
                    </div>
                    <div className="mt-10">
                        <Link to="/compliance" className="btn-secondary">
                            View Full Compliance Framework
                        </Link>
                    </div>
                </div>
            </section>

            <FAQAccordion
                label="Common Questions"
                heading="Dehydrated Ingredients: Frequently Asked Questions"
                items={DEHYDRATED_FAQS_EXTENDED}
            />

            <CTASection
                heading="Have a dehydrated ingredient requirement?"
                subtext="Send us the products, required forms, grades, target volume, and destination market. We confirm processor availability and indicative pricing within 48 business hours."
                primaryCTA={{ label: 'Submit Your Requirement', href: '/contact?type=dehydrated' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                background="dark"
            />
        </>
    );
}
