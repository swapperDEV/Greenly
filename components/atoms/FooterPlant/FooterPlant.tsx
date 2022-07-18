import React from "react";
import styles from "./footerplant.module.scss";
import { StaticImageData } from "react";
import Image from "next/image";
export const FooterPlant = ({
  title,
  src,
}: {
  title: string;
  src: StaticImageData | string;
}) => {
  return (
    <>
      <div className={styles.footerPlant}>
        <Image src={src} width={"50px"} height={"90px"} />
        <div className={styles.plantDescription}>
          <p>{title}</p>
          <a>Shop now +</a>
        </div>
      </div>
    </>
  );
};
