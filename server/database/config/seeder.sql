BEGIN;

INSERT INTO
    users(username, email, password)
VALUES (
        'Amal',
        'amal@gmail.com',
        '$2a$12$KV7Ylcf4dXB2fanExDcYYe/HNc4ufcc.kGBWsRpbg5U64WSRrqbo2'
    ), (
        'Asmaa',
        'asmaa@gmail.com',
        '$2a$12$nXhFuShm3xa5sm9P9jW45.9A51mO84KsFzILYR3aKOReGNXVKA7Vi'
    ), (
        'Kamal',
        'kamal@gmail.com',
        '$2a$12$XFJzHGpe6nYa6nkIcy227uVbXYvsnlP/kZy0Z5xxmus18IUypVF.O'
    );

-- 123456 , 123456a, 123456amal

INSERT INTO
    posts (title, content, image, user_id)
VALUES (
        'First post',
        'Lorem ipsum dolor sit amet, consectetur adipiscing accumsan metus et quam iaculis in rutrum ex dolor eget augue.',
        'https://picsum.photos/500/300',
        1
    ), (
        'Second post',
        'Phasellus nec tellus gravida, cursus tellus vitae, tempor mpor. Duis at pulvinar nulla, a imperdiet ex.',
        NULL,
        2
    ), (
        'Third post',
        'Proin a massa tellus. Suspendisse vel ipsum rhoncus, elementum lacus sed, tincidunt odio.vel volutpat arcu bibendum sit amet. Donec hendrerit bibendum arcu vitae sollicitudin. Maecenas ullamcorper volutpat sagittis.Sollicitudin.',
        'https://picsum.photos/500/300',
        3
    );

INSERT INTO
    comments (content, user_id, post_id)
VALUES ('Great post!', 1, 1), (
        'I disagree with your opinion',
        2,
        1
    ), ('Thanks for sharing!', 3, 2), ('This is really helpful', 1, 3), (
        'I have a question about your post',
        2,
        3
    );

INSERT INTO
    votes (type, user_id, post_id)
VALUES (1, 1, 1), (-1, 2, 1), (1, 3, 2), (-1, 1, 3), (-1, 2, 3), (1, 3, 3);

-- C:/Users/Amal/Desktop/G13/month2/week8/Reddit-Clone/server/database/config/seeder.sql;

COMMIT;