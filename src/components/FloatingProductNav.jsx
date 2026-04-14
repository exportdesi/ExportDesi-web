import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FloatingProductNav - Fixed navigation for related products/pages
 * Desktop: Right-side floating links
 * Mobile: Fixed bottom navigation bar
 * 
 * @param {string} hideOnId - If this element ID is in view, the mobile bar hides
 * @param {boolean} simple - If true, shows only the label (primary text) for items
 */
export default function FloatingProductNav({ items, products, currentPath, categoryLabel = 'Related', hideOnId, simple = true }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    // Filter out the current page - handle both prop names for resilience
    const navItems = items || products || [];
    const relatedItems = navItems.filter(p => p.href !== currentPath);

    // Scroll-aware visibility for mobile
    useEffect(() => {
        if (!hideOnId || typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the target element is visible, hide the nav
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when 10% of the target is visible
        );

        const target = document.getElementById(hideOnId);
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) observer.unobserve(target);
            observer.disconnect();
        };
    }, [hideOnId]);

    return (
        <>
            {/* Desktop - Right side floating links (only if items present) */}
            {relatedItems.length > 0 && (
                <motion.div
                    className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Category Label */}
                    <div className="text-right mb-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand">{categoryLabel}</p>
                    </div>

                    {/* Links */}
                    <div className={`flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
                        {relatedItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="group flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 hover:border-brand/50 hover:bg-white hover:shadow-lg transition-all"
                            >
                                <div className="flex-1">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-brand">{item.label}</p>
                                    <p className="text-xs font-semibold text-brand group-hover:text-brand/80">{item.name}</p>
                                </div>
                                <svg className="w-4 h-4 text-muted group-hover:text-brand group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Mobile - Fixed bottom navigation (Always visible for contact buttons) */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-surface border-t border-border shadow-lg"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <div className="px-4 py-2">
                            {/* Related items row - only if present */}
                            {relatedItems.length > 0 && (
                                <>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-brand mb-2 text-center">{categoryLabel}</p>
                                    <div className="flex gap-2 justify-center pb-2">
                                        {relatedItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                to={item.href}
                                                className="flex-1 max-w-[140px] flex flex-col items-center justify-center gap-1 bg-white border border-border rounded-lg px-2.5 py-2.5 active:bg-brand active:text-white transition-all overflow-hidden"
                                                aria-label={`Go to ${item.name}`}
                                            >
                                                {simple ? (
                                                    <p className="text-[9px] font-bold uppercase tracking-wider text-brand text-center leading-tight truncate w-full">{item.label}</p>
                                                ) : (
                                                    <>
                                                        <p className="text-[8px] font-bold uppercase tracking-wider text-brand text-center truncate w-full">{item.label}</p>
                                                        <p className="text-[9px] font-semibold text-center leading-tight truncate w-full">{item.name}</p>
                                                    </>
                                                )}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            )}

                    {/* 3-Button Action Row */}
                    <div className={`grid grid-cols-3 gap-2 justify-center ${relatedItems.length > 0 ? 'pt-1 border-t border-border mt-1' : ''}`}>
                        <a
                            href="mailto:inquiry@exportdesi.com"
                            className="flex items-center justify-center gap-2 bg-brand text-white border border-brand rounded-lg px-2 py-2.5 active:opacity-90 transition-all font-semibold"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[10px] font-bold uppercase tracking-wider">Email</span>
                        </a>

                        <a
                            href="https://wa.me/919289790283"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#25D366] text-white border border-[#25D366] rounded-lg px-2 py-2.5 active:opacity-80 transition-all font-semibold"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.066.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z" />
                            </svg>
                            <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
                        </a>

                        <Link
                            to="/contact"
                            className="flex items-center justify-center gap-2 bg-brand text-white border border-brand rounded-lg px-2 py-2.5 active:opacity-90 transition-all font-semibold"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-[10px] font-bold uppercase tracking-wider">Get Quote</span>
                        </Link>
                    </div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
</>
);
}
