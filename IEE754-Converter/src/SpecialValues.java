public class SpecialValues {

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
        // Generate positive infinity by division by zero
        float posInfinity = 1.0f / 0.0f;
        System.out.println("Positive Infinity:");
        System.out.println(getIEEE754Representation(posInfinity));
        System.out.println("Is positive infinity? " + Float.isInfinite(posInfinity));
        System.out.println("Float.POSITIVE_INFINITY equals our value? " + (Float.POSITIVE_INFINITY == posInfinity));

        // Generate negative infinity
        float negInfinity = -1.0f / 0.0f;
        System.out.println("\nNegative Infinity:");
        System.out.println(getIEEE754Representation(negInfinity));
        System.out.println("Is negative infinity? " + Float.isInfinite(negInfinity));
        System.out.println("Float.NEGATIVE_INFINITY equals our value? " + (Float.NEGATIVE_INFINITY == negInfinity));

        // Generate NaN (Not a Number)
        float nan1 = 0.0f / 0.0f;
        float nan2 = (float) Math.sqrt(-1);
        System.out.println("\nNaN (Not a Number) via 0.0/0.0:");
        System.out.println(getIEEE754Representation(nan1));
        System.out.println("Is NaN? " + Float.isNaN(nan1));

        System.out.println("\nNaN (Not a Number) via sqrt(-1):");
        System.out.println(getIEEE754Representation(nan2));
        System.out.println("Is NaN? " + Float.isNaN(nan2));

        // NaN is never equal to itself - a unique property!
        System.out.println("\nNaN equals itself? " + (nan1 == nan1));
        System.out.println("NaN equals another NaN? " + (nan1 == nan2));
        System.out.println("Float.NaN equals our NaN? " + (Float.NaN == nan1));

        // Demonstrate that operations with special values follow IEEE 754 rules
        System.out.println("\nOperations with special values:");
        System.out.println("1.0 + Infinity = " + (1.0f + posInfinity));
        System.out.println("Infinity - Infinity = " + (posInfinity - posInfinity));
        System.out.println("Infinity * 0 = " + (posInfinity * 0.0f));
        System.out.println("1.0 / 0.0 = " + (1.0f / 0.0f));
        System.out.println("NaN + 5 = " + (nan1 + 5));
        System.out.println("NaN * Infinity = " + (nan1 * posInfinity));
    }
}