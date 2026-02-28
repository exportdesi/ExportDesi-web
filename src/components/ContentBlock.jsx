/**
 * ContentBlock — a constrained text block: heading + one or more paragraphs.
 * Props:
 *   heading       string
 *   headingLevel  'h2' | 'h3'  — default 'h2'
 *   paragraphs    string[]
 *   maxWidth      boolean — constrain text width (default true)
 *   label         string  — optional eyebrow label above heading
 */
export default function ContentBlock({
    label,
    heading,
    headingLevel = 'h2',
    paragraphs = [],
    maxWidth = true,
}) {
    const Tag = headingLevel;
    const sizeClass = headingLevel === 'h2'
        ? 'text-2xl md:text-3xl lg:text-4xl'
        : 'text-xl md:text-2xl';

    return (
        <div className={maxWidth ? 'max-w-3xl' : ''}>
            {label && <p className="section-label">{label}</p>}
            <Tag className={`${sizeClass} font-bold mb-5`}>{heading}</Tag>
            {paragraphs.map((p, i) => (
                <p key={i} className="text-muted text-base md:text-lg mb-4 last:mb-0">
                    {p}
                </p>
            ))}
        </div>
    );
}
