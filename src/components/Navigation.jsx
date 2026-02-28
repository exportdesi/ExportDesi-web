import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_LINKS = [
    { label: 'Food & Ingredients', href: '/industries/food-ingredients', isActive: (p) => p.startsWith('/industries') && p !== '/industries' },
    { label: 'Industries', href: '/industries', isActive: (p) => p === '/industries' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'About', href: '/about' },
];

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-border sticky top-0 z-40">
            <div className="page-container">
                <div className="flex justify-between items-center h-18 py-4">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            className="h-12 w-auto"
                            src="/ExportDesi-logo.png"
                            alt="Export Desi"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <span
                            className="hidden text-brand font-black text-lg tracking-tight"
                            style={{ display: 'none' }}
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
                                className={({ isActive: defaultActive, location: _l }) => {
                                    const resolved = link.isActive
                                        ? link.isActive(window.location.pathname)
                                        : defaultActive;
                                    return `text-sm font-medium transition-colors ${resolved
                                        ? 'text-brand border-b-2 border-brand pb-0.5'
                                        : 'text-muted hover:text-brand'
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
                                        ? link.isActive(window.location.pathname)
                                        : defaultActive;
                                    return `block px-3 py-2.5 text-sm font-medium rounded transition-colors ${resolved ? 'bg-surface text-brand' : 'text-muted hover:text-brand'}`;
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
