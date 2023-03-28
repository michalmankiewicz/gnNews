import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { MantineProvider, createEmotionCache } from '@mantine/core';
import { emotionCache } from './utils/emotionCache';
import { Provider } from 'react-redux';
import store from './store';

const appendCache = createEmotionCache({ key: 'mantine', prepend: false });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider
          emotionCache={appendCache}
          theme={{
            colors: {
              brand: [
                '#DDDFC9',
                '#D0D4AD',
                '#C9CF8F',
                '#C5CF70',
                '#C8D54C',
                '#D1E324',
                '#D5EB04',
                '#AFBF18',
                '#919D25',
                '#7A822C',
              ],
            },
            primaryColor: 'brand',
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <React.Suspense>
            <App />
          </React.Suspense>
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
