package com.example;

/**
 * Application - Main class to demonstrate Factory Method Pattern
 */
public class Application {
    
    public static void main(String[] args) {
        System.out.println("=== Factory Method Pattern Demo ===");
        System.out.println("Document Management System");
        System.out.println("================================");
        
        // Create Word document using WordFactory
        DocumentFactory wordFactory = new WordFactory();
        System.out.println("\n[Word] Creating Word Document:");
        wordFactory.createAndProcessDocument();
        
        // Create PDF document using PdfFactory
        DocumentFactory pdfFactory = new PdfFactory();
        System.out.println("\n[PDF] Creating PDF Document:");
        pdfFactory.createAndProcessDocument();
        
        // Create Excel document using ExcelFactory
        DocumentFactory excelFactory = new ExcelFactory();
        System.out.println("\n[Excel] Creating Excel Document:");
        excelFactory.createAndProcessDocument();
        
        // Demonstrate using factories directly
        System.out.println("\n=== Direct Factory Usage ===");
        DocumentFactory factory = new WordFactory();
        Document doc = factory.createDocument();
        System.out.println("Created: " + doc.getType());
        
        // Polymorphic behavior
        System.out.println("\n=== Polymorphic Behavior ===");
        DocumentFactory[] factories = {
            new WordFactory(),
            new PdfFactory(),
            new ExcelFactory()
        };
        
        for (DocumentFactory f : factories) {
            Document d = f.createDocument();
            System.out.println("Factory created: " + d.getType());
        }
    }
}