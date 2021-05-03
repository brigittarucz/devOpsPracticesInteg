CREATE DATABASE IF NOT EXISTS techevents_users;

CREATE TABLE IF NOT EXISTS techevents_users.users(
    id INT,
    name VARCHAR(100)
);

INSERT INTO techevents_users.users(id, name)
VALUES (1, 'root');

INSERT INTO techevents_users.users(id, name)
VALUES (2, 'Emma');