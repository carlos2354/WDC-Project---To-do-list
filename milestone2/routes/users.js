var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


router.use(function(req, res, next) {
  req.session.email = "carlos.atis154@gmail.com";
  next();
});

//################################### Load ###################################
router.get('/board/load', function(req, res, next) {
  var email = req.session.email;
  var server_user = {
    user: {
      info: {
        id: "000001",
        name: "",
        first_name: "Hunter",
        last_name: "Dong",
        email: "hunter4@gmail.com",
        image_source: "images/pngfuel.com.png",
        birthday: "01/10/1998",
        phone: 0469863752,
        background: "student",
        isManager: false,
      },
      boards: [{
        name: "Web Database",
        id: "0000001",
        active: true
      }],
      profile_display: true,
      table_display: true,
      empty_display: false,
    }
  };

  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    //get user info
    var query_info = "select first_name, last_name, email,phone,background,birthday,image_source from user where email=?";
    connection.query(query_info, email, function(err, info) {
      if (err) {
        res.sendStatus(500);
        return;
      } else {
        server_user.user.info = info[0];
        //res.send(server_user);
      }
    });

    //get boards
    var query_board = "select name, id from board b " +
      "inner join user_has_board uh on b.id = uh.board_id " +
      "where uh.user_email= ?";
    connection.query(query_board, email, function(err, board) {
      if (err) {
        console.log("no boards");
        return;
      } else {
        server_user.user.boards = board;
        for (var i = 0; i < board.length; i++) {
          server_user.user.boards[i].active = false;
        }
      }
      // console.log(server_user);
      res.send(server_user);
    });
  });
});

