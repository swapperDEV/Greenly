import React from "react";
import styles from "./button.module.scss";
export const GreenButton = ({ text }: { text: string }) => {
  return (
    <>
      <button className={styles.btn}>{text}</button>
    </>
  );
};
