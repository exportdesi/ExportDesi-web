import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useEffect, useState, useRef } from 'react';
import { MotionSection } from '../components/MotionWrapper';
import Breadcrumb from '../components/Breadcrumb';

// Blog post content mapping
const BLOG_POSTS = {
    'how-to-import-makhana-from-india': {
        title: 'How to Import Makhana from India: Complete Buyer\'s Guide',
        category: 'Export Guides',
        publishDate: '2026-04-07',
        lastUpdated: '2026-04-07',
        author: 'Rajiv Dudeja',
        authorRole: 'Founder, Export Desi',
        readTime: '8 min read',
        excerpt: 'Step-by-step guide for importing makhana (fox nuts) from India. Covers HS codes, documentation, certifications, MOQ, pricing, and shipping terms.',
        tableOfContents: [
            { id: 'overview', label: 'Overview' },
            { id: 'hs-code', label: 'HS Code & Classification' },
            { id: 'certifications', label: 'Required Certifications' },
            { id: 'documentation', label: 'Import Documentation' },
            { id: 'moq-pricing', label: 'MOQ & Pricing' },
            { id: 'shipping', label: 'Shipping & Lead Times' },
            { id: 'faq', label: 'FAQ' },
        ],
        keyTakeaways: [
            'HS Code 2008.19.21 applies to popped/roasted/flavoured makhana (effective July 2025)',
            'Minimum order: 1 MT for commercial, 100 kg for trials',
            'Lead time: 15-21 days production + shipping',
            '4 mandatory certifications: FSSAI, APEDA, Phytosanitary, Certificate of Origin',
        ],
    },
};

