# Logic Calculator

This project is a web-based interactive **Logic Calculator** that allows users to perform and visualize various logical operations. The tool supports multiple logical operations, including:

- Conjunction (AND)
- Disjunction (OR)
- Negation (NOT)
- Implication (IF A THEN B)
- Biconditional (IF AND ONLY IF)

Users can input truth values (True or False) for two variables, `A` and `B`, and the tool will calculate and display the result of the selected logical operations. It also provides a truth table to help visualize the results for all possible input combinations.

## Features

- **Interactive Calculator**:

  - Users can select truth values for two inputs (`A` and `B`) using radio buttons.
  - Displays the result for various logical operations including:

    - AND (A ∧ B)
    - OR (A ∨ B)
    - NOT A (¬A)
    - NOT B (¬B)
    - IF A THEN B (A → B)
    - IF AND ONLY IF (A ↔ B)

- **Truth Table View**:

  - Displays a truth table for all combinations of truth values for `A` and `B`.
  - Each row of the table shows the results for all logical operations.

- **Logic Operations Guide**:

  - A guide explaining the logical operations and their truth tables.

## How to Use

1. **Interactive Calculator**:

   - Select the truth value for both `A` and `B` (either True or False) using the radio buttons.
   - The results for various logical operations will update dynamically.
   - The operations include:

     - Conjunction (AND)
     - Disjunction (OR)
     - Negation (NOT A and NOT B)
     - Implication (IF A THEN B)
     - Biconditional (IF AND ONLY IF)

2. **Truth Table View**:

   - Click on the "Truth Table" tab to view a table showing all combinations of `A` and `B` with the corresponding results for each operation.

3. **Logic Operations Guide**:

   - A brief guide is available on the side to help users understand the logic operations and their meanings.

## Dependencies

- No external libraries or dependencies are required. The calculator uses basic HTML, CSS, and JavaScript.

## Development

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/itsvee0120/AD315.git
   cd logic-calculator
   ```

2. Open the `index.html` file in your preferred web browser.
