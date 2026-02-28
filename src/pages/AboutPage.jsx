import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';
import ContentBlock from '../components/ContentBlock';
import CTASection from '../components/CTASection';

export default function AboutPage() {
    return (
        <>
            <SEOMeta
                title="About Export Desi"
                description="Export Desi is a structured export execution partner for global buyers sourcing Indian food ingredients. Based in Gurgaon, Haryana, India."
            />

            <HeroSection
                label="About"
                title="Export Desi."
                subtitle="A structured export execution partner for global buyers sourcing Indian food ingredients and specialty produce."
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
                                'Export Desi operates as a single-point execution partner for buyers who want to source from India without managing the complexity of the Indian export environment directly.',
                                'We are not a manufacturer. We are not a warehousing operation. We are the accountable link between verified Indian processors and international buyers — managing quality verification, documentation, and logistics coordination.',
                            ]}
                        />
                        <ContentBlock
                            label="The Operating Model"
                            heading="Ground team in India. Global delivery accountability."
                            paragraphs={[
                                'Our operating model is built on processor-level relationships, not catalogue promises. Every product we supply comes from a processor we have assessed and an order we have personally managed through the full documentation and dispatch cycle.',
                                'We operate from Gurgaon, Haryana, with sourcing relationships in Bihar, Rajasthan, and Gujarat covering our active product categories.',
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
                            { name: 'Hemant', role: 'Sourcing & Processor Relations', note: 'Manages processor network identification, qualification, and ongoing supply relationships.' },
                            { name: 'Nishant', role: 'Risk & Operations', note: 'Oversees order execution, pre-dispatch verification, and documentation compliance.' },
                            { name: 'Sahil', role: 'Business Development', note: 'Manages buyer relationships, requirement qualification, and commercial terms.' },
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
                        heading="Based in Gurgaon, Haryana, India."
                        paragraphs={[
                            'Our operations office is located in Gurgaon, Haryana. Processor relationships span Bihar (Makhana), Gujarat (dehydrated ingredients), and Rajasthan.',
                            'We operate on Indian Standard Time (UTC+5:30). Standard response time for new enquiries is 24–48 business hours.',
                        ]}
                    />
                    <div className="mt-8 space-y-1 text-sm text-muted">
                        <p>contact@exportdesi.com</p>
                        <p>+91 928 979 0283</p>
                    </div>
                </div>
            </section>

            <CTASection
                heading="Discussing a sourcing requirement?"
                subtext="Start by sharing your product, destination market, and volume. We confirm feasibility before accepting any enquiry."
                primaryCTA={{ label: 'Contact Us', href: '/contact' }}
                secondaryCTA={{ label: 'How We Work', href: '/how-we-work' }}
                background="dark"
            />
        </>
    );
}
