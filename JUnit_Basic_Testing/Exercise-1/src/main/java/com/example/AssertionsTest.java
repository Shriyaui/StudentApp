package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {
    
    @Test
    public void testAssertions() {
        // 1. assertEquals - checks if two values are equal
        assertEquals("5 + 3 should equal 8", 8, 5 + 3);
        assertEquals("String should match", "Hello", "Hello");
        
        // 2. assertTrue - checks if condition is true
        assertTrue("5 is greater than 3", 5 > 3);
        assertTrue("String should contain Hello", "Hello World".contains("Hello"));
        
        // 3. assertFalse - checks if condition is false
        assertFalse("5 is not less than 3", 5 < 3);
        assertFalse("String should not contain Goodbye", "Hello World".contains("Goodbye"));
        
        // 4. assertNull - checks if object is null
        assertNull("Object should be null", null);
        String nullString = null;
        assertNull(nullString);
        
        // 5. assertNotNull - checks if object is not null
        assertNotNull("Object should not be null", new Object());
        String notNullString = "Hello";
        assertNotNull(notNullString);
        
        // 6. assertSame - checks if two references point to same object
        String str1 = "Hello";
        String str2 = str1;
        assertSame("str1 and str2 should reference same object", str1, str2);
        
        // 7. assertNotSame - checks if two references point to different objects
        String str3 = new String("Hello");
        assertNotSame("str1 and str3 should reference different objects", str1, str3);
        
        // 8. assertArrayEquals - checks if two arrays are equal
        int[] expected = {1, 2, 3, 4, 5};
        int[] actual = {1, 2, 3, 4, 5};
        assertArrayEquals("Arrays should be equal", expected, actual);
        
        // 9. assertThat - with Hamcrest matcher (if available)
        // Note: Requires Hamcrest dependency
        // assertThat("Hello", containsString("ell"));
    }
    
    @Test
    public void testAssertionsWithCalculator() {
        Calculator calc = new Calculator();
        
        // Test with assertions
        assertEquals("2 + 3 should equal 5", 5, calc.add(2, 3));
        assertTrue("10 should be even", calc.isEven(10));
        assertFalse("7 should be odd", calc.isEven(7));
        assertNotNull("Calculator should not be null", calc);
        
        // Testing max
        assertEquals("Max of 10 and 5 should be 10", 10, calc.max(10, 5));
        assertTrue("Max should be greater than or equal to both", 
                   calc.max(10, 5) >= 10 && calc.max(10, 5) >= 5);
    }
    
    @Test
    public void testArrayAssertions() {
        int[] numbers = {1, 2, 3, 4, 5};
        
        // Check array length
        assertEquals("Array length should be 5", 5, numbers.length);
        
        // Check specific element
        assertEquals("First element should be 1", 1, numbers[0]);
        assertEquals("Last element should be 5", 5, numbers[4]);
        
        // Check if array contains certain values
        assertTrue("Array should contain 3", contains(numbers, 3));
        assertFalse("Array should not contain 10", contains(numbers, 10));
    }
    
    // Helper method to check if array contains value
    private boolean contains(int[] array, int value) {
        for (int num : array) {
            if (num == value) {
                return true;
            }
        }
        return false;
    }
}