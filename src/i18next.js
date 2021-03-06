import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const fallbackLng = 'en';
const availableLanguages = ['en', 'mk'];


i18n
    .use(Backend)
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    .init({
        fallbackLng: fallbackLng,
        lng: 'mk',
        debug: false,
        whitelist: availableLanguages,
        keySeparator: '_',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        ns: 'translation'
    });

export default i18n;