package com.library.repository;

public class BookRepository {
    
    public void saveBook(String bookName) {
        System.out.println("Book saved: " + bookName);
    }
    
    public String getBook(int id) {
        return "Book ID: " + id + " - Java Programming";
    }
}