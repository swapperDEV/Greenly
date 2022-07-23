import { createSlice } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../assets/configs/firebaseConfig";
import { getFirestore } from "firebase/firestore";
export const firebaseSlice = createSlice({
  name: "firebase",
  initialState: {
    app: initializeApp(firebaseConfig),
    db: getFirestore(),
  },
  reducers: {
    updateDb: (state) => {
      state.db = getFirestore();
    },
  },
});

export const { updateDb } = firebaseSlice.actions;

export default firebaseSlice.reducer;
