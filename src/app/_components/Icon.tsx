import React from "react";
import IconExpand from "./icons/IconExpand";
import IconStar from "./icons/IconStar";
import IconTable from "./icons/IconTable";
import IconX from "./icons/IconX";

type Props = {
  iconType: "Expand" | "Star" | "Table" | "X";
  onClick?: () => void;
};

function Icon({ iconType, onClick }: Props) {
  const iconStyle =
    "size-6 text-gray-400 hover:text-black hover:cursor-pointer";
  return (
    <div
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {(iconType == "Expand" && <IconExpand className={iconStyle} />) ||
        (iconType == "Star" && <IconStar className={iconStyle} />) ||
        (iconType == "Table" && <IconTable className={iconStyle} />) ||
        (iconType == "X" && <IconX className={iconStyle} />)}
    </div>
  );
}

export default Icon;
