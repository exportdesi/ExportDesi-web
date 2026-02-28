/**
 * StructuredList — a formal, minimal bulleted or numbered list.
 * Props:
 *   items    string[]   — list items
 *   ordered  boolean    — numbered list (default false = bulleted)
 *   heading  string     — optional heading above list
 */
export default function StructuredList({ items = [], ordered = false, heading }) {
    const Tag = ordered ? 'ol' : 'ul';

    return (
        <div>
            {heading && <h3 className="text-lg font-semibold mb-3">{heading}</h3>}
            <Tag className={`space-y-2.5 ${ordered ? 'list-none' : ''}`}>
                {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-muted">
                        <span className="mt-0.5 flex-shrink-0 text-brand font-semibold w-4 text-sm">
                            {ordered ? `${i + 1}.` : '—'}
                        </span>
                        <span>{item}</span>
                    </li>
                ))}
            </Tag>
        </div>
    );
}
