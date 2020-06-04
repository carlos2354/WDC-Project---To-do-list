var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

//--------------------------------populate route--------------------------
router.get('/board/populate', function(req, res, next) {
  //get id of user from server session
  //fill var server_user with object designated for the user
  //send
  var server_user =[];
  res.send(server_user);
});

router.get('/profile/populate', function(req, res, next) {
  //get id of desired profile from user cookie
  //fill server_profile with profile object designated to desired user
  var server_profile =[];
  res.send(server_profile);
});

router.get('/profile.html', function(req, res, next) {
  //give user the id of the desired profile to view as a cookie
  var user_id = req.query.user_id;
  res.sendFile('/home/ubuntu/wdc/project/milestone2/public/profile.html');
});
//--------------------------------manager route--------------------------
router.post('/manager/add_task_type', function(req, res, next) {
    var server_task_types=["Cleaning", "Studying", "Research", "Server response"];
    res.json(server_task_types);
});

router.post('/manager/add_member', function(req, res, next) {
    var server_members= [
      {
        name: "Server response",
        image: "somesource",
        availability: {
          mon_s: "06:00",
          mon_e: "20:00",
          tue_s: "08:00",
          tue_e: "20:00",
          wed_s: "08:00",
          wed_e: "20:00",
          thu_s: "08:00",
          thu_e: "20:00",
          fri_s: "08:00",
          fri_e: "20:00",
          sat_s: "00:00",
          sat_e: "20:00",
          sun_s: "00:00",
          sun_e: "20:00"
        },
        task_performance: ["Good",
          "Great",
          "Unsatisfactory",
          "Not Set",
        ],
        task_performance_string: "Cleaning: Good \nStudying: Good \nResearch: Great \nDocumenting: Unsatisfactory" //15 length as long as task tags
      },
      {
        name: "Server response",
        image: "images/yellow-flower.jpg",
        availability: {
          mon_s: "08:00",
          mon_e: "20:00",
          tue_s: "08:00",
          tue_e: "20:00",
          wed_s: "08:00",
          wed_e: "20:00",
          thu_s: "08:00",
          thu_e: "20:00",
          fri_s: "08:00",
          fri_e: "20:00",
          sat_s: "00:00",
          sat_e: "20:00",
          sun_s: "00:00",
          sun_e: "20:00"
        },
        task_performance: ["Good",
          "Great",
          "Unsatisfactory",
          "Not Set",
        ],
        task_performance_string: "Cleaning: Good \nStudying: Great \nResearch: Unsatisfactory \nDocumenting: Not set"
      },
    ];
    res.json(server_members);
});

router.post('/manager/add_task', function(req, res, next) {
    var server_tasks=[
      {
      ticket: 1,
      name: "Server response",
      type: "Server response",
      start_time: "Server response",
      end_time: "Server response",
      person: ["Carlos", "Hunter"],
      priority: "Server response"
    }, {
      ticket: 2,
      name: "Watering plants",
      type: "Gardening",
      start_time: "19:00",
      end_time: "20:00",
      person: ["Ofel"],
      priority: "medium"
    }]
    res.json(server_tasks);
});

router.post('/manager/finish_task', function(req, res, next) {
    var server_tasks=[
      {
      ticket: 1,
      name: "Server response",
      type: "Server response",
      start_time: "Server response",
      end_time: "Server response",
      status: "Server response",
      person: ["Carlos", "Hunter"],
      priority: "Server response"
    }, {
      ticket: 2,
      name: "Watering plants",
      type: "Gardening",
      start_time: "19:00",
      end_time: "20:00",
      status: "Complete",
      person: ["Ofel"],
      priority: "medium"
    }]
    res.json(server_tasks);
});

//--------------------------------employee route--------------------------
router.post('/user/save_availability', function(req, res, next) {
    var server_availability={
      mon_s: "00:00",
      mon_e: "24:00",
      tue_s: "00:00",
      tue_e: "24:00",
      wed_s: "00:00",
      wed_e: "24:00",
      thu_s: "00:00",
      thu_e: "23:00",
      fri_s: "00:00",
      fri_e: "24:00",
      sat_s: "00:00",
      sat_e: "24:00",
      sun_s: "00:00",
      sun_e: "24:00"
    };
    res.json(server_availability);
});

router.post('/user/set_performance', function(req, res, next) {
    var server_task_performance=[
      {
        performance: "Great",
        color: "great"
      }, //15 length as long as task tags
      {
        performance: "Great",
        color: "great"
      },
      {
        performance: "Great",
        color: "great"
      },
      {
        performance: "Great",
        color: "great"
      },
    ];
    res.json(server_task_performance);
});
