// DOM elements
const calculatorTabBtn = document.getElementById("calculatorTabBtn");
const truthTableTabBtn = document.getElementById("truthTableTabBtn");
const calculatorView = document.getElementById("calculatorView");
const truthTableView = document.getElementById("truthTableView");
const truthTable = document.getElementById("truthTable");

// Input fields
const inputARadios = document.getElementsByName("inputA");
const inputBRadios = document.getElementsByName("inputB");

// Result cards
const andCard = document.getElementById("and-card");
const orCard = document.getElementById("or-card");
const notACard = document.getElementById("not-a-card");
const notBCard = document.getElementById("not-b-card");
const impliesCard = document.getElementById("implies-card");
const iffCard = document.getElementById("iff-card");

// Logic operation functions
const computeAND = (a, b) => a && b;
const computeOR = (a, b) => a || b;
const computeNOT = (value) => !value;
const computeIMPLICATION = (a, b) => !a || b;
const computeBICONDITIONAL = (a, b) => a === b;

// Helper function to convert string 'true'/'false' to boolean
const toBool = (value) => value === "true";

// Helper function to display boolean values
const displayBool = (value) => (value ? "True" : "False");

// Update the results based on the current inputs
function updateResults() {
  // Get current values
  let valueA = false;
  let valueB = false;

  for (const radio of inputARadios) {
    if (radio.checked) {
      valueA = toBool(radio.value);
      break;
    }
  }

  for (const radio of inputBRadios) {
    if (radio.checked) {
      valueB = toBool(radio.value);
      break;
    }
  }

  // Compute results
  const andResult = computeAND(valueA, valueB);
  const orResult = computeOR(valueA, valueB);
  const notAResult = computeNOT(valueA);
  const notBResult = computeNOT(valueB);
  const impliesResult = computeIMPLICATION(valueA, valueB);
  const iffResult = computeBICONDITIONAL(valueA, valueB);

  // Update display
  updateCard(
    andCard,
    `${displayBool(valueA)} AND ${displayBool(valueB)}`,
    andResult
  );
  updateCard(
    orCard,
    `${displayBool(valueA)} OR ${displayBool(valueB)}`,
    orResult
  );
  updateCard(notACard, `NOT ${displayBool(valueA)}`, notAResult);
  updateCard(notBCard, `NOT ${displayBool(valueB)}`, notBResult);
  updateCard(
    impliesCard,
    `IF ${displayBool(valueA)} THEN ${displayBool(valueB)}`,
    impliesResult
  );
  updateCard(
    iffCard,
    `${displayBool(valueA)} IF AND ONLY IF ${displayBool(valueB)}`,
    iffResult
  );
}

// Update a result card with formula and result
function updateCard(card, formula, result) {
  const formulaElement = card.querySelector(".formula");
  const valueElement = card.querySelector(".value");

  formulaElement.textContent = `${formula} =`;
  valueElement.textContent = displayBool(result);
  valueElement.className = `value ${result ? "true" : "false"}`;
}

// Generate the truth table
function generateTruthTable() {
  const tableBody = truthTable.querySelector("tbody");
  tableBody.innerHTML = "";

  // All possible combinations of A and B
  const combinations = [
    { a: false, b: false },
    { a: false, b: true },
    { a: true, b: false },
    { a: true, b: true },
  ];

  combinations.forEach((combo) => {
    const row = document.createElement("tr");

    // A and B values
    const cellA = document.createElement("td");
    cellA.textContent = displayBool(combo.a);
    row.appendChild(cellA);

    const cellB = document.createElement("td");
    cellB.textContent = displayBool(combo.b);
    row.appendChild(cellB);

    // AND operation
    const cellAND = document.createElement("td");
    const andResult = computeAND(combo.a, combo.b);
    cellAND.textContent = displayBool(andResult);
    cellAND.className = andResult ? "true" : "false";
    row.appendChild(cellAND);

    // OR operation
    const cellOR = document.createElement("td");
    const orResult = computeOR(combo.a, combo.b);
    cellOR.textContent = displayBool(orResult);
    cellOR.className = orResult ? "true" : "false";
    row.appendChild(cellOR);

    // NOT A operation
    const cellNOT_A = document.createElement("td");
    const notAResult = computeNOT(combo.a);
    cellNOT_A.textContent = displayBool(notAResult);
    cellNOT_A.className = notAResult ? "true" : "false";
    row.appendChild(cellNOT_A);

    // NOT B operation
    const cellNOT_B = document.createElement("td");
    const notBResult = computeNOT(combo.b);
    cellNOT_B.textContent = displayBool(notBResult);
    cellNOT_B.className = notBResult ? "true" : "false";
    row.appendChild(cellNOT_B);

    // IMPLICATION operation
    const cellIMPLIES = document.createElement("td");
    const impliesResult = computeIMPLICATION(combo.a, combo.b);
    cellIMPLIES.textContent = displayBool(impliesResult);
    cellIMPLIES.className = impliesResult ? "true" : "false";
    row.appendChild(cellIMPLIES);

    // BICONDITIONAL operation
    const cellIFF = document.createElement("td");
    const iffResult = computeBICONDITIONAL(combo.a, combo.b);
    cellIFF.textContent = displayBool(iffResult);
    cellIFF.className = iffResult ? "true" : "false";
    row.appendChild(cellIFF);

    tableBody.appendChild(row);
  });
}

// Switch between calculator and truth table views
calculatorTabBtn.addEventListener("click", () => {
  calculatorTabBtn.classList.add("active");
  truthTableTabBtn.classList.remove("active");
  calculatorView.classList.remove("hidden");
  truthTableView.classList.add("hidden");
});

truthTableTabBtn.addEventListener("click", () => {
  truthTableTabBtn.classList.add("active");
  calculatorTabBtn.classList.remove("active");
  truthTableView.classList.remove("hidden");
  calculatorView.classList.add("hidden");

  // Generate the truth table when switching to that view
  generateTruthTable();
});

// Add event listeners to radio buttons
for (const radio of inputARadios) {
  radio.addEventListener("change", updateResults);
}

for (const radio of inputBRadios) {
  radio.addEventListener("change", updateResults);
}

// Initialize results on page load
document.addEventListener("DOMContentLoaded", () => {
  updateResults();
  generateTruthTable();
});
