import { Link } from 'react-router-dom';

/**
 * CTASection — full-width call-to-action bar.
 * Props:
 *   heading       string
 *   subtext       string (optional)
 *   primaryCTA    { label, href }
 *   secondaryCTA  { label, href }  (optional)
 *   background    'white' | 'surface' | 'dark'  — default 'surface'
 */
export default function CTASection({
    heading,
    subtext,
    primaryCTA,
    secondaryCTA,
    background = 'surface',
}) {
    const bgMap = {
        white: 'bg-white border-t border-border',
        surface: 'bg-surface border-t border-b border-border',
        dark: 'bg-brand text-white',
    };
    const textColor = background === 'dark' ? 'text-white' : 'text-brand';
    const subtextColor = background === 'dark' ? 'text-gray-400' : 'text-muted';

    return (
        <section className={`${bgMap[background]} ${background === 'dark' ? 'bg-dark-gradient' : background === 'surface' ? 'bg-surface-gradient' : 'bg-hero-gradient'}`}>
            <div className="page-container section-pad">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                    <div className="max-w-xl">
                        <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${textColor}`}>{heading}</h2>
                        {subtext && <p className={`text-base ${subtextColor}`}>{subtext}</p>}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                        {primaryCTA && (
                            <NavLink href={primaryCTA.href} variant={background === 'dark' ? 'white' : 'primary'}>
                                {primaryCTA.label}
                            </NavLink>
                        )}
                        {secondaryCTA && (
                            <NavLink href={secondaryCTA.href} variant={background === 'dark' ? 'outline-white' : 'secondary'}>
                                {secondaryCTA.label}
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function NavLink({ href, variant, children }) {
    const variantMap = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        white: 'btn-primary bg-white text-brand hover:bg-gray-100 border-0',
        'outline-white': 'btn-secondary border-white text-white hover:bg-white hover:text-brand',
    };
    const cls = variantMap[variant] || 'btn-primary';
    const isExternal = href?.startsWith('http') || href?.startsWith('mailto');
    if (isExternal) return <a href={href} className={cls}>{children}</a>;
    return <Link to={href} className={cls}>{children}</Link>;
}
