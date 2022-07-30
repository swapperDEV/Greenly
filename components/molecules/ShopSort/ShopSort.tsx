import React, { useState, useEffect } from "react";
import styles from "./shopsort.module.scss";
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";

export const ShopSort = ({
  changePriceCategory,
  priceCategory,
  changeSorting,
  priceRange,
  displayedSize,
  displayedCategory,
}: {
  changePriceCategory: Function;
  priceCategory: string;
  changeSorting: Function;
  priceRange: Array<number>;
  displayedSize: string;
  displayedCategory: string;
}) => {
  const [sort, changeSort] = useState(0);

  const sortCategories = ["Default", "Price"];
  const priceCategories = [
    {
      display: "all",
      content: (
        <div onClick={() => changePriceCategory("all")}>
          All<a>Plants</a>
        </div>
      ),
    },
    {
      display: "sale",
      content: <div onClick={() => changePriceCategory("sale")}>Sale</div>,
    },
  ];
  const actCategory = priceCategory;
  const handleChangeSortCategory = () => {
    let i = sort;
    i++;
    if (i === sortCategories.length) {
      changeSort(0);
    } else {
      changeSort(i);
    }
  };
  useEffect(() => {
    changeSorting(sortCategories[sort]);
  }, [sort]);
  useEffect(() => {
    changeSort(0);
  }, [priceRange, displayedCategory, displayedSize]);
  return (
    <div className={styles.wrapper}>
      <ul>
        {priceCategories.map((category, index) => {
          return (
            <li
              className={
                actCategory === category.display
                  ? styles.liAct
                  : styles.liNormal
              }
              key={index}
            >
              {category.content}
            </li>
          );
        })}
      </ul>
      <div className={styles.sort}>
        <p>
          Sort by: {sortCategories[sort]}
          <FaAngleDown onClick={handleChangeSortCategory} />
        </p>
      </div>
    </div>
  );
};
