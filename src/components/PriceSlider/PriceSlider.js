import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const PriceSlider = ({minPrice, maxPrice}) => {
  const [value, setValue] = useState([minPrice, 100]);
  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Slider
      getAriaLabel={() => "Price range"}
      value={value}
      onChange={handlePriceChange}
      valueLabelDisplay="auto"
      // getAriaValueText={valuetext}
      color="success"
    />
  );
};

export default PriceSlider;