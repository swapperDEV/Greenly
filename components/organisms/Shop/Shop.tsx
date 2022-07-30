import React, { useState, useEffect } from "react";
import { useProducts } from "../../../core/hooks/useProducts";
import { ShopFilters } from "../../molecules/ShopFilters/ShopFilters";
import { ShopProducts } from "../../molecules/ShopProducts/ShopProducts";
import { ShopSort } from "../../molecules/ShopSort/ShopSort";
import styles from "./shop.module.scss";

export const Shop = () => {
  const { productsList, sortedProductsList, sales } = useProducts();
  const [displayedCategory, changeDisplayedCategory] = useState("all");
  const [displayedSize, changeDisplayedSize] = useState("all");
  const [priceCategory, changePriceCategory] = useState("all");
  const [sorting, changeSorting] = useState("default");
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
            <ShopSort
              changePriceCategory={changePriceCategory}
              priceCategory={priceCategory}
              changeSorting={changeSorting}
              displayedSize={displayedSize}
              displayedCategory={displayedCategory}
              priceRange={priceRange}
            />
            <ShopProducts
              sorting={sorting}
              size={displayedSize}
              category={displayedCategory}
              priceCategory={priceCategory}
              priceRange={priceRange}
              products={productsList}
              updateMaxNumber={updateMaxNumber}
              salesProducts={sales}
            />
          </>
        )}
      </div>
    </div>
  );
};
