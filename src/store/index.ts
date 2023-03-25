import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from '../api/countriesApiSlice';
import optionsReducer from './options/optionsSlice';

const store = configureStore({
  reducer: {
    options: optionsReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
