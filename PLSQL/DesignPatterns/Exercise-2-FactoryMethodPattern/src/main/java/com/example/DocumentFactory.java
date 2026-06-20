package com.example;

/**
 * DocumentFactory - Abstract Creator class for Factory Method Pattern
 */
public abstract class DocumentFactory {
    
    /**
     * Factory method - creates a document
     * Subclasses will override this to create specific document types
     */
    public abstract Document createDocument();
    
    /**
     * Template method - uses the factory method
     */
    public void createAndProcessDocument() {
        Document doc = createDocument();
        System.out.println("\n=== Creating " + doc.getType() + " ===");
        doc.open();
        doc.save();
        doc.close();
    }
}