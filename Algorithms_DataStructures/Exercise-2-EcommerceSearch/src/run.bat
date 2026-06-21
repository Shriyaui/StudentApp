@echo off
echo ========================================
echo Exercise 2: E-commerce Platform Search
echo ========================================
echo.

echo Compiling...
javac -d out src\com\example\*.java
if errorlevel 1 goto error

echo.
echo Running Application...
java -cp out com.example.Main

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