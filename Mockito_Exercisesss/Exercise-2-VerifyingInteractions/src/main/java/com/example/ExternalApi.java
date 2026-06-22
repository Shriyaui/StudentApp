package com.example;

public interface ExternalApi {
    String getData();
    String getDataById(int id);
    void processData(String data);
    String getDataWithDelay(int delay);
}