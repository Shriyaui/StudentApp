package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Additional example demonstrating logging with exceptions
 */
public class LoggingExampleWithException {
    
    private static final Logger logger = LoggerFactory.getLogger(LoggingExampleWithException.class);
    
    public static void main(String[] args) {
        logger.info("=== Exception Logging Demo ===");
        
        // Example 1: Logging exception with stack trace
        try {
            String str = null;
            str.length();
        } catch (NullPointerException e) {
            logger.error("NullPointerException caught: ", e);
        }
        
        // Example 2: Logging with custom message and exception
        try {
            int[] numbers = {1, 2, 3};
            int value = numbers[10];
        } catch (ArrayIndexOutOfBoundsException e) {
            logger.error("Array index out of bounds: ", e);
        }
        
        // Example 3: Custom exception
        try {
            validateUserInput(null);
        } catch (IllegalArgumentException e) {
            logger.error("Validation failed: ", e);
        }
    }
    
    private static void validateUserInput(String input) {
        if (input == null) {
            throw new IllegalArgumentException("Input cannot be null");
        }
        if (input.isEmpty()) {
            throw new IllegalArgumentException("Input cannot be empty");
        }
    }
}