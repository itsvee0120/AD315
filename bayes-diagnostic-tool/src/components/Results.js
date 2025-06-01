import React from "react";

function Results({ results }) {
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        <strong>Probability of Disease if Test is Positive:</strong>{" "}
        {results.pPositive}%
      </p>
      <p>
        <strong>Probability of Disease if Test is Negative:</strong>{" "}
        {results.pNegative}%
      </p>
    </div>
  );
}

export default Results;
