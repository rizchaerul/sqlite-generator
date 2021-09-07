-- Up
CREATE TABLE cat
(
    cat_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Seed
INSERT INTO cat(name) VALUES ("Kucing");

-- Down
DROP TABLE cat;