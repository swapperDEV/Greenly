import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
  },
  reducers: {
    downloadProducts: (state, action) => {
      state.productsList = action.payload;
    },
  },
});

export const { downloadProducts } = productsSlice.actions;

export default productsSlice.reducer;
