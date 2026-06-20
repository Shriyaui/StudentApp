package com.example;

/**
 * WordDocument - Concrete Product for Word documents
 */
public class WordDocument implements Document {
    
    @Override
    public void open() {
        System.out.println("[Word] Opening Word Document...");
        System.out.println("   - Loading Microsoft Word editor");
        System.out.println("   - Document ready for editing");
    }
    
    @Override
    public void save() {
        System.out.println("[Word] Saving Word Document...");
        System.out.println("   - Saving as .docx format");
        System.out.println("   - Document saved successfully");
    }
    
    @Override
    public void close() {
        System.out.println("[Word] Closing Word Document...");
        System.out.println("   - Closing Microsoft Word editor");
    }
    
    @Override
    public String getType() {
        return "Word Document (.docx)";
    }
}