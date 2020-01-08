-- #178 Rank Scores
-- correlated subquery assesses table row by row, creating a rank column by using the outer table as a marker, and the inner table to count the number of scores that are greater than that marker. 
-- could use window function in later version on MySQL, but leetcode environment didn't allow
SELECT s1.score, (SELECT COUNT(DISTINCT s2.score)
                 FROM scores s2
                 WHERE s2.score >= s1.score) AS Rank
FROM scores s1
ORDER BY s1.score DESC

-- #176 Second Highest Salary
SELECT MAX(salary) SecondHighestSalary
FROM employee
WHERE salary != (SELECT MAX(salary)
        FROM employee)

-- this will be judged wrong if there is only one salary in the table because result will not by null
SELECT salary as SecondHighestSalary
FROM employee
ORDER BY salary DESC
LIMIT 1 OFFSET 1

-- #181 Employees Earning More Than Their Managers
SELECT e.name as Employee
FROM employee e JOIN employee m 
ON e.managerid = m.id
WHERE e.salary > m.salary