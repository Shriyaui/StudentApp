package com.example;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
    CalculatorTest.class,
    AssertionsTest.class,
    UserServiceTest.class
})
public class AllTests {
    // This class runs all tests together
}