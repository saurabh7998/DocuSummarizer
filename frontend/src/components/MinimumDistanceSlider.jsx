import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value} Words`;
}

const minDistance = 20;

const marks = [
  { value: 0, label: '0' },
  { value: 100, label: '100' },
  { value: 200, label: '200' },
  { value: 300, label: '300' },
  { value: 400, label: '400' },
  { value: 500, label: '500' },
];

export default function MinimumDistanceSlider({ value, setValue }) {

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 500 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 260, mx: "auto", mt: 3 }}>
      <Slider
        getAriaLabel={() => "word limit range"}
        value={value}
        onChange={handleChange}
        min={0}
        max={500}
        step={10}
        marks={marks}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
  );
}
