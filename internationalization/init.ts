import pt_BR from './languages/pt_BR.json';
import en_US from './languages/en_US.json';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export default i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources: { pt: { translation: pt_BR }, en: { translation: en_US } },
  });