//################################### Populate ###################################
router.post('/board/populate', function(req, res, next) {
  //get id of user from server session
  //fill var server_user with object designated for the user
  //send
  var email = req.session.email;
  var board_id = req.body.id;

  var server_user = {
    user: {
      info: {
        id: "000001",
        name: "",
        first_name: "Hunter",
        last_name: "Dong",
        email: "hunter4@gmail.com",
        image_source: "images/pngfuel.com.png",
        birthday: "01/10/1998",
        phone: 0469863752,
        background: "student",
        isManager: false,
      },
      boards: [{
        name: "Web Database",
        id: "0000001",
        active: true
      }],
      profile_display: true,
      table_display: false,
      empty_display: true,

    },

    board: {
      id: "00000001",
      name: "Web and Database Computing",
      day: 1,
      month: 12,
      year: 2020,
      date: new Date,
      date_word: "",
      manager_id: "000001",
      manager_name: "Carlos Atis",
      manager_image: "images/smiley.jfif"
    },

    task_types: ["Cleaning", "Studying", "Research", "Documenting"],

    task_performance: [{
      type: "Cleaning",
      performance: "Good",
      color: "good",
      id: ""
    }],

    availability: {
      mon_s: 8,
      mon_e: 20,
      tue_s: 8,
      tue_e: 20,
      wed_s: 8,
      wed_e: 20,
      thu_s: 8,
      thu_e: 20,
      fri_s: 8,
      fri_e: 20,
      sat_s: 8,
      sat_e: 20,
      sun_s: 8,
      sun_e: 20,
    },

    members: [{
      first_name: "Carlos",
      last_name: "Atis",
      image: "images/pngfuel.com.png",
      email: "000001",
      availability: {
        mon_s: 6,
        mon_e: 20,
        tue_s: 8,
        tue_e: 20,
        wed_s: 7,
        wed_e: 23,
        thu_s: 10,
        thu_e: 15,
        fri_s: 6,
        fri_e: 12,
        sat_s: 8,
        sat_e: 20,
        sun_s: 8,
        sun_e: 20
      },
      task_performance: ["Good",
        "Great",
        "Unsatisfactory",
        "Not Set",
      ],
      task_performance_string: "Cleaning: Good \nStudying: Good \nResearch: Great \nDocumenting: Unsatisfactory" //15 length as long as task tags
    }],
    tasks: [{
      id: 1,
      name: "Research",
      type: "Study",
      start_time: "08:00",
      end_time: "10:00",
      status: "Complete",
      person: ["Carlos", "Hunter"],
      priority: "high"
    }]
  };

  server_user.board.date = req.body.date;
  server_user.board.day = req.body.year;
  server_user.board.month = req.body.year;
  server_user.board.year = req.body.year;

  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    //############################# obtain info from user table #############################
    var query_info = "select first_name, last_name, email,phone,background,birthday,image_source from user where email=?";
    connection.query(query_info, email, function(err, info) {
      if (err) {
        res.sendStatus(500);
        return;
      } else {
        server_user.user.info = info[0];
      }
    });


    //############################# obtain boards from user_has_board #############################
    var query_board = "select name, id from board b " +
      "inner join user_has_board uh on b.id = uh.board_id " +
      "where uh.user_email= ?";
    connection.query(query_board, email, function(err, board) {
      if (err) {
        console.log("no boards");
        res.sendStatus(500);
        return;
      } else {
        server_user.user.boards = board;
        //choose which board is active
        for (var i = 0; i < board.length; i++) {
          if (board_id == server_user.user.boards[i].id) {
            server_user.user.boards[i].active = true;
          } else {
            server_user.user.boards[i].active = false;
          }
        }
      }
    });

    //############################# obtain active board from board table #############################
    var query_active_board = "select b.id, b.name, u.first_name, u.last_name, u.email, u.image_source " +
      "from board b " +
      "inner join user u on b.manager_email = u.email " +
      "where b.id =?";
    connection.query(query_active_board, board_id, function(err, active_board) {
      if (err) {
        console.log("no active board");
        res.sendStatus(500);
      } else {
        console.log("found active board");
        server_user.board = active_board[0];
        req.session.board_id = server_user.board.id;

        //############################# obtain members from user_has_board #############################
        var query_members = "select u.first_name, u.last_name, u.image_source, u.email, u.phone, u.background, u.birthday, sun_s, sun_e, mon_s, mon_e, tue_s, tue_e, wed_s, wed_e, thu_s, thu_e, fri_s, fri_e, sat_s, sat_e " +
          "from user_has_board " +
          "inner join user u on u.email = user_email " +
          "where board_id = ? "; //and u.email!= ?
        connection.query(query_members, [board_id, server_user.board.email], function(err, members) {
          if (err) {
            console.log("failed to get members");
            res.sendStatus(500);
          } else {
            console.log("found member names and availability");
            server_user.members = members;

            //############################# obtain performance of members from user_perform_board #############################
            server_user.members.forEach(function(currentValue, index) {
              currentValue.info = "Email: " + currentValue.email + "\nMobile: " + currentValue.phone + "\nBackground: " + currentValue.background +"\nBirthday " + currentValue.birthday;
              var query_member_performance = "select tt.name, up.performance from user_perform_board up " +
                "inner join task_type tt on tt.id = up.task_type_id and tt.board_id = up.board_id " +
                "where up.user_email = ? and up.board_id=? ";
              connection.query(query_member_performance, [currentValue.email, board_id], function(err, member_performance) {
                if (err) {
                  console.log("failed to get member performance");
                  res.sendStatus(500);
                } else {
                  console.log("found task performance of each member");
                  currentValue.task_performance = member_performance;

                  //conjoin all into a string
                  currentValue.task_performance_string = "";
                  for (var i = 0; i < currentValue.task_performance.length; i++) {
                    currentValue.task_performance_string = currentValue.task_performance_string + currentValue.task_performance[i].name + ": " + currentValue.task_performance[i].performance + " \n";
                  }

                  //############################# obtain board task types from task_type #############################
                  if (index == server_user.members.length - 1) {
                    var query_task_type = "select name, id from task_type where board_id = ?";
                    connection.query(query_task_type, board_id, function(err, task_type) {
                      if (err) {
                        console.log("no task found");
                        res.sendStatus(500);
                      } else {
                        console.log("found task typesy");
                        server_user.task_types = task_type;

                        //############################# obtain user performance from user_perform_board #############################
                        var query_performance = "select tt.name as type, up.performance, tt.id from user_perform_board up " +
                          "inner join task_type tt on tt.id = up.task_type_id and tt.board_id = up.board_id " +
                          "where up.user_email = ? and up.board_id=?";
                        connection.query(query_performance, [email, board_id], function(err, performance) {
                          if (err) {
                            console.log("found no performance");
                            res.sendStatus(500);
                          } else {
                            console.log("found user task performance");
                            server_user.task_performance = [];

                            for (var i = 0; i < performance.length; i++) {
                              server_user.task_performance[i] = performance[i];
                              //set color for css
                              if (server_user.task_performance[i].performance == "Not Set") {
                                server_user.task_performance[i].color = "not-set";
                              } else if (server_user.task_performance[i].performance == "Unsatisfactory") {
                                server_user.task_performance[i].color = "unsatisfactory";
                              } else if (server_user.task_performance[i].performance == "Good") {
                                server_user.task_performance[i].color = "good";
                              } else if (server_user.task_performance[i].performance == "Great") {
                                server_user.task_performance[i].color = "great";
                              }
                            }

                            //############################# obtain avaiability from user_has_board #############################
                            var query_availability = "select sun_s, sun_e, mon_s, mon_e, tue_s, tue_e, wed_s, wed_e, thu_s, thu_e, fri_s, fri_e, sat_s, sat_e " +
                              "from user_has_board " +
                              "where user_email = ? and board_id=?";
                            connection.query(query_availability, [email, board_id], function(err, availability) {
                              if (err) {
                                console.log("no availability");
                                res.sendStatus(500);
                              } else {
                                console.log("found user availbaility");
                                server_user.availability = availability[0];

                                //############################# obtain task from task table #############################
                                var query_task = "select t.id, t.name, tt.name as type, t.time_start as start_time, t.time_end as end_time, t.priority " +
                                  "from task t inner join task_type tt on t.task_type_id = tt.id and t.board_id = tt.board_id " +
                                  "where t.board_id = ? ";
                                connection.query(query_task, board_id, function(err, task) {
                                  if (err) {
                                    console.log("no task");
                                    res.sendStatus(500);
                                  } else {
                                    console.log("found tasks of board");
                                    server_user.tasks = task;
                                    if (server_user.tasks.length == 0) {
                                      res.send(server_user);
                                    } else {
                                      //############################# obtain task member from user_has_task #############################
                                      server_user.tasks.forEach(function(currentValue, index) {
                                        var query_task_member = "select u.first_name, u.last_name " +
                                          "from user u inner join user_has_task ut on ut.user_email=u.email " +
                                          "where board_id=? and task_id=?";

                                        connection.query(query_task_member, [board_id, currentValue.id], function(err, task_member) {
                                          if (err) {
                                            console.log("no member for task");
                                            res.sendStatus(500);
                                          } else {
                                            console.log("found members of task");
                                            currentValue.person = task_member;

                                            if (index == server_user.tasks.length - 1) {
                                              res.send(server_user);
                                            }
                                          }
                                        });
                                      });
                                    }
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                }
              });
            });
          }
        });
      }
    });
  });
});

//################################### Save profile ###################################
router.post('/save_profile', function(req, res, next) {
  var email = req.session.email;

  var server_profile = {
    first_name: "Server",
    last_name: "Response",
    email: "carlos.atis154@gmail.com",
    profilePicture: "images/profile_database.png",
    birthday: "01/10/1998",
    phone: 0469863752,
    background: "student"
  };

  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    //################################### Update on user table ###################################
    var query_update = "update user " +
      "set first_name = ?, last_name = ?, birthday =?, phone = ?, background =? " +
      "where email = ?";
    connection.query(query_update, [req.body.first_name, req.body.last_name, req.body.birthday, req.body.phone, req.body.background, email], function(err, update) {
      if (err) {
        console.log("no update");
        res.sendStatus(500);
      } else {

        //################################### Obtain from user table ###################################
        var query_info = "select first_name, last_name, email,phone,background,birthday,image_source from user where email=?";
        connection.query(query_info, email, function(err, info) {
          if (err) {
            res.sendStatus(500);
          } else {
            server_profile = info[0];
            res.send(server_profile);
          }
        });
      }
    });
  });
});

//################################### Manager Route ###################################
//################################### Add Task type ###################################
router.post('/manager/add_task_type', function(req, res, next) {
  var email = req.session.email;
  var board_id = req.session.board_id;
  var server_task_types = ["Cleaning", "Studying", "Research", "Documenting", "Server response"];
  var member_email = [];
  var type_insert_id = "";

  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    //################################### insert into task table ###################################
    var query_insert = "insert into task_type (board_id, name) values (?,?)";
    connection.query(query_insert, [board_id, req.body.task_type], function(err, type) {
      if (err) {
        console.log("cant insert type  to board");
        res.sendStatus(500);
      } else {

        //################################### obtain members from user_has_board ###################################
        type_insert_id = type.insertId;
        var query_members = "select u.email " +
          "from user u " +
          "inner join user_has_board ub on u.email = ub.user_email " +
          "where ub.board_id =?";
        connection.query(query_members, board_id, function(err, member) {
          if (err) {
            console.log("cant find board members");
            res.sendStatus(500);
          } else {
            member_email = member;

            //################################### Insert "Not Set" to user_perform_board for all members ###################################
            member_email.forEach(function(currentValue, index) {
              var member_type_insert = "insert into user_perform_board values (?,?,?,?)";
              connection.query(member_type_insert, [currentValue.email, board_id, type_insert_id, "Not Set"], function(err, member_type) {
                if (err) {
                  console.log("cant insert type for member");
                  res.sendStatus(500);
                } else {

                  //################################### Obtain type from task_type ###################################
                  if (index == member_email.length - 1) {
                    var query_task_type = "select name, id from task_type where board_id = ?";
                    connection.query(query_task_type, board_id, function(err, task_type) {
                      if (err) {
                        console.log("no task found");
                        res.sendStatus(500);
                      } else {
                        server_task_types = task_type;
                        console.log(server_task_types);
                        res.send(server_task_types);
                      }
                    });
                  }
                }
              });
            });
          }
        });
      }
    });
  });
});

//################################### Add member ###################################
router.post('/manager/add_member', function(req, res, next) {

  var email = req.session.email;
  var board_id = req.session.board_id;
  var task_type_id = [];
  var server_members = [{
    first_name: "Server",
    last_name: "Response",
    id: "000003",
    image: "images/database.jpg",
    availability: {
      mon_s: 8,
      mon_e: 20,
      tue_s: 10,
      tue_e: 20,
      wed_s: 10,
      wed_e: 23,
      thu_s: 10,
      thu_e: 15,
      fri_s: 8,
      fri_e: 20,
      sat_s: 9,
      sat_e: 20,
      sun_s: 10,
      sun_e: 18
    },
    task_performance: ["Great",
      "Great",
      "Great",
      "Great",
    ],
    task_performance_string: "Cleaning: Great \nStudying: Great \nResearch: Great \nDocumenting: Great"
  }];

  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    //################################### Insert member to user_has_board ###################################
    var add_member = "insert into user_has_board values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
    connection.query(add_member, [req.body.member_email, board_id, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, ], function(err, add) {
      if (err) {
        console.log("couldnt add member");
        res.sendStatus(500);
      } else {

        //################################### Obtain task types from task_type###################################
        var query_task_type_id = "select id from task_type where board_id = ?";
        connection.query(query_task_type_id, board_id, function(err, id) {
          if (err) {
            console.log("couldnt find types of board");
            res.sendStatus(500);
          } else {
            task_type_id = id;

            //################################### Set new member performance to "Not Set" on user_perfor_board ###################################
            task_type_id.forEach(function(currentValue, index) {
              var not_set = "insert into user_perform_board values (?,?,?,?)";
              connection.query(not_set, [member_email, board_id, currentValue.id, "Not Set"], function(err, not) {
                if (err) {
                  console.log("couldnt set not set to member");
                  res.sendStatus(500);
                } else {

                  //################################### Obtain members from user_has_board###################################
                  var query_members = "select u.first_name, u.last_name, u.image_source, u.email, sun_s, sun_e, mon_s, mon_e, tue_s, tue_e, wed_s, wed_e, thu_s, thu_e, fri_s, fri_e, sat_s, sat_e " +
                    "from user_has_board " +
                    "inner join user u on u.email = user_email " +
                    "where board_id = ? "; //AND u.email != ?
                  connection.query(query_members, [board_id, server_user.board.email], function(err, members) {
                    if (err) {
                      console.log("failed to get members");
                      res.sendStatus(500);
                    } else {
                      server_members = members;

                      //################################### Obtain performance of members from user_perform_board ###################################
                      server_members.forEach(function(currentValue, index) {
                        currentValue.info = "Email: " + currentValue.email + "\nMobile: " + currentValue.phone + "\nBackground: " + currentValue.background +"\nBirthday " + currentValue.birthday;
                        var query_member_performance = "select tt.name, up.performance from user_perform_board up " +
                          "inner join task_type tt on tt.id = up.task_type_id and tt.board_id = up.board_id " +
                          "where up.user_email = ? and up.board_id=? ";
                        connection.query(query_member_performance, [currentValue.email, board_id], function(err, member_performance) {
                          if (err) {
                            console.log("failed to get member performance");
                            res.sendStatus(500);
                          } else {

                            currentValue.task_performance = member_performance;
                            currentValue.task_performance_string = "";
                            for (var i = 0; i < currentValue.task_performance.length; i++) {
                              currentValue.task_performance_string = currentValue.task_performance_string + currentValue.task_performance[i].name + ": " + currentValue.task_performance[i].performance + " \n";
                            }

                            if (index == server_members.length - 1) {
                              res.json(server_members);
                            }
                          }
                        });
                      });
                    }
                  });
                }
              });
            });
          }
        });
      }
    });
  });
});

//################################### Add Task ###################################
router.post('/manager/add_task', function(req, res, next) {
  var server_tasks = [{
    id: 1,
    name: "Research",
    type: "Study",
    start_time: "08:00",
    end_time: "10:00",
    person: ["Carlos", "Hunter"],
    priority: "high"
  }];

  var email = req.session.email;
  var board_id = req.session.board_id;
  var name = req.body.name;
  var type_id = req.body.tag;
  var start_time = req.body.start_time;
  var end_time = req.body.end_time;
  var persons = req.body.persons;
  var priority = req.body.priority;
  var taskInsertId = "";

  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    //################################### Insert into task table ###################################
    var create_task = "insert into task (board_id, task_type_id, name, time_start, time_end, priority) values (?,?,?,?,?,?)";
    connection.query(create_task, [board_id, type_id, name, start_time, end_time, priority], function(err, task_insert) {
      if (err) {
        console.log("coulnt insert task");
        res.sendStatus(500);
      } else {
        console.log("Inserted into task");
        taskInsertId = task_insert.insertId;

        //################################### Insert into user_has_task ###################################
        persons.forEach(function(currentValue, index) {
          var give_task = "insert into user_has_task values (?,?,?)";
          connection.query(give_task, [currentValue, taskInsertId, board_id], function(err, person) {
            if (err) {
              console.log("couldn't insert person");
              res.sendStatus(500);
            } else {
              console.log("Inserted into user_has_task");
              //################################### Obtain task from task table ###################################
              if (index == persons.length - 1) {
                var query_task = "select t.id, t.name, tt.name as type, t.time_start as start_time, t.time_end as end_time, t.priority " +
                  "from task t inner join task_type tt on t.task_type_id = tt.id and t.board_id = tt.board_id " +
                  "where t.board_id = ? ";
                connection.query(query_task, board_id, function(err, task) {
                  if (err) {
                    console.log("no task");
                    res.sendStatus(500);
                  } else {
                    server_tasks = task;
                    console.log("Obtained tasks");

                    //################################### Obtain members from user_has_task ###################################
                    server_tasks.forEach(function(currentValue, index) {
                      var query_task_member = "select u.first_name, u.last_name " +
                        "from user u inner join user_has_task ut on ut.user_email=u.email " +
                        "where board_id=? and task_id=?";
                      connection.query(query_task_member, [board_id, currentValue.id], function(err, task_member) {
                        if (err) {
                          console.log("no member for task");
                          res.sendStatus(500);
                        } else {
                          console.log("Obtained members of task");
                          currentValue.person = task_member;

                          if (index == server_tasks.length - 1) {
                            //console.log(server_user);
                            res.send(server_tasks);
                          }
                        }
                      });
                    });
                  }
                });
              }
            }
          });
        });
      }
    });
  });
});

//################################### Finish Task ###################################
router.post('/manager/finish_task', function(req, res, next) {
  var task_id = req.body.task_id;
  var board_id = req.session.board_id;
  var email = req.session.email;

  var server_tasks = [{
    id: 1,
    name: "Server response",
    type: "Finished a task",
    start_time: "08:00",
    end_time: "10:00",
    status: "Complete",
    person: ["Carlos", "Hunter"],
    priority: "high"
  }, {
    id: 2,
    name: "Watering plants",
    type: "Finished a task",
    start_time: "19:00",
    end_time: "20:00",
    person: ["Ofel"],
    priority: "medium"
  }];

  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    //################################### Delete from task table ###################################
    var remove = "delete from task where id = ? and board_id = ?";
    connection.query(remove, [task_id, board_id], function(err, remove) {
      if (err) {
        console.log("couldn't remove task");
        res.sendStatus(500);
      } else {
        console.log("Removed from task table");

        //################################### Obtain tasks from task table ###################################
        var query_task = "select t.id, t.name, tt.name as type, t.time_start as start_time, t.time_end as end_time, t.priority " +
          "from task t inner join task_type tt on t.task_type_id = tt.id and t.board_id = tt.board_id " +
          "where t.board_id = ? ";
        connection.query(query_task, board_id, function(err, task) {
          if (err) {
            console.log("no task");
            res.sendStatus(500);
          } else if (task.length <= 0) {
            console.log("no task");
            server_tasks = task;
             res.send(server_tasks);
          } else {
            server_tasks = task;
            console.log("Obtained from task table");

            //################################### Obtain members of tasks from user_has_task ###################################
            server_tasks.forEach(function(currentValue, index) {
              var query_task_member = "select u.first_name, u.last_name " +
                "from user u inner join user_has_task ut on ut.user_email=u.email " +
                "where board_id=? and task_id=?";
              connection.query(query_task_member, [board_id, currentValue.id], function(err, task_member) {
                if (err) {
                  console.log("no member for task");
                  res.sendStatus(500);
                } else {
                  currentValue.person = task_member;
                  console.log("Obtained members of each task");
                  if (index == server_tasks.length - 1) {
                    res.send(server_tasks);
                  }
                }
              });
            });
          }
        });
      }
    });
  });
});

router.post('/manager/add_board', function(req, res, next) {
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var board_name = req.body.board_name;
  var board_id = req.session.board_id;
  var email = req.session.email;
  var boardInsertId = "";

  var server_boards = [];

  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    //################################### Insert board into board table ###################################
    var insert_board = "insert into board (name, manager_first_name, manager_last_name, manager_email) values (?,?,?,?)";
    connection.query(insert_board, [board_name, first_name, last_name, email], function(err, insertToBoard) {
      if (err) {
        console.log("couldnt insert into boards");
        res.sendStatus(500);
      } else {
        boardInsertId = insertToBoard.insertId;

        //################################### Insert board and user into user_has_board ###################################
        var insert_ub = "insert into user_has_board values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        connection.query(insert_ub, [email, boardInsertId, 0, 23, 0, 23, 0, 23, 0, 23, 0, 23, 0, 23, 0, 23], function(err, ub) {
          if (err) {
            console.log("couldnt insert into ub");
            res.sendStatus(500);
          } else {

            //################################### Obtain user boards from user_has_board ###################################
            var query_board = "select name, id from board b " +
              "inner join user_has_board uh on b.id = uh.board_id " +
              "where uh.user_email= ?";
            connection.query(query_board, email, function(err, board) {
              if (err) {
                console.log("no boards");
                res.sendStatus(500);
                return;
              } else {
                server_boards = board;
                //choose which board is active
                for (var i = 0; i < board.length; i++) {
                  server_boards[i].active = false;
                }
                res.json(server_boards);
              }
            });
          }
        });
      }
    });
  });
});

