/**
 * ComplianceGrid — grid of compliance/certification items.
 * Visually heavier: left accent border, larger padding, stronger label weight.
 */
export default function ComplianceGrid({ items = [], label, heading, columns = 3 }) {
    const colMap = {
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    };

    return (
        <section className="bg-white border-b border-border">
            <div className="page-container section-pad">
                {(label || heading) && (
                    <div className="mb-12">
                        {label && <p className="section-label">{label}</p>}
                        {heading && (
                            <h2 className="text-2xl md:text-3xl font-bold max-w-2xl">{heading}</h2>
                        )}
                    </div>
                )}

                <div className={`grid ${colMap[columns] || colMap[3]} gap-4`}>
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="border border-border bg-surface border-l-4 border-l-brand p-6 md:p-7"
                        >
                            <p className="text-sm font-bold text-brand tracking-wide leading-snug mb-2">
                                {item.label}
                            </p>
                            {item.sublabel && (
                                <p className="text-xs text-muted leading-relaxed">{item.sublabel}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
