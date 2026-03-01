/**
 * ImageGrid — A clean, structural grid for displaying product photography,
 * grade comparisons, and packaging formats.
 * 
 * Props:
 *   label    (string)  — optional eyebrow label
 *   heading  (string)  — optional section heading
 *   images   (Array)   — [{ src, alt, caption }]
 *   columns  (2 | 3 | 4) — layout columns, defaults to responsive grid based on image count
 */
export default function ImageGrid({ label, heading, images = [], columns }) {
    // Auto-determine columns if not provided
    const colClass = columns === 2 ? 'md:grid-cols-2' : columns === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-3';

    return (
        <section className="bg-white border-b border-border">
            <div className="page-container section-pad pt-12 md:pt-16">
                {(label || heading) && (
                    <div className="mb-10">
                        {label && <p className="section-label">{label}</p>}
                        {heading && <h2 className="text-2xl md:text-3xl font-extrabold max-w-2xl">{heading}</h2>}
                    </div>
                )}

                <div className={`grid gap-6 ${colClass}`}>
                    {images.map((img, i) => (
                        <div key={i} className="flex flex-col group">
                            <div className="bg-surface border border-border aspect-[4/3] overflow-hidden mb-4 relative">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                            </div>
                            <p className="text-sm font-semibold text-brand tracking-wide mb-1">
                                {img.caption}
                            </p>
                            {img.subcaption && (
                                <p className="text-xs text-muted leading-relaxed">
                                    {img.subcaption}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
