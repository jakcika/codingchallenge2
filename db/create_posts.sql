DROP TABLE IF EXISTS posts;
C
REATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    author varchar (100) NOT NULL,
    body varchar (500) NOT NULL,
    post_id int
);