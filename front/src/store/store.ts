import { supportApi } from "@/features/support/api/support.api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { alertReducer } from "./slices/alert";
import { authReducer } from "./slices/auth";
import { authApi } from "@/features/auth/api/auth.api";

export const store = configureStore({
  reducer: {
    alertReducer,
    authReducer,
    [supportApi.reducerPath]: supportApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supportApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
