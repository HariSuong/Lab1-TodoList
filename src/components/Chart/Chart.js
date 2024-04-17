import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valuePoints = props.dataPoints.map((data) => data.value);
  const maxValuePoints = Math.max(...valuePoints);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValuePoints}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
