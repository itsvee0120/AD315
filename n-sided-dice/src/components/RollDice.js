import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const RollDice = () => {
  const [N, setN] = useState(6);
  const [M, setM] = useState(2);
  const [K, setK] = useState(10000);
  const [distribution, setDistribution] = useState({});

  const rollOnce = (sides, count) => {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * sides) + 1;
    }
    return total;
  };

  const simulateRolls = () => {
    const results = Array.from({ length: K }, () => rollOnce(N, M));
    const counts = {};

    results.forEach((sum) => {
      counts[sum] = (counts[sum] || 0) + 1;
    });

    const probabilities = {};
    for (let sum in counts) {
      probabilities[sum] = counts[sum] / K;
    }

    setDistribution(probabilities);
  };

  const labels = Object.keys(distribution).sort((a, b) => a - b);
  const chartData = {
    labels,
    datasets: [
      {
        label: "Probability",
        data: labels.map((key) => distribution[key]),
        backgroundColor: "rgba(100, 149, 237, 0.6)",
        borderColor: "rgba(100, 149, 237, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Dice Probability Simulator
      </h2>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        {/* Number of sides */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <label
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Number of sides:
          </label>
          <input
            type="number"
            value={N}
            onChange={(e) => setN(Number(e.target.value))}
            placeholder="Sides (N)"
            style={{ padding: "8px" }}
          />
        </div>

        {/* Number of dice */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <label
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Number of dice:
          </label>
          <input
            type="number"
            value={M}
            onChange={(e) => setM(Number(e.target.value))}
            placeholder="Dice (M)"
            style={{ padding: "8px" }}
          />
        </div>

        {/* Number of simulations */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <label
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Number of simulations:
          </label>
          <input
            type="number"
            value={K}
            onChange={(e) => setK(Number(e.target.value))}
            placeholder="Simulations (K)"
            style={{ padding: "8px" }}
          />
        </div>
      </div>

      <button
        onClick={simulateRolls}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Simulate Rolls
      </button>

      {Object.keys(distribution).length > 0 && (
        <div>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      return `Probability: ${context.raw.toFixed(4)}`;
                    },
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Sum of Dice Rolls",
                    font: {
                      size: 16,
                      weight: "bold",
                    },
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Probability",
                    font: {
                      size: 16,
                      weight: "bold",
                    },
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default RollDice;
