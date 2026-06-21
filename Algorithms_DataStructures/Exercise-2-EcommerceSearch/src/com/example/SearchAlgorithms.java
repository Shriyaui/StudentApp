package com.example;

import java.util.Arrays;
import java.util.Comparator;

/**
 * Search Algorithms implementation
 */
public class SearchAlgorithms {

    /**
     * Linear Search - O(n)
     * Searches for a product by name in an unsorted array
     */
    public static Product linearSearch(Product[] products, String productName) {
        for (Product product : products) {
            if (product.getProductName().equalsIgnoreCase(productName)) {
                return product;
            }
        }
        return null; // Not found
    }

    /**
     * Binary Search - O(log n)
     * Searches for a product by name in a sorted array
     * Requires the array to be sorted by product name
     */
    public static Product binarySearch(Product[] products, String productName) {
        // Sort the array by product name first
        Product[] sortedProducts = products.clone();
        Arrays.sort(sortedProducts, Comparator.comparing(Product::getProductName));

        int left = 0;
        int right = sortedProducts.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int comparison = sortedProducts[mid].getProductName()
                    .compareToIgnoreCase(productName);

            if (comparison == 0) {
                return sortedProducts[mid];
            } else if (comparison < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null; // Not found
    }

    /**
     * Binary Search with step counter for analysis
     */
    public static Product binarySearchWithSteps(Product[] products, String productName) {
        Product[] sortedProducts = products.clone();
        Arrays.sort(sortedProducts, Comparator.comparing(Product::getProductName));

        int left = 0;
        int right = sortedProducts.length - 1;
        int steps = 0;

        while (left <= right) {
            steps++;
            int mid = left + (right - left) / 2;
            int comparison = sortedProducts[mid].getProductName()
                    .compareToIgnoreCase(productName);

            if (comparison == 0) {
                System.out.println("Binary Search found in " + steps + " steps");
                return sortedProducts[mid];
            } else if (comparison < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        System.out.println("Binary Search took " + steps + " steps - Not found");
        return null;
    }
}
