-- for help on sql server \?
-- list all the availabe DB \l
-- list the all the available table \d
--!creaet DB, 
--CREATE DATABASE name;
--!create table:
-- CREATE TABLE name(
    --id int
    --name varchar(50)
    --on_sale boolean
--);
CREATE DATABASE todo;
-- \c todo;

CREATE TABLE todo(
    id Serial PRIMARY KEY,
    description VARCHAR(400),
    iscompleted boolean,
    creaeted_at timestamp
);
--!insert data into table
INSERT INTO todo (description, completed, creaeted_at) values( 'Clean my laptop screen', false, Now());
--!select data from table
-- SELECT * FROM name;
--!update data in table
-- UPDATE name SET name = 'orange' WHERE id = 1;
--!delete data from table
-- DELETE FROM name WHERE id = 1;
--!drop table
-- DROP TABLE name;
--!drop DB
-- DROP DATABASE name;
--!rename table
-- ALTER TABLE name RENAME TO new_name;
--!rename column
-- ALTER TABLE name RENAME COLUMN name TO new_name;
--!change column type
-- ALTER TABLE name ALTER COLUMN name TYPE varchar(100);
--!change column name and type
-- ALTER TABLE name RENAME COLUMN name TO new_name, ALTER COLUMN new_name TYPE varchar(100);
--!delete column
-- ALTER TABLE name DROP COLUMN name;



--! add new column to excisting table
--alter table item add column weight int;

-- CREATe TABLE resturants(
--     id INT,
--     name varchar(50),
--     location varchar(50),
--     price_range INt
-- );
-- iNSERT INTO resturants (id, name, location, price_range) values(321,
-- 'damascuse bit', '77 Brick lane', 3);