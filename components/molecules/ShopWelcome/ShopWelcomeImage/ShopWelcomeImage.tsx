import React from "react";
import headPlant from "../../../../assets/headPlant.png";
import Image from "next/image";
import styles from "./shopwelcomeimage.module.scss";
export const ShopWelcomeImage = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={headPlant} />
    </div>
  );
};
