package com.library;

import java.util.List;

public class BookService {
    private BookRepository bookRepository;
    
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("[DI] BookRepository injected into BookService");
    }
    
    public List<Book> getAllBooks() {
        System.out.println("[Service] Getting all books");
        return bookRepository.getAllBooks();
    }
    
    public Book getBookById(int id) {
        System.out.println("[Service] Getting book by ID: " + id);
        return bookRepository.getBookById(id);
    }
    
    public void addBook(Book book) {
        System.out.println("[Service] Adding book: " + book.getTitle());
        bookRepository.addBook(book);
    }
    
    public void deleteBook(int id) {
        System.out.println("[Service] Deleting book with ID: " + id);
        bookRepository.deleteBook(id);
    }
}