// Reusable callout components
function KeyTakeaways({ items }) {
    return (
        <div className="bg-surface border border-border rounded-lg p-6 my-8">
            <div className="mb-4 pb-3 border-b border-border">
                <h3 className="font-bold text-brand text-sm uppercase tracking-widest">Key Takeaways</h3>
            </div>
            <ul className="space-y-3">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function InfoBox({ title, children }) {
    return (
        <div className="border border-border rounded-lg p-5 my-6 bg-surface">
            {title && <h4 className="font-bold text-sm uppercase tracking-widest mb-3">{title}</h4>}
            <div className="text-muted text-sm">{children}</div>
        </div>
    );
}

function StatCard({ label, value, subtext }) {
    return (
        <div className="bg-white border border-border rounded-lg p-5 text-center">
            <div className="text-xs uppercase tracking-widest text-muted mb-2">{label}</div>
            <div className="text-3xl font-bold text-brand mb-1">{value}</div>
            {subtext && <div className="text-xs text-muted">{subtext}</div>}
        </div>
    );
}

function ContentSection({ id, title, children }) {
    return (
        <section id={id} className="scroll-mt-32 mb-12 last:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand">{title}</h2>
            {children}
        </section>
    );
}

export default function BlogPost() {
    const { slug } = useParams();
    const post = BLOG_POSTS[slug];
    const [activeSection, setActiveSection] = useState('');
    const contentRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: contentRef });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Track active section for TOC highlighting
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -60% 0px' }
        );

        post.tableOfContents.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [post.tableOfContents]);

    if (!post) {
        return (
            <div className="page-container section-pad text-center">
                <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
                <p className="text-muted mb-6">
                    The article you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/blog" className="text-brand font-semibold hover:underline">
                    ← Back to Blog
                </Link>
            </div>
        );
    }

    const blogSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishDate,
        dateModified: post.lastUpdated,
        author: {
            '@type': 'Person',
            name: post.author,
            jobTitle: post.authorRole,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Export Desi',
            logo: { '@type': 'ImageObject', url: 'https://exportdesi.com/ExportDesi-logo.png' },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://exportdesi.com/blog/${slug}`,
        },
    };

    return (
        <>
            <Helmet>
                <title>{post.title} | Export Desi</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://exportdesi.com/blog/${slug}`} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content={post.publishDate} />
                <meta property="article:author" content={post.author} />
                <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
            </Helmet>

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-brand origin-left z-50"
                style={{ scaleX }}
            />

            {/* Article Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border-b border-border"
            >
                <div className="page-container py-12 md:py-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Link
                            to="/blog"
                            className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand transition-colors"
                        >
                            Blog
                        </Link>
                        <span className="text-muted">/</span>
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold text-brand">{post.author}</div>
                                <div className="text-xs text-muted">{post.authorRole}</div>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-border" />
                        <div className="flex flex-wrap items-center gap-4 text-muted">
                            <span>
                                {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="text-muted">·</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Sticky Table of Contents (Desktop) */}
            <div className="hidden lg:block bg-white border-b border-border sticky top-[81px] z-40">
                <div className="page-container py-4">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                            On this page
                        </span>
                        <nav className="flex items-center gap-1">
                            {post.tableOfContents.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`text-xs px-3 py-2 rounded-md transition-colors ${
                                        activeSection === item.id
                                            ? 'bg-brand text-white'
                                            : 'text-muted hover:text-brand'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Key Takeaways - Immediately after header */}
            <MotionSection variant="fadeUp" delay={100}>
                <div className="page-container pt-8">
                    <KeyTakeaways items={post.keyTakeaways} />
                </div>
            </MotionSection>

            {/* Article Content */}
            <MotionSection variant="fadeUp" delay={200}>
                <article ref={contentRef} className="page-container section-pad max-w-4xl">
                    {/* Overview */}
                    <ContentSection id="overview" title="Overview">
                        <p className="text-muted leading-relaxed mb-4 text-lg">
                            Makhana (<em className="text-brand">Euryale ferox</em>), also known as fox nuts or gorgon nuts,
                            is one of India's fastest-growing food exports. India produces approximately{' '}
                            <strong className="text-brand">90% of the world's makhana supply</strong>, with Bihar
                            accounting for the majority of cultivation.
                        </p>
                        <p className="text-muted leading-relaxed mb-6">
                            This guide walks international buyers through the complete import process, from HS code
                            classification to final delivery at your port.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                            <StatCard label="HS Code" value="2008.19.21" subtext="Effective July 2025" />
                            <StatCard label="Min. Order" value="1 MT" subtext="Commercial orders" />
                            <StatCard label="Lead Time" value="15-21d" subtext="Production + docs" />
                            <StatCard label="Shelf Life" value="12 mo" subtext="Sealed packaging" />
                        </div>
                    </ContentSection>

                    {/* HS Code */}
                    <ContentSection id="hs-code" title="HS Code & Classification">
                        <div className="bg-surface border border-border rounded-lg p-6 mb-6">
                            <div className="mb-2">
                                <h3 className="font-bold text-brand text-2xl mb-2">2008.19.21</h3>
                                <p className="text-muted text-sm">
                                    The correct HS (Harmonized System) code for popped makhana, effective from July 2025.
                                </p>
                            </div>
                        </div>

                        <p className="text-muted leading-relaxed mb-4">This classification applies to:</p>
                        <ul className="space-y-3 mb-6">
                            {[
                                'Popped makhana (phool makhana)',
                                'Roasted makhana',
                                'Flavoured makhana (peri peri, Himalayan salt, etc.)',
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-muted">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <InfoBox title="Important">
                            Raw makhana seeds (unpopped) may fall under a different classification. Confirm with your
                            customs broker before filing import documentation.
                        </InfoBox>
                    </ContentSection>

                    {/* Certifications */}
                    <ContentSection id="certifications" title="Required Certifications">
                        <p className="text-muted leading-relaxed mb-6">
                            Every makhana shipment from India must include the following certifications:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                {
                                    name: 'FSSAI Certificate',
                                    desc: 'Indian food safety compliance',
                                    detail: 'License: 10824999000454',
                                },
                                {
                                    name: 'APEDA RCMC',
                                    desc: 'Export development registration',
                                    detail: 'RCMC: 06757/2024-2025',
                                },
                                {
                                    name: 'Phytosanitary Certificate',
                                    desc: 'Plant health certification',
                                    detail: 'Issued by NPPO India per shipment',
                                },
                                {
                                    name: 'Certificate of Origin',
                                    desc: 'Proof of Indian origin',
                                    detail: 'Issued by FIEO or Chamber of Commerce',
                                },
                            ].map((cert, idx) => (
                                <div
                                    key={idx}
                                    className="border border-border rounded-lg p-5"
                                >
                                    <h3 className="font-bold text-brand mb-2">{cert.name}</h3>
                                    <p className="text-sm text-muted mb-1">{cert.desc}</p>
                                    <p className="text-xs text-muted">{cert.detail}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-surface border border-border rounded-lg p-6">
                            <h3 className="font-bold text-brand mb-4 uppercase tracking-widest text-sm">
                                Optional Certifications (On Request)
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    {
                                        name: 'Organic Certification',
                                        desc: 'USDA Organic, EU Organic for certified organic lots',
                                    },
                                    {
                                        name: 'HACCP / ISO 22000',
                                        desc: 'Food safety management through processing partners',
                                    },
                                    {
                                        name: 'GI Tag',
                                        desc: 'Mithila Makhana geographic indication certification',
                                    },
                                ].map((cert, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-muted">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                                        <div>
                                            <span className="font-semibold text-brand">{cert.name}</span>
                                            <span className="text-muted text-sm"> — {cert.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ContentSection>

                    {/* Documentation */}
                    <ContentSection id="documentation" title="Import Documentation Checklist">
                        <p className="text-muted leading-relaxed mb-6">
                            The following documents are provided with every shipment:
                        </p>

                        <div className="overflow-x-auto rounded-lg border border-border mb-6">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-brand text-white">
                                        <th className="text-left px-5 py-4 font-semibold text-xs uppercase tracking-widest">
                                            Document
                                        </th>
                                        <th className="text-left px-5 py-4 font-semibold text-xs uppercase tracking-widest">
                                            Issued By
                                        </th>
                                        <th className="text-left px-5 py-4 font-semibold text-xs uppercase tracking-widest">
                                            Timing
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {[
                                        { doc: 'Commercial Invoice', by: 'Exporter', when: 'Before shipment' },
                                        { doc: 'Packing List', by: 'Exporter', when: 'Before shipment' },
                                        { doc: 'Bill of Lading / Airway Bill', by: 'Shipping line / Airline', when: 'After loading' },
                                        { doc: 'Certificate of Origin', by: 'FIEO / Chamber of Commerce', when: 'Before shipment' },
                                        { doc: 'Phytosanitary Certificate', by: 'NPPO India', when: 'Before shipment' },
                                        { doc: 'Certificate of Analysis (COA)', by: 'NABL-accredited lab', when: 'Before shipment' },
                                        { doc: 'Insurance Certificate', by: 'Insurance company', when: 'Before shipment' },
                                    ].map((row, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface'}>
                                            <td className="px-5 py-4 font-semibold text-brand">{row.doc}</td>
                                            <td className="px-5 py-4 text-muted">{row.by}</td>
                                            <td className="px-5 py-4 text-muted">{row.when}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </ContentSection>

                    {/* MOQ & Pricing */}
                    <ContentSection id="moq-pricing" title="MOQ & Pricing">
                        <div className="border border-border rounded-lg p-6 mb-8">
                            <h3 className="font-bold text-brand mb-6 text-center uppercase tracking-widest text-sm">
                                Minimum Order Quantities
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-xs text-muted uppercase tracking-widest mb-3">Sample Order</div>
                                    <div className="text-4xl font-bold text-brand mb-2">5-10 kg</div>
                                    <div className="text-xs text-muted">At cost, freight extra</div>
                                </div>
                                <div className="text-center border-x border-border">
                                    <div className="text-xs text-muted uppercase tracking-widest mb-3">Trial Order</div>
                                    <div className="text-4xl font-bold text-brand mb-2">100 kg</div>
                                    <div className="text-xs text-muted">Per grade</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xs text-muted uppercase tracking-widest mb-3">Commercial Order</div>
                                    <div className="text-4xl font-bold text-brand mb-2">1 MT+</div>
                                    <div className="text-xs text-muted">Per grade</div>
                                </div>
                            </div>
                        </div>

                        <p className="text-muted leading-relaxed mb-4">
                            Pricing varies based on grade (5/6/7 Suta), quantity, packaging format, and Incoterms
                            (FOB vs CIF). Current indicative pricing:
                        </p>

                        <div className="border border-border rounded-lg mb-6">
                            <ul className="space-y-4 p-6">
                                {[
                                    {
                                        grade: '6 Suta (18-21mm)',
                                        price: 'USD 8.5-11.5/kg',
                                        terms: 'FOB India',
                                        pack: 'Bulk 25kg',
                                    },
                                    {
                                        grade: '7 Suta (>21mm)',
                                        price: 'USD 12-15/kg',
                                        terms: 'FOB India',
                                        pack: 'Bulk 25kg',
                                    },
                                    {
                                        grade: 'Roasted & flavoured (retail)',
                                        price: 'USD 14-19.5/kg',
                                        terms: 'Private label',
                                        pack: 'Custom packaging',
                                    },
                                ].map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={`flex items-center justify-between p-4 rounded-lg ${
                                            idx % 2 === 0 ? 'bg-surface' : 'bg-white'
                                        }`}
                                    >
                                        <span className="font-semibold text-brand">{item.grade}</span>
                                        <div className="text-right">
                                            <div className="font-bold text-brand">{item.price}</div>
                                            <div className="text-xs text-muted">
                                                {item.terms} · {item.pack}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <InfoBox>
                            <strong>Note:</strong> Prices are indicative only. Final pricing confirmed on Proforma Invoice
                            based on current crop availability, packaging specifications, and freight rates.
                        </InfoBox>
                    </ContentSection>

                    {/* Shipping */}
                    <ContentSection id="shipping" title="Shipping & Lead Times">
                        <p className="text-muted leading-relaxed mb-6">
                            Makhana is shipped from major Indian ports via sea freight (LCL or FCL) or air freight for
                            urgent/sample shipments.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Sea Freight */}
                            <div className="border border-border rounded-lg p-6">
                                <h3 className="font-bold text-brand text-lg mb-4 uppercase tracking-widest text-sm">Sea Freight</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex justify-between pb-2 border-b border-border">
                                        <span className="text-muted">20' FCL</span>
                                        <span className="font-semibold text-brand">~12-14 MT</span>
                                    </li>
                                    <li className="flex justify-between pb-2 border-b border-border">
                                        <span className="text-muted">40' FCL</span>
                                        <span className="font-semibold text-brand">~24-28 MT</span>
                                    </li>
                                    <li className="flex justify-between pb-2 border-b border-border">
                                        <span className="text-muted">LCL</span>
                                        <span className="font-semibold text-brand">From 1 CBM</span>
                                    </li>
                                    <li className="flex justify-between pt-2">
                                        <span className="text-muted">Transit time</span>
                                        <span className="font-semibold text-brand">25-45 days</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Air Freight */}
                            <div className="border border-border rounded-lg p-6">
                                <h3 className="font-bold text-brand text-lg mb-4 uppercase tracking-widest text-sm">Air Freight</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex justify-between pb-2 border-b border-border">
                                        <span className="text-muted">Minimum</span>
                                        <span className="font-semibold text-brand">From 100 kg</span>
                                    </li>
                                    <li className="flex justify-between pb-2 border-b border-border">
                                        <span className="text-muted">Transit time</span>
                                        <span className="font-semibold text-brand">5-10 days</span>
                                    </li>
                                    <li className="flex justify-between pb-2 border-b border-border">
                                        <span className="text-muted">Airports</span>
                                        <span className="font-semibold text-brand">Delhi, Mumbai, Kolkata</span>
                                    </li>
                                    <li className="flex justify-between pt-2">
                                        <span className="text-muted">Best for</span>
                                        <span className="font-semibold text-brand">Samples, urgent</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="border border-border rounded-lg p-5 bg-surface">
                            <div className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                                <div>
                                    <span className="font-semibold text-brand">Incoterms:</span>{' '}
                                    <span className="text-muted">
                                        We offer FOB (Free on Board), CIF (Cost, Insurance, Freight), and DAP (Delivered at
                                        Place). Incoterms are confirmed at Proforma Invoice stage.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ContentSection>

                    {/* FAQ */}
                    <ContentSection id="faq" title="Frequently Asked Questions">
                        <div className="space-y-4">
                            {[
                                {
                                    q: 'What is the typical lead time from order to shipment?',
                                    a: 'Production and documentation typically takes 15-21 days from order confirmation and advance payment. Lead time may vary based on grade availability and order volume.',
                                },
                                {
                                    q: 'Can you arrange fumigation certificates?',
                                    a: 'Yes. Fumigation certificates are arranged through certified fumigation agencies and are included in the document set for countries requiring it (e.g., Australia, certain Middle East markets).',
                                },
                                {
                                    q: 'Do you provide pre-shipment samples?',
                                    a: 'Yes. We provide grade samples (5-10 kg) at cost plus freight. Sample cost is adjusted against commercial orders.',
                                },
                                {
                                    q: 'What payment terms do you accept?',
                                    a: 'We accept LC (Letter of Credit), TT (Telegraphic Transfer) with 30% advance and 70% against BL copy, and 100% advance for sample/trial orders.',
                                },
                            ].map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="border border-border rounded-lg p-5 hover:border-brand transition-colors"
                                >
                                    <h3 className="font-bold text-brand mb-3 flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand text-white text-xs flex items-center justify-center">
                                            Q
                                        </span>
                                        {faq.q}
                                    </h3>
                                    <p className="text-muted text-sm pl-9">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </ContentSection>
                </article>
            </MotionSection>

            {/* Author Bio */}
            <MotionSection variant="fadeUp" delay={400}>
                <div className="bg-surface border-y border-border">
                    <div className="page-container section-pad">
                        <div className="flex items-center gap-6 max-w-4xl">
                            <div className="w-20 h-20 rounded-full bg-brand flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-bold text-brand mb-2 text-lg">About {post.author}</h3>
                                <p className="text-muted leading-relaxed mb-3">
                                    {post.authorRole}. Founder of Export Desi, helping international buyers source Indian
                                    food products with full compliance and quality assurance.
                                </p>
                                <Link to="/about" className="text-sm text-brand font-semibold hover:underline inline-flex items-center gap-1">
                                    Learn more
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </MotionSection>

            {/* CTA */}
            <MotionSection variant="fadeUp" delay={500}>
                <div className="bg-brand text-white">
                    <div className="page-container section-pad text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Import Makhana from India?</h2>
                        <p className="text-white/90 mb-8 max-w-xl mx-auto">
                            Get a quote, request samples, or discuss your requirements with our team. We typically respond
                            within 24 hours on business days.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact?product=makhana&type=quote"
                                className="px-8 py-4 bg-white text-brand font-semibold rounded-lg hover:bg-white/90 transition-colors"
                            >
                                Request a Quote
                            </Link>
                            <Link
                                to="/contact?product=makhana&type=sample"
                                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                            >
                                Request Sample
                            </Link>
                        </div>
                    </div>
                </div>
            </MotionSection>
        </>
    );
}
