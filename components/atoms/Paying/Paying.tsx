import React from "react";
import styles from "./paying.module.scss";
import visa from "../../../assets/visa.jpg";
import master from "../../../assets/master.png";
import Image from "next/image";
export const Paying = ({ submitPayment }: { submitPayment: Function }) => {
  const payment = () => {
    submitPayment();
  };
  return (
    <>
      <div className={styles.payment}>
        <button className={styles.card}>
          <Image src={visa} width="80" height="50" onClick={payment} />
        </button>
        <button className={styles.card}>
          <Image src={master} width="80" height="50" onClick={payment} />
        </button>
      </div>
    </>
  );
};
