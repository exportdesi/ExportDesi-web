/**
 * ProcessSteps — numbered steps component for export execution model.
 * Props:
 *   steps  Array<{ number, title, description }>
 *   label  string  — optional eyebrow label
 *   heading string — optional section heading
 */
export default function ProcessSteps({ steps = [], label, heading }) {
    return (
        <section className="bg-white border-b border-border">
            <div className="page-container section-pad">
                {(label || heading) && (
                    <div className="mb-14">
                        {label && <p className="section-label">{label}</p>}
                        {heading && (
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl">
                                {heading}
                            </h2>
                        )}
                    </div>
                )}

                <div className="space-y-0 divide-y divide-border">
                    {steps.map((step, i) => (
                        <div key={i} className="grid grid-cols-[4rem_1fr] md:grid-cols-[6rem_1fr] gap-6 md:gap-10 py-10 first:pt-0 last:pb-0">
                            {/* Step Number */}
                            <div className="pt-1">
                                <span className="text-4xl md:text-5xl font-black text-border-strong tabular-nums leading-none">
                                    {String(step.number || i + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Step Content */}
                            <div>
                                <h3 className="text-lg md:text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-muted text-base leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
