package com.example;

/**
 * WordFactory - Concrete Creator for Word documents
 */
public class WordFactory extends DocumentFactory {
    
    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}