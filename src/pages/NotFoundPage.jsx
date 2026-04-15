import SEOMeta from '../components/SEOMeta';
import { Helmet } from 'react-helmet-async';
import { MotionSection } from '../components/MotionWrapper';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <>
            <SEOMeta
                title="Page Not Found - 404"
                description="The page you're looking for doesn't exist. Browse our products or contact us for assistance."
            />
            <Helmet>
                <link rel="canonical" href="https://exportdesi.com/404" />
            </Helmet>

            <MotionSection className="bg-white min-vh-100 d-flex align-items-center" variant="fadeUp">
                <div className="page-container section-pad">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="section-label">Error</p>
                        <h1 className="text-6xl md:text-8xl font-black text-brand mb-6">404</h1>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
                        <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
                            The page you're looking for doesn't exist or has been moved.
                            Let's get you back on track.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            <Link to="/" className="btn-primary">
                                Go to Homepage
                            </Link>
                            <Link to="/contact" className="btn-secondary">
                                Contact Us
                            </Link>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-surface rounded-lg p-8 text-left">
                            <h3 className="text-lg font-bold mb-4">Browse Our Products</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link to="/industries/food-ingredients/makhana" className="flex items-center gap-3 p-3 rounded hover:bg-white/5 transition-colors">
                                    <span className="text-2xl">🫘</span>
                                    <div>
                                        <p className="font-semibold">Makhana</p>
                                        <p className="text-sm text-muted">Fox nuts from Bihar</p>
                                    </div>
                                </Link>
                                <Link to="/industries/food-ingredients/dehydrated-ingredients" className="flex items-center gap-3 p-3 rounded hover:bg-white/5 transition-colors">
                                    <span className="text-2xl">🧅</span>
                                    <div>
                                        <p className="font-semibold">Dehydrated Onion & Garlic</p>
                                        <p className="text-sm text-muted">Flakes, powder, granules</p>
                                    </div>
                                </Link>
                                <Link to="/industries/food-ingredients/moringa" className="flex items-center gap-3 p-3 rounded hover:bg-white/5 transition-colors">
                                    <span className="text-2xl">🌿</span>
                                    <div>
                                        <p className="font-semibold">Moringa Products</p>
                                        <p className="text-sm text-muted">Powder, capsules, tablets</p>
                                    </div>
                                </Link>
                                <Link to="/industries/bags" className="flex items-center gap-3 p-3 rounded hover:bg-white/5 transition-colors">
                                    <span className="text-2xl">🛍️</span>
                                    <div>
                                        <p className="font-semibold">Jute & Non-Woven Bags</p>
                                        <p className="text-sm text-muted">Eco-friendly packaging</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-8 text-center">
                            <p className="text-muted mb-2">Need help finding something?</p>
                            <p className="text-base">
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
