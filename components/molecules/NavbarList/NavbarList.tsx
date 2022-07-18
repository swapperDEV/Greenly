import React from "react";
import styles from "./navbarlist.module.scss";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { NavbarListButton } from "../../atoms/NavbarListButton/NavbarListButton";
import { GreenButton } from "../../atoms/Buttons/GreenButton/GreenButton";
export const NavbarList = () => {
  const subpagesList = [
    { name: "Home", link: "home" },
    { name: "Shop", link: "shop" },
    { name: "About us", link: "about" },
    { name: "Your Orders", link: "orders" },
  ];
  return (
    <>
      <ul className={styles.subpageList}>
        {subpagesList.map((n: { name: string; link: string }) => (
          <NavbarListButton name={n.name} link={n.link} />
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
