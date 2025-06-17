# IEEE 754 Converter React App

## Overview

This React app converts a decimal number input into its IEEE 754 32-bit single-precision floating-point binary representation.

---

## Features

- **Decimal Input:** Enter any decimal number (positive, negative, zero, or special values like Infinity).
- **IEEE 754 Output:** Displays the 32-bit IEEE 754 binary string corresponding to the input.
- **Real-time Conversion:** Updates immediately as you type.
- **Special Values:** Handles and displays IEEE 754 representation for special numbers like `NaN`, `Infinity`, and `-Infinity`.

---

## GUI Explanation

- **Input Box:** A numeric input field where you can type the decimal number.
- **Output Display:** Below the input, the app shows:

  - The decimal value entered.
  - Its IEEE 754 32-bit binary representation.

- The layout is simple and responsive, making it easy to visualize floating-point encoding quickly.

---

## Running the App

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Open your browser at `http://localhost:3000` to use the converter.

---

## Test Cases

We have automated tests using **Jest** to verify the correctness of the IEEE 754 conversion function.

### Tested Scenarios Include:

- Converting zero (`0.0` and `-0.0`).
- Positive and negative numbers (e.g., `1.0`, `-2.5`).
- Common decimal fractions (`0.1`, `0.2`).
- Arithmetic results like `0.1 + 0.2` (demonstrating floating-point precision issues).
- Special values like positive infinity (`Infinity`), negative infinity (`-Infinity`), and `NaN`.

### Running Tests

```bash
npm test
```

This runs all test suites, including:

- Unit tests for the conversion function.

---

## Notes

- The app uses JavaScript's `Float32Array` and `Uint32Array` typed arrays to extract the IEEE 754 bits.
- Floating-point arithmetic discrepancies (like `0.1 + 0.2` not exactly equal to `0.3`) are demonstrated through the test cases.
- The code can be extended to include more detailed breakdowns (sign, exponent, mantissa) or handle rounding modes and special IEEE 754 scenarios.
