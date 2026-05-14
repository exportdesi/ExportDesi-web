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
    {
        heading: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms & Conditions', href: '/terms-and-conditions' },
            { label: 'Disclaimer', href: '/disclaimer' },
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
                            <div className="flex flex-col gap-0.5">
                                <a href="tel:+919289790283" className="hover:text-white transition-colors">
                                    +91 928 979 0283
                                </a>
                                <a href="tel:+918796440283" className="hover:text-white transition-colors">
                                    +91 879 644 0283
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            <a href="https://www.facebook.com/ExportDesi" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/export_desi/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://in.linkedin.com/company/exportdesi" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                            </a>
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
                <p className="text-[10px] text-white/30 mt-4 max-w-2xl">
                    Images sourced from verified vendors, AI-generated tools, and publicly available sources. Used for informational and promotional purposes. Contact us regarding copyright concerns.
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
            className="bg-[#25D366] text-white p-2.5 md:p-3 rounded-md shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366] focus-visible:ring-offset-4"
            aria-label="Chat on WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
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
            className={`bg-white text-brand p-2.5 md:p-3 rounded-md shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </button>
    );
}

function ContactButton() {
    return (
        <a
            href="/contact"
            className="bg-brand text-white p-2.5 md:p-3 rounded-md shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
            aria-label="Contact us"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        </a>
    );
}
