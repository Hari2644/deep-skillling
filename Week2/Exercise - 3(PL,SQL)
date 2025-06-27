-- Insert sample accounts
INSERT INTO Account (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (1001, 1, 'Savings', 10000, SYSDATE);

INSERT INTO Account (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (1002, 2, 'Current', 5000, SYSDATE);

INSERT INTO Account (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (1003, 2, 'Savings', 8000, SYSDATE);

INSERT INTO Employee (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (201, 'Rohit Sharma', 'Manager', 60000, 'Finance', TO_DATE('2020-01-15','YYYY-MM-DD'));

INSERT INTO Employee (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (202, 'Priya Jain', 'Analyst', 40000, 'IT', TO_DATE('2021-06-01','YYYY-MM-DD'));

INSERT INTO Employee (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (203, 'Suresh Rao', 'Executive', 35000, 'Finance', TO_DATE('2019-09-10','YYYY-MM-DD'));

COMMIT;



Scenario 1 :

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Account
    SET Balance = Balance * 1.01,
        LastModified = SYSDATE
    WHERE AccountType = 'Savings';
END;
/
SELECT AccountID, AccountType, Balance, LastModified
FROM Account
WHERE AccountType = 'Savings';



Scenario 2 :

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    dept_name IN VARCHAR2,
    bonus_pct IN NUMBER
) IS
BEGIN
    UPDATE Employee
    SET Salary = Salary + (Salary * bonus_pct / 100)
    WHERE Department = dept_name;
END;
SELECT EmployeeID, Name, Department, Salary
FROM Employee
WHERE Department = 'Finance';



Scenario 3 :

SELECT AccountID, Balance FROM Account WHERE AccountID IN (1001, 1003);

CREATE OR REPLACE PROCEDURE TransferFunds(
    from_account IN NUMBER,
    to_account IN NUMBER,
    amount IN NUMBER
) IS
    insufficient_funds EXCEPTION;
    current_balance NUMBER;
BEGIN
    -- Check if source account has enough balance
    SELECT Balance INTO current_balance
    FROM Account
    WHERE AccountID = from_account
    FOR UPDATE;

    IF current_balance < amount THEN
        RAISE insufficient_funds;
    END IF;

    -- Deduct from source
    UPDATE Account
    SET Balance = Balance - amount,
        LastModified = SYSDATE
    WHERE AccountID = from_account;

    -- Add to destination
    UPDATE Account
    SET Balance = Balance + amount,
        LastModified = SYSDATE
    WHERE AccountID = to_account;

    COMMIT;
EXCEPTION
    WHEN insufficient_funds THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transfer failed: ' || SQLERRM);
END;
/
BEGIN
    TransferFunds(1001, 1003, 2000);  -- Transfer ₹2000 from Account 1001 to 1003
END;

SELECT AccountID, Balance FROM Account WHERE AccountID IN (1001, 1003);

SET SERVEROUTPUT ON;
BEGIN
    TransferFunds(1001, 1003, 20000);  -- This may fail due to insufficient balance
END;

