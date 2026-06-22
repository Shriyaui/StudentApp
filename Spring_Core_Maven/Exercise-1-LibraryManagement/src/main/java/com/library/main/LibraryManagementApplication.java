package com.library.main;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    
    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("LIBRARY MANAGEMENT SYSTEM");
        System.out.println("==================================================");
        
        // Load Spring context from XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        System.out.println("Spring Context loaded successfully!");
        
        // Get BookService bean
        BookService bookService = (BookService) context.getBean("bookService");
        System.out.println("BookService bean retrieved!");
        
        // Test the service
        System.out.println("\n--- Testing BookService ---");
        bookService.addBook("Spring Framework in Action");
        String book = bookService.getBookById(1);
        System.out.println("Retrieved: " + book);
        
        System.out.println("\n==================================================");
        System.out.println("Library Management Application started successfully!");
        System.out.println("==================================================");
        
        // Close context
        ((ClassPathXmlApplicationContext) context).close();
    }
}