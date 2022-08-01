import React from "react";
import { MotionProvider } from "../../providers/MotionProvider";
import { useSelector } from "react-redux";
import { IStore } from "../../../types/store";
import { CartProducts } from "../../organisms/CartProducts/CartProducts";
import { CartSummary } from "../../organisms/CartSummary/CartSummary";
import styles from "./cart.module.scss";
export const CartView = () => {
  const { cart } = useSelector((state: IStore) => state.cart);
  return (
    <MotionProvider>
      <div className={styles.wrapper}>
        <CartProducts products={cart} />
        <CartSummary products={cart} />
      </div>
    </MotionProvider>
  );
};
