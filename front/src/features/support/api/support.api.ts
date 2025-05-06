import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SupportRequest } from "@/types/support";
import { RootState } from "@/store/store";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const supportApi = createApi({
  reducerPath: "supportApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authReducer.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Support"],
  endpoints: (builder) => ({
    getAllRequests: builder.query<SupportRequest[], void>({
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
      { id: string; status: "Approved" | "Rejected"; adminComment: string }
    >({
      query: ({ id, status, adminComment }) => ({
        url: `/requests/${id}`,
        method: "PATCH",
        body: { status, adminComment },
      }),
      invalidatesTags: ["Support"],
    }),
  }),
});

export const {
  useGetAllRequestsQuery,
  useCreateRequestMutation,
  useUpdateStatusMutation,
} = supportApi;
