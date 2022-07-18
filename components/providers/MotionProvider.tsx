import React from "react";
import { motion } from "framer-motion";

export const MotionProvider = ({
  children,
  classes,
}: {
  children: JSX.Element;
  classes?: string;
}) => {
  return (
    <motion.div
      className={classes && `${classes}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
