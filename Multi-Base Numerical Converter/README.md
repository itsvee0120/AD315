# Base Converter (2-16)

This is a Java-based command-line program that allows you to convert numbers between different bases (2 to 16). The program supports conversion from any source base (2-16) to any target base (2-16).

## Features

- Convert numbers from any base (2-16) to decimal (base 10).
- Convert decimal (base 10) numbers to any other base (2-16).
- Validate the number for the specified base.
- Handle input errors gracefully.

## Requirements

- Java 8 or higher.

## How to Run

1. Clone the repository or download the source code file `BaseConverter.java`.
2. Compile the program using the following command:
   ```bash
   javac BaseConverter.java
   ```
3. Run the compiled program using:
   ```bash
   java BaseConverter
   ```

4. Follow the prompts in the command line to input:
    - The number you want to convert.
    - The source base (between 2 and 16).
    - The target base (between 2 and 16).

   The program will then display the result of the conversion.

## Example Usage

```
Base Converter (2-16)
---------------------
Enter the number to convert: 10
Enter the source base (between 2 and 16): 4
Enter the target base (between 2 and 16): 16
10 in base 4 = 4 in base 16
```

## Methods

### `toDecimal(String numberStr, int base)`
- Converts a number from any base (2-16) to decimal (base 10).

### `fromDecimal(int decimalNumber, int base)`
- Converts a decimal number to the specified base (2-16).

### `isValidNumber(String numberStr, int base)`
- Validates whether the given number is valid for the specified base.

### `convertNumber()`
- Handles the user input and performs the conversion. It validates the inputs, performs the conversion, and prints the result.

## Error Handling

- The program will display an error if:
    - The bases entered are not between 2 and 16.
    - The number contains invalid digits for the specified source base.
    - An unexpected input or format error occurs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

