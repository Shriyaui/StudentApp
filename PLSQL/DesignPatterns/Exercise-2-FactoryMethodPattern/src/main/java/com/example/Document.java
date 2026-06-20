package com.example;

/**
 * Document Interface - Product interface for Factory Method Pattern
 */
public interface Document {
    void open();
    void save();
    void close();
    String getType();
}