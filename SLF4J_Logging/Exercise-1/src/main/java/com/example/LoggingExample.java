package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Exercise 1: Logging Error Messages and Warning Levels
 * 
 * This class demonstrates basic logging using SLF4J with:
 * - Error messages
 * - Warning messages
 * - Info messages
 * - Debug messages
 * - Trace messages
 */
public class LoggingExample {
    
    // Create a logger instance for this class
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);
    
    public static void main(String[] args) {
        System.out.println("=== SLF4J Logging - Exercise 1 ===");
        System.out.println("===================================");
        System.out.println("Check the console for log messages.");
        System.out.println("===================================");
        
        // 1. Error Messages
        logger.error("This is an error message");
        logger.error("Database connection failed: Connection timeout");
        logger.error("NullPointerException occurred in UserService");
        logger.error("Failed to process payment for order #12345");
        
        // 2. Warning Messages
        logger.warn("This is a warning message");
        logger.warn("Disk space is running low: only 5% remaining");
        logger.warn("API endpoint is deprecated: /old-api/v1");
        logger.warn("User session is about to expire");
        
        // 3. Info Messages (For context)
        logger.info("Application started successfully");
        logger.info("User 'john_doe' logged in");
        logger.info("Order #12345 processed successfully");
        
        // 4. Debug Messages (For development)
        logger.debug("Loading configuration from application.properties");
        logger.debug("Initializing database connection pool");
        
        // 5. Trace Messages (For detailed debugging)
        logger.trace("Entering method: processOrder()");
        logger.trace("Exiting method: processOrder()");
        
        // 6. Logging with exceptions
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            logger.error("Division by zero occurred", e);
        }
        
        // 7. Simulating a business operation with multiple log levels
        performBusinessOperation();
        
        System.out.println("\n===================================");
        System.out.println("Logging completed. Check the logs!");
    }
    
    /**
     * Simulates a business operation with various log levels
     */
    private static void performBusinessOperation() {
        logger.info("Starting business operation: Process Order");
        
        try {
            // Simulate validation
            logger.debug("Validating order details...");
            Thread.sleep(100);
            
            // Simulate payment processing
            logger.info("Processing payment for order");
            Thread.sleep(200);
            
            // Simulate inventory check
            logger.warn("Inventory low for item: Laptop (5 remaining)");
            Thread.sleep(100);
            
            // Simulate order completion
            logger.info("Order completed successfully");
            
        } catch (InterruptedException e) {
            logger.error("Business operation interrupted", e);
            Thread.currentThread().interrupt();
        } catch (Exception e) {
            logger.error("Unexpected error in business operation", e);
        }
        
        logger.info("Finished business operation");
    }
}