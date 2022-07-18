import React, { StaticImageData } from "react";
import styles from "./footerplants.module.scss";
import smallPlant from "../../../assets/plant1.png";
import mediumPlant from "../../../assets/plant3.png";
import largePlant from "../../../assets/plant2.png";
import { FooterPlant } from "../../atoms/FooterPlant/FooterPlant";
export const FooterPlants = () => {
  const plantsList = [
    { title: "Small Plant", src: smallPlant },
    { title: "Medium Plant", src: mediumPlant },
    { title: "Large Plant", src: largePlant },
  ];
  return (
    <>
      <div className={styles.footerPlants}>
        {plantsList.map(
          ({ title, src }: { title: string; src: StaticImageData }) => {
            return <FooterPlant title={title} src={src} />;
          }
        )}
      </div>
    </>
  );
};
