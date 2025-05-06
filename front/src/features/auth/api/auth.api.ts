import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginCredentials, LoginResponse } from "./auth.type";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
