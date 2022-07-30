import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  downloadProducts as downloadProductsReducer,
  downloadSales as downloadSalesReducer,
} from "../../store/products";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { IStore, ProductType } from "../../types/store";

const getProducts = async () => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "products"));
  const table: Array<{}> = [];
  await querySnapshot.forEach((doc) => {
    table.push(doc.data());
  });
  return table;
};

export const ProductsProvider = ({ children }: { children: JSX.Element }) => {
  const { productsList } = useSelector((state: IStore) => state.products);
  const dispatch = useDispatch();
  const downloadProducts = async () => {
    getProducts().then((value) => {
      dispatch(downloadProductsReducer(value));
    });
  };
  useEffect(() => {
    downloadProducts();
  }, []);
  useEffect(() => {
    if (productsList.length > 0) {
      const list = productsList;
      const saleList: Array<ProductType> = [];
      list.map((product) => {
        if (product.sale) {
          saleList.push(product);
        }
      });
      dispatch(downloadSalesReducer(saleList));
    }
  }, [productsList]);
  return <>{children}</>;
};
