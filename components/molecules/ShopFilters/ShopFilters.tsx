import React from "react";
import { PlantCategory } from "../../atoms/PlantCategory/PlantCategory";
import { PlantSize } from "../../atoms/PlantSize/PlantSize";
import { RangeSlider } from "../../atoms/RangeSlider/RangeSlider";
import styles from "./shopfilters.module.scss";
export const ShopFilters = () => {
  const categories = [
    "Seeds",
    "Accesorries",
    "Trees",
    "Home",
    "Garder",
    "Terrarium",
    "Potted",
  ];
  const size = ["Small", "Medium", "Large"];
  return (
    <div className={styles.wrapper}>
      <PlantCategory categories={categories} />
      <RangeSlider />
      <PlantSize size={size} />
    </div>
  );
};
