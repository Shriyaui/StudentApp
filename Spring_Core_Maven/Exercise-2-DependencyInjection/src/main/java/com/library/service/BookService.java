package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    
    private BookRepository bookRepository;
    
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("[DI] BookRepository injected into BookService via Setter");
    }
    
    public void addBook(String bookName) {
        System.out.println("[Service] Adding book: " + bookName);
        bookRepository.saveBook(bookName);
    }
    
    public String getBookById(int id) {
        System.out.println("[Service] Fetching book with ID: " + id);
        return bookRepository.getBook(id);
    }
    
    public void deleteBook(int id) {
        System.out.println("[Service] Deleting book with ID: " + id);
        bookRepository.deleteBook(id);
    }
}