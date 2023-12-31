import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import userSlice from "./features/userSlice";
import { baseAuthApi } from "./services/baseAuthApi";
import { baseApi } from "./services/baseApi";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/lib/persistStore";

const rootReducer = combineReducers({ cartSlice, userSlice });
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const reducers = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: {
    reducers,
    [baseApi.reducerPath]: baseApi.reducer,
    [baseAuthApi.reducerPath]: baseAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      baseApi.middleware,
      baseAuthApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
