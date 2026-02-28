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
                title="Structured Export Execution from India"
                description="Export Desi manages the full Indian export pipeline for global buyers — processor qualification, pre-dispatch verification, documentation, and port coordination."
            />

            {/* Hero */}
            <HeroSection
                label="Export Execution"
                title="Structured Export Execution from India."
                subtitle="We manage processor qualification, pre-dispatch quality verification, export documentation, and port coordination — as a single integrated service. Buyers receive a compliant shipment without building an in-country operation."
                primaryCTA={{ label: 'Request Export Details', href: '/contact' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
            />

            {/* Execution Model */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="The Model"
                            heading="We do not manufacture. We verify, qualify, and execute."
                            paragraphs={[
                                'Export Desi is an export execution partner, not a trading house. We maintain direct relationships with processors across active product categories, assess them against defined quality and compliance criteria, and manage the full shipment cycle — from purchase order to Bill of Lading.',
                                'Buyers deal with a single point of accountability. Pricing reflects processor-level rates. Documentation is complete before the container moves.',
                            ]}
                        />
                        <div className="space-y-6 pt-2 md:pt-14">
                            <StructuredList
                                items={[
                                    'Processor identification and pre-qualification against buyer specification',
                                    'Pre-dispatch quality verification — batch inspection, moisture and grade checks',
                                    'Export documentation preparation and accuracy verification',
                                    'Port coordination — container stuffing, seal, and BL issuance oversight',
                                    'Post-shipment document set handover to buyer',
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
                        <p className="section-label">Current Sourcing Scope</p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl">
                            Food &amp; Ingredients
                        </h2>
                        <p className="text-muted mt-4 max-w-xl">
                            Our active scope is limited to categories where we have established processor networks, verified compliance pathways, and documented shipment history.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                        {/* Makhana card */}
                        <div className="bg-surface p-8">
                            <p className="section-label">Fox Nuts</p>
                            <h3 className="text-xl font-bold mb-3">Makhana</h3>
                            <p className="text-muted text-sm mb-6">
                                Available in four size grades (12mm to 18mm+). Sourced from processing units in Bihar's Mithila cluster. Fully documented for retail, food ingredient, and snack manufacturing end-uses.
                            </p>
                            <Link
                                to="/industries/food-ingredients/makhana"
                                className="text-sm font-semibold text-brand border-b border-brand pb-0.5 hover:opacity-70 transition-opacity"
                            >
                                View Grades &amp; Specifications →
                            </Link>
                        </div>

                        {/* Dehydrated card */}
                        <div className="bg-surface p-8">
                            <p className="section-label">Dehydrated Ingredients</p>
                            <h3 className="text-xl font-bold mb-3">Dehydrated &amp; Dried Ingredients</h3>
                            <p className="text-muted text-sm mb-6">
                                Onion, garlic, banana powder, moringa — available in flakes, minced, granule, and powder forms. Process-grade and food-grade specifications. Third-party lab reports included as standard.
                            </p>
                            <Link
                                to="/industries/food-ingredients/dehydrated-ingredients"
                                className="text-sm font-semibold text-brand border-b border-brand pb-0.5 hover:opacity-70 transition-opacity"
                            >
                                View Product Range →
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
                        heading="Consistent supply requires more than a supplier list."
                        paragraphs={[
                            'Finding a processor willing to quote is not the problem. Receiving the correct grade, with complete documentation, within the agreed timeline — across multiple consecutive shipments — is where most India-sourcing arrangements fail.',
                            'We do not accept enquiries we cannot fulfil. We do not confirm timelines without processor verification. We do not release a consignment until the documentation set is complete and accurate.',
                        ]}
                    />
                    <div className="mt-10">
                        <Link to="/how-we-work" className="btn-secondary">
                            View Our Export Execution Model
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                heading="Have a supply requirement to discuss?"
                subtext="Send us your product specification, destination market, and target volume. We confirm processor availability and provide indicative pricing within 48 business hours."
                primaryCTA={{ label: 'Request Export Details', href: '/contact' }}
                secondaryCTA={{ label: 'View Compliance Framework', href: '/compliance' }}
                background="dark"
            />
        </>
    );
}
