import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to React Native Template',
      getStarted: 'Get started by editing src/screens/HomeScreen.tsx',
      start: 'Start',
      settings: 'Settings',
      language: 'Language',
      english: 'English',
      french: 'French',
      home: 'Home',
      back: 'Back',
    },
  },
  fr: {
    translation: {
      welcome: 'Bienvenue dans le Template React Native',
      getStarted: 'Commencez par éditer src/screens/HomeScreen.tsx',
      start: 'Commencer',
      settings: 'Paramètres',
      language: 'Langue',
      english: 'Anglais',
      french: 'Français',
      home: 'Accueil',
      back: 'Retour',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 