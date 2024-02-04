import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const STATUSES = {
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading..",
};

const productSlice = createSlice({
  name: "product",

  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = STATUSES.ERROR;
    });
  },
});

// thunks

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  const data = res.data;
  return data;
});

export default productSlice.reducer;
