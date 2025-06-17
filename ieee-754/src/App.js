import React from "react";
import IEEE754Converter from "./IEEE754Converter";
import IEEE754Arithmetic from "./IEEE754Arithmetic";
import "./App.css";

function App() {
  return (
    <div
      className="app-container"
      style={{
        padding: "1rem",
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h1>IEEE 754 Floating Point Demo</h1>
      <IEEE754Converter />
      <IEEE754Arithmetic />
    </div>
  );
}

export default App;
