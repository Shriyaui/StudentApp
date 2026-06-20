@echo off
echo ========================================
echo Factory Method Pattern - Exercise 2
echo ========================================
echo.

echo Compiling...
javac -d out -cp "lib\*" src\main\java\com\example\*.java
if errorlevel 1 goto error

echo.
echo Running Application...
java -cp "out;lib\*" com.example.Application

echo.
echo ========================================
echo Application completed!
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