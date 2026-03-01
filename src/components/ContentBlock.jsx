/**
 * ContentBlock — constrained text block: eyebrow label + heading + paragraphs.
 * h2 is the primary section heading — bold and large.
 * h3 is a sub-heading — clearly smaller and lighter weight.
 */
export default function ContentBlock({
    label,
    heading,
    headingLevel = 'h2',
    paragraphs = [],
    maxWidth = true,
}) {
    const Tag = headingLevel;

    const headingClass = headingLevel === 'h2'
        ? 'font-extrabold mb-6 leading-tight'
        : headingLevel === 'h3'
            ? 'font-bold mb-4 leading-snug text-lg md:text-xl'
            : 'font-semibold mb-3 leading-snug';

    return (
        <div className={maxWidth ? 'max-w-3xl' : ''}>
            {label && <p className="section-label">{label}</p>}
            <Tag className={headingClass}>{heading}</Tag>
            {paragraphs.map((p, i) => (
                <p key={i} className="text-muted text-base leading-[1.85] mb-5 last:mb-0">
                    {p}
                </p>
            ))}
        </div>
    );
}
