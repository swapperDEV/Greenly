import { createSlice } from "@reduxjs/toolkit";
import { ProductType, ICartState, CheckoutType } from "../types/store";

const initialState: ICartState = {
  cart: [],
  checkout: {},
  basketWiggle: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action: { payload: ProductType }) => {
      const product = action.payload;
      const productIfExists = state.cart.find(
        (cartProduct) => cartProduct.name === product.name
      );
      if (productIfExists) {
        if (productIfExists.quantity) {
          if (productIfExists.quantity < 99) {
            productIfExists.quantity += 1;
          }
        }
      } else {
        product.quantity = 1;
        state.cart.push(product);
        state.basketWiggle = true;
      }
    },
    reduceQuantity: (state, action: { payload: ProductType }) => {
      const product = action.payload;
      const productIfExists = state.cart.find(
        (cartProduct) => cartProduct.name === product.name
      );
      if (productIfExists) {
        if (productIfExists.quantity) {
          if (productIfExists.quantity > 1) {
            productIfExists.quantity -= 1;
          }
        }
      }
    },
    removeFromCart: (state, action: { payload: ProductType }) => {
      const product = action.payload;
      const productIfExists = state.cart.findIndex(
        (cartProduct) => cartProduct.name === product.name
      );
      state.cart.splice(productIfExists, 1);
    },
    unWiggle: (state) => {
      state.basketWiggle = false;
    },
    checkoutProducts: (state, action: { payload: CheckoutType }) => {
      state.checkout = action.payload;
    },
    removeCheckoutProducts: (state) => {
      state.checkout = {};
    },
    removeCartProducts: (state) => {
      state.cart = [];
    },
  },
});

export const {
  updateCart,
  unWiggle,
  reduceQuantity,
  removeFromCart,
  checkoutProducts,
  removeCheckoutProducts,
  removeCartProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
