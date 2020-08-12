CREATE burgers_db;

USE burgers_db;

CREATE Table burgers

(
    id INTEGER
    AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR
    (25) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY
    (id)
);
