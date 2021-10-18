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

CREATE TABLE products(
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale boolean
);

--! add new column to excisting table
--alter table item add column weight int;

CREATe TABLE resturants(
    id INT,
    name varchar(50),
    location varchar(50),
    price_range INt
);
iNSERT INTO resturants (id, name, location, price_range) values(321,
'damascuse bit', '77 Brick lane', 3);