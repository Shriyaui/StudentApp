package com.example;

import java.util.Scanner;

/**
 * Main class to demonstrate E-commerce Search
 */
public class Main {
    public static void main(String[] args) {
        System.out.println("=== E-commerce Platform Search ===");
        System.out.println("==================================");

        // Sample product data
        Product[] products = {
            new Product(101, "Laptop", "Electronics", 899.99),
            new Product(102, "Smartphone", "Electronics", 699.99),
            new Product(103, "Headphones", "Audio", 149.99),
            new Product(104, "Keyboard", "Accessories", 59.99),
            new Product(105, "Monitor", "Electronics", 299.99),
            new Product(106, "Mouse", "Accessories", 29.99),
            new Product(107, "Tablet", "Electronics", 499.99),
            new Product(108, "Speaker", "Audio", 199.99),
            new Product(109, "Charger", "Accessories", 19.99),
            new Product(110, "Camera", "Electronics", 799.99)
        };

        System.out.println("\nProducts in inventory:");
        System.out.println("---------------------");
        for (Product p : products) {
            System.out.println(p);
        }

        // Search demonstration
        Scanner scanner = new Scanner(System.in);
        System.out.println("\n==================================");
        System.out.println("Search Demonstration");
        System.out.println("==================================");

        // Linear Search
        System.out.println("\n--- Linear Search (O(n)) ---");
        System.out.print("Enter product name to search: ");
        String searchName = scanner.nextLine();

        long startTime = System.nanoTime();
        Product found = SearchAlgorithms.linearSearch(products, searchName);
        long endTime = System.nanoTime();

        if (found != null) {
            System.out.println("Found: " + found);
        } else {
            System.out.println("Product not found.");
        }
        System.out.println("Time taken: " + (endTime - startTime) + " ns");

        // Binary Search
        System.out.println("\n--- Binary Search (O(log n)) ---");
        System.out.print("Enter product name to search: ");
        searchName = scanner.nextLine();

        startTime = System.nanoTime();
        Product found2 = SearchAlgorithms.binarySearchWithSteps(products, searchName);
        endTime = System.nanoTime();

        if (found2 != null) {
            System.out.println("Found: " + found2);
        } else {
            System.out.println("Product not found.");
        }
        System.out.println("Time taken: " + (endTime - startTime) + " ns");

        // Performance comparison
        System.out.println("\n==================================");
        System.out.println("Performance Comparison");
        System.out.println("==================================");
        System.out.println("Linear Search Time Complexity: O(n)");
        System.out.println("Binary Search Time Complexity: O(log n)");
        System.out.println("\nFor 10 products:");
        System.out.println("Linear Search: Up to 10 comparisons");
        System.out.println("Binary Search: Up to 4 comparisons");

        scanner.close();
    }
}