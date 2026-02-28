import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://exportdesi.com';

export default function SEOMeta({ title, description }) {
    const siteName = 'Export Desi';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const { pathname } = useLocation();
    const canonical = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            <link rel="canonical" href={canonical} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteName} />
        </Helmet>
    );
}
