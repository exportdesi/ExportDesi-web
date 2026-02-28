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

            {/* Team */}
            <section className="bg-surface border-b border-border">
                <div className="page-container section-pad">
                    <p className="section-label mb-12">The Team</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
                        {[
                            {
                                name: 'Hemant Kumar',
                                role: 'Sourcing and Processor Relations',
                                note: 'Manages processor network identification, pre-qualification, and ongoing supply-side relationships.',
                                linkedin: null, // Add LinkedIn URL here when available
                            },
                            {
                                name: 'Nishant Chaudhary',
                                role: 'Risk and Operations',
                                note: 'Responsible for order execution, pre-dispatch verification, and documentation accuracy across every consignment.',
                                linkedin: null,
                            },
                            {
                                name: 'Sahil Dudeja',
                                role: 'Business Development',
                                note: 'Handles buyer-side requirement qualification, feasibility assessment, and commercial terms. First point of contact for new enquiries.',
                                linkedin: null,
                            },
                        ].map((member) => (
                            <div key={member.name} className="bg-surface p-8">
                                <div className="w-2 h-2 bg-brand mb-5" />
                                <div className="flex items-start justify-between gap-3 mb-1">
                                    <p className="text-base font-bold">{member.name}</p>
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${member.name} on LinkedIn`}
                                            className="text-muted hover:text-brand transition-colors mt-0.5 flex-shrink-0"
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                <p className="text-xs font-semibold text-muted mb-4 uppercase tracking-wide">{member.role}</p>
                                <p className="text-sm text-muted leading-relaxed">{member.note}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-muted mt-6">
                        LinkedIn profiles will be linked here shortly.
                    </p>
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
                primaryCTA={{ label: 'Submit Your Requirement', href: '/contact' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                background="dark"
            />
        </>
    );
}
