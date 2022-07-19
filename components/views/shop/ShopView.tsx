import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { MotionProvider } from "../../providers/MotionProvider";
import { ShopWelcome } from "../../organisms/ShopWelcome/ShopWelcome";
import { Products } from "../../organisms/Products/Products";

export const ShopView = () => {
  return (
    <>
      <MotionProvider>
        <>
          <ShopWelcome />
          <Products />
        </>
      </MotionProvider>
    </>
  );
};
