import { Link } from 'react-router-dom';

/**
 * HeroSection — institutional page hero.
 * Props:
 *   label         string  — small eyebrow label (optional)
 *   title         string  — H1 headline
 *   subtitle      string  — supporting paragraph
 *   primaryCTA    { label, href }  — primary button
 *   secondaryCTA  { label, href }  — secondary button (optional)
 *   background    'white' | 'surface'  — default 'white'
 *   imageUrl      string  — optional right-side product image
 */
export default function HeroSection({
    label,
    title,
    subtitle,
    primaryCTA,
    secondaryCTA,
    background = 'white',
    imageUrl,
}) {
    const bg = background === 'surface' ? 'bg-surface' : 'bg-white';

    return (
        <section className={`${bg} border-b border-border overflow-hidden relative ${imageUrl ? 'min-h-[420px] lg:min-h-[520px]' : ''}`}>
            {/* Hero image — absolutely positioned to fill the right half, edge-to-edge */}
            {imageUrl && (
                <div
                    className="absolute top-0 bottom-0 right-0 hidden lg:flex items-center justify-end"
                    style={{ width: '52%' }}
                    aria-hidden="true"
                >
                    <img
                        src={imageUrl}
                        alt=""
                        className="w-full h-full object-cover object-right select-none"
                        loading="eager"
                    />
                </div>
            )}

            <div className="page-container section-pad relative z-10">
                <div className={imageUrl ? 'max-w-[50%]' : 'max-w-2xl'}>
                    {label && <p className="section-label">{label}</p>}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-6">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-xl">
                            {subtitle}
                        </p>
                    )}
                    {(primaryCTA || secondaryCTA) && (
                        <div className="flex flex-col sm:flex-row gap-3">
                            {primaryCTA && (
                                <CTAButton href={primaryCTA.href} variant="primary">
                                    {primaryCTA.label}
                                </CTAButton>
                            )}
                            {secondaryCTA && (
                                <CTAButton href={secondaryCTA.href} variant="secondary">
                                    {secondaryCTA.label}
                                </CTAButton>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

function CTAButton({ href, variant, children }) {
    const cls = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
    const isExternal = href?.startsWith('http') || href?.startsWith('mailto') || href?.startsWith('tel');

    if (isExternal || !href) {
        return (
            <a href={href} className={cls}>
                {children}
            </a>
        );
    }
    return (
        <Link to={href} className={cls}>
            {children}
        </Link>
    );
}
