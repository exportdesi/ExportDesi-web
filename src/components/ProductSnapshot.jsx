/**
 * ProductSnapshot — Quick product info cards for product pages
 * Props:
 *   items  Array of { label: string, value: string, sub?: string }
 */
export default function ProductSnapshot({ items, className = '' }) {
    return (
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
            {items.map((item) => (
                <div
                    key={item.label}
                    className="bg-surface p-5 border border-border"
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">
                        {item.label}
                    </p>
                    <p className="text-lg font-bold text-brand mb-1">
                        {item.value}
                    </p>
                    {item.sub && (
                        <p className="text-xs text-muted leading-relaxed">
                            {item.sub}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}
