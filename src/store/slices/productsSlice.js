import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions/productsAction";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: true,
    error: null,
    products: [],
    orignalProducts: [],
  },
  reducers: {
    searchForProducts: (state, action) => {
      if (!action.payload) {
        state.products = state.orignalProducts;
      } else {
        state.products = state.orignalProducts.filter((product) =>
          product.title
            .toLowerCase()
            .includes(action.payload.toLowerCase().trim()),
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.orignalProducts = action.payload;
      state.error = null;
    });
  },
});

export const { searchForProducts } = productsSlice.actions;
export default productsSlice.reducer;
