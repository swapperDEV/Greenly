import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import smallPlant from "../../assets/plant1.png";
import mediumPlant from "../../assets/plant3.png";
import largePlant from "../../assets/plant2.png";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={`${styles.footerChild} ${styles.footerDescription}`}>
          <p>Plants shop</p>
          <p>Discover all of us plants types</p>
        </div>
        <div className={styles.footerPlants}>
          <div className={styles.footerPlant}>
            <Image src={smallPlant} width={"50px"} height={"90px"} />
            <div className={styles.plantDescription}>
              <p>Small plant</p>
              <a>Shop now +</a>
            </div>
          </div>
          <div className={styles.footerPlant}>
            <Image src={mediumPlant} width={"50px"} height={"90px"} />
            <div className={styles.plantDescription}>
              <p>Medium plant</p>
              <a>Shop now +</a>
            </div>
          </div>
          <div className={styles.footerPlant}>
            <Image src={largePlant} width={"50px"} height={"90px"} />
            <div className={styles.plantDescription}>
              <p>Largeplant</p>
              <a>Shop now +</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
