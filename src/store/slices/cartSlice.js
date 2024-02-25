import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCartItems,
  removeCartItems,
  updateCartItems,
} from "../actions/cartActions";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchCartItems.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(updateCartItems.fulfilled, (state, action) => {
      const payload = action.payload;

      if (payload?.itemId && payload?.quantity) {
        if (state.items[payload?.itemId]) {
          state.items[payload?.itemId].quantity = payload?.quantity;
        } else {
          state.items[payload?.itemId] = {
            quantity: payload?.quantity,
          };
        }
      }
    });

    builder.addCase(removeCartItems.fulfilled, (state, action) => {
      const { itemId } = action.payload;
      delete state.items[itemId];
    });
  },
});

export const selectIsItemInCart = (state, itemId) => {
  return Boolean(state.cart.items[itemId]);
};

export default cartSlice.reducer;
