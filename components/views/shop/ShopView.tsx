import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { MotionProvider } from "../../providers/MotionProvider";
import { ShopWelcome } from "../../organisms/ShopWelcome/ShopWelcome";
import { Shop } from "../../organisms/Shop/Shop";
import styles from "./shopview.module.scss";
import { Line } from "../../molecules/Line/Line";
export const ShopView = () => {
  return (
    <>
      <MotionProvider classes={styles.wrapper}>
        <>
          <ShopWelcome />
          <Shop />
        </>
      </MotionProvider>
    </>
  );
};
