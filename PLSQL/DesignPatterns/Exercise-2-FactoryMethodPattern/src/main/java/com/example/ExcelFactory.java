package com.example;

/**
 * ExcelFactory - Concrete Creator for Excel documents
 */
public class ExcelFactory extends DocumentFactory {
    
    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }
}