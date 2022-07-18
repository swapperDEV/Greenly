import React from "react";
import styles from "./button.module.scss";
export const OrangeButton = ({
  text,
  icon,
}: {
  text: string;
  icon?: JSX.Element;
}) => {
  return (
    <>
      <button className={styles.btn}>
        {text}
        {icon && icon}
      </button>
    </>
  );
};
