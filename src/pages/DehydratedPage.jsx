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
                title="Dehydrated & Dried Ingredients Export from India"
                description="Export Desi supplies dehydrated onion, garlic, banana powder, moringa powder from verified Indian processors. Multiple forms, full documentation."
            />

            <HeroSection
                label="Food & Ingredients — Dehydrated"
                title="Dehydrated &amp; Dried Ingredients"
                subtitle="Onion, garlic, banana powder, moringa — available in flakes, minced, granule, and powder forms. Process-grade and food-grade specifications. Third-party lab reports and full export documentation as standard."
                primaryCTA={{ label: 'Request Specifications', href: '/contact?type=dehydrated' }}
                secondaryCTA={{ label: 'Discuss Supply', href: '/contact?type=dehydrated-supply' }}
            />

            {/* Category Overview */}
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Category Overview"
                            heading="Multi-product supply from a single execution partner."
                            paragraphs={[
                                'Buyers sourcing more than one dehydrated ingredient can consolidate supply through a single shipment, rather than managing separate vendor relationships for each SKU. We source each product from an appropriate pre-qualified processor and coordinate a combined consignment with a unified documentation package.',
                                'All products are sourced from processors with prior food export history. Quality parameters, lab reports, and documentation are confirmed per product per lot — not on a category-wide blanket basis.', ,
                            ]}
                        />
                        <div>
                            <StructuredList
                                heading="Products Available"
                                items={[
                                    'Dehydrated Onion — Flakes, Minced, Chopped, Granules, Powder',
                                    'Dehydrated Garlic — Flakes, Minced, Granules, Powder',
                                    'Banana Powder — Natural, Green Banana',
                                    'Moringa Powder — Leaf Powder',
                                ]}
                            />
                            <p className="text-xs text-muted mt-6">
                                Additional products available on request. Feasibility confirmed before commitment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spec Table */}
            <SpecTable
                label="Product Specifications"
                heading="Indicative Specification Summary"
                caption="Exact specifications confirmed per lot at time of order."
                headers={dehydratedSpecTable.headers}
                rows={dehydratedSpecTable.rows}
            />

            {/* Documentation */}
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="Documentation"
                            heading="Complete export documentation as standard."
                            paragraphs={[
                                'All dehydrated ingredient shipments are prepared against a document checklist specific to the shipment. HS code accuracy, certificate validity, and lab report lot traceability are verified before the container is approved for stuffing. No document is issued post-shipment to correct pre-dispatch omissions.',
                            ]}
                        />
                        <StructuredList
                            heading="Standard Documents"
                            items={[
                                'Certificate of Origin',
                                'Phytosanitary Certificate',
                                'Commercial Invoice & Packing List',
                                'Bill of Lading / Airway Bill',
                                'Lab Report (moisture, microbial, pesticide residue)',
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

            {/* FAQ */}
            <FAQAccordion
                label="Common Questions"
                heading="Dehydrated Ingredients — Frequently Asked Questions"
                items={dehydratedFaqs}
            />

            {/* CTA */}
            <CTASection
                heading="Have a dehydrated ingredient requirement?"
                subtext="Send us your required products, forms or grades, target volume, and destination market. We confirm processor availability and indicative pricing within 48 business hours."
                primaryCTA={{ label: 'Request Specifications', href: '/contact?type=dehydrated' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                background="dark"
            />
        </>
    );
}
