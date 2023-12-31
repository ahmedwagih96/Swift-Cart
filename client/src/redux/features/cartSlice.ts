import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemType } from "../../types/mongoTypes";

interface CartState {
  isCartOpen: boolean;
  cart: ItemType[];
  totalPrice: number;
}

const initialState: CartState = {
  isCartOpen: false,
  cart: [],
  totalPrice: 0,
};

const addItemToCart = (
  cart: ItemType[],
  { item, count }: { item: ItemType; count: number }
) => {
  let isItemExistInCart = false;
  cart.forEach((cartItem) => {
    if (cartItem._id === item._id) {
      if (cartItem.count) cartItem.count += count;
      isItemExistInCart = true;
    }
  });

  if (!isItemExistInCart) {
    cart.push({ ...item, count });
  }

  return cart;
};

const calculateTotalPrice = (cart: ItemType[]) => {
  return cart.reduce((acc, curr) => acc + curr.price * (curr.count || 0), 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ item: ItemType; count: number }>
    ) => {
      state.cart = addItemToCart(state.cart, action.payload);
      state.totalPrice = Number(calculateTotalPrice(state.cart).toFixed(2));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      state.totalPrice = Number(calculateTotalPrice(state.cart).toFixed(2));
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    increaseCount: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload) {
          if (item.count) item.count++;
        }
        return item;
      });
      state.totalPrice = Number(calculateTotalPrice(state.cart).toFixed(2));
    },
    decreaseCount: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload && item.count && item.count > 1) {
          item.count--;
        }
        return item;
      });
      state.totalPrice = Number(calculateTotalPrice(state.cart).toFixed(2));
    },
    resetCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  setIsCartOpen,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