//################################### Employee route ###################################
//################################### Save availability ###################################
router.post('/user/save_availability', function(req, res, next) {
  var board_id = req.body.board_id;
  var email = req.session.email;

  var server_availability = {
    mon_s: 0,
    mon_e: 24,
    tue_s: 0,
    tue_e: 24,
    wed_s: 0,
    wed_e: 24,
    thu_s: 0,
    thu_e: 24,
    fri_s: 0,
    fri_e: 24,
    sat_s: 0,
    sat_e: 24,
    sun_s: 0,
    sun_e: 24
  };
  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    //################################### Update user availability on user_has_board ###################################
    var query_update = "update user_has_board " +
      "set sun_s = ?, sun_e = ?, mon_s = ?, mon_e = ?, tue_s = ?, tue_e = ?, wed_s = ?, wed_e = ?, thu_s = ?, thu_e = ?, fri_s = ?, fri_e = ?, sat_s = ?, sat_e = ? " +
      "where user_email = ? and board_id = ?";
    connection.query(query_update, [req.body.sun_s, req.body.sun_e, req.body.mon_s, req.body.mon_e, req.body.tue_s, req.body.tue_e, req.body.wed_s, req.body.wed_e, req.body.thu_s, req.body.thu_e, req.body.fri_s, req.body.fri_e, req.body.sat_s, req.body.sat_e, email, board_id], function(err, availability) {
      if (err) {
        console.log("couldnt update availability");
        res.sendStatus(500);
      } else {

        //################################### Obtain user availability from user_has_board ###################################
        var query_availability = "select sun_s, sun_e, mon_s, mon_e, tue_s, tue_e, wed_s, wed_e, thu_s, thu_e, fri_s, fri_e, sat_s, sat_e " +
          "from user_has_board " +
          "where user_email = ? and board_id=?";
        connection.query(query_availability, [email, board_id], function(err, availability) {
          if (err) {
            console.log("no availability");
            res.sendStatus(500);
          } else {
            console.log("found user availbaility");
            server_availability = availability[0];
            res.json(server_availability);
          }
        });
      }
    });
  });
});

