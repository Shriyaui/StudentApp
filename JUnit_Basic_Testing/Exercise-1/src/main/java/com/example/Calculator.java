package com.example;

public class Calculator {
    
    // Add two numbers
    public int add(int a, int b) {
        return a + b;
    }
    
    // Subtract two numbers
    public int subtract(int a, int b) {
        return a - b;
    }
    
    // Multiply two numbers
    public int multiply(int a, int b) {
        return a * b;
    }
    
    // Divide two numbers
    public double divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Cannot divide by zero");
        }
        return (double) a / b;
    }
    
    // Check if number is even
    public boolean isEven(int number) {
        return number % 2 == 0;
    }
    
    // Get maximum of two numbers
    public int max(int a, int b) {
        return a > b ? a : b;
    }
}