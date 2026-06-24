package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    
    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("LIBRARY MANAGEMENT SYSTEM - EXERCISE 4");
        System.out.println("   Maven Project Configuration");
        System.out.println("============================================================");
        
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        System.out.println("Spring Context loaded successfully!");
        
        BookService bookService = (BookService) context.getBean("bookService");
        System.out.println("BookService bean retrieved!\n");
        
        System.out.println("--- All Books ---");
        bookService.getAllBooks().forEach(System.out::println);
        
        System.out.println("\n--- Book by ID (2) ---");
        System.out.println(bookService.getBookById(2));
        
        System.out.println("\n--- Adding a New Book ---");
        Book newBook = new Book(4, "Head First Design Patterns", "Eric Freeman", 49.99);
        bookService.addBook(newBook);
        
        System.out.println("\n--- All Books After Add ---");
        bookService.getAllBooks().forEach(System.out::println);
        
        System.out.println("\n============================================================");
        System.out.println("Maven Project Configuration Test Completed Successfully!");
        System.out.println("============================================================");
        
        ((ClassPathXmlApplicationContext) context).close();
    }
}