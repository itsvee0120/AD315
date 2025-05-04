public class ArithmeticOperations {

    public static String getIEEE754Representation(float value) {
        int bits = Float.floatToIntBits(value);
        String binaryStr = String.format("%32s", Integer.toBinaryString(bits)).replace(' ', '0');

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
        // Examine 0.1 and 0.2 individually
        System.out.println("IEEE 754 representation of 0.1:");
        System.out.println(getIEEE754Representation(0.1f));
        System.out.println("\nIEEE 754 representation of 0.2:");
        System.out.println(getIEEE754Representation(0.2f));

        // Examine 0.1 + 0.2
        float sum = 0.1f + 0.2f;
        System.out.println("\nResult of 0.1 + 0.2 = " + sum);
        System.out.println(getIEEE754Representation(sum));
        System.out.println("Expected decimal result: 0.3");
        System.out.println("Discrepancy: " + (sum - 0.3));

        // Examine 1.0/3.0
        float division = 1.0f / 3.0f;
        System.out.println("\nResult of 1.0/3.0 = " + division);
        System.out.println(getIEEE754Representation(division));
        System.out.println("Expected decimal result: 0.333333...");

        // Show the discrepancy with a higher precision representation
        double preciseThird = 1.0/3.0;
        System.out.println("Discrepancy from double precision (1.0/3.0): " + (division - preciseThird));

        // Demonstrate why these discrepancies occur
        System.out.println("\nExplanation of discrepancies:");
        System.out.println("1. Binary representation cannot exactly represent many decimal fractions.");
        System.out.println("2. 0.1 and 0.2 in binary are both infinite repeating fractions.");
        System.out.println("3. When stored in IEEE 754, they must be rounded to fit in the mantissa.");
        System.out.println("4. These rounding errors accumulate during arithmetic operations.");
    }
}