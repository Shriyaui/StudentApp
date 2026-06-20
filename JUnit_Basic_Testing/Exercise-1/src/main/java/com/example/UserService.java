package com.example;

import java.util.ArrayList;
import java.util.List;

public class UserService {
    private List<String> users;
    
    public UserService() {
        this.users = new ArrayList<>();
    }
    
    public void addUser(String username) {
        if (username == null || username.trim().isEmpty()) {
            throw new IllegalArgumentException("Username cannot be empty");
        }
        if (users.contains(username)) {
            throw new IllegalArgumentException("User already exists: " + username);
        }
        users.add(username);
    }
    
    public void removeUser(String username) {
        if (!users.contains(username)) {
            throw new IllegalArgumentException("User not found: " + username);
        }
        users.remove(username);
    }
    
    public List<String> getAllUsers() {
        return new ArrayList<>(users);
    }
    
    public int getUserCount() {
        return users.size();
    }
    
    public boolean userExists(String username) {
        return users.contains(username);
    }
}