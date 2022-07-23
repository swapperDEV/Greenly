import React from "react";
import { IShopProductsProps } from "../../../types/shop";
import { Product } from "../../atoms/Product/Product";
import styles from "./shopproducts.module.scss";

export const ShopProducts = ({
  category,
  products,
  sortedProducts,
}: IShopProductsProps) => {
  return (
    <div className={styles.productsList}>
      {products.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </div>
  );
};
