/**
 * SpecTable — structured product specification table.
 * Visually heavier: larger row padding, stronger first-column treatment,
 * tighter caption, more prominent header row.
 */
export default function SpecTable({ headers = [], rows = [], caption, label, heading, compact = false }) {
    return (
        <section className={`bg-white border-b border-border ${compact ? '' : ''}`}>
            <div className={`${compact ? 'px-4 py-4' : 'page-container section-pad'}`}>
                {(label || heading) && (
                    <div className="mb-10">
                        {label && <p className="section-label">{label}</p>}
                        {heading && <h2 className="text-2xl md:text-3xl font-bold">{heading}</h2>}
                    </div>
                )}

                <div className="overflow-x-auto">
                    {caption && (
                        <p className="text-xs text-muted mb-3">{caption}</p>
                    )}
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="bg-brand text-white">
                                {headers.map((h, i) => (
                                    <th
                                        key={i}
                                        className="text-left px-4 py-4 font-semibold text-xs tracking-widest uppercase border-r border-brand-light last:border-r-0"
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {rows.map((row, ri) => (
                                <tr
                                    key={ri}
                                    className={`group ${ri % 2 === 0 ? 'bg-white' : 'bg-surface'}`}
                                >
                                    {row.map((cell, ci) => (
                                        <td
                                            key={ci}
                                            className={`px-4 py-4 border-r border-border last:border-r-0 ${ci === 0
                                                    ? 'font-semibold text-brand text-sm'
                                                    : 'text-muted text-sm'
                                                }`}
                                        >
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {rows.length === 0 && (
                    <p className="text-muted text-sm mt-4 italic">
                        Detailed specifications available upon request.
                    </p>
                )}
            </div>
        </section>
    );
}
