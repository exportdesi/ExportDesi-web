import SEOMeta from '../components/SEOMeta';
import { Helmet } from 'react-helmet-async';
import { MotionSection } from '../components/MotionWrapper';
import { Link } from 'react-router-dom';

export default function InfoPage() {
    return (
        <>
            <SEOMeta
                title="Export Desi - Company Snapshot"
                description="Indian food ingredients export management. FSSAI, APEDA, Spice Board certified. Download company profile."
            />
            <Helmet>
                <link rel="canonical" href="https://exportdesi.com/info" />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <MotionSection className="bg-white" variant="fadeUp">
                <div className="page-container section-pad">
                    <div className="max-w-2xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <img
                                className="h-12 w-auto mx-auto mb-6"
                                src="/ExportDesi-logo.png"
                                alt="Export Desi"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <span className="hidden text-brand font-black text-2xl tracking-tight block mb-6">
                                Export Desi
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                Indian Food Ingredients Export Partner
                            </h1>
                            <p className="text-muted text-lg">
                                From Processor to Port: Single-Point Export Management
                            </p>
                        </div>

                        {/* Company Profile Download */}
                        <div className="bg-surface rounded-lg p-8 mb-8 text-center">
                            <h2 className="text-xl font-bold mb-3">Download Company Profile</h2>
                            <p className="text-muted mb-6">
                                Complete overview of our products, certifications, and capabilities
                            </p>
                            <a
                                href="/Export-Desi(Company-Profile).pdf"
                                download
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Company Profile PDF
                            </a>
                            <p className="text-xs text-muted mt-4">
                                Also available in <Link to="/company-profile" className="text-brand underline">view-only format</Link>
                            </p>
                        </div>

                        {/* What We Do */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-4">What We Do</h2>
                            <div className="bg-white border border-border rounded-lg p-6">
                                <p className="text-base leading-relaxed mb-4">
                                    Export Desi is a merchant export management operation based in Gurgaon, India. We manage processor qualification, documentation, and shipment coordination for Indian food ingredients.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-brand font-bold">✓</span>
                                        <span className="text-base">Processor qualification and verification</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-brand font-bold">✓</span>
                                        <span className="text-base">Export documentation and compliance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-brand font-bold">✓</span>
                                        <span className="text-base">Shipment coordination from order to Bill of Lading</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-brand font-bold">✓</span>
                                        <span className="text-base">Single point of contact for international buyers</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-4">Certifications & Registrations</h2>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white border border-border rounded-lg p-4 text-center">
                                    <p className="text-xs text-muted mb-1">FSSAI License</p>
                                    <p className="font-mono text-sm font-semibold">10824999000454</p>
                                </div>
                                <div className="bg-white border border-border rounded-lg p-4 text-center">
                                    <p className="text-xs text-muted mb-1">APEDA RCMC</p>
                                    <p className="font-mono text-sm font-semibold">06757/2024-2025</p>
                                </div>
                                <div className="bg-white border border-border rounded-lg p-4 text-center">
                                    <p className="text-xs text-muted mb-1">Spice Board</p>
                                    <p className="font-mono text-sm font-semibold">CRES/SBCB/23080/2024</p>
                                </div>
                                <div className="bg-white border border-border rounded-lg p-4 text-center">
                                    <p className="text-xs text-muted mb-1">IE Code</p>
                                    <p className="font-mono text-sm font-semibold">ALYPD9414C</p>
                                </div>
                                <div className="bg-white border border-border rounded-lg p-4 text-center">
                                    <p className="text-xs text-muted mb-1">GST</p>
                                    <p className="font-mono text-sm font-semibold">06ALYPD9414C1Z1</p>
                                </div>
                                <div className="bg-white border border-border rounded-lg p-4 text-center">
                                    <p className="text-xs text-muted mb-1">FIEO</p>
                                    <p className="font-mono text-sm font-semibold">13083/2025-2026</p>
                                </div>
                            </div>
                        </div>

                        {/* Product Categories */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold mb-4">Product Categories</h2>
                            <div className="space-y-3">
                                <Link to="/industries/food-ingredients/makhana" className="block bg-white border border-border rounded-lg p-4 hover:border-brand transition-colors">
                                    <p className="font-bold">Makhana (Fox Nuts)</p>
                                    <p className="text-sm text-muted">Four size grades from Bihar's Mithila cluster</p>
                                </Link>
                                <Link to="/industries/food-ingredients/dehydrated-ingredients" className="block bg-white border border-border rounded-lg p-4 hover:border-brand transition-colors">
                                    <p className="font-bold">Dehydrated Onion & Garlic</p>
                                    <p className="text-sm text-muted">Flakes, minced, granules, powder from Gujarat</p>
                                </Link>
                                <Link to="/industries/food-ingredients/moringa" className="block bg-white border border-border rounded-lg p-4 hover:border-brand transition-colors">
                                    <p className="font-bold">Moringa Products</p>
                                    <p className="text-sm text-muted">Leaf powder, capsules, tablets</p>
                                </Link>
                                <Link to="/industries/bags" className="block bg-white border border-border rounded-lg p-4 hover:border-brand transition-colors">
                                    <p className="font-bold">Jute & Non-Woven Bags</p>
                                    <p className="text-sm text-muted">Eco-friendly packaging solutions</p>
                                </Link>
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-brand text-white rounded-lg p-8 text-center">
                            <h2 className="text-xl font-bold mb-3">Have a Sourcing Requirement?</h2>
                            <p className="text-white/80 mb-6">
                                Send us your product specifications, destination market, and target volume.
                                We respond with indicative pricing within 48 hours.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link to="/contact" className="btn-white">
                                    Request a Quote
                                </Link>
                                <a href="https://wa.me/919289790283" target="_blank" rel="noopener noreferrer" className="btn-white/20">
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="mt-8 text-center">
                            <p className="text-sm text-muted mb-2">
                                <strong>Export Desi</strong> | Gurgaon, Haryana, India
                            </p>
                            <p className="text-sm">
                                <a href="mailto:contact@exportdesi.com" className="text-brand underline">contact@exportdesi.com</a>
                                {' | '}
                                <a href="tel:+919289790283" className="text-brand underline">+91 9289790283</a>
                            </p>
                        </div>
                    </div>
                </div>
            </MotionSection>
        </>
    );
}
