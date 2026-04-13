import { motion } from 'framer-motion';

/**
 * ScrollIndicator - Animated bounce arrow that prompts users to scroll down
 * Typically placed below hero content to indicate more content below
 */
export default function ScrollIndicator() {
    return (
        <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
        >
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-1"
            >
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted">Scroll</span>
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </motion.div>
        </motion.div>
    );
}
