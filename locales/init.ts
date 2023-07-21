import i18next from 'i18next';
import pt_BR from './languages/pt_BR.json';
import en_US from './languages/en_US.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: ['en', 'pt'],
    interpolation: { escapeValue: false },
    resources: {
      pt: { translation: pt_BR },
      en: { translation: en_US },
    },
  });

export default i18next;
