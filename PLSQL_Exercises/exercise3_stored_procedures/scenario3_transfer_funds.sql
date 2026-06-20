-- Scenario 3: Transfer funds between accounts
SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account_id IN NUMBER,
    p_to_account_id IN NUMBER,
    p_amount IN NUMBER
) AS
    v_from_balance NUMBER;
    v_to_balance NUMBER;
    v_transaction_id NUMBER;
    v_from_customer_id NUMBER;
    v_to_customer_id NUMBER;
    v_from_customer_name VARCHAR2(100);
    v_to_customer_name VARCHAR2(100);
BEGIN
    DBMS_OUTPUT.PUT_LINE('=== FUND TRANSFER ===');
    DBMS_OUTPUT.PUT_LINE('From Account: ' || p_from_account_id);
    DBMS_OUTPUT.PUT_LINE('To Account: ' || p_to_account_id);
    DBMS_OUTPUT.PUT_LINE('Amount: $' || p_amount);
    DBMS_OUTPUT.PUT_LINE('----------------------------------------');
    
    -- Validate amount
    IF p_amount <= 0 THEN
        RAISE_APPLICATION_ERROR(-20002, 'Transfer amount must be positive.');
    END IF;
    
    -- Check if accounts exist and get current balances with locking
    BEGIN
        SELECT Balance, CustomerID 
        INTO v_from_balance, v_from_customer_id
        FROM Accounts
        WHERE AccountID = p_from_account_id
        FOR UPDATE;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RAISE_APPLICATION_ERROR(-20003, 'Source account does not exist.');
    END;
    
    BEGIN
        SELECT Balance, CustomerID 
        INTO v_to_balance, v_to_customer_id
        FROM Accounts
        WHERE AccountID = p_to_account_id
        FOR UPDATE;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RAISE_APPLICATION_ERROR(-20004, 'Destination account does not exist.');
    END;
    
    -- Check sufficient balance
    IF v_from_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20005, 'Insufficient balance. Available: $' || 
                               TO_CHAR(v_from_balance, '9999.99'));
    END IF;
    
    -- Check if same account
    IF p_from_account_id = p_to_account_id THEN
        RAISE_APPLICATION_ERROR(-20006, 'Cannot transfer to the same account.');
    END IF;
    
    -- Get customer names for display
    SELECT Name INTO v_from_customer_name 
    FROM Customers WHERE CustomerID = v_from_customer_id;
    
    SELECT Name INTO v_to_customer_name 
    FROM Customers WHERE CustomerID = v_to_customer_id;
    
    -- Perform the transfer
    UPDATE Accounts
    SET Balance = Balance - p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_from_account_id;
    
    UPDATE Accounts
    SET Balance = Balance + p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_to_account_id;
    
    -- Generate new transaction ID
    SELECT NVL(MAX(TransactionID), 0) + 1 INTO v_transaction_id
    FROM Transactions;
    
    -- Record the transactions
    INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
    VALUES (v_transaction_id, p_from_account_id, SYSDATE, -p_amount, 'Transfer_Out');
    
    INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
    VALUES (v_transaction_id + 1, p_to_account_id, SYSDATE, p_amount, 'Transfer_In');
    
    COMMIT;
    
    -- Display results
    DBMS_OUTPUT.PUT_LINE('✅ Transfer completed successfully!');
    DBMS_OUTPUT.PUT_LINE('----------------------------------------');
    DBMS_OUTPUT.PUT_LINE('From: ' || v_from_customer_name || ' (Account: ' || p_from_account_id || ')');
    DBMS_OUTPUT.PUT_LINE('To: ' || v_to_customer_name || ' (Account: ' || p_to_account_id || ')');
    DBMS_OUTPUT.PUT_LINE('Amount: $' || TO_CHAR(p_amount, '99999.99'));
    DBMS_OUTPUT.PUT_LINE('Transaction ID(s): ' || v_transaction_id || ', ' || (v_transaction_id + 1));
    
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('❌ Error in transfer: ' || SQLERRM);
        RAISE;
END TransferFunds;
/

-- Test the procedure
-- EXEC TransferFunds(1, 2, 500);