import React from "react";
import { ShopWelcomeDescription } from "../../molecules/ShopWelcome/ShopWelcomeDescription/ShopWelcomeDescription";
import { ShopWelcomeImage } from "../../molecules/ShopWelcome/ShopWelcomeImage/ShopWelcomeImage";
import styles from "./shopwelcome.module.scss";
export const ShopWelcome = () => {
  return (
    <div className={styles.wrapper}>
      <ShopWelcomeDescription />
      <ShopWelcomeImage />
    </div>
  );
};
