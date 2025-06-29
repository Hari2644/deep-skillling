Scenario - 1 :

ALTER TABLE Customer ADD IsVIP VARCHAR2(5);

BEGIN
  FOR cust IN (
    SELECT CustomerID, DOB 
    FROM Customer
  ) LOOP
    IF MONTHS_BETWEEN(SYSDATE, cust.DOB) / 12 > 60 THEN
      UPDATE Loan
      SET InterestRate = InterestRate - 1
      WHERE CustomerID = cust.CustomerID;
    END IF;
  END LOOP;
  
  COMMIT;
END;
/
SELECT * FROM Loan WHERE CustomerID IN (
  SELECT CustomerID FROM Customer 
  WHERE MONTHS_BETWEEN(SYSDATE, DOB) / 12 > 60
);

Scenario 2 : 

SET SERVEROUTPUT ON;

BEGIN
  FOR cust IN (
    SELECT CustomerID, Balance 
    FROM Customer
  ) LOOP
    IF cust.Balance > 10000 THEN
      UPDATE Customer
      SET IsVIP = 'TRUE'
      WHERE CustomerID = cust.CustomerID;

      DBMS_OUTPUT.PUT_LINE('VIP status granted to Customer ID: ' || cust.CustomerID);
    ELSE
      UPDATE Customer
      SET IsVIP = 'FALSE'
      WHERE CustomerID = cust.CustomerID;
    END IF;
  END LOOP;

  COMMIT;
END;
/

Scenario 3 :

INSERT INTO Customer (CustomerID, Name, DOB, Balance, LastModified)
VALUES (100, 'Test User', TO_DATE('1960-01-01', 'YYYY-MM-DD'), 15000, SYSDATE);

INSERT INTO Loan (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (1001, 100, 50000, 8.5, SYSDATE - 50, SYSDATE + 5);  -- Due soon

COMMIT;
BEGIN
  FOR ln IN (
    SELECT l.LoanID, l.CustomerID, l.EndDate, c.Name
    FROM Loan l
    JOIN Customer c ON l.CustomerID = c.CustomerID
    WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE(
      'Reminder: Dear ' || ln.Name ||
      ', your loan (ID: ' || ln.LoanID ||
      ') is due on ' || TO_CHAR(ln.EndDate, 'DD-Mon-YYYY') || '.'
    );
  END LOOP;
END;
/
