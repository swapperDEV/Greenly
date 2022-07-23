import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadProducts as downloadProductsReducer } from "../../store/products";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { IStore } from "../../types/store";

const getProducts = async () => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "products"));
  const table: Array<{}> = [];
  await querySnapshot.forEach((doc) => {
    table.push(doc.data());
  });
  return table;
};

export const FirebaseProvider = ({ children }: { children: JSX.Element }) => {
  const { app, db } = useSelector((state: IStore) => state.firebase);
  const dispatch = useDispatch();
  const downloadProducts = async () => {
    getProducts().then((value) => {
      dispatch(downloadProductsReducer(value));
    });
  };
  useEffect(() => {
    downloadProducts();
  }, []);
  return <>{children}</>;
};
