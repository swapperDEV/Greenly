import React, { useState, useEffect } from "react";
import { useProducts } from "../../../core/hooks/useProducts";
import { ShopFilters } from "../../molecules/ShopFilters/ShopFilters";
import { ShopProducts } from "../../molecules/ShopProducts/ShopProducts";
import { ShopSort } from "../../molecules/ShopSort/ShopSort";
import styles from "./shop.module.scss";

export const Shop = () => {
  const { productsList, sortedProductsList } = useProducts();
  const [displayedCategory, changeDisplayedCategory] = useState("all");
  const [displayedSize, changeDisplayedSize] = useState("all");
  const [priceRange, updatePriceRange] = useState([0, 0]);
  const [maxNumber, updateMaxNumber] = useState(100);
  const updateValue = (value: Array<number>) => {
    updatePriceRange(value);
  };
  return (
    <div className={styles.wrapper}>
      <ShopFilters
        sortedProductsList={sortedProductsList}
        changeDisplayedCategory={changeDisplayedCategory}
        changeDisplayedSize={changeDisplayedSize}
        category={displayedCategory}
        displayedSize={displayedSize}
        maxNumber={maxNumber}
        updateValue={updateValue}
      />
      <div className={styles.products}>
        {productsList && (
          <>
            <ShopSort />
            <ShopProducts
              size={displayedSize}
              category={displayedCategory}
              priceRange={priceRange}
              products={productsList}
              sortedProducts={sortedProductsList}
              updateMaxNumber={updateMaxNumber}
            />
          </>
        )}
      </div>
    </div>
  );
};
