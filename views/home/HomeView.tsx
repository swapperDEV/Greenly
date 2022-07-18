import React from "react";
import styles from "./home.module.scss";
import cactus from "../../assets/cactus.png";
import Image from "next/image";
import { FlowerAdventage } from "../../components/organisms/FlowerAdventage/FlowerAdventage";
import { HomeDescription } from "../../components/organisms/HomeDescription/HomeDescription";
export const HomeView = () => {
  return (
    <div className={styles.wrapper}>
      <HomeDescription />
      <div className={styles.image}>
        <Image
          src={cactus}
          className={styles.cactus}
          height="550px"
          width="400px"
        />
        <FlowerAdventage position="right" />
        <FlowerAdventage position="left" />
        <FlowerAdventage position="bottom" />
      </div>
    </div>
  );
};
