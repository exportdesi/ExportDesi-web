import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion'; // eslint-disable-line no-unused-vars
import SEOMeta from '../components/SEOMeta';
import HeroSection from '../components/HeroSection';

const certifications = [
    { name: 'GST', value: '06ALYPD9414C1Z1', label: 'GST Identification' },
    { name: 'IEC', value: 'ALYPD9414C', label: 'Import Export Code' },
    { name: 'APEDA', value: '06757/2024-2025', label: 'APEDA RCMC' },
    { name: 'FSSAI', value: '10824999000454', label: 'Food Safety License' },
    { name: 'Spice Board', value: 'CRES/SBCB/23080/2024-2025', label: 'Spice Board Registration' },
    { name: 'FIEO', value: '13083/2025-2026', label: 'FIEO RCMC' },
];

const products = [
    {
        category: 'Makhana (Fox Nuts)',
        origin: 'Bihar, India',
        grades: '4-7 Suta (12mm to 18mm+)',
        description: 'Premium quality fox nuts sourced from processing units in Bihar\'s Mithila cluster.',
        image: 'https://images.unsplash.com/photo-1621255554851-9a254f0e3e93?w=400&h=250&fit=crop&auto=format',
    },
    {
        category: 'Turmeric',
        origin: 'Andhra Pradesh / Tamil Nadu',
        grades: 'Finger, Powder, Lakadong',
        description: 'High-curcumin turmeric from certified farms in Southern India.',
        image: 'https://images.unsplash.com/photo-1615485500704-8e99099928b3?w=400&h=250&fit=crop&auto=format',
    },
    {
        category: 'Dehydrated Onion & Garlic',
        origin: 'Gujarat (Mahuva)',
        grades: 'Flakes, Minced, Chopped, Granule, Powder',
        description: 'Process-grade dehydrated ingredients with third-party lab reports.',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=250&fit=crop&auto=format',
    },
    {
        category: 'Food Powders',
        origin: 'Pan India',
        grades: 'Moringa Leaf Powder, Banana Powder',
        description: 'Nutrient-rich food powders for health and wellness applications.',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=250&fit=crop&auto=format',
    },
];

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Copy icon component
function CopyIcon({ copied }) {
    return (
        <motion.div
            initial={false}
            animate={{ scale: copied ? 1.2 : 1 }}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                copied ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
            }`}
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {copied ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                )}
            </svg>
        </motion.div>
    );
}

// Action button component with motion
function ActionButton({ icon, label, href, onClick, variant = 'secondary' }) {
    const isExternal = href?.startsWith('http') || href?.startsWith('mailto') || href?.startsWith('tel');
    const baseClasses = "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-md";
    const variantClasses = variant === 'primary'
        ? 'bg-brand text-white hover:bg-brand-light'
        : 'bg-white border border-border text-brand hover:border-brand hover:bg-surface';

    const props = onClick
        ? { onClick }
        : { href, ...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}) };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseClasses} ${variantClasses}`}
            {...props}
        >
            {icon}
            {label}
        </motion.button>
    );
}

