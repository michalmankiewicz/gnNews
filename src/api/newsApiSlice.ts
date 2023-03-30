import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
  tagTypes: ['News'],
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (country = 'us') =>
        `/top-headlines?country=${country}&apiKey=${import.meta.env.VITE_API_KEY}`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
