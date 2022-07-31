import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../types/store";

interface ICartState {
  cart: Array<ProductType>;
  basketWiggle: boolean;
}

const initialState: ICartState = {
  cart: [],
  basketWiggle: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action: { payload: ProductType }) => {
      const product = action.payload;
      state.cart.push(product);
      state.basketWiggle = true;
    },
    unWiggle: (state) => {
      state.basketWiggle = false;
    },
  },
});

export const { updateCart, unWiggle } = cartSlice.actions;

export default cartSlice.reducer;
