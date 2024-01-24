import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/user/cartSlice";

// Configuring the Redux store with combined reducers
export const store = configureStore({
  reducer: {
    // Products slice reducer for managing product-related state
    products: productReducer,

    // Cart slice reducer for managing user's cart state
    cart: cartReducer,
  },
});


// RootState type represents the type of the entire Redux store state
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch type represents the type of the dispatch function in the store
export type AppDispatch = typeof store.dispatch;
