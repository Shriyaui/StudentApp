package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class UserServiceTest {
    
    private UserService userService;
    
    // @Before - runs before each test method
    @Before
    public void setUp() {
        // Arrange: Setup test fixtures
        System.out.println("Setting up test...");
        userService = new UserService();
        
        // Adding some initial users for testing
        userService.addUser("John");
        userService.addUser("Jane");
        userService.addUser("Bob");
    }
    
    // @After - runs after each test method
    @After
    public void tearDown() {
        // Clean up after each test
        System.out.println("Cleaning up test...");
        userService = null;
    }
    
    @Test
    public void testAddUser() {
        // Arrange - Already done in @Before
        
        // Act - Perform the action
        userService.addUser("Alice");
        
        // Assert - Verify the result
        assertEquals("User count should be 4", 4, userService.getUserCount());
        assertTrue("Alice should exist in users", userService.userExists("Alice"));
    }
    
    @Test
    public void testAddDuplicateUser() {
        // Arrange - Already done in @Before
        
        // Act & Assert - Try to add duplicate user
        try {
            userService.addUser("John");
            fail("Expected IllegalArgumentException was not thrown");
        } catch (IllegalArgumentException e) {
            assertEquals("User already exists: John", e.getMessage());
        }
    }
    
    @Test
    public void testAddEmptyUsername() {
        // Arrange - Already done in @Before
        
        // Act & Assert - Try to add empty username
        try {
            userService.addUser("");
            fail("Expected IllegalArgumentException was not thrown");
        } catch (IllegalArgumentException e) {
            assertEquals("Username cannot be empty", e.getMessage());
        }
        
        try {
            userService.addUser(null);
            fail("Expected IllegalArgumentException was not thrown");
        } catch (IllegalArgumentException e) {
            assertEquals("Username cannot be empty", e.getMessage());
        }
    }
    
    @Test
    public void testRemoveUser() {
        // Arrange - Already done in @Before
        
        // Act - Remove a user
        userService.removeUser("John");
        
        // Assert - Verify the result
        assertEquals("User count should be 2", 2, userService.getUserCount());
        assertFalse("John should not exist in users", userService.userExists("John"));
    }
    
    @Test
    public void testRemoveNonExistentUser() {
        // Arrange - Already done in @Before
        
        // Act & Assert - Try to remove non-existent user
        try {
            userService.removeUser("Alice");
            fail("Expected IllegalArgumentException was not thrown");
        } catch (IllegalArgumentException e) {
            assertEquals("User not found: Alice", e.getMessage());
        }
    }
    
    @Test
    public void testGetAllUsers() {
        // Arrange - Already done in @Before
        
        // Act - Get all users
        java.util.List<String> allUsers = userService.getAllUsers();
        
        // Assert - Verify the result
        assertEquals("Should have 3 users", 3, allUsers.size());
        assertTrue("Should contain John", allUsers.contains("John"));
        assertTrue("Should contain Jane", allUsers.contains("Jane"));
        assertTrue("Should contain Bob", allUsers.contains("Bob"));
    }
    
    @Test
    public void testGetUserCount() {
        // Arrange - Already done in @Before
        
        // Act - Get user count
        int count = userService.getUserCount();
        
        // Assert - Verify the result
        assertEquals("User count should be 3", 3, count);
    }
    
    @Test
    public void testUserExists() {
        // Arrange - Already done in @Before
        
        // Act & Assert - Check existing users
        assertTrue("John should exist", userService.userExists("John"));
        assertTrue("Jane should exist", userService.userExists("Jane"));
        assertTrue("Bob should exist", userService.userExists("Bob"));
        
        // Act & Assert - Check non-existent user
        assertFalse("Alice should not exist", userService.userExists("Alice"));
        assertFalse("Sarah should not exist", userService.userExists("Sarah"));
    }
}