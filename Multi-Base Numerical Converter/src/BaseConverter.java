import java.util.Scanner;

public class BaseConverter {

    // Converts a number from any base (2-16) to decimal (base 10)
    public static int toDecimal(String numberStr, int base) throws NumberFormatException {
        return Integer.parseInt(numberStr, base);
    }

    // Converts a decimal number to the specified base (2-16)
    public static String fromDecimal(int decimalNumber, int base) {
        if (decimalNumber == 0) {
            return "0";
        }

        String digits = "0123456789ABCDEF";
        StringBuilder result = new StringBuilder();

        while (decimalNumber > 0) {
            result.insert(0, digits.charAt(decimalNumber % base));
            decimalNumber /= base;
        }

        return result.toString();
    }

    // Validates that the number is appropriate for the given base
    public static boolean isValidNumber(String numberStr, int base) {
        String validDigits = "0123456789ABCDEF".substring(0, base);

        for (char c : numberStr.toUpperCase().toCharArray()) {
            if (validDigits.indexOf(c) == -1) {
                return false;
            }
        }
        return true;
    }

    public static void convertNumber() {
        Scanner scanner = new Scanner(System.in);

        try {
            // Input from the user
            System.out.print("Enter the number to convert: ");
            String numberStr = scanner.nextLine().toUpperCase();

            System.out.print("Enter the source base (between 2 and 16): ");
            int sourceBase = scanner.nextInt();

            System.out.print("Enter the target base (between 2 and 16): ");
            int targetBase = scanner.nextInt();

            // Validate inputs
            if (sourceBase < 2 || sourceBase > 16 || targetBase < 2 || targetBase > 16) {
                System.out.println("Error: Bases must be between 2 and 16.");
                return;
            }

            if (!isValidNumber(numberStr, sourceBase)) {
                System.out.println("Error: The number contains invalid digits for base " + sourceBase);
                return;
            }

            // Convert to decimal first
            int decimalNumber = toDecimal(numberStr, sourceBase);

            // Convert from decimal to the target base
            String result = fromDecimal(decimalNumber, targetBase);

            // Output the result
            System.out.println(numberStr + " in base " + sourceBase + " = " + result + " in base " + targetBase);

        } catch (NumberFormatException e) {
            System.out.println("Error: Invalid number format for the specified base.");
        } catch (Exception e) {
            System.out.println("An unexpected error occurred: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }

    public static void main(String[] args) {
        System.out.println("Base Converter (2-16)");
        System.out.println("---------------------");
        convertNumber();
    }
}