CREATE TABLE user(
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  id VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone INT,
  password VARCHAR(255) NOT NULL,
  work_background VARCHAR(255),
  image_source VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE board(
  id VARCHAR(255),
  name VARCHAR(255),
  manager_name VARCHAR(255),
  manager_id VARCHAR(255),
  PRIMARY KEY (id),
  FOREIGN KEY (manager_id) REFERENCES user(id) ON DELETE SET NULL
)

/*stores the multi valued task types of a board*/
CREATE TABLE task_type(
  board_id VARCHAR(255),
  type_id VARCHAR(255),
  type VARCHAR(255),
  PRIMARY KEY (board_id, type_id),
  FOREIGN KEY (board_id) REFERENCES board(id) ON DELETE CASCADE
);


CREATE TABLE user_has_task(
  user_id VARCHAR(255),
  task_id VARCHAR(255),
  board_id VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (board_id, task_id) REFERENCES task(board_id, id)
);
/*stores a user's ownership and availability at a certain board*/
CREATE TABLE user_has_board(
  user_id VARCHAR(255),
  board_id VARCHAR(255),
  is_manager BOOLEAN,
  sun_start INT,
  sun_end INT,
  mon_start INT,
  mon_end INT,
  tue_start INT,
  tue_end INT,
  wed_start INT,
  wed_end INT,
  thu_start INT,
  thu_end INT,
  fri_start INT,
  fri_end INT,
  sat_start INT,
  sat_end INT,
  FOREIGN KEY(user_id) REFERENCES user(id),
  FOREIGN KEY (board_id) REFERENCES board(id)
)

/*stores how good a user is at a board's task type*/
CREATE TABLE user_perform_board(
  user_id VARCHAR(255),
  board_id VARCHAR(255),
  task_type_id VARCHAR (255),
  type VARCHAR(255),
  performance VARCHAR(255),
  FOREIGN KEY(user_id) REFERENCES user(id),
  FOREIGN KEY (board_id) REFERENCES board(id),
  FOREIGN KEY (board_id, task_type_id) REFERENCES task_type(board_id, type_id)
)

CREATE TABLE task(
  id VARCHAR(255),
  board_id VARCHAR(255),
  name VARCHAR(255),
  type VARCHAR(255),
  time_start INT,
  time_end INT,
  priority VARCHAR(255),
  date_set DATE,
  PRIMARY KEY (board_id, id),
  FOREIGN KEY (board_id) REFERENCES board(id) ON DELETE CASCADE
)




/*---------------------------Retrieval queries-------------------*/
/*example points
user first name = Carlos
user id = 00001
board name = WDC
board id = 1001
task name = cleaning kitchen
task id = 2001
*/

/*---------------------------Retrieval queries for board-------------------*/
/*---------------------------Find information of board-------------------*/
SELECT *
FROM board
WHERE board.id = '1001'
/*---------------------------Find member names and images board-------------------*/
SELECT first_name, last_name, image_source
FROM user
    INNER JOIN user_has_board
        ON user_has_board.user_id = user.id
    INNER JOIN board
        ON user_has_board.board_id = board.id
WHERE board.id = '1001';

/*---------------------------Find tasks of board at date-------------------*/
SELECT *
FROM task
    INNER JOIN board
        ON board.id = task.board_id
WHERE board.id = '1001' AND task.date = 01/01/2020;

/*---------------------------Find task types of board-------------------*/
SELECT type
FROM task_type
    INNER JOIN board
        ON task_type.board_id = board.id
WHERE board.id = '1001';

/*---------------------------Find users of board task------------------*/
SELECT first_name, last_name
FROM user
    INNER JOIN user_has_task
        ON user_has_task.user_id = user.id
    INNER JOIN task
        ON user_has_task.task_id = task.id
WHERE task.id = '2001'



/*---------------------------Retrieval queries for user-------------------*/
/*---------------------------Find boards of user-------------------*/
SELECT name
FROM board
    INNER JOIN user_has_board
        ON user_has_board.board_id = board.id
    INNER JOIN user
        ON user_has_board.user_id = user.id
WHERE user.id = '00001';

/*---------------------------Find availablity of user at board-------------------*/
SELECT *
FROM user_has_board
    INNER JOIN user
        ON user.id = user_has_board.user_id
    INNER JOIN board
        ON board.id = user_has_board.board_id
WHERE user.id = '00001' AND board.id = '1001';

/*---------------------------Find task performance of user at board-------------------*/
SELECT type, performance
FROM user_performs_board
    INNER JOIN user
        ON user.id = user_performs_board.user_id
    INNER JOIN board
        ON board.id = user_performs_board.board_id
WHERE user.id = '00001' AND board.id = '1001';

/*---------------------------Find information of user-------------------*/
SELECT *
FROM user
WHERE user.id = '00001'

/*---------------------------Storage queries-------------------*/
/*Insert correct values into each table using given query:
INSERT INTO tablename
    VALUES (value1, value2, value3);
*/
