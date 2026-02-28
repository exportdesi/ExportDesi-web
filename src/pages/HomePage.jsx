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
                description="Export Desi manages processor qualification, pre-dispatch verification, documentation, and port coordination for international buyers sourcing Indian food ingredients."
            />

            <HeroSection
                label="Export Execution"
                title="Structured Export Execution from India."
                subtitle="We handle processor qualification, pre-dispatch verification, documentation, and port coordination for international buyers sourcing Indian food ingredients. You deal with one contact. The shipment arrives with a complete, accurate document set."
                primaryCTA={{ label: 'Submit Your Requirement', href: '/contact' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
            />

            {/* Trust bar */}
            <div className="bg-white border-b border-border">
                <div className="page-container py-4 flex flex-wrap gap-6 items-center text-xs font-semibold text-muted tracking-wide">
                    <span>IEC Registered</span>
                    <span className="text-border">|</span>
                    <span>FSSAI Licensed</span>
                    <span className="text-border">|</span>
                    <span>APEDA Registered</span>
                    <span className="text-border">|</span>
                    <span>Spice Board Registered</span>
                </div>
            </div>

            {/* Definition block */}
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <div className="max-w-2xl">
                        <p className="section-label">What We Are</p>
                        <p className="text-base text-muted leading-relaxed">
                            Export Desi is a merchant export management operation based in Gurgaon, India. We structure international B2B supply of Indian food ingredients across defined product categories: verifying processors, managing documentation, and coordinating shipments from purchase order through to Bill of Lading.
                        </p>
                    </div>
                </div>
            </section>

            {/* Execution Model */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="The Model"
                            heading="We do not manufacture. We qualify processors and manage the shipment."
                            paragraphs={[
                                'Export Desi works directly with processing units across active product categories. Before any order is placed, processors are assessed on four criteria: current FSSAI compliance status, prior export documentation track record, mechanical grading capability, and moisture-controlled storage. Processors who do not meet all four are not used.',
                                'HS classification is verified before the Proforma Invoice is issued. Packing lists are matched line-by-line against invoice values before the container is released. Phytosanitary certificate validity is checked against the confirmed sailing date.',
                            ]}
                        />
                        <div className="space-y-6 pt-2 md:pt-14">
                            <StructuredList
                                items={[
                                    'Processor identification and pre-qualification against buyer grade specification',
                                    'Pre-dispatch lot inspection: size, moisture, purity, and packaging conformance',
                                    'Documentation preparation: commercial invoice, packing list, CoO, phytosanitary certificate, lab reports',
                                    'Port coordination: stuffing schedule, container seal, and BL issuance',
                                    'Full document set dispatched to buyer electronically on the day of departure',
                                ]}
                                ordered
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Food & Ingredients */}
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <div className="mb-14">
                        <p className="section-label">Current Sourcing Scope</p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl">
                            Food and Ingredients
                        </h2>
                        <p className="text-muted mt-4 max-w-xl">
                            We source within categories where we have active processor relationships, prior shipment history, and a documented compliance pathway for the product. We do not list products we have not shipped.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                        <div className="bg-surface p-8">
                            <p className="section-label">Fox Nuts</p>
                            <h3 className="text-xl font-bold mb-3">Makhana</h3>
                            <p className="text-muted text-sm mb-6">
                                Four size grades from 12mm to 18mm+, sourced from processing units in Bihar's Mithila cluster. Each shipment includes Certificate of Origin, phytosanitary certificate, grade-specific third-party lab report, and packing list.
                            </p>
                            <Link
                                to="/industries/food-ingredients/makhana"
                                className="text-sm font-semibold text-brand border-b border-brand pb-0.5 hover:opacity-70 transition-opacity"
                            >
                                View Grades and Specifications
                            </Link>
                        </div>

                        <div className="bg-surface p-8">
                            <p className="section-label">Dehydrated Ingredients</p>
                            <h3 className="text-xl font-bold mb-3">Dehydrated and Dried Ingredients</h3>
                            <p className="text-muted text-sm mb-6">
                                Onion and garlic in flakes, minced, chopped, granule, and powder forms. Banana powder. Moringa leaf powder. Process-grade and food-grade supply available. Third-party lab reports covering moisture, pesticide residue, and microbiology are included per lot.
                            </p>
                            <Link
                                to="/industries/food-ingredients/dehydrated-ingredients"
                                className="text-sm font-semibold text-brand border-b border-brand pb-0.5 hover:opacity-70 transition-opacity"
                            >
                                View Product Range
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                heading="Have a supply requirement?"
                subtext="Send us the product, grade or specification, destination market, and target volume. We assess processor availability and respond with indicative pricing within 48 business hours."
                primaryCTA={{ label: 'Submit Your Requirement', href: '/contact' }}
                secondaryCTA={{ label: 'View Compliance Framework', href: '/compliance' }}
                background="dark"
            />
        </>
    );
}
