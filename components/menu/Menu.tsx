import React from "react";
import styles from "./menu.module.scss";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";

export const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.underline}>
        <p className={styles.headName}>
          Greenly<a>.</a>
        </p>
        <ul className={styles.subpageList}>
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Your orders</li>
        </ul>
        <div className={styles.icons}>
          <FaSearch />
          <FaShoppingCart />
        </div>
        <button className={styles.btn}>Login</button>
      </div>
    </div>
  );
};
