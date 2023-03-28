import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        viewType: {
          list: 'List',
          tiles: 'Tiles',
        },
        countries: 'Countries',
        aboutMe: 'About me',
        numberOfNews: 'Number of news:',
      },
    },
    pl: {
      translation: {
        viewType: {
          list: 'Lista',
          tiles: 'Kafelki',
        },
        countries: 'Państwa',
        aboutMe: 'O mnie',
        numberOfNews: 'Liczba artykułów:',
      },
    },
  },
});

export default i18next;
