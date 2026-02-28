import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';

export default function AboutPage() {
    return (
        <>
            <SEOMeta
                title="About Export Desi"
                description="Export Desi coordinates the Indian side of the export process for global buyers: processor qualification, documentation, and shipment management from Gurgaon, Haryana."
            />

            <HeroSection
                label="About"
                title="Export Desi."
                subtitle="We coordinate the Indian side of the export process for international buyers sourcing food ingredients. Processor qualification, documentation preparation, pre-dispatch verification, and port coordination, managed from Gurgaon, Haryana."
                background="surface"
            />

            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="What We Are"
                            heading="An export management operation, not a trading house."
                            paragraphs={[
                                'We do not hold stock. We do not own processing facilities. We identify processors who can meet a buyer\'s specification, verify them against compliance and quality criteria, manage the full documentation cycle, and coordinate the shipment through to Bill of Lading issuance.',
                                'Buyers get processor-level pricing without having to manage multiple vendor relationships, chase documentation across time zones, or absorb the cost of building an in-country sourcing team.',
                            ]}
                        />
                        <ContentBlock
                            label="How We Operate"
                            heading="Processor relationships built on shipment history, not directories."
                            paragraphs={[
                                'Every processor in our active network has been through a pre-qualification: FSSAI and APEDA compliance check, facility review, sample assessment, and prior export documentation review. We do not source from processors we have not assessed.',
                                'Our operations are based in Gurgaon, Haryana. Processor relationships currently cover Bihar for Makhana and Gujarat for dehydrated ingredients. We do not expand categories without first establishing the same processor-level groundwork.',
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <p className="section-label mb-12">The Team</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
                        {[
                            {
                                name: 'Hemant',
                                role: 'Sourcing and Processor Relations',
                                note: 'Manages processor network identification, pre-qualification, and ongoing supply-side relationships.',
                            },
                            {
                                name: 'Nishant',
                                role: 'Risk and Operations',
                                note: 'Responsible for order execution, pre-dispatch verification, and documentation accuracy across every consignment.',
                            },
                            {
                                name: 'Sahil',
                                role: 'Business Development',
                                note: 'Handles buyer-side requirement qualification, feasibility assessment, and commercial terms. First point of contact for new enquiries.',
                            },
                        ].map((member) => (
                            <div key={member.name} className="bg-surface p-8">
                                <div className="w-2 h-2 bg-brand mb-5" />
                                <p className="text-base font-bold mb-1">{member.name}</p>
                                <p className="text-xs font-semibold text-muted mb-4 uppercase tracking-wide">{member.role}</p>
                                <p className="text-sm text-muted leading-relaxed">{member.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <ContentBlock
                        label="Location"
                        heading="Gurgaon, Haryana. UTC+5:30."
                        paragraphs={[
                            'We operate on Indian Standard Time. New enquiries are responded to within 48 business hours. If the requirement falls outside our current scope, we confirm that at first response.',
                        ]}
                    />
                    <div className="mt-8 space-y-1.5 text-sm text-muted">
                        <p>
                            <a href="mailto:contact@exportdesi.com" className="hover:text-brand transition-colors">
                                contact@exportdesi.com
                            </a>
                        </p>
                        <p>
                            <a href="tel:+919289790283" className="hover:text-brand transition-colors">
                                +91 928 979 0283
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <CTASection
                heading="Want to discuss a sourcing requirement?"
                subtext="Share your product specification, destination, and volume. We assess feasibility and respond within 48 business hours."
                primaryCTA={{ label: 'Contact Us', href: '/contact' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                background="dark"
            />
        </>
    );
}
