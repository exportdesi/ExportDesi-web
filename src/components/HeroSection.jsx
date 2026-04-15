import { Link } from 'react-router-dom';
import ScrollIndicator from './ScrollIndicator';
import { useEffect, useState } from 'react';

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
    imageWidth = 600,
    imageHeight = 400,
    imageSize = '50%',
    imagePosition = 'right center',
}) {
    const bg = background === 'surface' ? 'bg-surface' : 'bg-white';

    // Responsive image size: 85% for 1024 < width < 1440, otherwise use imageSize prop
    const [resolvedImageSize, setResolvedImageSize] = useState(imageSize);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width > 1024 && width < 1440) {
                setResolvedImageSize('65%');
            } else {
                setResolvedImageSize(imageSize);
            }
        };

        // Set initial value
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [imageSize]);

    return (
        <section
            className={`${bg} border-b border-border overflow-hidden relative ${imageUrl ? 'min-h-[380px] lg:min-h-[420px]' : ''}`}
            style={imageUrl ? {
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: imagePosition,
                backgroundSize: resolvedImageSize,
                backgroundRepeat: 'no-repeat',
            } : {}}
        >
            {/* Mobile background overlay to ensure text readability */}
            {imageUrl && (
                <div className="absolute inset-0 bg-white/80 lg:bg-transparent z-0" />
            )}
            <div className="page-container section-pad relative z-10">
                <div className={imageUrl ? 'max-w-full lg:max-w-[48%]' : 'max-w-2xl'}>
                    {label && <p className="section-label">{label}</p>}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-6">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-base md:text-lg text-muted leading-relaxed mb-8 max-w-xl">
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
            <ScrollIndicator />
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
