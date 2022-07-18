import React from "react";
import styles from "./adventage.module.scss";
export const Adventage = ({
  header,
  text,
  icon,
}: {
  header: string;
  text: string;
  icon: JSX.Element;
}) => {
  return (
    <>
      <div className={styles.pro}>
        <div>{icon}</div>
        <div>
          <p>{header}</p>
          <a>{text}</a>
        </div>
      </div>
    </>
  );
};
