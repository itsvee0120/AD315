
# IEEE 754 Interactive Visualizer

This is a Java Swing application designed to help users understand the IEEE 754 single-precision (32-bit) floating-point format through interactive visualization.

## Features

- **Interactive Bit Manipulation**: Directly toggle individual bits (Sign, Exponent, Mantissa) and see the resulting decimal value update in real-time.
- **Real-time Conversion**: Enter a decimal value and see its corresponding IEEE 754 bit representation, hexadecimal value, and component breakdown.
- **Component Breakdown**: Clearly displays the Sign bit, Exponent (in binary and decimal with bias applied), and Mantissa.
- **Color-Coded Bits**: Bits are color-coded to easily distinguish between the Sign, Exponent, and Mantissa fields.
- **Special Value Demonstration**: Buttons to quickly view the bit representations of common special values like Positive/Negative Zero, Infinity, NaN, and the limits of normal and subnormal numbers.
- **Number Line Visualization**: A graphical representation of the current value on a number line with zoom functionality.
- **Precision Loss Visualization**: Illustrates the concept of floating-point precision by showing the current value, the next and previous exactly representable values, and the gap between them. Includes a relative precision indicator.

## Requirements

- Java Development Kit (JDK) 8 or higher.
- A compatible Integrated Development Environment (IDE) like Eclipse, IntelliJ IDEA, or VS Code with Java support, or command-line tools.

## How to Build and Run

1. **Save the code**: Save the provided Java code as `IEEE754Visualizer.java`.

2. **Compile**: Open a terminal or command prompt, navigate to the directory where you saved the file, and compile the code using the Java compiler:

   ```bash
   javac IEEE754Visualizer.java
   ```

3. **Run**: Execute the compiled class file:

   ```bash
   java IEEE754Visualizer
   ```

4. **Alternatively**: If you are using an IDE, you can create a new Java project, add the `IEEE754Visualizer.java` file to the source folder, and run the main method directly from the IDE.

## Overflow and Underflow

Floating-point numbers have a limited range.

* **Overflow**: Occurs when a number's magnitude is too large to be represented. For single-precision IEEE 754, values exceeding approximately `3.4×10^38` result in Infinity (positive or negative).
* **Underflow**: Occurs when a non-zero number's magnitude is too small to be represented as a normalized number. Values smaller than the smallest positive normal number (approx. `1.17×10^−38`) but not zero enter the subnormal range, where precision is reduced. Values smaller than the smallest subnormal number (approx. `1.4×10^−45`) are typically rounded to Zero.

## Project Structure

The project consists of a single Java file, `IEEE754Visualizer.java`, which contains the main application class and two inner classes for the visualization panels: `NumberLinePanel` and `PrecisionLossPanel`.
