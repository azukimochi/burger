CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(200) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id)
);