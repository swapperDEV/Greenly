import React, { useEffect, useState } from "react";
import styles from "./navbarlist.module.scss";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { NavbarListButton } from "../../atoms/NavbarListButton/NavbarListButton";
import { GreenButton } from "../../atoms/Buttons/GreenButton/GreenButton";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../../types/store";
import { unWiggle } from "../../../store/cart";
import { useContext } from "react";
import Router from "next/router";
import { FirebaseContext } from "../../../store/firebase-context";

export const NavbarList = ({ type }: { type: string }) => {
  const FirebaseCtx = useContext(FirebaseContext);
  const { signOutUser, currentUser } = FirebaseCtx;
  const { basketWiggle, cart } = useSelector((state: IStore) => state.cart);
  const dispatch = useDispatch();
  const [cartCount, changeCartCount] = useState(0);
  const subpagesList = [
    { name: "Home", link: "home" },
    { name: "Shop", link: "shop" },
    { name: "Check Plant", link: "check" },
    { name: "Your Orders", link: "orders" },
  ];
  const subpagesMobileList = [
    { name: "H", link: "home" },
    { name: "S", link: "shop" },
    { name: "O", link: "orders" },
  ];
  const userSignOut = () => {
    signOutUser();
  };
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
      {type === "desktop" ? (
        <>
          <ul className={styles.subpageList}>
            {subpagesList.map((n: { name: string; link: string }, index) => (
              <NavbarListButton name={n.name} link={n.link} key={index} />
            ))}
          </ul>
          <div className={styles.icons}>
            <Link href="/cart">
              <div
                className={cart.length > 0 ? styles.basket : styles.basketFill}
              >
                <FaShoppingCart
                  className={basketWiggle ? styles.wiggle : styles.null}
                />
                {cart.length > 0 && <p className={styles.count}>{cartCount}</p>}
              </div>
            </Link>
          </div>
          {currentUser && currentUser.uid ? (
            <GreenButton text={"Sign out"} onClick={() => userSignOut()} />
          ) : (
            <GreenButton text={"Login"} onClick={() => Router.push("/login")} />
          )}
        </>
      ) : (
        <div className={styles.xyz}>
          <ul className={styles.subpageList}>
            {subpagesMobileList.map(
              (n: { name: string; link: string }, index) => (
                <NavbarListButton name={n.name} link={n.link} key={index} />
              )
            )}
          </ul>
          <div className={styles.icons}>
            <Link href="/cart">
              <div
                className={cart.length > 0 ? styles.basket : styles.basketFill}
              >
                <FaShoppingCart
                  className={basketWiggle ? styles.wiggle : styles.null}
                />
                {cart.length > 0 && <p className={styles.count}>{cartCount}</p>}
              </div>
            </Link>
          </div>
          {currentUser && currentUser.uid ? (
            <GreenButton text={"Left"} onClick={() => userSignOut()} />
          ) : (
            <GreenButton text={"Log"} onClick={() => Router.push("/login")} />
          )}
        </div>
      )}
    </>
  );
};
