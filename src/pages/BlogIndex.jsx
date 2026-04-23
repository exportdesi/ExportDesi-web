import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';  
import { MotionSection, MotionCard } from '../components/MotionWrapper';
import HeroSection from '../components/HeroSection';

const BLOG_POSTS = [
    {
        slug: 'how-to-import-makhana-from-india',
        title: 'How to Import Makhana from India: Complete Buyer\'s Guide',
        excerpt: 'Step-by-step guide for importing makhana (fox nuts) from India. Covers HS codes, documentation, certifications, MOQ, pricing, and shipping terms.',
        category: 'Export Guides',
        publishDate: '2026-04-07',
        readTime: '8 min read',
        author: 'Rajiv Dudeja',
        featured: true,
    },
    {
        slug: 'makhana-grades-5-6-7-suta-explained',
        title: 'Makhana Grades Explained: 5, 6 & 7 Suta — Which One Do You Need?',
        excerpt: 'What do 5 Suta, 6 Suta, and 7 Suta mean? This guide explains makhana grading, bead sizes, price differences, and which grade suits which application.',
        category: 'Product Guides',
        publishDate: '2026-04-14',
        readTime: '6 min read',
        author: 'Rajiv Dudeja',
        featured: false,
    },
    {
        slug: 'makhana-export-price-guide',
        title: 'Makhana Export Price Guide: FOB Rates, Seasonal Factors & How to Evaluate Quotes',
        excerpt: 'Current indicative FOB export prices for makhana by grade, and what drives price variation: crop season, moisture spec, packaging, and Incoterms explained.',
        category: 'Market Intelligence',
        publishDate: '2026-04-16',
        readTime: '5 min read',
        author: 'Rajiv Dudeja',
        featured: false,
    },
    {
        slug: 'lakadong-turmeric-what-buyers-need-to-know',
        title: 'Lakadong Turmeric: What International Buyers Need to Know',
        excerpt: 'Lakadong turmeric contains 5-7% curcumin — more than double the standard variety. A buyer\'s guide to sourcing, certifications, product forms, and specifications.',
        category: 'Product Guides',
        publishDate: '2026-04-17',
        readTime: '6 min read',
        author: 'Rajiv Dudeja',
        featured: false,
    },
    {
        slug: 'dehydrated-onion-garlic-buyer-guide',
        title: 'Dehydrated Onion & Garlic from India: A Complete Buyer\'s Guide',
        excerpt: 'India supplies 70%+ of the world\'s dehydrated onion. Product forms, specifications, HS codes, Gujarat Mahuva sourcing, sulphite-free options, and documentation.',
        category: 'Export Guides',
        publishDate: '2026-04-18',
        readTime: '7 min read',
        author: 'Rajiv Dudeja',
        featured: false,
    },
    {
        slug: 'indian-food-export-documentation-checklist',
        title: 'Indian Food Export Documentation Checklist: Every Document You Need',
        excerpt: 'Complete checklist of export documents for Indian food shipments. Mandatory docs, destination-specific requirements (US, EU, Australia, GCC), timelines, and common mistakes.',
        category: 'Compliance & Documentation',
        publishDate: '2026-04-19',
        readTime: '8 min read',
        author: 'Rajiv Dudeja',
        featured: false,
    },
    {
        slug: 'how-to-import-moringa-from-india',
        title: 'How to Import Moringa from India: Product Forms, HS Codes & Certifications',
        excerpt: 'India produces 80% of the world\'s moringa. A buyer\'s guide to moringa leaf powder, HS codes, organic certifications, EU Novel Food status, MOQ, and pricing.',
        category: 'Export Guides',
        publishDate: '2026-04-21',
        readTime: '6 min read',
        author: 'Rajiv Dudeja',
        featured: false,
    },
    {
        slug: 'india-fta-food-ingredient-importers',
        title: 'India\'s Free Trade Agreements: What Food Ingredient Importers Need to Know',
        excerpt: 'India has active FTAs with the UAE, Australia, Japan, and South Korea. A practical guide to preferential duty rates, Rules of Origin, Preferential Certificates of Origin, and how to verify current rates from official sources.',
        category: 'Trade & Compliance',
        publishDate: '2026-04-21',
        readTime: '7 min read',
        author: 'Rajiv Dudeja',
        featured: false,
    },
];

const CATEGORIES = [
    { name: 'Export Guides', count: 4, description: 'Step-by-step import procedures' },
    { name: 'Product Guides', count: 2, description: 'Deep dives into specific products' },
    { name: 'Trade & Compliance', count: 2, description: 'FTAs, docs, and regulations' },
    { name: 'Market Intelligence', count: 1, description: 'Pricing and market trends' },
];