//################################### Set performance ###################################
router.post('/user/set_performance', function(req, res, next) {
  var board_id = req.session.board_id;
  var email = req.session.email;
  var server_task_performance = [{
    type: "Server response",
    performance: "Great",
    color: "great"
  }];

  req.pool.getConnection(function(err, connection) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    //################################### Update user performance on user_perforn_board ###################################
    var update_performance = "update user_perform_board set " +
      "performance = ? " +
      "where user_email = ? and board_id = ? and task_type_id = ?";
    connection.query(update_performance, [req.body.performance, email, board_id, req.body.type_id], function(err, update) {
      if (err) {
        console.log("couldnt update  performance");
        res.sendStatus(500);
      } else {

        //################################### Obtain user performance from user_perform_board ###################################
        var query_performance = "select tt.name as type, up.performance, tt.id from user_perform_board up " +
          "inner join task_type tt on tt.id = up.task_type_id and tt.board_id = up.board_id " +
          "where up.user_email = ? and up.board_id=?";
        connection.query(query_performance, [email, board_id], function(err, performance) {
          if (err) {
            console.log("found no performance");
            res.sendStatus(500);
          } else {
            console.log("found user task performance");

            server_task_performance = [];
            for (var i = 0; i < performance.length; i++) {
              server_task_performance[i] = performance[i];
              //set color for css
              if (server_task_performance[i].performance == "Not Set") {
                server_task_performance[i].color = "not-set";
              } else if (server_task_performance[i].performance == "Unsatisfactory") {
                server_task_performance[i].color = "unsatisfactory";
              } else if (server_task_performance[i].performance == "Good") {
                server_task_performance[i].color = "good";
              } else if (server_task_performance[i].performance == "Great") {
                server_task_performance[i].color = "great";
              }
            }
            res.json(server_task_performance);
          }
        });
      }
    });
  });
});