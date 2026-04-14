/* eslint-disable react-refresh/only-export-components */
import { motion, useReducedMotion } from 'framer-motion';

// Animation variants - reusable across all pages
export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

export const staggerGrid = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
};

// Section wrapper with scroll-triggered animation
export function MotionSection({ children, className = '', variant = 'fadeUp', delay = 0 }) {
    const shouldReduceMotion = useReducedMotion();
    const variantMap = {
        fadeUp: fadeInUp,
        fadeIn,
        scaleIn,
        slideInLeft,
        slideInRight,
    };

    // Disable animations for users who prefer reduced motion
    if (shouldReduceMotion) {
        return <section className={className}>{children}</section>;
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variantMap[variant] || fadeInUp}
            className={className}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </motion.section>
    );
}

// Card wrapper with hover effects
export function MotionCard({ children, className = '', whileHover = { scale: 1.02, y: -4 } }) {
    const shouldReduceMotion = useReducedMotion();

    // Disable animations for users who prefer reduced motion
    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            whileHover={whileHover}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`${className} shadow-sm hover:shadow-xl`}
        >
            {children}
        </motion.div>
    );
}

// Image with reveal animation
export function MotionImage({ src, alt, className = '', overlay = false, priority = false }) {
    const shouldReduceMotion = useReducedMotion();

    // Disable animations for users who prefer reduced motion
    if (shouldReduceMotion) {
        return (
            <div className={`relative overflow-hidden ${className}`}>
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    loading={priority ? "eager" : "lazy"}
                    fetchPriority={priority ? "high" : "auto"}
                />
                {overlay && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                )}
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`relative overflow-hidden ${className}`}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : "auto"}
            />
            {overlay && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </motion.div>
    );
}

export default {
    fadeInUp,
    fadeIn,
    scaleIn,
    slideInLeft,
    slideInRight,
    staggerContainer,
    staggerGrid,
    MotionSection,
    MotionCard,
    MotionImage,
};
