import React from "react";
import { OrangeButton } from "../../atoms/Buttons/OrangeButton/OrangeButton";
import styles from "./shopwelcomedescription.module.scss";
export const ShopWelcomeDescription = () => {
  return (
    <>
      <h1 className={styles.headText}>
        Take care Of <br /> the <i>Tress</i>, they <br /> Will Take <a>Care</a>
        <br />
        Of you.
      </h1>
      <OrangeButton text="Shop Now" />
    </>
  );
};
