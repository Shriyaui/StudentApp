package com.example;

/**
 * PdfDocument - Concrete Product for PDF documents
 */
public class PdfDocument implements Document {
    
    @Override
    public void open() {
        System.out.println("[PDF] Opening PDF Document...");
        System.out.println("   - Loading PDF reader");
        System.out.println("   - Document ready for viewing");
    }
    
    @Override
    public void save() {
        System.out.println("[PDF] Saving PDF Document...");
        System.out.println("   - Saving as .pdf format");
        System.out.println("   - Document saved successfully");
    }
    
    @Override
    public void close() {
        System.out.println("[PDF] Closing PDF Document...");
        System.out.println("   - Closing PDF reader");
    }
    
    @Override
    public String getType() {
        return "PDF Document (.pdf)";
    }
}