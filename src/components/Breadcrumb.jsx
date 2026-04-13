import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ROUTE_LABELS = {
    'industries': 'Industries',
    'food-ingredients': 'Food & Ingredients',
    'makhana': 'Makhana',
    'turmeric': 'Turmeric',
    'dehydrated-ingredients': 'Dehydrated Ingredients',
    'how-we-work': 'How We Work',
    'compliance': 'Compliance',
    'about': 'About',
    'contact': 'Contact',
};

const BASE_URL = 'https://exportdesi.com';

export default function Breadcrumb() {
    const { pathname } = useLocation();

    // Don't render on homepage
    if (pathname === '/') return null;

    const segments = pathname.split('/').filter(Boolean);

    const crumbs = [
        { label: 'Home', href: '/', clickable: true },
        ...segments.map((seg, i) => ({
            label: ROUTE_LABELS[seg] || seg,
            href: '/' + segments.slice(0, i + 1).join('/'),
            clickable: seg !== 'industries', // Don't link to industries parent page
        })),
    ];

    // JSON-LD BreadcrumbList structured data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: crumb.label,
            item: `${BASE_URL}${crumb.href}`,
        })),
    };

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            <nav
                aria-label="Breadcrumb"
                className="bg-white border-b border-border"
            >
                <div className="page-container py-3">
                    <ol className="flex items-center flex-wrap gap-1 text-xs text-muted">
                        {crumbs.map((crumb, i) => {
                            const isLast = i === crumbs.length - 1;
                            return (
                                <li key={crumb.href} className="flex items-center gap-1">
                                    {isLast || !crumb.clickable ? (
                                        <span className={isLast ? 'font-medium text-brand' : 'text-muted'} aria-current={isLast ? 'page' : undefined}>
                                            {crumb.label}
                                        </span>
                                    ) : (
                                        <Link
                                            to={crumb.href}
                                            className="hover:text-brand transition-colors"
                                        >
                                            {crumb.label}
                                        </Link>
                                    )}
                                    {!isLast && (
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                            <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </nav>
        </>
    );
}
