import { configureStore, createReducer } from "@reduxjs/toolkit";
import productsReducer from "./products";
import cartReducer from "./cart";

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
