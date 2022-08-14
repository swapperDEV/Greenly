import Image from "next/image";
import React from "react";
import { GreenButton } from "../../atoms/Buttons/GreenButton/GreenButton";
import styles from "./styles/login.module.scss";
import shopImg from "../../../assets/watering.gif";
import Router from "next/router";
export const CheckoutLogin = ({ changeStep }: { changeStep: Function }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={shopImg} height="200" width="300" />
      </div>
      <div className={styles.head}>
        <p>Choose How You Would Like To Check out</p>
      </div>
      <div className={styles.checkoutOptions}>
        <div className={styles.boxLeft}>
          <p>Track faster your orders</p>
          <a>Create a free account to have all in one place.</a>
          <GreenButton text="Login" onClick={() => Router.push("/login")} />
        </div>
        <div className={styles.boxRight}>
          <p>Checkout as a Guest</p>
          <a>You can submit order without account.</a>
          <GreenButton
            text="Guest Checkout"
            onClick={() => changeStep("delivery")}
          />
        </div>
      </div>
    </div>
  );
};
