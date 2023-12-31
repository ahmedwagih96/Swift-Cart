import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { setToken, logoutUser } from "../features/userSlice";
import { Mutex } from "async-mutex";

interface RefreshData {
    access_token: string;
  }
  
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as RootState).reducers.userSlice;
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

export const baseAuthApi = createApi({
  reducerPath: "baseAuthApi",
  baseQuery: async (args, api, extraOptions) => {
    await mutex.waitForUnlock();

    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();
        try {
          const refreshResult = await baseQuery(
            "/api/auth/refresh",
            api,
            extraOptions
          );

          if (refreshResult.data) {
            const { access_token } = refreshResult.data as RefreshData;
            api.dispatch(setToken(access_token));
            result = await baseQuery(args, api, extraOptions);
          } else {
            api.dispatch(logoutUser());
          }
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
      }
    }

    return result;
  },
  endpoints: () => ({}),
});
