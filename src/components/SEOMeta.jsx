import { Helmet } from 'react-helmet-async';

/**
 * SEOMeta — sets per-page <title> and <meta description>.
 * Wrap every page component with this at the top.
 */
export default function SEOMeta({ title, description }) {
    const siteName = 'Export Desi';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
        </Helmet>
    );
}
