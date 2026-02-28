import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
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
    email: 'contact@exportdesi.com',
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
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(ORG_SCHEMA)}
                </script>
            </Helmet>
            <PreviewNoIndex />
            <ScrollToTop />
            <Navigation />
            <Breadcrumb />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
