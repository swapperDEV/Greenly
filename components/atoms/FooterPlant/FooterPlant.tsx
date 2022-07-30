import React from "react";
import styles from "./footerplant.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
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
          <Link href="/shop">Shop now +</Link>
        </div>
      </div>
    </>
  );
};
