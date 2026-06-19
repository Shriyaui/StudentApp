-- Scenario 1: Process monthly interest for all savings accounts
SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
    v_interest_rate NUMBER := 0.01; -- 1% interest
    v_account_count NUMBER := 0;
    v_old_balance NUMBER;
    v_new_balance NUMBER;
    v_interest_earned NUMBER;
BEGIN
    DBMS_OUTPUT.PUT_LINE('Starting monthly interest process...');
    DBMS_OUTPUT.PUT_LINE('Interest rate: ' || (v_interest_rate * 100) || '%');
    DBMS_OUTPUT.PUT_LINE('----------------------------------------');
    
    FOR account_rec IN (SELECT AccountID, Balance, CustomerID 
                        FROM Accounts 
                        WHERE AccountType = 'Savings') LOOP
        
        v_old_balance := account_rec.Balance;
        v_interest_earned := v_old_balance * v_interest_rate;
        v_new_balance := v_old_balance + v_interest_earned;
        
        UPDATE Accounts
        SET Balance = v_new_balance,
            LastModified = SYSDATE
        WHERE AccountID = account_rec.AccountID;
        
        v_account_count := v_account_count + 1;
        
        DBMS_OUTPUT.PUT_LINE('Account #' || account_rec.AccountID || 
                           ' | Customer: ' || account_rec.CustomerID ||
                           ' | Old: $' || TO_CHAR(v_old_balance, '9999.99') ||
                           ' | Interest: $' || TO_CHAR(v_interest_earned, '999.99') ||
                           ' | New: $' || TO_CHAR(v_new_balance, '9999.99'));
    END LOOP;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('----------------------------------------');
    DBMS_OUTPUT.PUT_LINE('Monthly interest processed for ' || v_account_count || 
                       ' savings accounts.');
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('❌ Error processing monthly interest: ' || SQLERRM);
        RAISE;
END ProcessMonthlyInterest;
/

-- Test the procedure
-- EXEC ProcessMonthlyInterest;

-- To check results:
-- SELECT AccountID, Balance, LastModified FROM Accounts WHERE AccountType = 'Savings';