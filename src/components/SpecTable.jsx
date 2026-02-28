/**
 * SpecTable — structured product specification table.
 * Props:
 *   headers  string[]     — table column headers
 *   rows     string[][]   — 2D array of row data
 *   caption  string       — optional table caption
 *   label    string       — optional eyebrow label
 *   heading  string       — optional section heading
 */
export default function SpecTable({ headers = [], rows = [], caption, label, heading }) {
    return (
        <section className="bg-white border-b border-border">
            <div className="page-container section-pad">
                {(label || heading) && (
                    <div className="mb-10">
                        {label && <p className="section-label">{label}</p>}
                        {heading && <h2 className="text-2xl md:text-3xl font-bold">{heading}</h2>}
                    </div>
                )}

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm border border-border">
                        {caption && (
                            <caption className="text-left text-xs text-muted mb-3 caption-top">
                                {caption}
                            </caption>
                        )}
                        <thead>
                            <tr className="bg-brand text-white">
                                {headers.map((h, i) => (
                                    <th
                                        key={i}
                                        className="text-left px-5 py-3.5 font-semibold text-xs tracking-wide uppercase border-r border-brand-light last:border-r-0"
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, ri) => (
                                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-surface'}>
                                    {row.map((cell, ci) => (
                                        <td
                                            key={ci}
                                            className={`px-5 py-3.5 border-r border-border last:border-r-0 border-t border-border ${ci === 0 ? 'font-medium text-brand' : 'text-muted'}`}
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
