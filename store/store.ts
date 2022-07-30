import { configureStore, createReducer } from "@reduxjs/toolkit";
import firebaseReducer from "./firebase";
import productsReducer from "./products";
import cartReducer from "./cart";

export default configureStore({
  reducer: {
    firebase: firebaseReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
