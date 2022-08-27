import React from "react";
import { Circles } from "react-loader-spinner";
import styles from "./paymentloading.module.scss";
export const PaymentLoading = () => {
  return (
    <>
      <div className={styles.loading}>
        <Circles height="120" width="120" color="grey" ariaLabel="loading" />
        <p>Waiting for payment...</p>
      </div>
    </>
  );
};
