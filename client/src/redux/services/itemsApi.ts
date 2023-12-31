import { ItemType } from "../../types/mongoTypes";
import { baseApi } from "./baseApi";
export const itemApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllItems: builder.query<ItemType[], { category: string }>({
      query: ({ category }) => `/api/items?category=${category}`,
    }),
    fetchItemById: builder.query<ItemType, { id: string }>({
      query: ({ id }) => `/api/items/${id}`,
    }),
  }),
});
export const { useFetchAllItemsQuery, useFetchItemByIdQuery } = itemApi;
