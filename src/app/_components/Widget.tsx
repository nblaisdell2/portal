import React from "react";
import MyLineChart from "./MyLineChart";

type Props = {
  width: "25%" | "50%" | "75%" | "100%";
};

function Widget({ width }: Props) {
  const twWidth = width == "100%" ? "w-full" : `w-[${width}]`;
  console.log(`my-6 ${width == "100%" ? "w-full" : twWidth}`);
  return (
    <div className={`my-6 ${twWidth}`}>
      <MyLineChart />
    </div>
  );
}

export default Widget;
