import React from "react";
import { PlantCategory } from "../../atoms/PlantCategory/PlantCategory";
import { PlantSize } from "../../atoms/PlantSize/PlantSize";
import { PriceRange } from "../../atoms/PriceRange/PriceRange";
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
    <div>
      <PlantCategory categories={categories} />
      <PriceRange />
      <PlantSize size={size} />
    </div>
  );
};
