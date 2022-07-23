import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styles from "./rangeslider.module.scss";

function valuetext(value: number) {
  return `${value}$`;
}

export const RangeSlider = () => {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className={styles.wrapper}>
      <label>Price Range</label>
      <Box sx={{ width: 200 }}>
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={200}
          color="secondary"
        />
      </Box>
    </div>
  );
};
