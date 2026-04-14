import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NAV_LINKS = [
    { label: 'Food & Ingredients', href: '/industries/food-ingredients', isActive: (p) => p.startsWith('/industries/food-ingredients') },
    { label: 'Bags & Packaging', href: '/industries/bags', isActive: (p) => p.startsWith('/industries/bags') },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'About', href: '/about' },
];

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="bg-white border-b border-border sticky top-0 z-40" aria-label="Main navigation">
            <div className="page-container">
                <div className="flex justify-between items-center h-20">
                    {/* Logo + Wordmark */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 pr-4">
                        <img
                            className="h-14 w-auto"
                            src="/ExportDesi-logo.png"
                            alt="Export Desi"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                        <span
                            className="font-normal leading-none whitespace-nowrap text-brand"
                            style={{ fontFamily: "'Righteous', cursive", fontSize: '1.5rem', textTransform: 'capitalize', letterSpacing: '-0.01em' }}
                        >
                            Export Desi
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.href}
                                to={link.href}
                                end
                                className={({ isActive: defaultActive }) => {
                                    const resolved = link.isActive
                                        ? link.isActive(location.pathname)
                                        : defaultActive;
                                    return `text-sm font-medium transition-all duration-150 border-b-2 pb-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                                        resolved
                                            ? 'text-brand border-brand'
                                            : 'text-muted border-transparent hover:text-brand hover:border-brand/40 focus-visible:text-brand'
                                    }`;
                                }}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            className="btn-primary text-xs tracking-wide"
                        >
                            Request Export Details
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 text-brand"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle navigation"
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-border bg-white">
                    <div className="page-container py-4 flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.href}
                                to={link.href}
                                end
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive: defaultActive }) => {
                                    const resolved = link.isActive
                                        ? link.isActive(location.pathname)
                                        : defaultActive;
                                    return `block px-3 py-2.5 text-sm font-medium rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                                        resolved
                                            ? 'bg-surface text-brand'
                                            : 'text-muted hover:text-brand focus-visible:text-brand'
                                    }`;
                                }}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <div className="pt-3 border-t border-border mt-2">
                            <Link
                                to="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="btn-primary block text-center text-xs tracking-wide"
                            >
                                Request Export Details
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

function MenuIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}
