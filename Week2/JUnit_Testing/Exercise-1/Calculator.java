package com.cts.calc;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    public int subtract(int a, int b) {
        return a - b;
    }
    public int multiply(int a, int b) {
        return a * b;
    }
    public int divide(int a, int b) {
        if (b == 0) throw new IllegalArgumentException("Cannot divide by zero");
        return a / b;
    }
    public long factorial(int n) {
        if (n < 0) throw new IllegalArgumentException("Negative not allowed");
        long result = 1;
        for (int i = 2; i <= n; i++) result *= i;
        return result;
    }
}
