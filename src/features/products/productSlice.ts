import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cardProps } from "../../global.types";
import axios from "axios";

// Define an asynchronous thunk to fetch products
export const fetchProduct = createAsyncThunk(
  "products/fetchProducts",
  async ({ url }: { url: string | undefined }) => {
    try {
      const response = await axios.get(`${url}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Define the initial state for the products slice
interface productState {
  product: cardProps[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: productState = {
  product: [],
  status: "idle",
  error: null,
};

// Create a slice for the products with reducers and extraReducers
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Set the status to "loading" when the fetchProduct thunk is pending
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      // Set the status to "succeeded" and update the product state when the fetchProduct thunk is fulfilled
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      // Set the status to "failed" and update the error state when the fetchProduct thunk is rejected
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch product";
      });
  },
});

export default productsSlice.reducer;
