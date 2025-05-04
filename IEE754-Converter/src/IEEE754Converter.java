public class IEEE754Converter {

    public static String decimalToIEEE754(float value) {
        // Get the binary representation as an integer
        int bits = Float.floatToIntBits(value);

        // Convert to binary string
        String binaryStr = Integer.toBinaryString(bits);

        // Pad with leading zeros to get 32 bits
        binaryStr = String.format("%32s", binaryStr).replace(' ', '0');

        // Extract components
        String sign = binaryStr.substring(0, 1);
        String exponent = binaryStr.substring(1, 9);
        String mantissa = binaryStr.substring(9);

        return "Value: " + value + "\n" +
                "Binary: " + binaryStr + "\n" +
                "Sign bit: " + sign + "\n" +
                "Exponent: " + exponent + " (decimal: " + Integer.parseInt(exponent, 2) + ")\n" +
                "Mantissa: " + mantissa;
    }

    public static void main(String[] args) {
        System.out.println(decimalToIEEE754(42.5f));
        System.out.println("\n" + decimalToIEEE754(-0.15625f));
    }
}