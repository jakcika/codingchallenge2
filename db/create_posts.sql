DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(200) NOT NULL,
    author varchar (50) NOT NULL,
    body varchar (200) NOT NULL,
    post_id int
)