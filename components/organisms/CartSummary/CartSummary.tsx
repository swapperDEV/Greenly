import React from "react";
import styles from "./cartsummary.module.scss";
export const CartSummary = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.summaryHead}>Summary</p>
      <p>Have a coupon code? enter here 🎉</p>
    </div>
  );
};
