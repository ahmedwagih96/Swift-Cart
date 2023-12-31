import { baseApi } from "./baseApi";

export const authenticationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/api/auth/signin",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => "/api/auth/signout",
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/api/auth/signup",
        method: "POST",
        body,
      }),
    }),
  }),
});


export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authenticationApi;

