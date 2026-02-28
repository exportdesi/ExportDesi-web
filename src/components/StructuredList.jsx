/**
 * StructuredList — formal, minimal bulleted or numbered list.
 * Visual weight: heavier item text, larger spacing, sharper bullet/number.
 */
export default function StructuredList({ items = [], ordered = false, heading }) {
    const Tag = ordered ? 'ol' : 'ul';

    return (
        <div>
            {heading && <h3 className="text-lg font-semibold mb-4">{heading}</h3>}
            <Tag className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                        <span className="mt-[3px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand" />
                        <span className="text-sm font-medium text-brand leading-relaxed">{item}</span>
                    </li>
                ))}
            </Tag>
        </div>
    );
}
