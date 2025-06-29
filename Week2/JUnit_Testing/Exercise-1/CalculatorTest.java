package com.cts.calc;

import static org.junit.Assert.*; // assertEquals, etc.
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator(); // before each test
    }

    @After
    public void tearDown() {
        calculator = null; // after each test
    }

    @Test
    public void testAdd() {
        assertEquals(5, calculator.add(2, 3));
    }

    @Test
    public void testSubtract() {
        assertEquals(1, calculator.subtract(4, 3));
    }

    @Test
    public void testMultiply() {
        assertEquals(6, calculator.multiply(2, 3));
    }

    @Test
    public void testDivide() {
        assertEquals(2, calculator.divide(10, 5));
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        calculator.divide(5, 0); // should throw exception
    }

    @Test
    public void testFactorial() {
        assertEquals(120, calculator.factorial(5));
    }
}
