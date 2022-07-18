import React from "react";
import styles from "./navbarlist.module.scss";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { NavbarListButton } from "../../atoms/NavbarListButton/NavbarListButton";
import { GreenButton } from "../../atoms/Buttons/GreenButton/GreenButton";
export const NavbarList = () => {
  const subpagesList = ["Home", "Shop", "About Us", "Your Orders"];
  return (
    <>
      <ul className={styles.subpageList}>
        {subpagesList.map((name: string) => (
          <NavbarListButton name={name} />
        ))}
      </ul>
      <div className={styles.icons}>
        <FaSearch />
        <FaShoppingCart />
      </div>
      <GreenButton text={"Login"} />
    </>
  );
};
