import React, { useState, useEffect } from "react";
import { ShopFilters } from "../../molecules/ShopFilters/ShopFilters";
import { ShopProducts } from "../../molecules/ShopProducts/ShopProducts";
import { ShopSort } from "../../molecules/ShopSort/ShopSort";
import { useSelector } from "react-redux";
import styles from "./shop.module.scss";
import { IStore } from "../../../types/store";

export const Shop = () => {
  const { productsList } = useSelector((state: IStore) => state.products);
  console.log(productsList);
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
