import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const countriesApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  tagTypes: ['Countries'],
  endpoints: (builder) => ({
    getCountriesByRegion: builder.query({
      query: (region: string) => `/region/${region}`,
    }),
  }),
});

export const { useGetCountriesByRegionQuery } = countriesApi;
