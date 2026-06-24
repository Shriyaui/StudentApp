package com.library;

import java.util.ArrayList;
import java.util.List;

public class BookRepository {
    private List<Book> books = new ArrayList<>();
    
    public BookRepository() {
        books.add(new Book(1, "Spring in Action", "Craig Walls", 39.99));
        books.add(new Book(2, "Effective Java", "Joshua Bloch", 45.99));
        books.add(new Book(3, "Clean Code", "Robert Martin", 35.99));
    }
    
    public List<Book> getAllBooks() {
        return new ArrayList<>(books);
    }
    
    public Book getBookById(int id) {
        return books.stream()
                .filter(book -> book.getId() == id)
                .findFirst()
                .orElse(null);
    }
    
    public void addBook(Book book) {
        books.add(book);
        System.out.println("Book added: " + book);
    }
    
    public void deleteBook(int id) {
        books.removeIf(book -> book.getId() == id);
        System.out.println("Book deleted with ID: " + id);
    }
}