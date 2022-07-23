import React from "react";
import styles from "./shopsort.module.scss";
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";

export const ShopSort = () => {
  const sort = "Default";
  const sortCategories = [
    {
      display: "all",
      content: (
        <>
          All<a>Plants</a>
        </>
      ),
    },
    { display: "sale", content: <>Sale</> },
  ];
  const actCategory = "all";
  return (
    <div className={styles.wrapper}>
      <ul>
        {sortCategories.map((category, index) => {
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
          Sort by: {sort} <FaAngleDown />
        </p>
      </div>
    </div>
  );
};
