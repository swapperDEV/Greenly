import React, { useEffect } from "react";
import styles from "./navbarlist.module.scss";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { NavbarListButton } from "../../atoms/NavbarListButton/NavbarListButton";
import { GreenButton } from "../../atoms/Buttons/GreenButton/GreenButton";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../../types/store";
import { unWiggle } from "../../../store/cart";

export const NavbarList = () => {
  const { basketWiggle } = useSelector((state: IStore) => state.cart);
  const dispatch = useDispatch();
  const subpagesList = [
    { name: "Home", link: "home" },
    { name: "Shop", link: "shop" },
    { name: "Check Plant", link: "check" },
    { name: "Your Orders", link: "orders" },
  ];
  useEffect(() => {
    if (basketWiggle === true) {
      setTimeout(() => {
        dispatch(unWiggle());
      }, 2000);
    }
  }, [basketWiggle]);
  return (
    <>
      <ul className={styles.subpageList}>
        {subpagesList.map((n: { name: string; link: string }, index) => (
          <NavbarListButton name={n.name} link={n.link} key={index} />
        ))}
      </ul>
      <div className={styles.icons}>
        <Link href="/cart">
          <FaShoppingCart />
        </Link>
      </div>
      <GreenButton text={"Login"} />
    </>
  );
};
