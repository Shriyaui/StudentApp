-- Scenario 2: Set VIP status for customers with balance over $10,000
SET SERVEROUTPUT ON;

DECLARE
    CURSOR customer_cursor IS
        SELECT CustomerID, Name, Balance FROM Customers;
    
    v_vip_count NUMBER := 0;
    v_sql VARCHAR2(1000);
BEGIN
    -- Check and add IsVIP column if it doesn't exist
    BEGIN
        v_sql := 'ALTER TABLE Customers ADD (IsVIP VARCHAR2(5) DEFAULT ''FALSE'')';
        EXECUTE IMMEDIATE v_sql;
        DBMS_OUTPUT.PUT_LINE('Added IsVIP column to Customers table');
    EXCEPTION
        WHEN OTHERS THEN
            DBMS_OUTPUT.PUT_LINE('IsVIP column already exists');
    END;
    
    DBMS_OUTPUT.PUT_LINE('Processing VIP status updates...');
    
    FOR customer_rec IN customer_cursor LOOP
        IF customer_rec.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = customer_rec.CustomerID;
            
            v_vip_count := v_vip_count + 1;
            
            DBMS_OUTPUT.PUT_LINE('Customer: ' || customer_rec.Name || 
                               ' (ID: ' || customer_rec.CustomerID || 
                               ') promoted to VIP. Balance: $' || customer_rec.Balance);
        END IF;
    END LOOP;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('VIP status update completed.');
    DBMS_OUTPUT.PUT_LINE('Total VIP customers: ' || v_vip_count);
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error occurred: ' || SQLERRM);
END;
/