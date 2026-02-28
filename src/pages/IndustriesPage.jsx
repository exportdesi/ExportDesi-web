import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';

export default function IndustriesPage() {
    return (
        <>
            <SEOMeta
                title="Industries"
                description="Export Desi's active sourcing clusters — food ingredients and specialty produce from India. Structured export execution for global buyers."
            />

            <HeroSection
                label="Industries"
                title="Active Export Clusters"
                subtitle="We operate in categories where we have established processor relationships, documented compliance pathways, and repeatable export processes."
                background="surface"
            />

            {/* Food & Ingredients */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">
                        <div>
                            <p className="section-label">Active Cluster</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-5">Food &amp; Ingredients</h2>
                            <p className="text-muted mb-6">
                                Our primary sourcing cluster. Covers Indian food commodities with established international demand, defined quality parameters, and export compliance frameworks in place.
                            </p>
                            <p className="text-muted mb-8">
                                Current active products include Makhana (Fox Nuts) across multiple grades, and a range of dehydrated and dried ingredients including onion, garlic, and functional powders.
                            </p>
                            <Link to="/industries/food-ingredients" className="btn-primary">
                                View Food &amp; Ingredients
                            </Link>
                        </div>

                        {/* Highlight box */}
                        <div className="border border-border bg-surface p-8">
                            <p className="section-label">Products in this cluster</p>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Makhana (Fox Nuts)', href: '/industries/food-ingredients/makhana' },
                                    { name: 'Dehydrated Onion & Garlic', href: '/industries/food-ingredients/dehydrated-ingredients' },
                                    { name: 'Banana Powder', href: '/industries/food-ingredients/dehydrated-ingredients' },
                                    { name: 'Moringa Powder', href: '/industries/food-ingredients/dehydrated-ingredients' },
                                ].map((p) => (
                                    <li key={p.name}>
                                        <Link
                                            to={p.href}
                                            className="text-sm font-medium text-brand flex items-center gap-2 hover:opacity-70 transition-opacity"
                                        >
                                            <span className="text-muted">—</span> {p.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Future clusters notice */}
            <section className="bg-surface">
                <div className="page-container section-pad">
                    <ContentBlock
                        label="Scope"
                        heading="Focused by design."
                        paragraphs={[
                            'We deliberately operate within a defined product scope. Expanding beyond it without the corresponding processor relationships and compliance knowledge is how quality failures happen.',
                            'Additional categories are assessed on a request basis. If you have a consistent volume requirement for an Indian agricultural commodity not listed here, contact us to discuss feasibility.',
                        ]}
                    />
                </div>
            </section>
        </>
    );
}
