import { createSlice } from "@reduxjs/toolkit";
import { cardProps } from "../../global.types";

// Define the initial state for the cart slice
interface productState {
  cart: cardProps[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Set initial state
const initialState: productState = {
  cart: [],
  status: "idle",
  error: null,
};

// Create a cart slice with reducers for handling cart actions
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart or update its quantity
    addToCart: (state, action) => {
      state.cart.push({
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.price,
      });
    },
    // Update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.cart.find((item) => item.id === id);

      if (itemToUpdate && itemToUpdate.quantity !== undefined) {
        // Update the quantity within the range of 1 to 10
        itemToUpdate.quantity = Math.min(Math.max(quantity, 1), 10);
        itemToUpdate.totalPrice = itemToUpdate.price * itemToUpdate.quantity;
      }
    },
    // Remove an item from the cart
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      // Remove the item from the cart
      state.cart = state.cart.filter((item) => item.id !== itemIdToRemove);
    },
    //Empty the whole cart
    emptyCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

// Export actions for use in components
export const { addToCart, updateQuantity, removeFromCart, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
