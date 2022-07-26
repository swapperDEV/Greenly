import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styles from "./rangeslider.module.scss";
import { ProductType } from "../../../types/store";

function valuetext(value: number) {
  return `${value}$`;
}

export const RangeSlider = ({
  maxNumber,
  updateValue,
}: {
  maxNumber: number;
  updateValue: Function;
}) => {
  const [max, setMax] = useState<number>(maxNumber);
  const [value, setValue] = useState<number[]>([0, maxNumber]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  useEffect(() => {
    setValue([0, maxNumber]);
    setMax(maxNumber);
  }, [maxNumber]);
  useEffect(() => {
    updateValue(value);
  }, [value]);
  return (
    <div className={styles.wrapper}>
      <label>Price Range</label>
      <Box sx={{ width: 150 }}>
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={max}
          color="secondary"
        />
      </Box>
    </div>
  );
};
