-- Active: 1674174693537@@35.226.146.116@3306@jbl-4417156-caroline-cunha
CREATE TABLE IF NOT EXISTS Verify_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);
SELECT * FROM `Verify_users` LIMIT 100;

CREATE TABLE IF NOT EXISTS Recipes_list (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(64) NOT NULL,
    created_at VARCHAR(64) NOT NULL
)
