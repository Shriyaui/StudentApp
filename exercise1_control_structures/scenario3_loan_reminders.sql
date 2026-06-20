
SET SERVEROUTPUT ON;

DECLARE
    CURSOR loan_cursor IS
        SELECT l.LoanID, l.CustomerID, l.EndDate, c.Name
        FROM Loans l
        INNER JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
        ORDER BY l.EndDate;
    
    v_days_remaining NUMBER;
    v_reminder_count NUMBER := 0;
BEGIN
    DBMS_OUTPUT.PUT_LINE('=== LOAN REMINDER REPORT ===');
    DBMS_OUTPUT.PUT_LINE('Generated on: ' || TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'));
    DBMS_OUTPUT.PUT_LINE('----------------------------------------');
    
    FOR loan_rec IN loan_cursor LOOP
        v_days_remaining := ROUND(loan_rec.EndDate - SYSDATE);
        v_reminder_count := v_reminder_count + 1;
        
        DBMS_OUTPUT.PUT_LINE('Loan #' || loan_rec.LoanID);
        DBMS_OUTPUT.PUT_LINE('Customer: ' || loan_rec.Name);
        DBMS_OUTPUT.PUT_LINE('Due Date: ' || TO_CHAR(loan_rec.EndDate, 'YYYY-MM-DD'));
        DBMS_OUTPUT.PUT_LINE('Days remaining: ' || v_days_remaining);
        DBMS_OUTPUT.PUT_LINE('----------------------------------------');
    END LOOP;
    
    DBMS_OUTPUT.PUT_LINE('Total reminders sent: ' || v_reminder_count);
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/
