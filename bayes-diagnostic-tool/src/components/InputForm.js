import React from "react";

function InputForm({ inputs, setInputs, calculate }) {
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculate(inputs.prevalence, inputs.sensitivity, inputs.specificity);
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label>Prevalence (%):</label>
      <input
        type="number"
        name="prevalence"
        value={inputs.prevalence}
        onChange={handleChange}
        required
      />

      <label>Sensitivity (%):</label>
      <input
        type="number"
        name="sensitivity"
        value={inputs.sensitivity}
        onChange={handleChange}
        required
      />

      <label>Specificity (%):</label>
      <input
        type="number"
        name="specificity"
        value={inputs.specificity}
        onChange={handleChange}
        required
      />

      <button type="submit">Calculate</button>
    </form>
  );
}

export default InputForm;
