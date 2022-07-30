import { createSlice } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../assets/configs/firebaseConfig";
import { getFirestore } from "firebase/firestore";
export const firebaseSlice = createSlice({
  name: "firebase",
  initialState: {
    app: initializeApp(firebaseConfig),
  },
  reducers: {
    updateApp: (state) => {
      state.app = initializeApp(firebaseConfig);
    },
  },
});

export const { updateApp } = firebaseSlice.actions;

export default firebaseSlice.reducer;
