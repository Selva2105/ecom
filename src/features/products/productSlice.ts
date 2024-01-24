import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cardProps } from "../../global.types";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "products/fetchProducts",
  async ({ url }: { url: string | undefined }) => {
    const response = await axios.get(`${url}`);
    return response.data;
  }
);

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

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch product";
      });
  },
});

export default productsSlice.reducer;
