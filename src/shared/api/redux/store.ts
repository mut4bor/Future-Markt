import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import sideMenu from './slices/sideMenu';
import currencyApi from './slices/apiSlice';
import { userDataMiddleware } from './slices/sideMenu';

export const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    sideMenu: sideMenu,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currencyApi.middleware, userDataMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
