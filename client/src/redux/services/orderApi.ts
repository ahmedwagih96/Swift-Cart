// orderApi.ts
import { OrderType } from "../../types/mongoTypes";
import { CartOrder } from "../../types/typing";
import { baseAuthApi } from "./baseAuthApi";

export const orderApi = baseAuthApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllOrders: builder.query<OrderType[], { userId: string | undefined }>({
      query: ({ userId }) => `/api/orders/${userId}`,
    }),
    fetchOrderToken: builder.query<null, { orderToken: string | undefined }>({
      query: ({ orderToken }) => `/api/orderToken/${orderToken}`,
    }),
    makeOrderPayment: builder.mutation<{ id: string }, CartOrder>({
      query: (body) => ({
        url: "/api/orders",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useFetchAllOrdersQuery,
  useFetchOrderTokenQuery,
  useMakeOrderPaymentMutation,
} = orderApi;
