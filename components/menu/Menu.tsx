import React, { useRef, useState, useEffect } from "react";
import styles from "./menu.module.scss";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";

export const Menu = () => {
  const [scrollPosition, setScrollPosition]: any = useState(0);
  const [menuClass, setMenuClass]: any = useState(`${styles.wrapper}`);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollPosition > 1) {
      setMenuClass(`${styles.wrapper} ${styles.wrapperFixed}`);
    } else {
      setMenuClass(`${styles.wrapper}`);
    }
  }, [scrollPosition]);
  return (
    <div className={menuClass}>
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
