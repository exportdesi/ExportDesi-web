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
                subtitle="Onion, garlic, banana powder, moringa — multiple forms and pack formats. Process-grade and food-grade supply from verified Indian processors."
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
                                'Rather than managing separate vendor relationships for each ingredient, buyers can consolidate dehydrated ingredient sourcing through a single point of contact.',
                                'All products in this category are sourced from processors with prior export history. Quality parameters are confirmed per order. Lab reports, documentation, and pre-dispatch verification are standard.',
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
                                'All dehydrated ingredient shipments include a full documentation package. No documentation is sent post-shipment without pre-confirmation.',
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
                subtext="Share your specifications. We confirm processor availability and pricing within 48 hours."
                primaryCTA={{ label: 'Request Specifications', href: '/contact?type=dehydrated' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                background="dark"
            />
        </>
    );
}
