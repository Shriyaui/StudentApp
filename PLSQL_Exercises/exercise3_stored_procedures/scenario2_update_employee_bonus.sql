-- Scenario 2: Update employee bonus based on department
SET SERVEROUTPUT ON;

-- First create BonusLog table and sequence
DECLARE
    v_table_exists NUMBER;
BEGIN
    SELECT COUNT(*) INTO v_table_exists 
    FROM user_tables 
    WHERE table_name = 'BONUSLOG';
    
    IF v_table_exists = 0 THEN
        EXECUTE IMMEDIATE '
            CREATE TABLE BonusLog (
                LogID NUMBER PRIMARY KEY,
                Department VARCHAR2(50),
                BonusPercentage NUMBER,
                AppliedDate DATE,
                EmployeeCount NUMBER
            )';
        DBMS_OUTPUT.PUT_LINE('Created BonusLog table');
    END IF;
    
    -- Create sequence
    BEGIN
        EXECUTE IMMEDIATE 'CREATE SEQUENCE bonus_log_seq START WITH 1';
        DBMS_OUTPUT.PUT_LINE('Created bonus_log_seq sequence');
    EXCEPTION
        WHEN OTHERS THEN
            DBMS_OUTPUT.PUT_LINE('Sequence bonus_log_seq already exists');
    END;
END;
/

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus_percentage IN NUMBER
) AS
    v_employee_count NUMBER := 0;
    v_current_salary NUMBER;
    v_new_salary NUMBER;
BEGIN
    DBMS_OUTPUT.PUT_LINE('Updating employee bonus...');
    DBMS_OUTPUT.PUT_LINE('Department: ' || p_department);
    DBMS_OUTPUT.PUT_LINE('Bonus: ' || p_bonus_percentage || '%');
    DBMS_OUTPUT.PUT_LINE('----------------------------------------');
    
    -- Validate input
    IF p_bonus_percentage < 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Bonus percentage cannot be negative.');
    END IF;
    
    IF p_department IS NULL OR p_department = '' THEN
        RAISE_APPLICATION_ERROR(-20002, 'Department cannot be null or empty.');
    END IF;
    
    -- Update salaries
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_bonus_percentage / 100))
    WHERE Department = p_department
    RETURNING Salary INTO v_new_salary;
    
    v_employee_count := SQL%ROWCOUNT;
    
    -- Log the bonus application
    INSERT INTO BonusLog (LogID, Department, BonusPercentage, AppliedDate, EmployeeCount)
    VALUES (bonus_log_seq.NEXTVAL, p_department, p_bonus_percentage, SYSDATE, v_employee_count);
    
    COMMIT;
    
    -- Display results
    FOR emp IN (SELECT Name, Position, Salary FROM Employees WHERE Department = p_department) LOOP
        DBMS_OUTPUT.PUT_LINE('Employee: ' || emp.Name || 
                           ' | Position: ' || emp.Position || 
                           ' | New Salary: $' || TO_CHAR(emp.Salary, '99999.00'));
    END LOOP;
    
    DBMS_OUTPUT.PUT_LINE('----------------------------------------');
    DBMS_OUTPUT.PUT_LINE('✅ Bonus of ' || p_bonus_percentage || 
                       '% applied to ' || v_employee_count || 
                       ' employees in ' || p_department || ' department.');
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('❌ Error updating employee bonus: ' || SQLERRM);
        RAISE;
END UpdateEmployeeBonus;
/

-- Test the procedure
-- EXEC UpdateEmployeeBonus('IT', 10);
-- EXEC UpdateEmployeeBonus('HR', 15);