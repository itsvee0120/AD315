import { useState } from "react";
import "./DiceRoll.css";

function DiceRoll() {
  const [rolls, setRolls] = useState([]);
  const [diceType, setDiceType] = useState(6); // Default to 6-sided dice

  const rollDice = () => {
    const result = Math.floor(Math.random() * diceType) + 1;
    setRolls([...rolls, result]);
  };

  const clearRolls = () => {
    setRolls([]);
  };

  // Calculate statistics
  const counts = {};
  rolls.forEach((roll) => {
    counts[roll] = (counts[roll] || 0) + 1;
  });

  return (
    <div className="dice-roll-container">
      <div className="select-container">
        <label>Select dice type:</label>
        <select
          value={diceType}
          onChange={(e) => setDiceType(parseInt(e.target.value))}
        >
          <option value={4}>D4</option>
          <option value={6}>D6</option>
          <option value={8}>D8</option>
          <option value={10}>D10</option>
          <option value={12}>D12</option>
          <option value={20}>D20</option>
        </select>
      </div>

      <div className="button-group">
        <button onClick={rollDice} className="button button-roll">
          Roll D{diceType}
        </button>
        <button onClick={clearRolls} className="button button-clear">
          Clear Rolls
        </button>
      </div>

      {rolls.length > 0 && (
        <div className="results-container">
          <div className="results-box">
            <h2 className="section-title">Results</h2>
            <div className="results-grid">
              {rolls.map((roll, index) => (
                <div key={index} className="result-item">
                  {roll}
                </div>
              ))}
            </div>
          </div>

          <div className="statistics-container">
            <h2 className="section-title">Statistics</h2>
            <p>Total rolls: {rolls.length}</p>
            <div>
              {Array.from({ length: diceType }, (_, i) => i + 1).map((num) => (
                <div key={num} className="stat-line">
                  <div className="stat-label">
                    D{diceType}: {num}
                  </div>
                  <div className="stat-count">{counts[num] || 0}</div>
                  <div className="stat-bar-container">
                    <div
                      className="stat-bar"
                      style={{
                        width: `${
                          rolls.length
                            ? ((counts[num] || 0) / rolls.length) * 100
                            : 0
                        }%`,
                      }}
                    ></div>
                  </div>
                  <div className="stat-percentage">
                    {rolls.length
                      ? (((counts[num] || 0) / rolls.length) * 100).toFixed(1)
                      : 0}
                    %
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DiceRoll;
