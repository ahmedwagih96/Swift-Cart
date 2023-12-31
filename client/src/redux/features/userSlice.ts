import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/mongoTypes";

interface UserState {
  user: UserType | null;
  accessToken: string | null;
}

const initialState: UserState = {
  user: null,
  accessToken: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.accessToken = null;
    },
    signIn: (
      state,
      action: PayloadAction<{ user: UserType; token: string }>
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.token;
    },
  },
});

export const { setUser, logoutUser, signIn, setToken } = cartSlice.actions;

export default cartSlice.reducer;
