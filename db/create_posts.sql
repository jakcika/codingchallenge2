DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(200) NOT NULL,
    name varchar (50) NOT NULL,
    comment varchar (200) NOT NULL,
    name_id int
)