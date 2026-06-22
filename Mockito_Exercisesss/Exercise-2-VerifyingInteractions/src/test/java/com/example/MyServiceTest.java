package com.example;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mockito;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MyServiceTest {
    
    private ExternalApi mockApi;
    private MyService service;
    
    @BeforeEach
    void setUp() {
        mockApi = Mockito.mock(ExternalApi.class);
        service = new MyService(mockApi);
    }
    
    @Test
    void testVerifyGetDataCalled() {
        service.fetchData();
        verify(mockApi).getData();
        System.out.println("Test 1 passed");
    }
    
    @Test
    void testVerifyGetDataByIdCalledWithCorrectId() {
        service.fetchDataById(5);
        verify(mockApi).getDataById(5);
        System.out.println("Test 2 passed");
    }
    
    @Test
    void testVerifyGetDataByIdCalledWithAnyInt() {
        service.fetchDataById(1);
        service.fetchDataById(2);
        service.fetchDataById(3);
        verify(mockApi, times(3)).getDataById(anyInt());
        System.out.println("Test 3 passed");
    }
    
    @Test
    void testVerifyVoidMethodCalled() {
        service.processData("test data");
        verify(mockApi).processData("test data");
        System.out.println("Test 4 passed");
    }
    
    @Test
    void testVerifyCalledExactlyOnce() {
        service.fetchData();
        verify(mockApi, times(1)).getData();
        System.out.println("Test 5 passed");
    }
    
    @Test
    void testVerifyCalledMultipleTimes() {
        service.fetchData();
        service.fetchData();
        service.fetchData();
        verify(mockApi, times(3)).getData();
        System.out.println("Test 6 passed");
    }
    
    @Test
    void testVerifyNeverCalled() {
        verify(mockApi, never()).getData();
        System.out.println("Test 7 passed");
    }
    
    @Test
    void testVerifyAtLeastOnce() {
        service.fetchData();
        service.fetchData();
        verify(mockApi, atLeastOnce()).getData();
        System.out.println("Test 8 passed");
    }
    
    @Test
    void testVerifyAtLeast() {
        service.fetchData();
        service.fetchData();
        service.fetchData();
        verify(mockApi, atLeast(2)).getData();
        System.out.println("Test 9 passed");
    }
    
    @Test
    void testVerifyAtMost() {
        service.fetchData();
        service.fetchData();
        verify(mockApi, atMost(3)).getData();
        System.out.println("Test 10 passed");
    }
    
    @Test
    void testVerifyWithArgumentMatchers() {
        service.fetchDataById(10);
        service.fetchDataById(20);
        verify(mockApi, times(2)).getDataById(anyInt());
        System.out.println("Test 11 passed");
    }
    
    @Test
    void testVerifyNoMoreInteractions() {
        service.fetchData();
        verify(mockApi).getData();
        verifyNoMoreInteractions(mockApi);
        System.out.println("Test 12 passed");
    }
    
    @Test
    void testVerifyZeroInteractions() {
        verifyNoInteractions(mockApi);
        System.out.println("Test 13 passed");
    }
}