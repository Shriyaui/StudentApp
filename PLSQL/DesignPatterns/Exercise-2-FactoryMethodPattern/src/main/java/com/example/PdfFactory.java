package com.example;

/**
 * PdfFactory - Concrete Creator for PDF documents
 */
public class PdfFactory extends DocumentFactory {
    
    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}