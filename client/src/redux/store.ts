import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
export const store = configureStore({
  reducer: {
    cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
