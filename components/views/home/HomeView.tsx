import React from "react";
import styles from "./home.module.scss";
import cactus from "../../../assets/cactus.png";
import Image from "next/image";
import { FlowerAdventage } from "../../organisms/FlowerAdventage/FlowerAdventage";
import { HomeDescription } from "../../organisms/HomeDescription/HomeDescription";
import { MotionProvider } from "../../providers/MotionProvider";
export const HomeView = () => {
  return (
    <MotionProvider classes={styles.wrapper}>
      <>
        <HomeDescription />
        <div className={styles.image}>
          <div className={styles.imageXL}>
            <Image
              src={cactus}
              className={styles.cactus}
              height="550px"
              width="400px"
            />
          </div>
          <div className={styles.imageL}>
            <Image
              src={cactus}
              className={styles.cactus}
              height="200px"
              width="130px"
            />
          </div>
          <div className={styles.adventagesMain}>
            <FlowerAdventage position="right" />
            <FlowerAdventage position="left" />
            <FlowerAdventage position="bottom" />
          </div>
        </div>
      </>
    </MotionProvider>
  );
};
