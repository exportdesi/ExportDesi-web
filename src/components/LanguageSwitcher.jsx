import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const LANGUAGES = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export default function LanguageSwitcher({ variant = 'desktop' }) {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    if (variant === 'mobile') {
        return (
            <div className="py-2 border-t border-border mt-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-3 px-3">Select Language</p>
                <div className="grid grid-cols-3 gap-2 px-3">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${
                                i18n.language === lang.code 
                                    ? 'bg-brand text-white border-brand' 
                                    : 'bg-surface text-brand border-transparent hover:border-brand/30'
                            }`}
                        >
                            <span className="text-lg mb-1">{lang.flag}</span>
                            <span className="text-[10px] font-medium">{lang.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 group focus:outline-none"
                aria-label="Change language"
            >
                <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center border border-border group-hover:border-brand/40 transition-colors">
                    <span className="text-sm">{currentLang.flag}</span>
                </div>
                <svg 
                    className={`w-3 h-3 text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-0 mt-3 w-40 bg-white border border-border rounded-xl shadow-xl overflow-hidden z-50"
                    >
                        <div className="py-1">
                            {LANGUAGES.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-surface ${
                                        i18n.language === lang.code ? 'text-brand font-bold' : 'text-muted'
                                    }`}
                                >
                                    <span>{lang.flag}</span>
                                    <span>{lang.label}</span>
                                    {i18n.language === lang.code && (
                                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-brand" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
