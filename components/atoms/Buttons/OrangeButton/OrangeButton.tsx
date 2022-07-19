import React from "react";
import styles from "./button.module.scss";
import Router from "next/router";
export const OrangeButton = ({
  text,
  icon,
  direct,
}: {
  text: string;
  icon?: JSX.Element;
  direct?: string;
}) => {
  const redirect = () => {
    Router.push(`${direct}`);
  };
  return (
    <>
      <button className={styles.btn} onClick={redirect}>
        {text}
        {icon && icon}
      </button>
    </>
  );
};
