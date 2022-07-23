import React, { useState, useEffect } from "react";
import { useProducts } from "../../../core/hooks/useProducts";
import { ShopFilters } from "../../molecules/ShopFilters/ShopFilters";
import { ShopProducts } from "../../molecules/ShopProducts/ShopProducts";
import { ShopSort } from "../../molecules/ShopSort/ShopSort";
import styles from "./shop.module.scss";

export const Shop = () => {
  const { productsList, sortedProductsList } = useProducts();
  const [displayedCategory, changeDisplayedCategory] = useState("all");
  console.log(productsList, sortedProductsList);
  return (
    <div className={styles.wrapper}>
      <ShopFilters />
      <div className={styles.products}>
        <ShopSort />
        <ShopProducts
          category={displayedCategory}
          products={productsList}
          sortedProducts={sortedProductsList}
        />
      </div>
    </div>
  );
};
