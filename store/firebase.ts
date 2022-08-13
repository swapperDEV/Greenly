import { createSlice } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../assets/configs/firebaseConfig";
export const firebaseSlice = createSlice({
  name: "firebase",
  initialState: {
    app: initializeApp(firebaseConfig),
    auth: {},
    user: {},
  },
  reducers: {
    updateApp: (state) => {
      state.app = initializeApp(firebaseConfig);
    },
    updateAuth: (state, action: { payload: {} }) => {
      state.auth = action.payload;
    },
    updateUser: (state, action: { payload: {} }) => {
      state.user = action.payload;
    },
  },
});

export const { updateApp, updateAuth, updateUser } = firebaseSlice.actions;

export default firebaseSlice.reducer;
