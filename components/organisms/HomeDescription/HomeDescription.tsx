import React from "react";
import { FaShopify } from "@react-icons/all-files/fa/FaShopify";
import Image from "next/image";
import flower from "../../../assets/flower.png";
import styles from "./homedescription.module.scss";
import { OrangeButton } from "../../atoms/Buttons/OrangeButton/OrangeButton";

export const HomeDescription = () => {
  return (
    <>
      <div className={styles.homeDescription}>
        <div>
          <p className={styles.headTitle}>
            Can you help us <br />
            <a className={styles.headTitleGreen}> Greenly</a>
            <a className={styles.headTitleLightGreen}>. </a>
            the world?{" "}
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
          <OrangeButton
            text={"Shop with us"}
            icon={<FaShopify />}
            direct="/shop"
          />
        </div>
      </div>
    </>
  );
};
