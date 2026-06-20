package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

/**
 * DocumentFactoryTest - Unit tests for Factory Method Pattern
 */
public class DocumentFactoryTest {
    
    @Test
    public void testWordFactoryCreatesWordDocument() {
        DocumentFactory factory = new WordFactory();
        Document doc = factory.createDocument();
        assertNotNull("Document should not be null", doc);
        assertTrue("Document should be WordDocument", doc instanceof WordDocument);
        assertEquals("Should return Word Document type", "Word Document (.docx)", doc.getType());
    }
    
    @Test
    public void testPdfFactoryCreatesPdfDocument() {
        DocumentFactory factory = new PdfFactory();
        Document doc = factory.createDocument();
        assertNotNull("Document should not be null", doc);
        assertTrue("Document should be PdfDocument", doc instanceof PdfDocument);
        assertEquals("Should return PDF Document type", "PDF Document (.pdf)", doc.getType());
    }
    
    @Test
    public void testExcelFactoryCreatesExcelDocument() {
        DocumentFactory factory = new ExcelFactory();
        Document doc = factory.createDocument();
        assertNotNull("Document should not be null", doc);
        assertTrue("Document should be ExcelDocument", doc instanceof ExcelDocument);
        assertEquals("Should return Excel Document type", "Excel Document (.xlsx)", doc.getType());
    }
    
    @Test
    public void testAllFactoriesCreateDifferentDocuments() {
        DocumentFactory wordFactory = new WordFactory();
        DocumentFactory pdfFactory = new PdfFactory();
        DocumentFactory excelFactory = new ExcelFactory();
        
        Document wordDoc = wordFactory.createDocument();
        Document pdfDoc = pdfFactory.createDocument();
        Document excelDoc = excelFactory.createDocument();
        
        assertNotSame("Word and PDF documents should be different", wordDoc, pdfDoc);
        assertNotSame("PDF and Excel documents should be different", pdfDoc, excelDoc);
        assertNotSame("Excel and Word documents should be different", excelDoc, wordDoc);
    }
    
    @Test
    public void testCreateAndProcessDocument() {
        DocumentFactory factory = new WordFactory();
        // This should not throw any exception
        factory.createAndProcessDocument();
        // If we reach here, test passes
        assertTrue(true);
    }
}