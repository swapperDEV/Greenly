import React from "react";
import { MotionProvider } from "../../providers/MotionProvider";
import styles from "./checkoutview.module.scss";
import { useSelector } from "react-redux";
import { IStore } from "../../../types/store";
import Script from "next/script";
export const CheckoutView = () => {
  const { checkout } = useSelector((state: IStore) => state.cart);
  console.log(checkout);

  return (
    <MotionProvider>
      <>
        <div className={styles.wrapper}></div>
      </>
    </MotionProvider>
  );
};
