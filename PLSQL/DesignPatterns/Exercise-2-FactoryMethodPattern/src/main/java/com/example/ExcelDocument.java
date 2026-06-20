package com.example;

/**
 * ExcelDocument - Concrete Product for Excel documents
 */
public class ExcelDocument implements Document {
    
    @Override
    public void open() {
        System.out.println("[Excel] Opening Excel Document...");
        System.out.println("   - Loading Microsoft Excel editor");
        System.out.println("   - Spreadsheet ready for editing");
    }
    
    @Override
    public void save() {
        System.out.println("[Excel] Saving Excel Document...");
        System.out.println("   - Saving as .xlsx format");
        System.out.println("   - Document saved successfully");
    }
    
    @Override
    public void close() {
        System.out.println("[Excel] Closing Excel Document...");
        System.out.println("   - Closing Microsoft Excel editor");
    }
    
    @Override
    public String getType() {
        return "Excel Document (.xlsx)";
    }
}