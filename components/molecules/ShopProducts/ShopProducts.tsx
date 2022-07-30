import React, { useEffect, useState } from "react";
import { priceSort } from "../../../core/helpers/priceSort";
import { IShopProductsProps } from "../../../types/shop";
import { ProductType } from "../../../types/store";
import { ProductPagination } from "../../atoms/Product/Product";
import styles from "./shopproducts.module.scss";

export const ShopProducts = ({
  category,
  products,
  priceCategory,
  priceRange,
  sorting,
  salesProducts,
  size,
  updateMaxNumber,
}: IShopProductsProps) => {
  const [validateProducts, setValidateProducts] =
    useState<Array<ProductType>>(products);
  const [sortedProducts, setSortedProducts] =
    useState<Array<ProductType>>(products);
  const [withoutPriceProducts, setWithoutPriceProducts] =
    useState<Array<ProductType>>(products);
  const productValidation = () => {
    let productsList = [];
    if (priceCategory === "sale") {
      productsList = salesProducts;
    } else {
      productsList = products;
    }
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
    productValidation();
  }, [category, size, products, priceRange, salesProducts, priceCategory]);
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

  useEffect(() => {
    if (sorting.toLowerCase() === "price") {
      setSortedProducts(validateProducts.sort(priceSort));
    } else {
      setSortedProducts([]);
      productValidation();
    }
  }, [sorting]);
  return (
    <>
      {priceCategory === "sale" ? (
        <>{products && <ProductPagination products={validateProducts} />}</>
      ) : (
        <>{products && <ProductPagination products={validateProducts} />}</>
      )}
    </>
  );
};
