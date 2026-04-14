import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FOOTER_NAV = [
    {
        heading: 'Products',
        links: [
            { label: 'Food & Ingredients', href: '/industries/food-ingredients' },
            { label: 'Makhana (Fox Nuts)', href: '/industries/food-ingredients/makhana' },
            { label: 'Dehydrated Ingredients', href: '/industries/food-ingredients/dehydrated-ingredients' },
            { label: 'Moringa Products', href: '/industries/food-ingredients/moringa' },
            { label: 'Jute & Non-Woven Bags', href: '/industries/bags' },
        ],
    },
    {
        heading: 'Company',
        links: [
            { label: 'How We Work', href: '/how-we-work' },
            { label: 'Compliance', href: '/compliance' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
        ],
    },
];

export default function Footer() {
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';

    return (
        <footer className="bg-brand text-white">
            <div className="page-container pt-16 pb-10">
                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-16">
                    {/* Brand column */}
                    <div>
                        <img
                            className="h-10 w-auto mb-6"
                            src="/ExportDesi-logo.png"
                            alt="Export Desi"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <span className="hidden text-white font-black text-lg tracking-tight block mb-6">
                            Export Desi
                        </span>
                        <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-8">
                            Structured global export execution from India. Verified processors. Clean documentation. Reliable delivery.
                        </p>
                        {/* Contact */}
                        <div className="space-y-2 text-sm text-white/70">
                            <p>Gurgaon, Haryana, India</p>
                            <a href="mailto:contact@exportdesi.com" className="hover:text-white transition-colors">
                                contact@exportdesi.com
                            </a>
                            <p>
                                <a href="tel:+919289790283" className="hover:text-white transition-colors">
                                    +91 928 979 0283
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Nav columns */}
                    {FOOTER_NAV.map((section) => (
                        <div key={section.heading}>
                            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-5">
                                {section.heading}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            to={link.href}
                                            className="text-sm text-white/70 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <p className="text-xs text-white/50">
                        © {new Date().getFullYear()} Export Desi. All Rights Reserved.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        {['FSSAI Certified', 'APEDA Registered'].map((cert) => (
                            <span key={cert} className="text-xs text-white/60 border border-white/20 px-2.5 py-1">
                                {cert}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Image Disclaimer */}
                <p className="text-[10px] text-white/30 mt-4">
                    Images © respective owners. Sourced from vendors & Unsplash. Contact us to report copyright issues.
                </p>
            </div>

            {/* Floating action buttons - vertical column */}
            {!isContactPage && (
                <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 hidden lg:flex flex-col gap-3 z-50">
                    <ContactButton />
                    <WhatsAppButton />
                    <ScrollToTopButton />
                </div>
            )}
        </footer>
    );
}

function WhatsAppButton() {
    const message = encodeURIComponent('Hi, I have a sourcing requirement I\'d like to discuss.');
    const url = `https://wa.me/919289790283?text=${message}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white p-3.5 rounded-md shadow-lg hover:-translate-y-0.5 transition-transform flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366] focus-visible:ring-offset-4"
            aria-label="Chat on WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.066.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z" fillRule="evenodd" clipRule="evenodd" />
            </svg>
        </a>
    );
}

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`bg-white text-brand p-3.5 rounded-md shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </button>
    );
}

function ContactButton() {
    return (
        <a
            href="/contact"
            className="bg-brand text-white p-3.5 rounded-md shadow-lg hover:-translate-y-0.5 transition-transform flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
            aria-label="Contact us"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        </a>
    );
}
