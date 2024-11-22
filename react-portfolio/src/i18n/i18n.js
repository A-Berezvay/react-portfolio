import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//Import the JSON files for translating
import enTranslations from './locales/en/translation.json';
import huTranslations from './locales/hu/translation.json';

const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      hu: {
        translation:huTranslations,
      }
    },
    lng: savedLanguage, // language to use
    fallbackLng: "en", // use en if detected lng is not available

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
