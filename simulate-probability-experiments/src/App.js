import { useState } from "react";
import "./App.css";
import CoinTosses from "./components/CoinTosses";
import DiceRoll from "./components/DiceRoll";
import CardDraw from "./components/CardDraw";
import CompoundEvents from "./components/CompoundEvents";

function App() {
  const [activeExperiment, setActiveExperiment] = useState("cointosses");

  const renderExperiment = () => {
    switch (activeExperiment) {
      case "cointosses":
        return <CoinTosses />;
      case "diceroll":
        return <DiceRoll />;
      case "carddraw":
        return <CardDraw />;
      case "Compound Events":
        return <CompoundEvents />;
      default:
        return <CoinTosses />;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-buttons">
            <button
              className={`nav-button ${
                activeExperiment === "cointosses" ? "active" : ""
              }`}
              onClick={() => setActiveExperiment("cointosses")}
            >
              Coin Tosses
            </button>
            <button
              className={`nav-button ${
                activeExperiment === "diceroll" ? "active" : ""
              }`}
              onClick={() => setActiveExperiment("diceroll")}
            >
              Dice Roll
            </button>
            <button
              className={`nav-button ${
                activeExperiment === "carddraw" ? "active" : ""
              }`}
              onClick={() => setActiveExperiment("carddraw")}
            >
              Card Draw
            </button>
            <button
              className={`nav-button ${
                activeExperiment === "Compound Events" ? "active" : ""
              }`}
              onClick={() => setActiveExperiment("Compound Events")}
            >
              Compound Events
            </button>
          </div>
        </div>
      </nav>

      <div className="content-container">
        <div className="experiment-card">
          <h1 className="experiment-title">
            {activeExperiment === "cointosses" && "Coin Toss Experiment"}
            {activeExperiment === "diceroll" && "Dice Roll Experiment"}
            {activeExperiment === "carddraw" && "Card Draw Experiment"}
            {activeExperiment === "Compound Events" && "Compound Events"}
          </h1>
          {renderExperiment()}
        </div>
      </div>
    </div>
  );
}

export default App;
