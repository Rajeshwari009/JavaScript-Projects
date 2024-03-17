import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} //Id=labelName-> jan,feb
          value={dataPoint.value} //Received datapoint
          maxValue={totalMaximum} // common for all
          label={dataPoint.label} //names like jan,feb
        />
      ))}
    </div>
  );
};
export default Chart;
