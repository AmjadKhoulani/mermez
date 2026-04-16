import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';
import trTranslation from './locales/tr/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
      tr: { translation: trTranslation }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Set initial direction
document.documentElement.dir = i18n.dir();
document.documentElement.lang = i18n.language;

// Update direction based on language
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = i18n.dir(lng);
  document.documentElement.lang = lng;
});

export default i18n;
