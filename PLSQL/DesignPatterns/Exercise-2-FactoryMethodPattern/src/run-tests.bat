@echo off
echo ========================================
echo Factory Method Pattern Tests - Exercise 2
echo ========================================
echo.

echo Compiling main classes...
javac -d out -cp "lib\*" src\main\java\com\example\*.java
if errorlevel 1 goto error

echo Compiling test classes...
javac -d out -cp "lib\*;out" src\test\java\com\example\*.java
if errorlevel 1 goto error

echo.
echo Running Tests...
java -cp "lib\*;out" org.junit.runner.JUnitCore com.example.DocumentFactoryTest

echo.
echo ========================================
echo Tests completed!
echo ========================================
pause
goto end

:error
echo.
echo ========================================
echo Compilation failed! Please check your code.
echo ========================================
pause

:end