export default function CompanyProfilePage() {
    const [copiedId, setCopiedId] = useState(null);

    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 30]);

    const certificationsRef = useRef(null);
    const productsRef = useRef(null);
    const isCertsVisible = useInView(certificationsRef, { once: true, margin: "-100px" });
    const isProductsVisible = useInView(productsRef, { once: true, margin: "-100px" });

    const copyToClipboard = async (value, id) => {
        try {
            await navigator.clipboard.writeText(value);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <SEOMeta
                title="Company Profile - Export Desi"
                description="Export Desi is a merchant export management operation based in Gurgaon, India, specializing in Indian food ingredients."
            />

            {/* Print Styles */}
            <style>{`
                @media print {
                    .no-print { display: none !important; }
                    .print-break-inside { break-inside: avoid; }
                    body { background: white !important; }
                    .page-container { max-width: 100% !important; padding: 0 !important; }
                }
            `}</style>

            {/* Hero with parallax effect */}
            <motion.section
                style={{ opacity: heroOpacity, y: heroY }}
                className="bg-gradient-to-br from-white via-surface to-surface/50"
            >
                <HeroSection
                    label="Company Profile"
                    title="Export Desi"
                    subtitle="Merchant Export Management for Indian Food Ingredients"
                    primaryCTA={{ label: 'Submit Requirement', href: '/contact' }}
                    secondaryCTA={{ label: 'View Products', href: '/industries/food-ingredients' }}
                    background="white"
                />
            </motion.section>

            {/* Quick Actions - Animated entrance */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-surface border-b border-border no-print -mt-8 relative z-10"
            >
                <div className="page-container section-pad">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <ActionButton
                            icon={
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                </svg>
                            }
                            label="Download PDF"
                            onClick={handlePrint}
                            variant="primary"
                        />
                        <ActionButton
                            icon={
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            }
                            label="Call"
                            href="tel:+919289790283"
                        />
                        <ActionButton
                            icon={
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                            }
                            label="WhatsApp"
                            href="https://wa.me/919289790283"
                        />
                        <ActionButton
                            icon={
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            }
                            label="Email Inquiry"
                            href="mailto:inquiry@exportdesi.com"
                        />
                    </div>
                </div>
            </motion.section>

            {/* About Section - Fade in */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="bg-white border-b border-border print-break-inside"
            >
                <div className="page-container section-pad">
                    <div className="max-w-3xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="section-label"
                        >
                            About Export Desi
                        </motion.p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Structured Export Execution from India
                        </h2>
                        <p className="text-muted leading-relaxed mb-4">
                            Export Desi is a merchant export management operation based in Gurgaon, Haryana, India.
                            Established in 2013, we specialize in international B2B supply of Indian food ingredients.
                        </p>
                        <p className="text-muted leading-relaxed mb-4">
                            We work directly with processing units across India, qualifying processors on FSSAI compliance,
                            export documentation track record, mechanical grading capability, and moisture-controlled storage.
                            Processors who do not meet all four criteria are not used.
                        </p>
                        <p className="text-muted leading-relaxed">
                            Our team handles processor qualification, pre-dispatch verification, documentation alignment,
                            and port coordination for international buyers sourcing Indian food ingredients.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Certifications - Staggered grid with hover effects */}
            <motion.section
                ref={certificationsRef}
                initial="hidden"
                animate={isCertsVisible ? "visible" : "hidden"}
                variants={staggerContainer}
                className="bg-gradient-to-b from-surface to-white border-b border-border print-break-inside"
            >
                <div className="page-container section-pad">
                    <motion.p
                        variants={fadeInUp}
                        className="section-label"
                    >
                        Certifications & Compliance
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl md:text-3xl font-bold mb-8"
                    >
                        Registered & Compliant
                    </motion.h2>
                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {certifications.map((cert) => (
                            <motion.div
                                key={cert.name}
                                variants={scaleIn}
                                whileHover={{ scale: 1.03, y: -4 }}
                                onClick={() => copyToClipboard(cert.value, cert.name)}
                                className="bg-white p-5 rounded-xl border border-border cursor-pointer hover:border-brand hover:shadow-lg transition-all duration-300 print-break-inside group"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-1">
                                            {cert.name}
                                        </p>
                                        <p className="text-sm font-mono font-semibold text-brand break-all group-hover:text-brand-light transition-colors">
                                            {cert.value}
                                        </p>
                                        <p className="text-xs text-muted mt-2">{cert.label}</p>
                                    </div>
                                    <CopyIcon copied={copiedId === cert.name} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Products Section - Card grid with icons */}
            <motion.section
                ref={productsRef}
                initial="hidden"
                animate={isProductsVisible ? "visible" : "hidden"}
                variants={staggerContainer}
                className="bg-white border-b border-border print-break-inside"
            >
                <div className="page-container section-pad">
                    <motion.p
                        variants={fadeInUp}
                        className="section-label"
                    >
                        Product Portfolio
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl md:text-3xl font-bold mb-8"
                    >
                        What We Export
                    </motion.h2>
                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {products.map((product, index) => (
                            <motion.div
                                key={product.category}
                                variants={fadeInUp}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isProductsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.01, y: -4 }}
                                className="bg-white rounded-xl border border-border overflow-hidden hover:border-brand/50 hover:shadow-lg transition-all duration-300 print-break-inside"
                            >
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.category}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold drop-shadow-lg">
                                        {product.category}
                                    </h3>
                                </div>
                                <div className="p-5 space-y-2">
                                    <p className="text-sm text-muted">
                                        <span className="font-semibold text-brand">Origin:</span> {product.origin}
                                    </p>
                                    <p className="text-sm text-muted">
                                        <span className="font-semibold text-brand">Grades:</span> {product.grades}
                                    </p>
                                    <p className="text-sm text-muted leading-relaxed">{product.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Contact Section - Split layout */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
                className="bg-gradient-to-b from-surface to-white border-b border-border print-break-inside"
            >
                <div className="page-container section-pad">
                    <motion.p
                        variants={fadeInUp}
                        className="section-label"
                    >
                        Contact Information
                    </motion.p>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl md:text-3xl font-bold mb-8"
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <motion.div variants={fadeInUp}>
                            <h3 className="font-bold mb-4">Corporate Office</h3>
                            <address className="not-italic text-muted leading-relaxed">
                                <p>412A, Vipul Business Park,</p>
                                <p>Sector 48, Gurgaon,</p>
                                <p>Haryana, India 122018</p>
                            </address>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <h3 className="font-bold mb-4">Direct Contact</h3>
                            <div className="space-y-3 text-muted">
                                <p className="flex items-center gap-2 group">
                                    <svg className="w-4 h-4 text-muted group-hover:text-brand transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href="tel:+919289790283" className="hover:text-brand transition-colors">+91 9289790283</a>
                                </p>
                                <p className="flex items-center gap-2 group">
                                    <svg className="w-4 h-4 text-muted group-hover:text-brand transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:inquiry@exportdesi.com" className="hover:text-brand transition-colors">inquiry@exportdesi.com</a>
                                </p>
                                <p className="flex items-center gap-2 group">
                                    <svg className="w-4 h-4 text-muted group-hover:text-brand transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    <a href="https://exportdesi.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">exportdesi.com</a>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Footer Note - Centered with subtle background */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-brand/5 via-brand/10 to-brand/5 print-break-inside"
            >
                <div className="page-container section-pad">
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-muted text-sm leading-relaxed">
                            Export Desi is committed to structured, compliant, and reliable export execution.
                            Every shipment includes complete documentation: Commercial Invoice, Packing List,
                            Certificate of Origin, Phytosanitary Certificate, and third-party lab reports.
                        </p>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
