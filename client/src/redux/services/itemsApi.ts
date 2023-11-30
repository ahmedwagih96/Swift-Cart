import { ItemType } from "../../types/mongoTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const itemApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    fetchAllItems: builder.query<ItemType[], { category: string }>({
      query: ({category}) => `/api/items?category=${category}`,
    }),
    fetchItemById: builder.query<ItemType, { id: string }>({
      query: ({ id }) => `/api/items/${id}`,
    }),
  }),
});

export const { useFetchAllItemsQuery, useFetchItemByIdQuery } = itemApi;
