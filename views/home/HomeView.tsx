import React from "react";
import styles from "./home.module.scss";
import flower from "../../assets/flower.png";
import cactus from "../../assets/cactus.png";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { FaWater } from "@react-icons/all-files/fa/FaWater";
import { FaAirFreshener } from "@react-icons/all-files/fa/FaAirFreshener";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaCloud } from "@react-icons/all-files/fa/FaCloud";

import Image from "next/image";
import { OrangeButton } from "../../components/atoms/Buttons/OrangeButton/OrangeButton";
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
          <OrangeButton text={"Stay Tip"} icon={<FaWater />} />
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={cactus}
          className={styles.cactus}
          height="550px"
          width="400px"
        />
      </div>
      <div className={styles.pros}>
        <div className={styles.pro}>
          <div>
            <FaAirFreshener />
          </div>
          <div>
            <p>Oxygen</p>
            <a>Plants produce oxygen</a>
          </div>
        </div>
        <div className={styles.pro}>
          <div>
            <FaCloud />
          </div>
          <div>
            <p>Wetter</p>
            <a>Makes Houses wetter</a>
          </div>
        </div>
        <div className={styles.pro}>
          <div>
            <FaStar />
          </div>
          <div>
            <p>Look</p>
            <a>Room look better</a>
          </div>
        </div>
      </div>
    </div>
  );
};
