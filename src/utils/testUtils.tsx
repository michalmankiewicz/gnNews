import React, { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../i18n';
import { Provider } from 'react-redux';
import store from '../store/index';
import { createEmotionCache, MantineProvider } from '@mantine/core';
import { vitest } from 'vitest';

const appendCache = createEmotionCache({ key: 'mantine', prepend: false });

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vitest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vitest.fn(), // deprecated
    removeListener: vitest.fn(), // deprecated
    addEventListener: vitest.fn(),
    removeEventListener: vitest.fn(),
    dispatchEvent: vitest.fn(),
  })),
});

global.ResizeObserver = vitest.fn().mockImplementation(() => ({
  observe: vitest.fn(),
  unobserve: vitest.fn(),
  disconnect: vitest.fn(),
}));

function TestWrapper(props: PropsWithChildren) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider emotionCache={appendCache} withGlobalStyles withNormalizeCSS>
          {props.children}
        </MantineProvider>
      </BrowserRouter>
      ;
    </Provider>
  );
}

export default TestWrapper;
