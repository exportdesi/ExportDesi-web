import SEOMeta from '../components/SEOMeta';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { getOrganizationSchema } from '../utils/schemaGenerator';
import { useState } from 'react';

const ACCESS_CODE = "beverage2026";

const PRODUCTS = [
    {
        name: 'Turmeric Powder (Lakadong, Meghalaya – GI tagged)',
        specs: [
            { label: 'Form', value: 'Fine powder' },
            { label: 'Grade', value: 'Food / beverage use' },
            { label: 'Curcumin', value: '7–12%' },
            { label: 'Moisture', value: '~7%' },
            { label: 'Color', value: 'Deep yellow' },
            { label: 'Drying', value: 'Sun-dried' },
            { label: 'Cultivation', value: 'Traditionally grown without synthetic inputs in Meghalaya' },
            { label: 'MOQ', value: '500 kg' },
            { label: 'Price', value: 'USD 5.50 – 7.20 per kg (EXW India)' },
            { label: 'Packaging', value: '25 kg food-grade bags' },
            { label: 'Private Label', value: 'Available' },
            { label: 'Shelf Life', value: 'Up to 24 months (airtight storage)' },
            { label: 'Testing', value: 'COA and lab reports (micro, heavy metals, pesticides) can be provided' },
            { label: 'Shipping', value: 'EXW / FOB / CIF Hamburg' },
            { label: 'Lead Time', value: '~2–3 weeks' },
            { label: 'Samples', value: 'Available' },
        ],
        note: 'This lot is not currently EU certified organic. Certified organic batches can be arranged separately if required.',
    },
    {
        name: 'Turmeric Powder (Salem, Tamil Nadu)',
        specs: [
            { label: 'Origin', value: 'Salem, India' },
            { label: 'Grade', value: 'Food Grade (EU compliant)' },
            { label: 'Curcumin', value: '2–3%' },
            { label: 'Mesh', value: '60–80' },
            { label: 'Moisture', value: '≤10%' },
            { label: 'Color', value: 'Bright yellow to orange yellow' },
            { label: 'Drying', value: 'Sun-dried' },
            { label: 'Adulteration', value: 'Tested' },
            { label: 'Certification', value: 'NPOP & NOP' },
            { label: 'MOQ', value: '5 MT' },
            { label: 'Price', value: 'USD 3.70 – 4.00 / kg (EXW)' },
            { label: 'Packaging', value: '25–30 kg antimicrobial bags' },
            { label: 'Testing', value: 'COA & test reports available' },
            { label: 'Samples', value: 'Free up to 250 gm' },
        ],
        note: 'More commercially scalable and cost-efficient option compared to Lakadong turmeric for larger beverage applications.',
    },
    {
        name: 'Moringa Powder (Moringa oleifera)',
        specs: [
            { label: 'Origin', value: 'India' },
            { label: 'Mesh', value: '60' },
            { label: 'Moisture', value: '<8%' },
            { label: 'Color', value: 'Green' },
            { label: 'Certification', value: 'NPOP available' },
            { label: 'MOQ', value: '500 kg' },
            { label: 'Price', value: 'USD 4.20 – 4.70 / kg (EXW)' },
            { label: 'Testing', value: 'Micro / Heavy Metals / Pesticides available' },
            { label: 'Samples', value: 'Available' },
        ],
        note: 'Supplier has worked on reducing the natural bitterness in their moringa crop while maintaining the nutritional profile, specifically with beverage applications in mind.',
    },
    {
        name: 'Ashwagandha Powder (Withania somnifera)',
        specs: [
            { label: 'Origin', value: 'India' },
            { label: 'Grade', value: 'Food Grade (EU compliant)' },
            { label: 'Plant Part', value: 'Root' },
            { label: 'Mesh', value: '60–80' },
            { label: 'Moisture', value: '≤10%' },
            { label: 'Drying', value: 'Sun-dried' },
            { label: 'Certification', value: 'NPOP & NOP' },
            { label: 'MOQ', value: '5 MT' },
            { label: 'Price', value: 'USD 6.00 – 6.80 / kg (EXW)' },
            { label: 'Packaging', value: '25–30 kg antimicrobial bags' },
            { label: 'Testing', value: 'COA & test reports available' },
            { label: 'Samples', value: 'Free up to 250 gm' },
        ],
        note: 'Adaptogenic and wellness-focused beverage applications.',
    },
    {
        name: 'Shatavari Powder (Asparagus racemosus)',
        specs: [
            { label: 'Origin', value: 'India' },
            { label: 'Grade', value: 'Food Grade (EU compliant)' },
            { label: 'Plant Part', value: 'Root' },
            { label: 'Mesh', value: '60–80' },
            { label: 'Moisture', value: '≤10%' },
            { label: 'Drying', value: 'Sun-dried' },
            { label: 'Certification', value: 'NPOP & NOP' },
            { label: 'MOQ', value: '5 MT' },
            { label: 'Price', value: 'USD 7.10 – 7.60 / kg (EXW)' },
            { label: 'Packaging', value: '25–30 kg antimicrobial bags' },
            { label: 'Testing', value: 'COA & test reports available' },
            { label: 'Samples', value: 'Free up to 250 gm' },
        ],
        note: 'Herbal wellness and botanical beverage formulations.',
    },
    {
        name: 'Tulsi / Holy Basil Powder (Ocimum sanctum)',
        specs: [
            { label: 'Origin', value: 'India' },
            { label: 'Grade', value: 'Food Grade (EU compliant)' },
            { label: 'Plant Part', value: 'Leaf' },
            { label: 'Mesh', value: '60–80' },
            { label: 'Moisture', value: '≤10%' },
            { label: 'Color', value: 'Green to dark green' },
            { label: 'Drying', value: 'Sun-dried' },
            { label: 'MOQ', value: '5 MT' },
            { label: 'Price', value: 'USD 4.20 – 4.60 / kg (EXW)' },
            { label: 'Packaging', value: '25–30 kg antimicrobial bags' },
            { label: 'Testing', value: 'COA & test reports available' },
            { label: 'Samples', value: 'Free up to 250 gm' },
        ],
        note: 'Herbal tea blends and wellness-oriented beverage applications.',
    },
];

