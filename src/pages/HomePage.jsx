import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';
import StructuredList from '../components/StructuredList';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <SEOMeta
                title="Structured Global Export Execution from India"
                description="Export Desi is a structured export execution partner for buyers sourcing Indian food ingredients. Verified processors, clean documentation, reliable delivery."
            />

            {/* Hero */}
            <HeroSection
                label="Export Execution"
                title="Structured Global Export Execution from India."
                subtitle="We coordinate the full export pipeline — processor verification, quality checks, documentation, and logistics. You get a clean shipment. We handle the ground reality."
                primaryCTA={{ label: 'Request Export Details', href: '/contact' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
            />

            {/* Execution Model */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="The Model"
                            heading="We don't manufacture. We verify, secure, and ship."
                            paragraphs={[
                                'Export Desi operates as a structured sourcing and export execution partner. We identify reliable Indian processors, verify quality standards against buyer specifications, manage export documentation, and coordinate logistics.',
                                'The result: direct-from-processor pricing without the complexity of managing multiple vendors across time zones. One accountable point of contact from enquiry to delivery.',
                            ]}
                        />
                        <div className="space-y-6 pt-2 md:pt-14">
                            <StructuredList
                                items={[
                                    'Processor identification and pre-qualification',
                                    'Third-party quality verification prior to dispatch',
                                    'Complete export documentation management',
                                    'Port coordination and freight forwarding',
                                    'Post-shipment documentation handover',
                                ]}
                                ordered
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Food & Ingredients Cluster */}
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <div className="mb-14">
                        <p className="section-label">Current Sourcing Focus</p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl">
                            Food &amp; Ingredients
                        </h2>
                        <p className="text-muted mt-4 max-w-xl">
                            Our active sourcing cluster covers Indian food commodities with established international demand and documented compliance pathways.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                        {/* Makhana card */}
                        <div className="bg-surface p-8">
                            <p className="section-label">Fox Nuts</p>
                            <h3 className="text-xl font-bold mb-3">Makhana</h3>
                            <p className="text-muted text-sm mb-6">
                                Multiple size grades available. Sourced from verified processing clusters in Bihar. Suitable for retail, food ingredient, and snack manufacturing applications.
                            </p>
                            <Link
                                to="/industries/food-ingredients/makhana"
                                className="text-sm font-semibold text-brand border-b border-brand pb-0.5 hover:opacity-70 transition-opacity"
                            >
                                View Product Details →
                            </Link>
                        </div>

                        {/* Dehydrated card */}
                        <div className="bg-surface p-8">
                            <p className="section-label">Dehydrated Ingredients</p>
                            <h3 className="text-xl font-bold mb-3">Dehydrated &amp; Dried Ingredients</h3>
                            <p className="text-muted text-sm mb-6">
                                Onion, garlic, banana powder, moringa — available in multiple forms and pack formats. Process-grade and food-grade supply. Documentation-ready for destination market entry.
                            </p>
                            <Link
                                to="/industries/food-ingredients/dehydrated-ingredients"
                                className="text-sm font-semibold text-brand border-b border-brand pb-0.5 hover:opacity-70 transition-opacity"
                            >
                                View Product Details →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Operate */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <ContentBlock
                        label="Operations"
                        heading="Execution over representation."
                        paragraphs={[
                            'Sourcing is straightforward. Consistent, compliant supply across multiple shipments is not. Export Desi exists for buyers who have learned that distinction.',
                            'We do not work with processors we cannot verify. We do not commit to timelines we cannot hold. We do not move a consignment until documentation is complete.',
                        ]}
                    />
                    <div className="mt-10">
                        <Link to="/how-we-work" className="btn-secondary">
                            See Our Export Execution Model
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                heading="Ready to discuss a supply requirement?"
                subtext="Share your product specifications. We will confirm processor availability and provide indicative pricing within 48 hours."
                primaryCTA={{ label: 'Request Export Details', href: '/contact' }}
                secondaryCTA={{ label: 'View Compliance Framework', href: '/compliance' }}
                background="dark"
            />
        </>
    );
}
