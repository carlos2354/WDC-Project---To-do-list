var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

//--------------------------------populate route--------------------------
router.post('/board/populate', function(req, res, next) {
  //get id of user from server session
  //fill var server_user with object designated for the user
  //send
  var server_user = {user: {
      info: {
        id: "000001",
        name: "Carlos Atis",
        first_name:"Carlos",
        last_name:"Atis",
        email: "carlos.atis154@gmail.com",
        profilePicture: "images/pngfuel.com.png",
        birthday: "01/10/1998",
        phone: 0469863752,
        background: "student",
        isManager: false,
      },
      boards: [{
        name: "Web Database",
        id: "0000001",
        active: true
      }, {
        name: "Algorithm Design and Structure Analysis",
        id: "0000002",
        active: false
      }, {
        name: "Algorithm Design and Data Structures",
        id: "0000003",
        active: false
      }, {
        name: "Professional Practice",
        id: "0000004",
        active: false
      }, {
        name: "Foundations of Human Neuroanatomy",
        id: "0000005",
        active: false
      }],
      profile_display: true,
      table_display: false,

    },

    board: {
      id: "00000001",
      name: "Web and Database Computing",
      manager_id: "000001",
      manager_name: "Carlos Atis",
      manager_image: "images/smiley.jfif"
    },

    task_types: ["Cleaning", "Studying", "Research", "Documenting"],

    task_performance: [{
        type: "Cleaning",
        performance: "Good",
        color: "good"
      }, //15 length as long as task tags
      {
        type: "Studying",
        performance: "Great",
        color: "great"
      },
      {
        type: "Research",
        performance: "Unsatisfactory",
        color: "unsatisfactory"
      },
      {
        type: "Documenting",
        performance: "Not Set",
        color: "not-set"
      },
    ],

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
        first_name:"Carlos",
        last_name:"Atis",
        image: "images/pngfuel.com.png",
        id: "000001",
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
      },

      {
        first_name: "Huatao",
        last_name: "Dong",
        id: "000002",
        image: "images/yellow-flower.jpg",
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
        task_performance: ["Good",
          "Great",
          "Unsatisfactory",
          "Not Set",
        ],
        task_performance_string: "Cleaning: Good \nStudying: Great \nResearch: Unsatisfactory \nDocumenting: Not set"
      }
    ],
    tasks: [{
        id: 1,
        name: "Research",
        type: "Study",
        start_time: "08:00",
        end_time: "10:00",
        status: "Complete",
        person: ["Carlos", "Hunter"],
        priority: "high"
      }, {
        id: 2,
        name: "Watering plants",
        type: "Gardening",
        start_time: "19:00",
        end_time: "20:00",
        person: ["Ofel"],
        priority: "medium"
      },
      {
        id: 3,
        name: "Studying Code",
        type: "Study",
        start_time: "15:00",
        end_time: "20:00",
        person: ["Carlos"],
        priority: "high"
      }
    ]}
  res.send(server_user);
});

router.post('/save_profile', function(req, res, next) {
  //get id of desired profile from user cookie
  //fill server_profile with profile object designated to desired user
  var server_profile = {
    first_name: "Server",
    last_name: "Response",
    email: "carlos.atis154@gmail.com",
    profilePicture: "images/profile_database.png",
    birthday: "01/10/1998",
    phone: 0469863752,
    background: "student"
  };

  res.send(server_profile);
});

//--------------------------------manager route--------------------------
router.post('/manager/add_task_type', function(req, res, next) {
  var server_task_types = ["Cleaning", "Studying", "Research", "Documenting", "Server response"];
  res.json(server_task_types);
});

router.post('/manager/add_member', function(req, res, next) {
  var server_members = [{
        first_name:"Carlos",
        last_name:"Atis",
        image: "images/pngfuel.com.png",
        id: "000001",
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
      },

      {
        first_name: "Huatao",
        last_name: "Dong",
        id: "000002",
        image: "images/yellow-flower.jpg",
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
        task_performance: ["Good",
          "Great",
          "Unsatisfactory",
          "Not Set",
        ],
        task_performance_string: "Cleaning: Good \nStudying: Great \nResearch: Unsatisfactory \nDocumenting: Not set"
      },
      {
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
      }
    ];
  res.json(server_members);
});

router.post('/manager/add_task', function(req, res, next) {
  var server_tasks = [{
        id: 1,
        name: "Research",
        type: "Study",
        start_time: "08:00",
        end_time: "10:00",
        person: ["Carlos", "Hunter"],
        priority: "high"
      }, {
        id: 2,
        name: "Watering plants",
        type: "Gardening",
        start_time: "19:00",
        end_time: "20:00",
        person: ["Ofel"],
        priority: "medium"
      },
      {
        id: 3,
        name: "Studying Code",
        type: "Study",
        start_time: "15:00",
        end_time: "20:00",
        person: ["Carlos"],
        priority: "high"
      },
      {
        id: 4,
        name: "Server response",
        type: "Added a task",
        start_time: "14:00",
        end_time: "20:00",
        person: ["Maximo"],
        priority: "high"
      }];
  res.json(server_tasks);
});

router.post('/manager/finish_task', function(req, res, next) {
  var server_tasks= [{
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
      }
    ];
  res.json(server_tasks);
});

//--------------------------------employee route--------------------------
router.post('/user/save_availability', function(req, res, next) {
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
  res.json(server_availability);
});

router.post('/user/set_performance', function(req, res, next) {
   var server_task_performance = [{
        type: "Server response",
        performance: "Great",
        color: "great"
      }, //15 length as long as task tags
      {
        type: "Studying",
        performance: "Good",
        color: "good"
      },
      {
        type: "Research",
        performance: "Good",
        color: "good"
      },
      {
        type: "Documenting",
        performance: "Good",
        color: "good"
      },
    ];
  res.json(server_task_performance);
});
