@echo off
echo ========================================
echo SLF4J Logging - Exercise 1
echo ========================================
echo.

echo Compiling...
javac -d out -cp "lib\*" src\main\java\com\example\*.java
if errorlevel 1 goto error

echo.
echo Running Application...
java -cp "out;lib\*" com.example.LoggingExample

echo.
echo ========================================
echo Application completed!
echo Check logs/application.log for file output.
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