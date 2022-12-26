import React from "react";
import styles from "./home.module.scss";
import cactus from "../../../assets/cactus.png";
import Image from "next/image";
import { FlowerAdventage } from "../../organisms/FlowerAdventage/FlowerAdventage";
import { HomeDescription } from "../../organisms/HomeDescription/HomeDescription";
import { MotionProvider } from "../../providers/MotionProvider";
import { Adventage } from "../../molecules/Adventage/Adventage";
import { FaAirFreshener } from "@react-icons/all-files/fa/FaAirFreshener";
import { FaCloud } from "@react-icons/all-files/fa/FaCloud";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
export const HomeView = () => {
  return (
    <>
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
      <div className={styles.adventagesMobile}>
        <Adventage
          header={"Oxygen"}
          text={"Plants produce oxygen"}
          icon={<FaAirFreshener />}
        />
        <Adventage
          header={"Wetter"}
          text={"Makes Houses wetter"}
          icon={<FaCloud />}
        />
        <Adventage
          header={"Look"}
          text={"Room look better"}
          icon={<FaStar />}
        />
      </div>
    </>
  );
};
