package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Step 1: Create a mock of the ExternalApi
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub the getData() method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Inject mock into MyService
        MyService service = new MyService(mockApi);

        // Step 4: Call fetchData and assert result
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}
