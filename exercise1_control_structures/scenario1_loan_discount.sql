-- Scenario 1: Apply 1% discount to loan interest rates for customers above 60 years old
SET SERVEROUTPUT ON;

DECLARE
    CURSOR customer_cursor IS
        SELECT CustomerID, DOB FROM Customers;
    
    v_age NUMBER;
    v_discount_rate NUMBER := 0.01;
    v_updated_count NUMBER := 0;
    
    FUNCTION calculate_age(p_dob DATE) RETURN NUMBER IS
    BEGIN
        RETURN FLOOR(MONTHS_BETWEEN(SYSDATE, p_dob) / 12);
    END;
BEGIN
    DBMS_OUTPUT.PUT_LINE('Starting loan discount process...');
    
    FOR customer_rec IN customer_cursor LOOP
        v_age := calculate_age(customer_rec.DOB);
        
        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - (InterestRate * v_discount_rate)
            WHERE CustomerID = customer_rec.CustomerID;
            
            v_updated_count := v_updated_count + SQL%ROWCOUNT;
            
            DBMS_OUTPUT.PUT_LINE('Applied 1% discount to loans for customer ID: ' 
                               || customer_rec.CustomerID || ' (Age: ' || v_age || ')');
        END IF;
    END LOOP;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Loan discount process completed.');
    DBMS_OUTPUT.PUT_LINE('Total loans updated: ' || v_updated_count);
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error occurred: ' || SQLERRM);
END;
/