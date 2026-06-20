package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {
    
    private Calculator calculator = new Calculator();
    
    // Test add method
    @Test
    public void testAdd() {
        // Positive numbers
        assertEquals(5, calculator.add(2, 3));
        assertEquals(10, calculator.add(7, 3));
        
        // Negative numbers
        assertEquals(-5, calculator.add(-2, -3));
        assertEquals(0, calculator.add(-5, 5));
        
        // Zero
        assertEquals(10, calculator.add(10, 0));
        assertEquals(10, calculator.add(0, 10));
    }
    
    // Test subtract method
    @Test
    public void testSubtract() {
        // Positive numbers
        assertEquals(5, calculator.subtract(10, 5));
        assertEquals(3, calculator.subtract(7, 4));
        
        // Negative numbers
        assertEquals(-5, calculator.subtract(-10, -5));
        assertEquals(0, calculator.subtract(5, 5));
        
        // Zero
        assertEquals(10, calculator.subtract(10, 0));
        assertEquals(-10, calculator.subtract(0, 10));
    }
    
    // Test multiply method
    @Test
    public void testMultiply() {
        // Positive numbers
        assertEquals(15, calculator.multiply(3, 5));
        assertEquals(20, calculator.multiply(4, 5));
        
        // Negative numbers
        assertEquals(-6, calculator.multiply(-2, 3));
        assertEquals(6, calculator.multiply(-2, -3));
        
        // Zero
        assertEquals(0, calculator.multiply(10, 0));
        assertEquals(0, calculator.multiply(0, 10));
    }
    
    // Test divide method
    @Test
    public void testDivide() {
        // Positive numbers
        assertEquals(2.0, calculator.divide(10, 5), 0.001);
        assertEquals(3.0, calculator.divide(15, 5), 0.001);
        
        // Negative numbers
        assertEquals(-2.0, calculator.divide(-10, 5), 0.001);
        assertEquals(2.0, calculator.divide(-10, -5), 0.001);
        
        // Zero numerator
        assertEquals(0.0, calculator.divide(0, 5), 0.001);
        
        // Divide by zero - expect exception
        try {
            calculator.divide(10, 0);
            fail("Expected IllegalArgumentException was not thrown");
        } catch (IllegalArgumentException e) {
            assertEquals("Cannot divide by zero", e.getMessage());
        }
    }
    
    // Test isEven method
    @Test
    public void testIsEven() {
        // Even numbers
        assertTrue(calculator.isEven(2));
        assertTrue(calculator.isEven(4));
        assertTrue(calculator.isEven(0));
        assertTrue(calculator.isEven(-2));
        
        // Odd numbers
        assertFalse(calculator.isEven(1));
        assertFalse(calculator.isEven(3));
        assertFalse(calculator.isEven(-1));
        assertFalse(calculator.isEven(-3));
    }
    
    // Test max method
    @Test
    public void testMax() {
        // First number greater
        assertEquals(10, calculator.max(10, 5));
        assertEquals(100, calculator.max(100, 50));
        
        // Second number greater
        assertEquals(15, calculator.max(10, 15));
        assertEquals(50, calculator.max(30, 50));
        
        // Equal numbers
        assertEquals(10, calculator.max(10, 10));
        assertEquals(-5, calculator.max(-5, -5));
    }
}