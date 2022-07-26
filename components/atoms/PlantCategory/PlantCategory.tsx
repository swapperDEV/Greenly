import React from "react";
import styles from "./plantcategory.module.scss";
export const PlantCategory = ({
  categories,
  changeDisplayedCategory,
  displayedCategory,
}: {
  categories: Array<string>;
  displayedCategory: string;
  changeDisplayedCategory: Function;
}) => {
  const handleClickCategory = (category: string) => {
    if (displayedCategory === category) {
      changeDisplayedCategory("all");
    } else {
      changeDisplayedCategory(category);
    }
  };
  return (
    <>
      <div>
        <label>Categories</label>
        <ul>
          {categories.map((category, index) => {
            return (
              <li
                className={
                  displayedCategory === category
                    ? styles.active
                    : styles.unactive
                }
                key={index}
                onClick={() => handleClickCategory(category)}
              >
                <p>{category}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
