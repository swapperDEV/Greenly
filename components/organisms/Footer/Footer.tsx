import React from "react";
import styles from "./footer.module.scss";
import { FooterPlants } from "../../molecules/FooterPlants/FooterPlants";
export const Footer = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.footer}>
          <div className={`${styles.footerChild} ${styles.footerDescription}`}>
            <p>Plants shop</p>
            <p>Discover all of us plants types</p>
          </div>
          <FooterPlants />
        </div>
      </div>
    </>
  );
};
