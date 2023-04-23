BEGIN;

DROP TABLE IF EXISTS users, posts, comments ,votes;

CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(250) NOT NULL,
        email VARCHAR(250) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    posts(
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        image TEXT,
        user_id INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    comments(
        id SERIAL PRIMARY KEY,
        content TEXT NOT NULL,
        user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
        post_id INTEGER REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    votes(
        id SERIAL PRIMARY KEY,
        type INTEGER NOT NULL CHECK (
            type = 1
            OR type = -1
        ),
        user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
        post_id INTEGER REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- C:/Users/Amal/Desktop/G13/month2/week8/Reddit-Clone/server/database/config/build.sql;

COMMIT;