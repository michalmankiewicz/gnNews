import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from '../api/countriesApiSlice';
import { newsApi } from '../api/newsApiSlice';
import viewReducer from './view/viewSlice';

const store = configureStore({
  reducer: {
    view: viewReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware, newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
