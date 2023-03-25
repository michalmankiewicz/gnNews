import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { countriesApi } from '../api/countriesApiSlice';
import { newsApi } from '../api/newsApiSlice';
import optionsReducer from './options/optionsSlice';

const store = configureStore({
  reducer: {
    options: optionsReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware, newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
