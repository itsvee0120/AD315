public class UnderflowOverflow {

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
        // Float range constants
        float maxFloat = Float.MAX_VALUE;
        float minNormal = Float.MIN_NORMAL;
        float minDenormal = Float.MIN_VALUE;

        System.out.println("IEEE 754 Single Precision Range:");
        System.out.println("MAX_VALUE = " + maxFloat);
        System.out.println("MIN_NORMAL = " + minNormal);
        System.out.println("MIN_VALUE (smallest denormal) = " + minDenormal);

        // Demonstrate overflow
        System.out.println("\n===== OVERFLOW DEMONSTRATION =====");
        float almostTooLarge = maxFloat * 0.9f;
        System.out.println("\nAlmost too large value: " + almostTooLarge);
        System.out.println(getIEEE754Representation(almostTooLarge));

        System.out.println("\nMultiply by 2 to cause overflow:");
        float overflowed = almostTooLarge * 2f;
        System.out.println("Result: " + overflowed);
        System.out.println(getIEEE754Representation(overflowed));
        System.out.println("Is infinity? " + Float.isInfinite(overflowed));

        // Demonstrate gradual underflow with denormalized numbers
        System.out.println("\n===== UNDERFLOW DEMONSTRATION =====");

        // Show smallest normal number
        System.out.println("\nSmallest normal float: " + minNormal);
        System.out.println(getIEEE754Representation(minNormal));

        // Show a denormalized number
        float denormal = minNormal / 2f;
        System.out.println("\nDenormal number (minNormal / 2): " + denormal);
        System.out.println(getIEEE754Representation(denormal));

        // Show smallest possible denormal
        System.out.println("\nSmallest denormal float: " + minDenormal);
        System.out.println(getIEEE754Representation(minDenormal));

        // Show underflow to zero
        float underflowed = minDenormal / 2f;
        System.out.println("\nUnderflow to zero (minDenormal / 2): " + underflowed);
        System.out.println(getIEEE754Representation(underflowed));

        // Demonstrate loss of precision near underflow
        System.out.println("\n===== PRECISION LOSS NEAR UNDERFLOW =====");
        float small1 = minNormal * 16;
        float small2 = minNormal * 15;
        float diff = small1 - small2;
        float expected = minNormal;

        System.out.println("small1 = " + small1);
        System.out.println("small2 = " + small2);
        System.out.println("diff = small1 - small2 = " + diff);
        System.out.println("expected = " + expected);
        System.out.println("diff == expected: " + (diff == expected));

        // Demonstrate how denormal numbers lose precision
        System.out.println("\n===== PRECISION LOSS IN DENORMAL RANGE =====");
        float denormal1 = minNormal / 10;
        float denormal2 = denormal1 - minDenormal;

        System.out.println("denormal1 = " + denormal1);
        System.out.println("denormal2 = denormal1 - smallest denormal = " + denormal2);
        System.out.println("denormal1 == denormal2: " + (denormal1 == denormal2));
        System.out.println("This demonstrates loss of precision in denormal range");
    }
}