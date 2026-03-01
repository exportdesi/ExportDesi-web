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
 *   imageUrl      string  — optional right-side product image (very low opacity)
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
        <section className={`${bg} border-b border-border relative overflow-hidden`}>
            {/* Subtle right-side product image — low opacity documentary tone */}
            {imageUrl && (
                <div
                    className="absolute inset-y-0 right-0 w-2/5 hidden lg:block pointer-events-none"
                    aria-hidden="true"
                >
                    <img
                        src={imageUrl}
                        alt=""
                        className="h-full w-full object-cover opacity-[0.07] select-none"
                        loading="eager"
                    />
                    {/* Left gradient fade so image blends into text */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
                </div>
            )}

            <div className="page-container section-pad relative z-10">
                <div className="max-w-2xl">
                    {label && <p className="section-label">{label}</p>}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-6">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl">
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
