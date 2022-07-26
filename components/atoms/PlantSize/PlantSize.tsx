import React from "react";
import styles from "./plantsize.module.scss";
export const PlantSize = ({
  size,
  changeDisplayedSize,
  displayedSize,
}: {
  size: Array<string>;
  changeDisplayedSize: Function;
  displayedSize: string;
}) => {
  const handleClickSize = (size: string) => {
    if (displayedSize === size) {
      changeDisplayedSize("all");
    } else {
      changeDisplayedSize(size);
    }
  };
  return (
    <>
      <label>Size</label>
      <ul>
        {size.map((size, index) => {
          return (
            <li
              className={
                displayedSize === size ? styles.active : styles.unactive
              }
              onClick={() => handleClickSize(size)}
              key={index}
            >
              <p>{size}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
