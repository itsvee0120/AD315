/* File: src/App.js */
import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Results from "./components/Results";
import ChartDisplay from "./components/ChartDisplay";
import ConfusionMatrix from "./components/ConfusionMatrix";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState({
    prevalence: "",
    sensitivity: "",
    specificity: "",
  });

  const [results, setResults] = useState(null);

  const calculateProbabilities = (prevalence, sensitivity, specificity) => {
    const pD = parseFloat(prevalence) / 100;
    const sens = parseFloat(sensitivity) / 100;
    const spec = parseFloat(specificity) / 100;

    const pNotD = 1 - pD;
    const pTestPositive = sens * pD + (1 - spec) * pNotD;
    const pTestNegative = (1 - sens) * pD + spec * pNotD;

    const pDiseaseGivenPositive = (sens * pD) / pTestPositive;
    const pDiseaseGivenNegative = ((1 - sens) * pD) / pTestNegative;

    setResults({
      pPositive: (pDiseaseGivenPositive * 100).toFixed(2),
      pNegative: (pDiseaseGivenNegative * 100).toFixed(2),
      confusionMatrix: {
        TP: (sens * pD * 100).toFixed(2),
        FN: ((1 - sens) * pD * 100).toFixed(2),
        FP: ((1 - spec) * pNotD * 100).toFixed(2),
        TN: (spec * pNotD * 100).toFixed(2),
      },
    });
  };

  return (
    <div className="container">
      <h1>Bayesian Diagnostic Calculator</h1>
      <InputForm
        inputs={inputs}
        setInputs={setInputs}
        calculate={calculateProbabilities}
      />
      {results && (
        <>
          <Results results={results} />
          <ChartDisplay results={results} />
          <ConfusionMatrix matrix={results.confusionMatrix} />
        </>
      )}
    </div>
  );
}

export default App;
