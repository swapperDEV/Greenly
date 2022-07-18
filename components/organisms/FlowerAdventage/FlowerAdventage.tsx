import React, { useEffect, useState } from "react";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
import styles from "./floweradventage.module.scss";
import { Adventage } from "../../molecules/Adventage/Adventage";
import { FaAirFreshener } from "@react-icons/all-files/fa/FaAirFreshener";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaCloud } from "@react-icons/all-files/fa/FaCloud";
export const FlowerAdventage = ({ position }: { position: string }) => {
  const [adventageDisplay, changeDisplay] = useState(false);
  const handleChangeDisplay = () => {
    changeDisplay(!adventageDisplay);
  };
  useEffect(() => {
    setTimeout(() => {
      changeDisplay(true);
    }, 1000);
  }, []);
  return (
    <>
      {position === "right" && (
        <>
          <div className={styles.adventageRight}>
            {adventageDisplay ? (
              <FaMinus onClick={handleChangeDisplay} />
            ) : (
              <FaPlus onClick={handleChangeDisplay} />
            )}
            {adventageDisplay && (
              <Adventage
                header={"Oxygen"}
                text={"Plants produce oxygen"}
                icon={<FaAirFreshener />}
              />
            )}
          </div>
        </>
      )}
      {position === "left" && (
        <>
          <div className={styles.adventageLeft}>
            {adventageDisplay ? (
              <FaMinus onClick={handleChangeDisplay} />
            ) : (
              <FaPlus onClick={handleChangeDisplay} />
            )}{" "}
            {adventageDisplay && (
              <Adventage
                header={"Wetter"}
                text={"Makes Houses wetter"}
                icon={<FaCloud />}
              />
            )}
          </div>
        </>
      )}
      {position === "bottom" && (
        <>
          <div className={styles.adventageBottom}>
            {adventageDisplay ? (
              <FaMinus onClick={handleChangeDisplay} />
            ) : (
              <FaPlus onClick={handleChangeDisplay} />
            )}{" "}
            {adventageDisplay && (
              <Adventage
                header={"Look"}
                text={"Room look better"}
                icon={<FaStar />}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};
