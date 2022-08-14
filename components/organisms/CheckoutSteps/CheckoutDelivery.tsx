import React, { useState } from "react";
import styles from "./styles/delivery.module.scss";
import { CheckoutDetails } from "../../molecules/CheckoutDetails/CheckoutDetails";
import { CheckoutSummary } from "../../molecules/CheckoutSummary/CheckoutSummary";
export const CheckoutDelivery = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <CheckoutDetails />
          <CheckoutSummary />
        </div>
      </div>
    </>
  );
};
