import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IStore, ProductType } from "../../types/store";
import { SortedArray } from "../../types/shop";
export const useProducts = () => {
  const { productsList } = useSelector((state: IStore) => state.products);
  const [sortedProductsList, changeSortedProducts] = useState<SortedArray>([]);
  useEffect(() => {
    const sortedArray: SortedArray = [];
    productsList.map((product: ProductType) => {
      let flag = false;
      sortedArray.map((cat, index) => {
        if (cat.name === product.type) {
          flag = true;
          sortedArray[index].products.push(product);
        }
      });
      if (flag === false) {
        sortedArray.push({
          name: product.type,
          products: [product],
        });
      }
    });
    changeSortedProducts(sortedArray);
  }, [productsList]);
  return {
    productsList,
    sortedProductsList,
  };
};