function AccessGate({ onUnlock }) {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (code === ACCESS_CODE) {
            onUnlock();
        } else {
            setError('Incorrect access code');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background-secondary">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full mx-4"
            >
                <div className="bg-white border border-border rounded-lg p-8">
                    <div className="text-center mb-6">
                        <p className="text-brand font-medium mb-2">Confidential Working Document</p>
                        <h1 className="text-2xl font-bold mb-3">Beverage Ingredient Specifications</h1>
                        <p className="text-text-secondary text-sm mb-4">
                            Prepared for: Andreas Giest, CEO — Berliner Kaffeerösterei
                        </p>
                        <div className="bg-amber-50 border border-amber-200 rounded p-3 text-left text-xs text-amber-800">
                            <strong>Notice:</strong> This document contains preliminary information subject to change. Specifications, pricing, and availability to be confirmed at time of order.
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="access-code" className="block text-sm font-medium text-text-primary mb-2">
                                Access Code
                            </label>
                            <input
                                id="access-code"
                                type="password"
                                value={code}
                                onChange={(e) => { setCode(e.target.value); setError(''); }}
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand/50"
                                placeholder="Enter access code"
                                autoFocus
                            />
                        </div>
                        {error && <p className="text-sm text-red-600">{error}</p>}
                        <button type="submit" className="w-full btn btn-primary">
                            Access Document
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}

function SpecRow({ label, value }) {
    return (
        <div className="flex gap-4 py-2 border-b border-border last:border-0">
            <dt className="w-40 flex-shrink-0 text-sm text-text-tertiary">{label}</dt>
            <dd className="flex-1 text-sm text-text-primary">{value}</dd>
        </div>
    );
}

function ProductSection({ product, index }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white border border-border rounded-lg overflow-hidden"
        >
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-background-secondary transition-colors"
            >
                <h3 className="font-semibold text-text-primary text-left">{product.name}</h3>
                <svg className={`w-5 h-5 text-text-tertiary transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isExpanded && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-6 pb-6"
                >
                    <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800">
                        <strong>Indicative only:</strong> Specifications subject to final lot verification. Confirm before order.
                    </div>
                    <dl className="mt-4">
                        {product.specs.map((spec) => (
                            <SpecRow key={spec.label} label={spec.label} value={spec.value} />
                        ))}
                    </dl>
                    {product.note && (
                        <div className="mt-4 p-4 bg-background-secondary rounded-lg">
                            <p className="text-sm text-text-secondary">{product.note}</p>
                        </div>
                    )}
                </motion.div>
            )}
        </motion.div>
    );
}

function BeverageIngredientsPage() {
    const [isUnlocked, setIsUnlocked] = useState(false);

    if (!isUnlocked) {
        return <AccessGate onUnlock={() => setIsUnlocked(true)} />;
    }

    return (
        <>
            <SEOMeta
                title="Beverage Ingredient Specifications | Export Desi"
                description="Indicative product specifications for beverage ingredient evaluation."
                keywords="beverage ingredients, turmeric, moringa, ashwagandha"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(getOrganizationSchema())}
                </script>
            </Helmet>

            {/* Header - White Background */}
            <section className="py-16 bg-white">
                <div className="page-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <p className="text-brand font-medium mb-3">Confidential Working Document</p>
                        <h1 className="text-2xl md:text-3xl font-bold mb-4">
                            Beverage Ingredient Specifications
                        </h1>
                        <p className="text-text-secondary mb-2">
                            <strong>Prepared for:</strong> Andreas Giest, CEO — Berliner Kaffeerösterei
                        </p>
                        <p className="text-text-secondary text-sm mb-6">
                            Indicative specifications for beverage ingredient evaluation. This document is for preliminary review only — not final.
                        </p>

                        {/* Problem / Solution */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="bg-background-secondary rounded-lg p-5">
                                <h3 className="font-semibold mb-3 text-sm">Problem Being Solved</h3>
                                <ul className="space-y-2 text-xs text-text-secondary">
                                    <li>• Source certified organic botanicals for beverages</li>
                                    <li>• Meet EU compliance requirements</li>
                                    <li>• Ensure batch consistency</li>
                                    <li>• Evaluate taste for liquid formulations</li>
                                </ul>
                            </div>
                            <div className="bg-background-secondary rounded-lg p-5">
                                <h3 className="font-semibold mb-3 text-sm">Solution Approach</h3>
                                <ul className="space-y-2 text-xs text-text-secondary">
                                    <li>• Validate suppliers against EU requirements</li>
                                    <li>• Test multiple lots for consistency</li>
                                    <li>• Provide full compliance documentation</li>
                                    <li>• Supply samples for in-house evaluation</li>
                                </ul>
                            </div>
                        </div>

                        {/* Navigation hint */}
                        <div className="mt-6 flex items-center gap-2 text-sm text-text-tertiary">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                            <span>Scroll down to view specifications, or click "Request Samples" below</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Actions - Background Secondary */}
            <section className="py-8 bg-background-secondary border-y border-border">
                <div className="page-container">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <a
                                href="mailto:rajiv@mail.exportdesi.com?subject=Sample Request - Beverage Ingredients"
                                className="btn btn-primary"
                            >
                                Request Samples
                            </a>
                            <a
                                href="mailto:rajiv@mail.exportdesi.com?subject=Inquiry - Beverage Ingredients"
                                className="btn btn-outline"
                            >
                                Contact Us
                            </a>
                        </div>
                        <p className="text-xs text-text-tertiary whitespace-nowrap">
                            Samples shipped via DHL in 5–7 days
                        </p>
                    </div>
                </div>
            </section>

            {/* Products - Light Grey Background */}
            <section className="py-16" style={{ backgroundColor: '#f4f4f5' }}>
                <div className="page-container">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-semibold">Product Specifications</h2>
                        <p className="text-xs text-text-tertiary max-w-md text-right">
                            Click each product to expand details.<br/>All specs indicative — confirm before order.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {PRODUCTS.map((product, index) => (
                            <ProductSection key={product.name} product={product} index={index} />
                        ))}
                    </div>

                    {/* Navigation hint */}
                    <div className="mt-12 text-center">
                        <a
                            href="#compliance"
                            className="text-sm text-brand hover:underline inline-flex items-center gap-2"
                        >
                            View compliance documentation below
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Compliance - Background Secondary */}
            <section id="compliance" className="py-16 bg-background-secondary">
                <div className="page-container">
                    <h2 className="text-xl font-semibold mb-2">Compliance Documentation</h2>
                    <p className="text-text-secondary text-sm mb-8">
                        All documentation provided as needed per shipment. Certifications vary by product — confirm for your order.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white border border-border rounded-lg p-5">
                            <h3 className="font-semibold mb-3">📋 Export Documentation</h3>
                            <ul className="space-y-1 text-sm text-text-secondary">
                                <li>• FSSAI (Food Safety)</li>
                                <li>• APEDA RCMC</li>
                                <li>• Spice Board Registration</li>
                                <li>• IEC (Import Export Code)</li>
                                <li>• Phytosanitary Certificate</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-border rounded-lg p-5">
                            <h3 className="font-semibold mb-3">🔬 Testing Reports</h3>
                            <ul className="space-y-1 text-sm text-text-secondary">
                                <li>• Certificate of Analysis (COA)</li>
                                <li>• Heavy Metals (Pb, Cd, Hg, As)</li>
                                <li>• Pesticide Residue (EU 396/2005)</li>
                                <li>• Microbiology (E. coli, Salmonella)</li>
                                <li>• Aflatoxin B1 & Total</li>
                            </ul>
                        </div>
                        <div className="bg-white border border-border rounded-lg p-5">
                            <h3 className="font-semibold mb-3">🌿 Certifications</h3>
                            <ul className="space-y-1 text-sm text-text-secondary">
                                <li>• NPOP (India Organic)</li>
                                <li>• NOP (USDA Organic)</li>
                                <li>• EU Organic (Ecocert)</li>
                                <li>• Certificate of Origin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA - Grey Background */}
            <section className="py-16 border-t border-border" style={{ backgroundColor: '#f4f4f5' }}>
                <div className="page-container">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-xl font-semibold mb-3">Next Steps</h2>
                        <p className="text-text-secondary mb-6">
                            Samples available for quality evaluation (free up to 250g per ingredient). All specifications indicative — final specs confirmed with sample shipment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
                            <a
                                href="mailto:rajiv@mail.exportdesi.com?subject=Sample Request - Beverage Ingredients"
                                className="btn btn-primary"
                            >
                                Request Samples
                            </a>
                            <a
                                href="mailto:rajiv@mail.exportdesi.com?subject=Inquiry - Beverage Ingredients"
                                className="btn btn-outline"
                            >
                                Discuss Requirements
                            </a>
                        </div>
                        <p className="text-xs text-text-tertiary">
                            This document is for evaluation purposes only. Not final.<br/>
                            Specifications, pricing, and availability subject to change.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BeverageIngredientsPage;
