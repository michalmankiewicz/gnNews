import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const API_KEY = 'cc511f708b114fdbb5d143da7deb1e60';

export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
  tagTypes: ['News'],
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (country = 'us') => `/top-headlines?country=${country}&apiKey=${API_KEY}`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
