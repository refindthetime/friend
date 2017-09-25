CREATE DATABASE FriendsDB;

USE FriendsDB;

CREATE TABLE all_Friends (
	id INT AUTO_INCREMENT NOT NULL,
	friend_name VARCHAR(100) NOT NULL,
    friend_photo VARCHAR(500) NOT NULL,
    friend_q1 INTEGER(1),
    friend_q2 INTEGER(1),
    friend_q3 INTEGER(1),
    friend_q4 INTEGER(1),
    friend_q5 INTEGER(1),
    friend_q6 INTEGER(1),
    friend_q7 INTEGER(1),
    friend_q8 INTEGER(1),
    friend_q9 INTEGER(1),
    friend_q10 INTEGER(1),
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO all_Friends (friend_name, friend_photo, friend_q1, friend_q2, friend_q3, friend_q4, friend_q5, friend_q6, friend_q7, friend_q8, friend_q9, friend_q10, createdAt)
	VALUES ("Stuart", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAegAAAAJDY1YWFmYzMxLWMwNDctNDJjMi04ZTc3LTQzZDk3NTk2ZDQzYw.jpg", "5", "4", "5", "2", "4", "5", "4", "4", "1", "2", CURRENT_TIMESTAMP);

SELECT * FROM all_Friends;