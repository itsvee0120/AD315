import java.math.BigDecimal;
import java.math.RoundingMode;

public class RoundingModes {

    public static void main(String[] args) {
        // Define some test values
        BigDecimal[] testValues = {
                new BigDecimal("1.5"),
                new BigDecimal("2.5"),
                new BigDecimal("-1.5"),
                new BigDecimal("-2.5"),
                new BigDecimal("1.6"),
                new BigDecimal("1.1"),
                new BigDecimal("1.499999"),
                new BigDecimal("-1.499999")
        };

        // Test all rounding modes in a more narrative style
        System.out.println("IEEE 754 Rounding Modes Demonstration");
        System.out.println("====================================");

        for (BigDecimal value : testValues) {
            System.out.println("\nRounding " + value + " with different modes:");

            // UP - rounds away from zero
            System.out.println("UP (away from zero): " + value.setScale(0, RoundingMode.UP));

            // DOWN - rounds toward zero
            System.out.println("DOWN (toward zero): " + value.setScale(0, RoundingMode.DOWN));

            // CEILING - rounds toward positive infinity
            System.out.println("CEILING (toward positive infinity): " + value.setScale(0, RoundingMode.CEILING));

            // FLOOR - rounds toward negative infinity
            System.out.println("FLOOR (toward negative infinity): " + value.setScale(0, RoundingMode.FLOOR));

            // HALF_UP - rounds away from zero if >= 0.5
            System.out.println("HALF_UP (away from zero if >= 0.5): " + value.setScale(0, RoundingMode.HALF_UP));

            // HALF_DOWN - rounds toward zero if > 0.5
            System.out.println("HALF_DOWN (toward zero if > 0.5): " + value.setScale(0, RoundingMode.HALF_DOWN));

            // HALF_EVEN - rounds to nearest even number if exactly halfway
            System.out.println("HALF_EVEN (to nearest even if halfway): " + value.setScale(0, RoundingMode.HALF_EVEN));

            System.out.println("---------------------------------------------");
        }

        // Demonstrate how different rounding modes affect floating-point calculations
        System.out.println("\nApplying Different Rounding Modes to IEEE 754 Operations");
        System.out.println("---------------------------------------------------");

        // Example: Dividing 10 by 3 with different precisions
        BigDecimal numerator = new BigDecimal("10");
        BigDecimal denominator = new BigDecimal("3");

        System.out.println("10 ÷ 3 with different rounding modes and scales:");
        for (RoundingMode mode : RoundingMode.values()) {
            try {
                BigDecimal result = numerator.divide(denominator, 2, mode);
                System.out.println(mode + ": " + result);
            } catch (ArithmeticException e) {
                System.out.println(mode + ": " + e.getMessage());
            }
        }

        // Example: How rounding can affect accumulated errors
        System.out.println("\nAccumulated errors with different rounding modes:");
        BigDecimal oneTenth = new BigDecimal("0.1");

        for (RoundingMode mode : new RoundingMode[] {
                RoundingMode.HALF_UP, RoundingMode.HALF_DOWN, RoundingMode.HALF_EVEN}) {
            BigDecimal sum = BigDecimal.ZERO;
            for (int i = 0; i < 10; i++) {
                sum = sum.add(oneTenth).setScale(1, mode);
            }
            System.out.println(mode + ": Sum of 0.1 ten times = " + sum +
                    " (Error: " + sum.subtract(BigDecimal.ONE) + ")");
        }
    }
}