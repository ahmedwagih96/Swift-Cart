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

const addItemToCart = (cart: ItemType[], item: ItemType) => {
  let isItemExistInCart = false;
  cart.forEach((cartItem) => {
    if (cartItem._id === item._id) {
      if (cartItem.count) cartItem.count++;
      isItemExistInCart = true;
    }
    if (!isItemExistInCart) {
      cart.push({ ...item, count: 1 });
    }
  });
  return cart;
};

const calculateTotalPrice = (cart: ItemType[]) => {
  return cart.reduce((acc, curr) => acc + curr.price * (curr.count || 0), 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ItemType>) => {
      state.cart = addItemToCart(state.cart, action.payload);
      state.totalPrice = calculateTotalPrice(state.cart);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      state.totalPrice = calculateTotalPrice(state.cart);
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
      state.totalPrice = calculateTotalPrice(state.cart);
    },

    decreaseCount: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload && item.count && item.count > 1) {
          item.count--;
        }
        return item;
      });
      state.totalPrice = calculateTotalPrice(state.cart);
    },
  },
});

export const {
  setIsCartOpen,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
} = cartSlice.actions;

export default cartSlice.reducer;
