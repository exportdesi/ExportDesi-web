import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * FAQAccordion — crawlable collapsible FAQ section.
 * Answers are always rendered in DOM (for SEO + AI extraction).
 * Includes FAQPage JSON-LD schema for rich results.
 */
export default function FAQAccordion({ items = [], label, heading }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <section className="bg-surface border-b border-border">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <div className="page-container section-pad">
                {(label || heading) && (
                    <div className="mb-12">
                        {label && <p className="section-label">{label}</p>}
                        {heading && <h2 className="text-2xl md:text-3xl font-bold max-w-2xl">{heading}</h2>}
                    </div>
                )}

                <div className="max-w-3xl divide-y divide-border border-t border-border">
                    {items.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i}>
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full flex justify-between items-start gap-6 py-5 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-semibold text-sm md:text-base text-brand">
                                        {item.question}
                                    </span>
                                    <span className="flex-shrink-0 mt-0.5 text-muted">
                                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
                                    aria-hidden={!isOpen}
                                >
                                    <p className="text-muted text-sm md:text-base leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function PlusIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

function MinusIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}
