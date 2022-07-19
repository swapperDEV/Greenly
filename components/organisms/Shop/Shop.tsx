import React from "react";
import { ShopFilters } from "../../molecules/ShopFilters/ShopFilters";
import { ShopProducts } from "../../molecules/ShopProducts/ShopProducts";
import { ShopSort } from "../../molecules/ShopSort/ShopSort";
import styles from "./shop.module.scss";
export const Shop = () => {
  return (
    <div className={styles.wrapper}>
      <ShopFilters />
      <div className={styles.products}>
        <ShopSort />
        <ShopProducts />
      </div>
    </div>
  );
};
