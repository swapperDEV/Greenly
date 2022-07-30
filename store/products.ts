import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    sales: [],
  },
  reducers: {
    downloadProducts: (state, action) => {
      state.productsList = action.payload;
    },
    downloadSales: (state, action) => {
      state.sales = action.payload;
    },
  },
});

export const { downloadProducts, downloadSales } = productsSlice.actions;

export default productsSlice.reducer;
