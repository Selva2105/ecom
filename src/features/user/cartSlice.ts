import { createSlice } from "@reduxjs/toolkit";
import { cardProps } from "../../global.types";

interface productState {
  cart: cardProps[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: productState = {
  cart: [],
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if the item is already in the cart
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item exists, increase its quantity up to a maximum of 10
        if (existingItem.quantity !== undefined && existingItem.quantity < 10) {
          existingItem.quantity += 1;
        }
      } else {
        // If the item is not in the cart, add it with quantity 1
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.cart.find((item) => item.id === id);

      if (itemToUpdate && itemToUpdate.quantity !== undefined) {
        // Update the quantity within the range of 1 to 10
        itemToUpdate.quantity = Math.min(Math.max(quantity, 1), 10);
        itemToUpdate.totalPrice = itemToUpdate.price * itemToUpdate.quantity;
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      // Remove the item from the cart
      state.cart = state.cart.filter((item) => item.id !== itemIdToRemove);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
