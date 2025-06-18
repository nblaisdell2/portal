import React from "react";
import MyLineChart from "./MyLineChart";

type Props = {
  width: "25%" | "50%" | "75%" | "100%";
};

function Widget({ width }: Props) {
  const comp = <MyLineChart />;
  return width == "100%" ? (
    <div className={`my-6 w-full`}>{comp}</div>
  ) : width == "25%" ? (
    <div className={`my-6 w-[25%]`}>{comp}</div>
  ) : width == "50%" ? (
    <div className={`my-6 w-[50%]`}>{comp}</div>
  ) : width == "75%" ? (
    <div className={`my-6 w-[75%]`}>{comp}</div>
  ) : null;
}

export default Widget;
