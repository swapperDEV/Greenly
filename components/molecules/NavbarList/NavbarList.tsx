import React, { useEffect, useState } from "react";
import styles from "./navbarlist.module.scss";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { NavbarListButton } from "../../atoms/NavbarListButton/NavbarListButton";
import { GreenButton } from "../../atoms/Buttons/GreenButton/GreenButton";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../../types/store";
import { unWiggle } from "../../../store/cart";

export const NavbarList = () => {
  const { basketWiggle, cart } = useSelector((state: IStore) => state.cart);
  const dispatch = useDispatch();
  const [cartCount, changeCartCount] = useState(0);
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
      }, 3000);
    }
  }, [basketWiggle]);
  useEffect(() => {
    let count = 0;
    cart.map((product) => {
      if (product.quantity) {
        count += product.quantity;
      } else {
        count++;
      }
    });
    changeCartCount(count);
  }, [cart]);
  return (
    <>
      <ul className={styles.subpageList}>
        {subpagesList.map((n: { name: string; link: string }, index) => (
          <NavbarListButton name={n.name} link={n.link} key={index} />
        ))}
      </ul>
      <div className={styles.icons}>
        <Link href="/cart">
          <div className={cart.length > 0 ? styles.basket : styles.basketFill}>
            <FaShoppingCart
              className={basketWiggle ? styles.wiggle : styles.null}
            />
            {cart.length > 0 && <p className={styles.count}>{cartCount}</p>}
          </div>
        </Link>
      </div>
      <GreenButton text={"Login"} />
    </>
  );
};
