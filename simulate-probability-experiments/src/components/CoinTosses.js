import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "./CoinTosses.css";

const CoinTosses = () => {
  // State to store the result counts
  const [resultCounts, setResultCounts] = useState({ head: 0, tail: 0 });

  const simulateTosses = () => {
    let head = 0;
    let tail = 0;

    for (let i = 0; i < 100; i++) {
      const toss = Math.random() < 0.5 ? "head" : "tail";
      if (toss === "head") {
        head++;
      } else {
        tail++;
      }
    }

    setResultCounts({ head, tail });
  };

  // Run simulation once when component mounts
  useEffect(() => {
    simulateTosses();
  }, []);

  // Data for the chart
  const data = [
    { name: "Head", value: resultCounts.head },
    { name: "Tail", value: resultCounts.tail },
  ];

  return (
    <div className="container">
      {/* Button to toss coins */}
      <button onClick={simulateTosses} className="btn">
        Toss Coins
      </button>

      <p>
        Heads: <b>{resultCounts.head}</b> times
      </p>
      <p>
        Tails: <b>{resultCounts.tail}</b> times
      </p>

      <div className="chart-container">
        <BarChart width={400} height={300} data={data} center={[50, 50]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default CoinTosses;