const BLOG_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Export Desi Blog',
    description: 'Expert insights on Indian food exports, compliance guides, and market intelligence for international buyers.',
    url: 'https://exportdesi.com/blog',
    publisher: {
        '@type': 'Organization',
        name: 'Export Desi',
        url: 'https://exportdesi.com',
    },
};

export default function BlogIndex() {
    const featuredPost = BLOG_POSTS.find(p => p.featured);
    const regularPosts = BLOG_POSTS.filter(p => !p.featured);

    return (
        <>
            <Helmet>
                <title>Blog | Export Desi - Indian Food Export Insights</title>
                <meta name="description" content="Expert guides on importing Indian food products. HS codes, certifications, market trends, and compliance insights for international buyers." />
                <link rel="canonical" href="https://exportdesi.com/blog" />
                <script type="application/ld+json">{JSON.stringify(BLOG_SCHEMA)}</script>
            </Helmet>

            {/* Hero */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <HeroSection
                    label="Insights & Expertise"
                    title="Export Desi Blog"
                    subtitle="Expert guides on importing Indian food products. Compliance insights, market intelligence, and product knowledge for international buyers."
                    imageUrl="/images/blog-hero.jpg"
                />
            </motion.div>

            {/* Categories */}
            <MotionSection variant="fadeUp" delay={200}>
                <div className="bg-surface border-b border-border">
                    <div className="page-container section-pad">
                        <p className="section-label mb-8">Browse by Topic</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {CATEGORIES.map((cat, idx) => (
                                <MotionCard key={idx} delay={idx * 50}>
                                    <div className="p-5 bg-white border border-border hover:border-brand transition-colors">
                                        <div className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
                                            {cat.name}
                                        </div>
                                        <div className="text-2xl font-bold mb-1">
                                            {cat.count} {cat.count === 1 ? 'post' : 'posts'}
                                        </div>
                                        <div className="text-sm text-muted">
                                            {cat.description}
                                        </div>
                                    </div>
                                </MotionCard>
                            ))}
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* Featured Post */}
            {featuredPost && (
                <MotionSection variant="fadeUp" delay={300}>
                    <div className="bg-white border-b border-border">
                        <div className="page-container section-pad">
                            <p className="section-label mb-8">Featured Article</p>
                            <MotionCard>
                                <Link to={`/blog/${featuredPost.slug}`} className="block group">
                                    <article className="relative border-2 border-brand bg-surface p-8 hover:border-brand/80 transition-colors">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-brand text-white text-xs font-semibold uppercase tracking-widest">
                                                Featured
                                            </span>
                                            <span className="text-xs text-muted">·</span>
                                            <span className="text-xs text-muted">{featuredPost.category}</span>
                                            <span className="text-xs text-muted">·</span>
                                            <span className="text-xs text-muted">{featuredPost.readTime}</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-brand transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-muted leading-relaxed mb-6 text-base">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-bold">
                                                    {featuredPost.author.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-brand">{featuredPost.author}</div>
                                                    <div className="text-xs text-muted">
                                                        {new Date(featuredPost.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-sm font-semibold text-brand group-hover:translate-x-1 transition-transform">
                                                Read article →
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            </MotionCard>
                        </div>
                    </div>
                </MotionSection>
            )}

            {/* Latest Posts */}
            <MotionSection variant="fadeUp" delay={400}>
                <div className="bg-white border-b border-border">
                    <div className="page-container section-pad">
                        <p className="section-label mb-8">Latest Articles</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {regularPosts.map((post, idx) => (
                                <MotionCard key={post.slug} delay={idx * 50}>
                                    <Link to={`/blog/${post.slug}`} className="block group h-full">
                                        <article className="flex flex-col h-full bg-surface rounded-lg border border-border p-6 hover:border-brand transition-colors">
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                                                    {post.category}
                                                </span>
                                                <span className="text-xs text-muted">·</span>
                                                <span className="text-xs text-muted">{post.readTime}</span>
                                            </div>
                                            <h3 className="text-lg font-bold mb-3 group-hover:text-brand transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold">
                                                        {post.author.charAt(0)}
                                                    </div>
                                                    <div className="text-xs">
                                                        <div className="font-semibold text-brand">{post.author}</div>
                                                        <div className="text-muted">
                                                            {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </MotionCard>
                            ))}
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* Subscribe CTA - Removed until backend is ready */}
        </>
    );
}
