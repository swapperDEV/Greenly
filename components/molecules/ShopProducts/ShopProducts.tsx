import React, { useEffect, useState } from "react";
import { IShopProductsProps, SortedArray } from "../../../types/shop";
import { ProductType } from "../../../types/store";
import { Product } from "../../atoms/Product/Product";
import styles from "./shopproducts.module.scss";

export const ShopProducts = ({
  category,
  products,
  sortedProducts,
  priceRange,
  size,
  updateMaxNumber,
}: IShopProductsProps) => {
  const [validateProducts, setValidateProducts] =
    useState<Array<ProductType>>(products);
  const [withoutPriceProducts, setWithoutPriceProducts] =
    useState<Array<ProductType>>(products);
  const productValidation = () => {
    let productsList = products;
    console.log(products, " 2");
    if (category !== "all") {
      let newSortedProducts = productsList.filter(
        (product) => product.type === category
      );
      productsList = newSortedProducts;
    }
    if (size !== "all") {
      let newSortedProducts = productsList.filter(
        (product) => product.size === size.toLowerCase()
      );
      productsList = newSortedProducts;
    }
    let priceSortedProducts: Array<ProductType> = [];
    productsList.map((product) => {
      let productPrice = parseInt(product.price);
      if (productPrice <= priceRange[1] && productPrice >= priceRange[0]) {
        priceSortedProducts.push(product);
      }
    });
    setWithoutPriceProducts(productsList);
    productsList = priceSortedProducts;

    setValidateProducts(productsList);
  };
  useEffect(() => {
    console.log(products, size, category);
    productValidation();
  }, [category, size, products, priceRange]);
  useEffect(() => {
    let max = 0;
    withoutPriceProducts.map((product) => {
      let productPrice = parseInt(product.price);
      if (max < productPrice) {
        max = productPrice;
      }
    });
    updateMaxNumber(max);
  }, [withoutPriceProducts]);
  return (
    <div className={styles.productsList}>
      {validateProducts.map((product, index) => {
        return <Product key={product.name} product={product} />;
      })}
    </div>
  );
};
