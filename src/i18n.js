import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/**
 * i18next Configuration
 * Supports English (en), German (de), and Spanish (es) by default.
 * Uses browser detection and persists to localStorage.
 */
import enTranslation from '../public/locales/en/translation.json';
import deTranslation from '../public/locales/de/translation.json';
import esTranslation from '../public/locales/es/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator'],
            caches: ['localStorage', 'cookie'],
        },
        resources: {
            en: { translation: enTranslation },
            de: { translation: deTranslation },
            es: { translation: esTranslation }
        }
    });

export default i18n;
