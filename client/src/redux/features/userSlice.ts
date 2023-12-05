import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/mongoTypes";

interface UserState {
  user: UserType | null;
}

const initialState: UserState = {
  user: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logoutUser } = cartSlice.actions;

export default cartSlice.reducer;
