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
        popup: {
          challenging: {
            title: 'What was the most challenging for me?',
            content: `Due to my familiarity with the tech stack, there weren't many things that posed significant challenges for me, but I definitely spent the most time perfecting the UI and making the page fully responsive.`,
          },
          enjoyable: {
            title: 'What was the most enjoyable for me?',
            content:
              'Overall, creating the entire website was a lot of fun, but playing with RTK Query was the most enjoyable.',
          },
        },
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
        popup: {
          challenging: {
            title: 'Co sprawiło mi najwięszką trudność?',
            content:
              'Ze względu na moje doświadczenie z tym tech stackiem, nie było wiele rzeczy, które stanowiły dla mnie znaczące wyzwania, ale z pewnością najwięcej czasu poświęciłem na dopracowanie interfejsu użytkownika i sprawienie, że strona jest w pełni responsywna.',
          },
          enjoyable: {
            title: 'Co sprawiło mi największą frajdę?',
            content:
              'Generalnie stworzenie całej strony sprawiło mi dużą przyjemność, ale najbardziej zabawa z RTK Query.',
          },
        },
        numberOfNews: 'Liczba artykułów:',
      },
    },
  },
});

export default i18next;
