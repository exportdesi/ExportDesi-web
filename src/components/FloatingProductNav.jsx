import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * FloatingProductNav - Fixed navigation for related products/pages
 * Desktop: Right-side floating links
 * Mobile: Fixed bottom navigation bar
 */
export default function FloatingProductNav({ items, currentPath, categoryLabel = 'Related' }) {
    const [isHovered, setIsHovered] = useState(false);

    // Filter out the current page
    const relatedItems = items.filter(p => p.href !== currentPath);

    if (relatedItems.length === 0) return null;

    return (
        <>
            {/* Desktop - Right side floating links */}
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

            {/* Mobile - Fixed bottom navigation */}
            <motion.div
                className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-border shadow-lg"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
            >
                <div className="px-4 py-2">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-brand mb-2 text-center">{categoryLabel}</p>
                    <div className="flex gap-2 justify-center pb-2">
                        {relatedItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="flex-1 max-w-[140px] flex flex-col items-center gap-1 bg-surface border border-border rounded-lg px-3 py-2.5 active:bg-brand active:text-white transition-all"
                            >
                                <p className="text-[9px] font-bold uppercase tracking-wider text-brand text-center">{item.label}</p>
                                <p className="text-[10px] font-semibold text-center leading-tight">{item.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
}
