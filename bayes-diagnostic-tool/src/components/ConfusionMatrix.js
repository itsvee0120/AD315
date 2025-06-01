import React from "react";

function ConfusionMatrix({ matrix }) {
  return (
    <div className="matrix">
      <h2>Confusion Matrix</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Test Positive</th>
            <th>Test Negative</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Disease Present</th>
            <td>{matrix.TP}%</td>
            <td>{matrix.FN}%</td>
          </tr>
          <tr>
            <th>Disease Absent</th>
            <td>{matrix.FP}%</td>
            <td>{matrix.TN}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ConfusionMatrix;
