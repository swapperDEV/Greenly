import { configureStore } from "@reduxjs/toolkit";
import firebaseReducer from "./firebase";
import productsReducer from "./products";

export default configureStore({
  reducer: {
    firebase: firebaseReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
