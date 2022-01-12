DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    body VARCHAR(500) NOT NULL,
    post_id int
);

INSERT INTO posts (title, author, body, post_id)
VALUES
(
    'Lorem Ipsum',
    'Jane Doe',
    'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    1
),
(
    'Second',
    'GI Jane',
    'a 1997 American war drama film directed by Ridley Scott and starring Demi Moore, Viggo Mortensen, and Anne Bancroft',
    2
),
(
    'Third',
    'Shrek',
    'Shrek (Mike Myers) goes on a quest to rescue the feisty Princess Fiona (Cameron Diaz) with the help of his loveable Donkey (Eddie Murphy) ',
    3
);