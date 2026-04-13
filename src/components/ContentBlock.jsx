import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * ContentBlock — constrained text block: eyebrow label + heading + paragraphs.
 * h2 is the primary section heading — bold and large.
 * h3 is a sub-heading — clearly smaller and lighter weight.
 *
 * Props:
 *   collapsible  boolean — on mobile, collapse content with "Read more" toggle (default false)
 *   defaultOpen  boolean — start expanded (default false)
 */
export default function ContentBlock({
    label,
    heading,
    headingLevel = 'h2',
    paragraphs = [],
    maxWidth = true,
    collapsible = false,
    defaultOpen = false,
}) {
    const Tag = headingLevel;
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const headingClass = headingLevel === 'h2'
        ? 'font-extrabold mb-6 leading-tight'
        : headingLevel === 'h3'
            ? 'font-bold mb-4 leading-snug text-lg md:text-xl'
            : 'font-semibold mb-3 leading-snug';

    if (collapsible) {
        return (
            <div className={maxWidth ? 'max-w-3xl' : ''}>
                {label && <p className="section-label">{label}</p>}
                <div className="flex items-center justify-between gap-4">
                    <Tag className={headingClass}>{heading}</Tag>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden flex items-center gap-2 text-xs font-semibold text-brand uppercase tracking-wide px-3 py-2 border border-brand rounded-lg active:bg-brand active:text-white transition-all"
                    >
                        {isOpen ? 'Hide' : 'Read More'}
                        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden lg:h-auto lg:opacity-100"
                >
                    <div className={`pt-4 ${isOpen ? 'block' : 'hidden lg:block'}`}>
                        {paragraphs.map((p, i) => (
                            <p key={i} className="text-muted text-base leading-[1.85] mb-5 last:mb-0">
                                {p}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>
        );
    }

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
