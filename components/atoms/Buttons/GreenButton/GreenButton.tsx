import React from "react";
import styles from "./button.module.scss";
export const GreenButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <>
      <button className={styles.btn} onClick={onClick && onClick}>
        {text}
      </button>
    </>
  );
};
