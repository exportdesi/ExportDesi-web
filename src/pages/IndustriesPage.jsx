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
                description="Export Desi's active sourcing scope: food ingredients and specialty produce from India. Makhana, dehydrated onion, garlic, banana powder, moringa."
            />

            <HeroSection
                label="Industries"
                title="Active Export Clusters."
                subtitle="We work within categories where we have active processor relationships and prior shipment history. We do not list categories we cannot fulfil."
                background="surface"
            />

            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">
                        <div>
                            <p className="section-label">Active Cluster</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-5">Food and Ingredients</h2>
                            <p className="text-muted mb-6">
                                Our primary sourcing cluster. Covers Indian food commodities with established international buyer demand, documented compliance pathways for key destination markets, and processor networks built and verified over multiple shipments.
                            </p>
                            <p className="text-muted mb-8">
                                Active products: Makhana (Fox Nuts) in four size grades, and a range of dehydrated ingredients including onion, garlic, banana powder, and moringa leaf powder.
                            </p>
                            <Link to="/industries/food-ingredients" className="btn-primary">
                                View Food and Ingredients
                            </Link>
                        </div>

                        <div className="border border-border bg-surface p-8">
                            <p className="section-label">Products in This Cluster</p>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Makhana (Fox Nuts)', href: '/industries/food-ingredients/makhana' },
                                    { name: 'Dehydrated Onion and Garlic', href: '/industries/food-ingredients/dehydrated-ingredients' },
                                    { name: 'Banana Powder', href: '/industries/food-ingredients/dehydrated-ingredients' },
                                    { name: 'Moringa Powder', href: '/industries/food-ingredients/dehydrated-ingredients' },
                                ].map((p) => (
                                    <li key={p.name}>
                                        <Link
                                            to={p.href}
                                            className="text-sm font-medium text-brand flex items-center gap-2 hover:opacity-70 transition-opacity"
                                        >
                                            {p.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-surface">
                <div className="page-container section-pad">
                    <ContentBlock
                        label="Scope"
                        heading="Focused by design."
                        paragraphs={[
                            'Adding a product category without established processor relationships and a tested compliance path is how grade failures and document errors enter the supply chain. We do not expand scope ahead of the groundwork.',
                            'If you have a consistent volume requirement for an Indian agricultural or food commodity not listed here, contact us. We assess feasibility and will tell you directly if it is within our reach.',
                        ]}
                    />
                </div>
            </section>
        </>
    );
}
