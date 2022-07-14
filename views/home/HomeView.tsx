import React from "react";
import styles from "./home.module.scss";
import flower from "../../assets/flower.png";
import cactus from "../../assets/cactus.png";
import Image from "next/image";
export const HomeView = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homeDescription}>
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
      <div className={styles.image}>
        <Image
          src={cactus}
          className={styles.cactus}
          height="550px"
          width="400px"
        />
      </div>
      <div className={styles.pros}></div>
    </div>
  );
};
