import React, { useEffect, useState } from "react";
import { SortedArray } from "../../../types/shop";
import { ProductType } from "../../../types/store";
import { PlantCategory } from "../../atoms/PlantCategory/PlantCategory";
import { PlantSize } from "../../atoms/PlantSize/PlantSize";
import { RangeSlider } from "../../atoms/RangeSlider/RangeSlider";
import styles from "./shopfilters.module.scss";
export const ShopFilters = ({
  sortedProductsList,
  changeDisplayedCategory,
  changeDisplayedSize,
  category,
  displayedSize,
  updateValue,
  maxNumber,
}: {
  sortedProductsList: SortedArray;
  changeDisplayedCategory: Function;
  changeDisplayedSize: Function;
  category: string;
  displayedSize: string;
  updateValue: Function;
  maxNumber: number;
}) => {
  const [categories, setCategories] = useState<Array<string>>([]);
  useEffect(() => {
    const categoriesList: Array<string> = [];
    sortedProductsList.map((category) => {
      if (!categoriesList.includes(category.name)) {
        categoriesList.push(category.name);
      }
    });
    setCategories(categoriesList);
  }, [sortedProductsList]);
  const size = ["Small", "Medium", "Large"];
  return (
    <div className={styles.wrapper}>
      <div className={styles.sideFilters}>
        <PlantCategory
          categories={categories}
          displayedCategory={category}
          changeDisplayedCategory={changeDisplayedCategory}
        />
        <RangeSlider updateValue={updateValue} maxNumber={maxNumber} />
        <PlantSize
          size={size}
          changeDisplayedSize={changeDisplayedSize}
          displayedSize={displayedSize}
        />
      </div>
    </div>
  );
};
