import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';

export default function AboutPage() {
    return (
        <>
            <SEOMeta
                title="About Export Desi"
                description="Export Desi is a structured export execution partner for global buyers sourcing Indian food ingredients. Operations in Gurgaon, Haryana. Processor relationships in Bihar, Gujarat, and Rajasthan."
            />

            <HeroSection
                label="About"
                title="Export Desi."
                subtitle="An export execution partner for global buyers sourcing Indian food ingredients. We manage the supply chain between verified Indian processors and international buyers."
                background="surface"
            />

            {/* What we are */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <ContentBlock
                            label="What We Are"
                            heading="An execution partner, not a trading house."
                            paragraphs={[
                                'Export Desi coordinates the Indian side of the export process for buyers who want to source from India without building an in-country team. We identify and pre-qualify processors, manage quality verification, prepare and check documentation, and oversee shipping and port coordination.',
                                'We do not hold stock. We do not manufacture. We function as the accountable intermediary between processor and buyer — with a defined process and a clear service boundary.',
                            ]}
                        />
                        <ContentBlock
                            label="How We Operate"
                            heading="Processor relationships, not catalogue listings."
                            paragraphs={[
                                'Every product we supply is sourced from a processor we have directly assessed — against export compliance standing, facility hygiene, grading consistency, and capacity. We do not list products we cannot reliably supply.',
                                'Our operations are based in Gurgaon, Haryana. Active processor relationships span Bihar (Makhana), Gujarat (dehydrated ingredients), and Rajasthan. New categories are not added without the corresponding ground-level qualification work.',
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
                                name: 'Hemant',
                                role: 'Sourcing & Processor Relations',
                                note: 'Responsible for processor network identification, pre-qualification, and ongoing supply relationship management. Primary contact for processor-side questions.',
                            },
                            {
                                name: 'Nishant',
                                role: 'Risk & Operations',
                                note: 'Manages order execution, pre-dispatch verification, documentation review, and port coordination. Responsible for shipment integrity across each consignment.',
                            },
                            {
                                name: 'Sahil',
                                role: 'Business Development',
                                note: 'Handles buyer-side requirement qualification, enquiry assessment, and commercial terms. First point of contact for new supply discussions.',
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

            {/* Location */}
            <section className="bg-white border-b border-border">
                <div className="page-container section-pad">
                    <ContentBlock
                        label="Location"
                        heading="Operations based in Gurgaon, Haryana."
                        paragraphs={[
                            'Our office is in Gurgaon, Haryana (UTC+5:30). Processor relationships are maintained in Bihar, Gujarat, and Rajasthan across our active product categories.',
                            'New enquiries are responded to within 48 business hours. If the requirement falls outside our current scope, we confirm that at first response rather than after extended discussion.',
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
