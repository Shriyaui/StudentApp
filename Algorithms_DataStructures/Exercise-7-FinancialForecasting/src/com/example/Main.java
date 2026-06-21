package com.example;

/**
 * Main class to demonstrate Financial Forecasting
 */
public class Main {
    public static void main(String[] args) {
        System.out.println("=== Financial Forecasting ===");
        System.out.println("=============================");

        // Basic forecasting
        double initialAmount = 10000.0; // $10,000
        double growthRate = 0.05; // 5% annual growth
        int periods = 5; // 5 years

        System.out.println("\n--- Basic Forecasting ---");
        System.out.println("Initial Amount: $" + initialAmount);
        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Forecast Periods: " + periods + " years");

        double futureValue = FinancialForecasting.predictFutureValue(initialAmount, growthRate, periods);
        System.out.println("Future Value after " + periods + " years: $" + String.format("%.2f", futureValue));

        // Step by step calculation
        System.out.println("\n--- Step-by-Step Calculation ---");
        System.out.println("Year 0: $" + String.format("%.2f", initialAmount));
        
        double currentAmount = initialAmount;
        for (int i = 1; i <= periods; i++) {
            currentAmount = currentAmount * (1 + growthRate);
            System.out.println("Year " + i + ": $" + String.format("%.2f", currentAmount));
        }

        // Optimized method
        System.out.println("\n--- Optimized Forecasting ---");
        double optimizedValue = FinancialForecasting.predictFutureValueOptimized(initialAmount, growthRate, periods);
        System.out.println("Optimized Future Value after " + periods + " years: $" + String.format("%.2f", optimizedValue));

        // Find periods to reach target
        System.out.println("\n--- Find Periods to Reach Target ---");
        double target = 15000.0; // Target: $15,000
        
        System.out.println("Target Amount: $" + target);
        int periodsNeeded = FinancialForecasting.findPeriodsToReachTarget(initialAmount, growthRate, target, 0);
        
        if (periodsNeeded > 0) {
            System.out.println("Years needed to reach $" + target + ": " + periodsNeeded + " years");
            double reachedValue = FinancialForecasting.predictFutureValue(initialAmount, growthRate, periodsNeeded);
            System.out.println("Value after " + periodsNeeded + " years: $" + String.format("%.2f", reachedValue));
        } else {
            System.out.println("Target not reached within 100 years.");
        }

        // Different scenarios
        System.out.println("\n--- Different Growth Scenarios ---");
        System.out.println("Initial Amount: $" + initialAmount);
        System.out.println("After 10 years:");
        System.out.println("----------------------------------");
        
        double[] growthRates = {0.03, 0.05, 0.07, 0.10, 0.15};
        for (double rate : growthRates) {
            double value = FinancialForecasting.predictFutureValue(initialAmount, rate, 10);
            System.out.printf("Growth Rate: %4d%% - Future Value: $%,.2f%n", 
                (int)(rate * 100), value);
        }

        // Recursive step tracking
        System.out.println("\n--- Recursive Step Tracking ---");
        System.out.println("Forecasting with recursion (3 years):");
        FinancialForecasting.predictFutureValueWithSteps(initialAmount, growthRate, 3, 1);

        // Complexity Analysis
        System.out.println("\n==================================");
        System.out.println("Complexity Analysis");
        System.out.println("==================================");
        System.out.println("Time Complexity: O(n) where n = number of periods");
        System.out.println("Space Complexity: O(n) due to recursion stack");
        System.out.println("\nOptimized Approach:");
        System.out.println("Time Complexity: O(1) using formula");
        System.out.println("Space Complexity: O(1)");
        System.out.println("\nBenefits of Recursion:");
        System.out.println("1. Clean, elegant code");
        System.out.println("2. Easy to understand and modify");
        System.out.println("3. Good for educational purposes");
        System.out.println("\nOptimization Techniques:");
        System.out.println("1. Use formula: FV = PV * (1 + r)^n");
        System.out.println("2. Memoization for repeated calculations");
        System.out.println("3. Iterative approach for large n");
    }
}