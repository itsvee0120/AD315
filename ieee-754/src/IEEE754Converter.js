import React, { useState } from "react";

// Your existing converter function and component
export function floatToIEEE754(num) {
  const floatArray = new Float32Array(1);
  floatArray[0] = num;
  const intArray = new Uint32Array(floatArray.buffer);
  return intArray[0].toString(2).padStart(32, "0");
}

function IEEE754Converter() {
  const [input, setInput] = useState(0.1);
  const [ieee, setIeee] = useState(floatToIEEE754(0.1));

  const handleChange = (e) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      setInput(val);
      setIeee(floatToIEEE754(val));
    }
  };

  return (
    <div className="converter-container" style={{ marginBottom: "2rem" }}>
      <h2>Decimal to IEEE 754 Converter</h2>
      <input
        type="number"
        step="any"
        value={input}
        onChange={handleChange}
        className="input-box"
        aria-label="Decimal input"
      />
      <div className="result-box">
        <p>
          <strong>Decimal:</strong> {input}
        </p>
        <p>
          <strong>IEEE 754 (32-bit):</strong> {ieee}
        </p>
      </div>
    </div>
  );
}

export default IEEE754Converter;
