import React, { useState } from "react";
import styles from "./styles/delivery.module.scss";
import { CheckoutDetails } from "../../molecules/CheckoutDetails/CheckoutDetails";
import { CheckoutSummary } from "../../molecules/CheckoutSummary/CheckoutSummary";
export const CheckoutDelivery = ({ changeStep }: { changeStep: Function }) => {
  const completePayment = () => {
    changeStep("completed");
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <CheckoutDetails completePayment={completePayment} />
          <CheckoutSummary />
        </div>
      </div>
    </>
  );
};
