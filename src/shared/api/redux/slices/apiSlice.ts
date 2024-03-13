import { API_URL } from 'shared/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CurrencyData } from './types';

const currencyApi = createApi({
  reducerPath: 'currencyApi',

  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: (builder) => ({
    getDailyJson: builder.query<CurrencyData, void>({
      query: () => ({
        url: '/daily_json.js',
      }),
    }),
  }),
});

export const { useGetDailyJsonQuery } = currencyApi;

export default currencyApi;
