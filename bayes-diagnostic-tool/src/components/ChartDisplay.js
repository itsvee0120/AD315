import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function ChartDisplay({ results }) {
  const data = [
    { name: "True Positive", value: parseFloat(results.confusionMatrix.TP) },
    { name: "False Negative", value: parseFloat(results.confusionMatrix.FN) },
    { name: "False Positive", value: parseFloat(results.confusionMatrix.FP) },
    { name: "True Negative", value: parseFloat(results.confusionMatrix.TN) },
  ];

  const COLORS = ["#0088FE", "#FF8042", "#FFBB28", "#00C49F"];

  return (
    <div className="chart">
      <h2>Confusion Matrix Pie Chart</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ChartDisplay;
