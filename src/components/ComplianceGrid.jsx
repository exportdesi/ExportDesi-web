/**
 * ComplianceGrid — grid of compliance/certification items.
 * Props:
 *   items    Array<{ label, sublabel? }>
 *   label    string  — optional eyebrow label
 *   heading  string  — optional section heading
 *   columns  2 | 3 | 4  — grid columns (default 3)
 */
export default function ComplianceGrid({ items = [], label, heading, columns = 3 }) {
    const colMap = {
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    };

    return (
        <section className="bg-surface border-b border-border">
            <div className="page-container section-pad">
                {(label || heading) && (
                    <div className="mb-12">
                        {label && <p className="section-label">{label}</p>}
                        {heading && (
                            <h2 className="text-2xl md:text-3xl font-bold max-w-2xl">{heading}</h2>
                        )}
                    </div>
                )}

                <div className={`grid ${colMap[columns] || colMap[3]} gap-px bg-border`}>
                    {items.map((item, i) => (
                        <div key={i} className="bg-surface p-6 md:p-8">
                            {/* Marker */}
                            <div className="w-2 h-2 bg-brand mb-4" />
                            <p className="text-sm font-semibold text-brand tracking-wide">{item.label}</p>
                            {item.sublabel && (
                                <p className="text-xs text-muted mt-1">{item.sublabel}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
