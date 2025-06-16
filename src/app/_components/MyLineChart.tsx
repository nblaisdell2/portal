"use client";

import React, { useMemo, useState } from "react";
import {
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Icon from "./Icon";
import Table from "./Table";

type XAxisProps<T> = {
  hide: boolean;
  dataKey: keyof T;
  height: number;
  orientation: "bottom" | "top";
  type: "number" | "category";
  allowDuplicatedCategory: boolean;
  textAngle: number;
};

type LineChartProps<T> = {
  xAxis: XAxisProps<T>;
};

const MyLineChart = () => {
  const data = [
    { RPT_MO: "2025-01-01", uv: 400 },
    { RPT_MO: "2025-02-01", uv: 256 },
    { RPT_MO: "2025-03-01", uv: 1250 },
    { RPT_MO: "2025-04-01", uv: 898 },
    { RPT_MO: "2025-05-01", uv: 234 },
    { RPT_MO: "2025-06-01", uv: 435 },
    { RPT_MO: "2025-07-01", uv: 600 },
    { RPT_MO: "2025-08-01", uv: 400 },
    { RPT_MO: "2025-09-01", uv: 400 },
    { RPT_MO: "2025-10-01", uv: 400 },
    { RPT_MO: "2025-11-01", uv: 400 },
    { RPT_MO: "2025-12-01", uv: 400 },
  ];

  const [selectedPoint, setSelectedPoint] = useState<any>(null);
  const [showOptions, setShowOptions] = useState(false);

  function formatToMonthYear(dateStr: string) {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(date);
  }

  return (
    <div
      className="flex flex-col min-w-[250px] w-full p-4"
      onMouseEnter={() => {
        setShowOptions(true);
      }}
      onMouseLeave={() => {
        setShowOptions(false);
      }}
    >
      <div className="flex justify-between -mt-4 mb-2">
        <h1 className="font-bold ml-6">Chart Title</h1>
        {showOptions && (
          <div className="flex gap-3">
            <Icon iconType="Table" onClick={() => {}} />
            <Icon iconType="Star" onClick={() => {}} />
            <Icon iconType="Expand" onClick={() => {}} />
          </div>
        )}
      </div>

      <div className="h-[400px] w-full flex">
        <ResponsiveContainer className={"pr-0 py-0"}>
          <LineChart
            className=""
            data={data}
            title="Chart Title 2"
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            onClick={(next, event) => {
              setSelectedPoint((next.activePayload as any)[0].payload); // This stores the clicked data point
            }}
          >
            <Line
              dataKey="uv"
              stroke="#82ca9d"
              strokeWidth={2}
              activeDot={{
                onClick: (e, payload) => {
                  console.log("Payload: " + JSON.stringify(payload));
                  setSelectedPoint((payload as any)?.payload); // This stores the clicked data point
                },
                r: 6, // dot radius (optional)
                fill: "#82ca9d",
                style: { cursor: "pointer" },
              }}
            />

            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="RPT_MO"
              height={50}
              hide={false}
              tickSize={-5}
              tickMargin={10}
              fontSize={10}
              tickFormatter={(val, idx) => {
                return formatToMonthYear(val);
              }}
              padding={{ left: 20, right: 20 }}
              label={{
                value: "This is my label",
                position: "middle",
                dy: 5, // move up/down (for vertical Y label)
                dx: 0, // left/right (if needed)
                style: { textAnchor: "middle", fill: "#666", fontSize: 14 },
              }}
            />

            <YAxis
              dataKey={"uv"}
              allowDecimals={false}
              fontSize={10}
              label={{
                value: "Y-Axis Label",
                angle: -90, // Negative rotates counterclockwise
                position: "insideLeft", // or 'outsideLeft'
                style: { textAnchor: "middle", fontSize: 14 }, // Optional, for alignment
              }}
              onClick={(val) =>
                alert("I clicked the YAxis! " + JSON.stringify(val))
              }
            />

            <Tooltip cursor={false} />

            {/* <Brush data={data} dataKey={"RPT_MO"} /> */}

            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Modal */}
      {selectedPoint && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Dimmed background */}
          <div
            className="absolute inset-0 bg-black opacity-80"
            onClick={() => setSelectedPoint(null)}
          />

          {/* Modal content */}
          <div className="relative bg-white p-4 rounded shadow-lg z-10 h-[95%] w-[95%]">
            <span className="cursor-pointer mb-2" style={{ float: "right" }}>
              <Icon
                iconType="X"
                onClick={() => {
                  setSelectedPoint(null);
                }}
              />
            </span>
            <Table
              data={data.filter((v) => v.RPT_MO == selectedPoint.RPT_MO)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyLineChart;
