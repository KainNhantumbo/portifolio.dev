'use client';

import i18next from 'i18next';
import pt_BR from './languages/pt_BR.json';
import en_US from './languages/en_US.json';
import { initReactI18next } from 'react-i18next';

export default i18next.use(initReactI18next).init({
  debug: false,
  lng: 'en',
  partialBundledLanguages: false,
  fallbackLng: ['en', 'pt'],
  interpolation: { escapeValue: false },
  resources: {
    pt: { translation: pt_BR },
    en: { translation: en_US }
  }
});

export const rawTranslation = i18next.t;
