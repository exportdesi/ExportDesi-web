import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import SpecTable from '../components/SpecTable';
import StructuredList from '../components/StructuredList';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import { dehydratedSpecTable, dehydratedFaqs } from '../data/dehydrated';
import { Link } from 'react-router-dom';

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
                secondaryCTA={{ label: 'Discuss Supply', href: '/contact?type=dehydrated-supply' }}
            />

            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Sourcing Model"
                            heading="Multiple products. One shipment. One document package."
                            paragraphs={[
                                'Buyers sourcing more than one dehydrated ingredient can consolidate into a single shipment rather than managing separate vendor relationships for each SKU. We source each product from a pre-qualified processor and coordinate the combined consignment with a single packing list and unified document set.',
                                'Lab reports, quality parameters, and compliance documentation are confirmed per product per lot. There is no category-wide certificate that substitutes for lot-level verification.',
                            ]}
                        />
                        <div>
                            <StructuredList
                                heading="Products Available"
                                items={[
                                    'Dehydrated Onion: Flakes, Minced, Chopped, Granules, Powder',
                                    'Dehydrated Garlic: Flakes, Minced, Granules, Powder',
                                    'Banana Powder: Natural, Green Banana',
                                    'Moringa Powder: Leaf Powder',
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

            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Documentation"
                            heading="Document set verified before the container is released."
                            paragraphs={[
                                'Before container stuffing is authorised, we verify HS code accuracy on the commercial invoice, phytosanitary certificate validity relative to the sailing date, and lab report traceability to the specific lot being loaded. Packing list quantities are reconciled against actual lot weight and carton count. No document is amended or re-issued post-shipment to correct a pre-dispatch oversight.',
                            ]}
                        />
                        <StructuredList
                            heading="Standard Documents"
                            items={[
                                'Certificate of Origin: FIEO or Chamber of Commerce',
                                'Phytosanitary Certificate: NPPO India',
                                'Commercial Invoice and Packing List',
                                'Bill of Lading or Airway Bill',
                                'Third-party Lab Report: moisture, microbial count, pesticide residue',
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
                items={dehydratedFaqs}
            />

            <CTASection
                heading="Have a dehydrated ingredient requirement?"
                subtext="Send us the products, required forms, grades, target volume, and destination market. We confirm processor availability and indicative pricing within 48 business hours."
                primaryCTA={{ label: 'Request Specifications', href: '/contact?type=dehydrated' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                background="dark"
            />
        </>
    );
}
