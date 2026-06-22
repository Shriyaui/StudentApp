package com.example;

public class MyService {
    private ExternalApi externalApi;
    
    public MyService(ExternalApi externalApi) {
        this.externalApi = externalApi;
    }
    
    public String fetchData() {
        return externalApi.getData();
    }
    
    public String fetchDataById(int id) {
        return externalApi.getDataById(id);
    }
    
    public void processData(String data) {
        externalApi.processData(data);
    }
    
    public String fetchDataWithDelay(int delay) {
        return externalApi.getDataWithDelay(delay);
    }
}