import { OrderType } from "../../types/mongoTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    fetchAllOrders: builder.query<OrderType[], { userId: string | undefined }>({
      query: ({ userId }) => `/api/orders/${userId}`,
    }),
  }),
});

export const { useFetchAllOrdersQuery } = orderApi;
