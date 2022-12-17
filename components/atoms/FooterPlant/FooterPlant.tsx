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
        <div className={styles.plantXL}>
          <Image src={src} width={"50px"} height={"90px"} />
        </div>
        <div className={styles.plantL}>
          <Image src={src} width={"30px"} height={"70px"} />
        </div>
        <div className={styles.plantM}>
          <Image src={src} width={"30px"} height={"50px"} />
        </div>
        <div className={styles.plantS}>
          <Image src={src} width={"20px"} height={"35px"} />
        </div>
        <div className={styles.plantDescription}>
          <p>{title}</p>
          <Link href="/shop">Shop now +</Link>
        </div>
      </div>
    </>
  );
};
