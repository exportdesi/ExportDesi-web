import { useState } from 'react';

/**
 * FAQAccordion — collapsible FAQ section.
 * Props:
 *   items    Array<{ question, answer }>
 *   label    string  — optional eyebrow label
 *   heading  string  — optional section heading
 */
export default function FAQAccordion({ items = [], label, heading }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="bg-white border-b border-border">
            <div className="page-container section-pad">
                {(label || heading) && (
                    <div className="mb-12">
                        {label && <p className="section-label">{label}</p>}
                        {heading && <h2 className="text-2xl md:text-3xl font-bold max-w-2xl">{heading}</h2>}
                    </div>
                )}

                <div className="max-w-3xl divide-y divide-border border-t border-border">
                    {items.map((item, i) => (
                        <div key={i}>
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex justify-between items-start gap-6 py-5 text-left"
                                aria-expanded={openIndex === i}
                            >
                                <span className="font-semibold text-sm md:text-base text-brand">
                                    {item.question}
                                </span>
                                <span className="flex-shrink-0 mt-0.5 text-muted">
                                    {openIndex === i ? (
                                        <MinusIcon />
                                    ) : (
                                        <PlusIcon />
                                    )}
                                </span>
                            </button>
                            {openIndex === i && (
                                <div className="pb-5">
                                    <p className="text-muted text-sm md:text-base leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
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
