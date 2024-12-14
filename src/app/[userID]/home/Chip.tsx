import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Icon } from "@iconify/react";

type ChipProps = {
  value: String;
  isSelected: boolean;
  onClick: () => void;
};

export default function Chip({ value, isSelected, onClick }: ChipProps) {
  return (
    <button
      className="rounded-md text-sm font-semibold flex items-center"
      onClick={onClick}
    >
      <Checkbox
        checked={isSelected}
        icon={
          <Icon
            icon="ci:checkbox-unchecked"
            width="24"
            height="24"
            className="text-[#A09CAB]"
          />
        }
        checkedIcon={
          <Icon
            icon="fluent:checkbox-checked-24-filled"
            width="24"
            height="24"
            className="text-[#00BE73]"
          />
        }
      />
      {value}
    </button>
  );
}
