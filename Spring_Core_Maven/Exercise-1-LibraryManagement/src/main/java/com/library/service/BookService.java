package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    
    private BookRepository bookRepository;
    
    // Setter for dependency injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookRepository injected into BookService");
    }
    
    public void addBook(String bookName) {
        System.out.println("Adding book: " + bookName);
        bookRepository.saveBook(bookName);
    }
    
    public String getBookById(int id) {
        return bookRepository.getBook(id);
    }
}