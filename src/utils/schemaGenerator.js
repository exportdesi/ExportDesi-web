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
    image: `${BASE_URL}/new-hero-Export-Desi.webp`,
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
    foundingDate: '2024',
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
});

/**
 * ImageObject schema for hero/main images
 * Helps Google Images understand and index your key images
 */
export const getImageObjectSchema = (image) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': `${BASE_URL}/#hero-image`,
    contentUrl: `${BASE_URL}${image}`,
    url: `${BASE_URL}${image}`,
    caption: 'Export Desi - Indian food ingredients export partner managing processor qualification and shipment coordination',
    description: 'Export Desi hero image representing Indian food ingredient exports including Makhana, Dehydrated Onion, Garlic, and Moringa products',
    representativeOfPage: true,
    inLanguage: 'en',
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

/**
 * FAQPage schema — adds People Also Ask / AI Overview eligibility.
 * @param {Array<{question: string, answer: string}>} faqs
 */
export const getFAQSchema = (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
        },
    })),
});

/**
 * HowTo schema — structured process steps for rich results.
 * @param {{ name: string, description: string, steps: Array<{name: string, text: string}> }} options
 */
export const getHowToSchema = ({ name, description, steps }) => ({
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
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
    // No price/offers — B2B quote-based pricing. Adding an empty or fake
    // AggregateOffer without a real price would trigger Google rich result warnings.
});
