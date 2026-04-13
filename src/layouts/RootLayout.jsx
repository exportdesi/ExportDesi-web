import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import ScrollToTop from '../components/ScrollToTop';

const ORG_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Export Desi',
    legalName: 'Export Desi',
    url: 'https://exportdesi.com',
    logo: 'https://exportdesi.com/ExportDesi-logo.png',
    email: 'inquiry@exportdesi.com',
    telephone: '+919289790283',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Gurgaon',
        addressRegion: 'Haryana',
        addressCountry: 'IN',
    },
    sameAs: [],
};

function PreviewNoIndex() {
    const isPreview = typeof window !== 'undefined' &&
        window.location.hostname.includes('vercel.app');
    if (!isPreview) return null;
    return (
        <Helmet>
            <meta name="robots" content="noindex, nofollow" />
        </Helmet>
    );
}

/**
 * RootLayout — wraps every page with Navigation, Breadcrumb, and Footer.
 */
export default function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-brand antialiased">
            {/* Skip Link for keyboard users */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-brand px-4 py-2 z-[60] shadow-md rounded font-semibold"
            >
                Skip to main content
            </a>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(ORG_SCHEMA)}
                </script>
            </Helmet>
            <PreviewNoIndex />
            <ScrollToTop />
            <Navigation />
            <Breadcrumb />
            <main className="flex-1" id="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
