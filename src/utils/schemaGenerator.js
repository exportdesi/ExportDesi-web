/**
 * Schema.org JSON-LD Generator for Export Desi
 * Ensures consistent structured data across all pages.
 */

const BASE_URL = 'https://exportdesi.com';
const ORG_ID = `${BASE_URL}/#organization`;

export const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: 'Export Desi',
    url: BASE_URL,
    logo: {
        '@type': 'ImageObject',
        'url': `${BASE_URL}/ExportDesi-logo.png`,
    },
    image: `${BASE_URL}/home-hero.png`,
    description: 'Merchant export management for Indian food ingredients - Makhana, Dehydrated Onion, Garlic, Moringa, and Eco-friendly packaging.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Gurgaon',
        addressRegion: 'Haryana',
        postalCode: '122001',
        addressCountry: 'IN',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '28.4595',
        longitude: '77.0266',
    },
    telephone: '+91-9289790283',
    email: 'contact@exportdesi.com',
    priceRange: '$$',
    foundingDate: '2013',
    founder: {
        '@type': 'Person',
        name: 'Rajiv Dudeja',
        jobTitle: 'Founder',
        url: 'https://in.linkedin.com/in/rajeev-dudeja',
    },
    sameAs: [
        'https://in.linkedin.com/company/exportdesi',
    ],
    areaServed: 'Worldwide',
});

export const getWebSiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Export Desi',
    publisher: { '@id': ORG_ID },
    potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/contact?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
    },
});

export const getBreadcrumbSchema = (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url ? (item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`) : undefined,
    })),
});

export const getProductSchema = (product) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image ? (product.image.startsWith('http') ? product.image : `${BASE_URL}${product.image}`) : undefined,
    brand: {
        '@type': 'Brand',
        name: 'Export Desi',
    },
    category: product.category,
    countryOfOrigin: 'IN',
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        seller: { '@id': ORG_ID },
    },
});
