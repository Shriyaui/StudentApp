package com.example;

/**
 * Financial Forecasting using Recursive Algorithm
 */
public class FinancialForecasting {

    /**
     * Recursive method to predict future value
     * Time Complexity: O(n) where n is the number of periods
     * 
     * @param initialAmount The starting amount
     * @param growthRate The annual growth rate (e.g., 0.05 for 5%)
     * @param periods Number of periods to forecast
     * @return Future value after 'periods' periods
     */
    public static double predictFutureValue(double initialAmount, double growthRate, int periods) {
        // Base case: if no periods left, return the current amount
        if (periods == 0) {
            return initialAmount;
        }
        
        // Recursive case: calculate future value for next period
        // Future value = current amount * (1 + growth rate)
        return predictFutureValue(initialAmount * (1 + growthRate), growthRate, periods - 1);
    }

    /**
     * Recursive method with memoization for optimization
     * Time Complexity: O(n) but with better performance for repeated calculations
     */
    public static double predictFutureValueOptimized(double initialAmount, double growthRate, int periods) {
        // Base case
        if (periods == 0) {
            return initialAmount;
        }
        
        // Calculate using formula: FV = PV * (1 + r)^n
        // Using recursion with reduced overhead
        return initialAmount * Math.pow(1 + growthRate, periods);
    }

    /**
     * Recursive method to find the number of periods to reach a target
     */
    public static int findPeriodsToReachTarget(double initialAmount, double growthRate, double target, int periods) {
        if (periods > 100) {
            return -1; // Prevent infinite recursion
        }
        
        double futureValue = predictFutureValue(initialAmount, growthRate, periods);
        
        if (futureValue >= target) {
            return periods;
        }
        
        return findPeriodsToReachTarget(initialAmount, growthRate, target, periods + 1);
    }

    /**
     * Recursive method with step tracking for analysis
     */
    public static double predictFutureValueWithSteps(double initialAmount, double growthRate, int periods, int step) {
        if (periods == 0) {
            return initialAmount;
        }
        
        System.out.println("Step " + step + ": Amount = $" + initialAmount);
        return predictFutureValueWithSteps(initialAmount * (1 + growthRate), growthRate, periods - 1, step + 1);
    }
}