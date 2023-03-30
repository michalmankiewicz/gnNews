import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { MantineProvider, createEmotionCache } from '@mantine/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { emotionCache } from './utils/emotionCache';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import { theme } from './utils/theme';

const appendCache = createEmotionCache({ key: 'mantine', prepend: false });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <MantineProvider
            emotionCache={appendCache}
            theme={theme}
            withGlobalStyles
            withNormalizeCSS
          >
            <App />
          </MantineProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ErrorBoundary>
);
