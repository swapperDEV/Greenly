import React from "react";
import headPlantLeft from "../../../assets/headPlantLeft.png";
import headPlantRight from "../../../assets/headPlantRight.png";
import Image from "next/image";
import styles from "./shopwelcome.module.scss";
import { ShopWelcomeDescription } from "../../molecules/ShopWelcomeDescription/ShopWelcomeDescription";
export const ShopWelcome = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageLeft}>
        <Image src={headPlantLeft} />
      </div>
      <div className={styles.description}>
        <ShopWelcomeDescription />
      </div>
      <div className={styles.imageRight}>
        <Image src={headPlantRight} className={styles.imageRight} />
      </div>
    </div>
  );
};
