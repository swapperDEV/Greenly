import React from "react";
import styles from "./home.module.scss";
import flower from "../../assets/flower.png";
import cactus from "../../assets/cactus.png";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import Image from "next/image";
import { OrangeButton } from "../../components/atoms/Buttons/OrangeButton/OrangeButton";
import { FlowerAdventage } from "../../components/organisms/FlowerAdventage/FlowerAdventage";
export const HomeView = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homeDescription}>
        <div>
          <p className={styles.headTitle}>
            Can you help <br />
            us
            <a className={styles.headTitleGreen}> Greenly</a>
            <a className={styles.headTitleLightGreen}>.</a>
            <br /> a world?{" "}
            <a className={styles.flower}>
              <Image src={flower} />
            </a>
          </p>
        </div>
        <div className={styles.priceStart}>
          <div>From 5$</div>
          <div>
            You can cheaply and easily, change your house to eco & green place
            by shopping with us.
          </div>
        </div>
        <div className={styles.buy}>
          <OrangeButton text={"Buy now"} icon={<FaArrowRight />} />
        </div>
      </div>
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
