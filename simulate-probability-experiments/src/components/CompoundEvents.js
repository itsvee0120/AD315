import { useState } from "react";
import "./CompoundEvents.css";

function CompoundEvents() {
  const [results, setResults] = useState([]);
  const [stats, setStats] = useState({ bothHeads: 0, atLeastOneHead: 0 });

  const flipCoins = () => {
    const trials = 50;
    const flips = [];

    let bothHeads = 0;
    let atLeastOneHead = 0;

    for (let i = 0; i < trials; i++) {
      const coin1 = Math.random() < 0.5 ? "H" : "T";
      const coin2 = Math.random() < 0.5 ? "H" : "T";
      flips.push([coin1, coin2]);

      if (coin1 === "H" && coin2 === "H") bothHeads++;
      if (coin1 === "H" || coin2 === "H") atLeastOneHead++;
    }

    setResults(flips);
    setStats({ bothHeads, atLeastOneHead });
  };

  const clearResults = () => {
    setResults([]);
    setStats({ bothHeads: 0, atLeastOneHead: 0 });
  };

  return (
    <div>
      <div className="button-group">
        <button onClick={flipCoins}>Flip Coins (50 times)</button>
        <button onClick={clearResults}>Clear</button>
      </div>

      {results.length > 0 && (
        <>
          <div className="results">
            {results.map((flip, index) => (
              <div key={index} className="coin-pair">
                {flip[0]} - {flip[1]}
              </div>
            ))}
          </div>

          <div className="chart">
            <div className="bar-row">
              <div className="label">Both Heads</div>
              <div
                className="bar"
                style={{ width: `${(stats.bothHeads / 50) * 100}%` }}
              >
                {stats.bothHeads}
              </div>
            </div>
            <div className="bar-row">
              <div className="label">At Least One Head</div>
              <div
                className="bar green"
                style={{ width: `${(stats.atLeastOneHead / 50) * 100}%` }}
              >
                {stats.atLeastOneHead}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CompoundEvents;
