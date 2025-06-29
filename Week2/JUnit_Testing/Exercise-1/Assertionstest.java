package com.cts.calc;

import static org.junit.Assert.*;
import org.junit.Test;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert Equals
        assertEquals("Sum should be 5", 5, 2 + 3);

        // Assert Not Equals
        assertNotEquals("Result should not be 10", 10, 4 + 4);

        // Assert True
        assertTrue("This condition should be true", 5 > 3);

        // Assert False
        assertFalse("This condition should be false", 3 > 5);

        // Assert Null
        String str1 = null;
        assertNull("Value should be null", str1);

        // Assert Not Null
        String str2 = "Cognizant";
        assertNotNull("Value should not be null", str2);

        // Assert Same (reference check)
        String s1 = "JUnit";
        String s2 = s1;
        assertSame("Both should reference the same object", s1, s2);

        // Assert Not Same
        String s3 = new String("JUnit");
        assertNotSame("References should be different", s1, s3);

        // Assert Array Equals
        int[] expected = {1, 2, 3};
        int[] actual = {1, 2, 3};
        assertArrayEquals("Arrays should be equal", expected, actual);
    }
    }
