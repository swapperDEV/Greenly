import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { MotionProvider } from "../../providers/MotionProvider";
import { ShopWelcome } from "../../organisms/ShopWelcome/ShopWelcome";
import { Products } from "../../organisms/Products/Products";
import styles from "./shopview.module.scss";
import { Line } from "../../molecules/Line/Line";
export const ShopView = () => {
  return (
    <>
      <MotionProvider classes={styles.wrapper}>
        <>
          <ShopWelcome />
          <Line />
          <Products />
        </>
      </MotionProvider>
    </>
  );
};
