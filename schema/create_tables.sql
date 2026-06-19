-- Drop tables if they exist (in reverse order of dependencies)
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE Transactions';
    EXECUTE IMMEDIATE 'DROP TABLE Loans';
    EXECUTE IMMEDIATE 'DROP TABLE Accounts';
    EXECUTE IMMEDIATE 'DROP TABLE Employees';
    EXECUTE IMMEDIATE 'DROP TABLE Customers';
    EXECUTE IMMEDIATE 'DROP TABLE BonusLog';
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END;
/

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE,
    IsVIP VARCHAR2(5) DEFAULT 'FALSE'
);

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Transactions (
    TransactionID NUMBER PRIMARY KEY,
    AccountID NUMBER,
    TransactionDate DATE,
    Amount NUMBER,
    TransactionType VARCHAR2(10),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
);

CREATE TABLE BonusLog (
    LogID NUMBER PRIMARY KEY,
    Department VARCHAR2(50),
    BonusPercentage NUMBER,
    AppliedDate DATE,
    EmployeeCount NUMBER
);

CREATE SEQUENCE bonus_log_seq START WITH 1;

-- Create sequences for tables
CREATE SEQUENCE customers_seq START WITH 1;
CREATE SEQUENCE accounts_seq START WITH 1;
CREATE SEQUENCE transactions_seq START WITH 1;
CREATE SEQUENCE loans_seq START WITH 1;
CREATE SEQUENCE employees_seq START WITH 1;

DBMS_OUTPUT.PUT_LINE('All tables created successfully!');