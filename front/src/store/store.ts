import { supportApi } from "@/features/support/api/support.api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { alertReducer } from "./slices/alert";

export const store = configureStore({
  reducer: {
    alertReducer,
    [supportApi.reducerPath]: supportApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supportApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
