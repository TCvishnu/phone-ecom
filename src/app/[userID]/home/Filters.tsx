import React, { useState } from "react";

import Chip from "./Chip";
import Slider from "@mui/material/Slider";

type FiltersProps = {
  onCloseFilters: () => void;
};

export default function Filters({ onCloseFilters }: FiltersProps) {
  const [rangeValue, setRangeValue] = useState([12000, 50000]);
  const [selectedBrands, setSelectedBrands] = useState<String[]>([]);
  const [selectedOS, setSelectedOS] = useState<String[]>([]);
  const [selectedColors, setSelectedColors] = useState<String[]>([]);

  const closeFilters = () => {
    onCloseFilters();
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedOS([]);
    setSelectedColors([]);
    setRangeValue([12000, 50000]);
  };

  const handleLabelFormat = (value: number) => {
    return `${value / 1000}k`;
  };

  const brands: String[] = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "Redmi",
    "Realme",
    "OnePlus",
    "Oppo",
    "Vivo",
    "Google",
    "Nokia",
    "Motorola",
    "Huawei",
    "Sony",
    "Asus",
    "Lenovo",
    "Honor",
    "Infinix",
    "Lava",
    "Micromax",
    "iQOO",
    "Nothing",
  ];

  const colors: string[] = [
    "Black",
    "White",
    "Silver",
    "Grey",
    "Gold",
    "Rose Gold",
    "Blue",
    "Red",
    "Green",
    "Purple",
    "Yellow",
    "Pink",
    "Brown",
    "Bronze",
    "Orange",
  ];

  const os: String[] = ["Android", "iOS"];

  const handleChange = (event: Event, newValue: number | number[]) => {
    setRangeValue(newValue as number[]);
  };

  const handleSelection = (item: String, list: String[], setList: Function) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <div className=" w-full h-[calc(100%-48px)] flex flex-col justify-start gap-3 overflow-y-auto z-0 px-3 pt-3">
      <div className="w-full flex flex-col gap-4">
        <h1 className="mt-2 text-3xl font-semibold">Filter Phones</h1>
        <button
          className=" bg-[#EAEDF0] rounded-md font-semibold text-sm h-10"
          onClick={clearFilters}
        >
          Clear all filters
        </button>
      </div>

      <h3 className=" font-semibold text-xl mt-2">Brands</h3>
      <div className="w-full grid grid-cols-3 h-auto">
        {brands.map((brand) => (
          <Chip
            value={brand}
            isSelected={selectedBrands.includes(brand)}
            onClick={() =>
              handleSelection(brand, selectedBrands, setSelectedBrands)
            }
          />
        ))}
      </div>

      <h3 className=" font-semibold text-xl mt-3">Operating System</h3>
      <div className="w-full grid grid-cols-3 h-auto ">
        {os.map((operatingsystem) => (
          <Chip
            value={operatingsystem}
            isSelected={selectedOS.includes(operatingsystem)}
            onClick={() =>
              handleSelection(operatingsystem, selectedOS, setSelectedOS)
            }
          />
        ))}
      </div>

      <h3 className=" font-semibold text-xl mt-3">Price Range</h3>
      <div className="w-full flex flex-col">
        <div className="flex w-full justify-between text-xs font-medium">
          <p>Min(Rs)</p>
          <p>Max(Rs)</p>
        </div>
        <div className="flex w-full justify-between text-sm font-bold">
          <p>{rangeValue[0] / 1000}k</p>
          <p>{rangeValue[1] / 1000}k</p>
        </div>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={rangeValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={5000}
          max={200000}
          step={1000}
          getAriaValueText={handleLabelFormat}
          size="medium"
          sx={{
            color: "#00BE73", // Custom color - green
            "& .MuiSlider-thumb": {
              backgroundColor: "#00BE73", // Thumb color - green
            },
            "& .MuiSlider-rail": {
              backgroundColor: "#898989", // Rail color - gray
            },
            "& .MuiSlider-track": {
              backgroundColor: "#00BE73", // Track color - green
            },
          }}
        />
      </div>

      <h3 className=" font-semibold text-xl mt-4">Colors</h3>
      <div className="w-full grid grid-cols-3 h-auto">
        {colors.map((color) => (
          <Chip
            value={color}
            isSelected={selectedColors.includes(color)}
            onClick={() =>
              handleSelection(color, selectedColors, setSelectedColors)
            }
          />
        ))}
      </div>

      <div className="w-full flex fixed bottom-0 left-0">
        <button
          className=" bg-[#EAEDF0] font-semibold text-sm h-12 w-full"
          onClick={closeFilters}
        >
          Cancel Changes
        </button>
        <button className=" bg-[#00BE73] text-white font-semibold text-sm h-12 w-full">
          Apply Changes
        </button>
      </div>
    </div>
  );
}
