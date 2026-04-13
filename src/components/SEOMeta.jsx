import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://exportdesi.com';
const DEFAULT_IMAGE = '/og-image.jpg'; // 1200x630 recommended
const TWITTER_HANDLE = '@exportdesi'; // Update when you have a Twitter handle

export default function SEOMeta({ title, description, image, type = 'website', article }) {
    const siteName = 'Export Desi';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const { pathname } = useLocation();
    const canonical = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
    const ogImage = image || `${SITE_URL}${DEFAULT_IMAGE}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            {description && (
                <>
                    <meta name="description" content={description} />
                    <meta name="keywords" content="export from India, food ingredients, makhana, dehydrated onion, dehydrated garlic, moringa powder, banana powder, Indian spices, B2B export" />
                </>
            )}
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />
            {article?.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
            {article?.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            {TWITTER_HANDLE && <meta name="twitter:creator" content={TWITTER_HANDLE} />}
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:title" content={fullTitle} />
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={ogImage} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="author" content={siteName} />
        </Helmet>
    );
}
