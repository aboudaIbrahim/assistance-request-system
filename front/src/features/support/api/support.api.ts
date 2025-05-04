import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SupportRequest } from "@/types/support";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const supportApi = createApi({
  reducerPath: "supportApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Support"],
  endpoints: (builder) => ({
    fetchRequests: builder.query<SupportRequest[], void>({
      query: () => "requests",
      providesTags: ["Support"],
    }),
    createRequest: builder.mutation<void, SupportRequest>({
      query: (data) => ({
        url: "requests/add-new-request",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Support"],
    }),
    updateStatus: builder.mutation<
      void,
      { id: string; status: "approved" | "rejected"; adminComment: string }
    >({
      query: ({ id, ...rest }) => ({
        url: `requests`,
        method: "PUT",
        body: { id, ...rest },
      }),
      invalidatesTags: ["Support"],
    }),
  }),
});

export const {
  useFetchRequestsQuery,
  useCreateRequestMutation,
  useUpdateStatusMutation,
} = supportApi;
