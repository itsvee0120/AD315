// Global variable to store the current power set
let currentPowerSet = [];
let currentFormat = "sets"; // "sets" or "binary"

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("generateBtn")
    .addEventListener("click", generatePowerSet);
  document.getElementById("clearBtn").addEventListener("click", clearResults);
  document
    .getElementById("toggleFormat")
    .addEventListener("click", toggleFormat);
  document
    .getElementById("inputSet")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        generatePowerSet();
      }
    });
});

/**
 * Generates the power set from the user input
 */
function generatePowerSet() {
  const input = document.getElementById("inputSet").value.trim();
  const resultContainer = document.getElementById("resultContainer");
  const statsContainer = document.getElementById("stats");

  resultContainer.innerHTML = "";
  statsContainer.innerHTML = "";

  if (!input) {
    resultContainer.innerHTML =
      '<div class="error">Please enter at least one element</div>';
    return;
  }

  // Parse input and remove duplicates
  const setElements = [
    ...new Set(
      input
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "")
    ),
  ];

  if (setElements.length === 0) {
    resultContainer.innerHTML =
      '<div class="error">Please enter valid elements</div>';
    return;
  }

  if (setElements.length > 15) {
    resultContainer.innerHTML =
      '<div class="error">For performance reasons, the set size is limited to 15 elements</div>';
    return;
  }

  // Generate power set using bit manipulation algorithm
  currentPowerSet = [];
  const n = setElements.length;
  const powerSetSize = Math.pow(2, n);

  for (let i = 0; i < powerSetSize; i++) {
    const subset = [];
    for (let j = 0; j < n; j++) {
      // Check if jth bit in i is set
      if (i & (1 << j)) {
        subset.push(setElements[j]);
      }
    }
    currentPowerSet.push(subset);
  }

  // Sort by subset size for better readability
  currentPowerSet.sort((a, b) => a.length - b.length);

  // Display the power set
  displayPowerSet();

  // Show statistics about the set
  statsContainer.innerHTML = `
        <p>Original Set: {${setElements.join(", ")}}</p>
        <p>Number of elements in original set: ${setElements.length}</p>
        <p>Number of subsets in power set: ${powerSetSize}</p>
    `;
}

/**
 * Display the power set in the selected format
 */
function displayPowerSet() {
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = "";

  if (currentFormat === "sets") {
    // Set notation format
    currentPowerSet.forEach((subset) => {
      const item = document.createElement("div");
      item.className = "result-item";
      item.textContent = subset.length === 0 ? "∅" : `{${subset.join(", ")}}`;
      resultContainer.appendChild(item);
    });
  } else {
    // Binary representation format
    const n = currentPowerSet.length ? Math.log2(currentPowerSet.length) : 0;
    const originalElements = [];

    // Get original set elements (if power set exists)
    if (
      currentPowerSet.length > 0 &&
      currentPowerSet[currentPowerSet.length - 1].length > 0
    ) {
      // Get the largest subset (which contains all elements)
      const fullSet = [...currentPowerSet[currentPowerSet.length - 1]].sort();

      currentPowerSet.forEach((subset) => {
        const binaryRepresentation = [];

        // Create binary representation
        for (let i = 0; i < fullSet.length; i++) {
          binaryRepresentation.push(subset.includes(fullSet[i]) ? 1 : 0);
        }

        const item = document.createElement("div");
        item.className = "result-item";
        item.textContent = `${binaryRepresentation.join("")} → ${
          subset.length === 0 ? "∅" : `{${subset.join(", ")}}`
        }`;
        resultContainer.appendChild(item);
      });
    }
  }
}

/**
 * Toggle between set notation and binary representation formats
 */
function toggleFormat() {
  if (currentPowerSet.length === 0) {
    return;
  }

  currentFormat = currentFormat === "sets" ? "binary" : "sets";
  displayPowerSet();
}

/**
 * Clear all input and results
 */
function clearResults() {
  document.getElementById("inputSet").value = "";
  document.getElementById("resultContainer").innerHTML = "";
  document.getElementById("stats").innerHTML = "";
  currentPowerSet = [];
}

/**
 * Use one of the example sets
 * @param {string} example - The example set to use
 */
function useExample(example) {
  document.getElementById("inputSet").value = example;
  generatePowerSet();
}
