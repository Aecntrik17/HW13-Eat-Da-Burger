CREATE burgers_db;

USE burgers_db;

CREATE Table burgers;

(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR
(25) NOT NULL,
    devoured BOOLEAN,
);
