package com.library.repository;

public class BookRepository {
    
    public void saveBook(String bookName) {
        System.out.println("[Repository] Book saved: " + bookName);
    }
    
    public String getBook(int id) {
        return "[Repository] Book ID: " + id + " - Spring in Action";
    }
    
    public void deleteBook(int id) {
        System.out.println("[Repository] Book deleted with ID: " + id);
    }
}