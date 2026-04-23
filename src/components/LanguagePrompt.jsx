import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Country to Language Mapping
 * Maps country codes (from IP) to our available language codes.
 */
const COUNTRY_LANG_MAP = {
    // German speaking
    'DE': 'de', 'AT': 'de', 'CH': 'de',
    // Spanish speaking
    'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'CL': 'es', 'PE': 'es',
    // English default for others is handled by fallback
};

export default function LanguagePrompt() {
    const { i18n } = useTranslation();
    const [suggestion, setSuggestion] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Prevent prompting if user has already explicitly set a language
        const hasSetLanguage = localStorage.getItem('i18nextLng_set');
        if (hasSetLanguage) return;

        const checkLocation = async () => {
            try {
                // Use a lightweight, free geolocation API
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                
                const detectedCountry = data.country_code;
                const recommendedLang = COUNTRY_LANG_MAP[detectedCountry];

                // If we have a language for this country and it's not the current one
                if (recommendedLang && recommendedLang !== i18n.language) {
                    setSuggestion({
                        code: recommendedLang,
                        country: data.country_name,
                        label: recommendedLang === 'de' ? 'Deutsch' : 'Español'
                    });
                    
                    // Delay showing the prompt slightly for better UX
                    setTimeout(() => setIsVisible(true), 2000);
                }
            } catch (err) {
                console.error("Location detection failed:", err);
            }
        };

        checkLocation();
    }, [i18n.language]);

    const handleAccept = () => {
        i18n.changeLanguage(suggestion.code);
        localStorage.setItem('i18nextLng_set', 'true');
        setIsVisible(false);
    };

    const handleDismiss = () => {
        localStorage.setItem('i18nextLng_set', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && suggestion && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-50"
                >
                    <div className="bg-brand text-white p-5 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-lg">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                <span className="text-xl">🌐</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-bold mb-1">
                                    {suggestion.code === 'de' ? 'Auf Deutsch anzeigen?' : '¿Ver en Español?'}
                                </h4>
                                <p className="text-xs text-white/80 leading-relaxed mb-4">
                                    It looks like you're browsing from {suggestion.country}. 
                                    Would you like to switch the site language to {suggestion.label}?
                                </p>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleAccept}
                                        className="bg-white text-brand px-4 py-2 rounded-lg text-xs font-bold hover:bg-white/90 transition-colors"
                                    >
                                        Yes, switch
                                    </button>
                                    <button
                                        onClick={handleDismiss}
                                        className="bg-transparent border border-white/30 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-white/10 transition-colors"
                                    >
                                        No, thanks
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
