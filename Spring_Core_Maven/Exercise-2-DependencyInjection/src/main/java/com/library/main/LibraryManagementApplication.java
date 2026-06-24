package com.library.main;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    
    public static void main(String[] args) {
        System.out.println("============================================================");
        System.out.println("LIBRARY MANAGEMENT SYSTEM - EXERCISE 2");
        System.out.println("   Implementing Dependency Injection");
        System.out.println("============================================================");
        
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        System.out.println("Spring Context loaded successfully!");
        
        BookService bookService = (BookService) context.getBean("bookService");
        System.out.println("BookService bean retrieved!");
        
        System.out.println("\n--- Testing BookService with DI ---");
        bookService.addBook("Spring Framework in Action");
        String book = bookService.getBookById(1);
        System.out.println("Retrieved: " + book);
        bookService.deleteBook(1);
        
        System.out.println("\n============================================================");
        System.out.println("Dependency Injection Test Completed Successfully!");
        System.out.println("============================================================");
        
        ((ClassPathXmlApplicationContext) context).close();
    }
}