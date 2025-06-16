import React from "react";
import MyLineChart from "./MyLineChart";

type Props = {
  width: "25%" | "50%" | "75%" | "100%";
};

function Widget({ width }: Props) {
  return (
    <div className={`my-6 ${width == "100%" ? "w-full" : `w-[${width}]`}`}>
      <MyLineChart />
    </div>
  );
}

export default Widget;
