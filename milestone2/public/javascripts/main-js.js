var vuemain = new Vue({
  el: '#main',
  data: {
    user: {
      info:{
        id: "000001",
        name: "Carlos Atis",
        email: "carlos.atis154@gmail.com",
        profilePicture: "images/pngfuel.com.png",
        birthday: "Oct 1, 1998",
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
        performance: "Good",
        color: "good"
      }, //15 length as long as task tags
      {
        performance: "Great",
        color: "great"
      },
      {
        performance: "Unsatisfactory",
        color: "unsatisfactory"
      },
      {
        performance: "Not Set",
        color: "not-set"
      },
    ],

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

    members: [{
        name: "Carlos Atis",
        image: "somesource",
        id: "000001",
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
        name: "Huatao Dong",
        id: "000002",
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
      }
    ],
    tasks: [{
        ticket: 1,
        name: "Research",
        type: "Study",
        start_time: "08:00",
        end_time: "10:00",
        status: "Complete",
        person: ["Carlos", "Hunter"],
        priority: "high"
      }, {
        ticket: 2,
        name: "Watering plants",
        type: "Gardening",
        start_time: "19:00",
        end_time: "20:00",
        person: ["Ofel"],
        priority: "medium"
      },
      {
        ticket: 3,
        name: "Studying Code",
        type: "Study",
        start_time: "15:00",
        end_time: "20:00",
        person: ["Carlos"],
        priority: "high"
      }
    ]

  },
  methods: {
    goto_profile: function() {
      vuemain.user.table_display = true;
      vuemain.user.profile_display = false;
    },

    //----------------------------general ajax----------------------------
    populate_today: function(id) {
      // var userID = from cookie
      vuemain.user.table_display = false;
      vuemain.user.profile_display = true;
      var board_id_value = id;
      var date_value = ""; //today's date

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.user = JSON.parse(this.response);
        }
      };

      xhttp.open("GET", "/users/board/?board_id=" + encodeURIComponent(board_id_value) + "&date=" + encodeURIComponent(date_value), true);
      xhttp.send();
    },

    populate_on_date: function() {
      var board_id_value = vuemain.board.id;
      var date_value = ""; //selected date
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.user = JSON.parse(this.response);
        }
      };

      xhttp.open("GET", "/users/board?board_id=" + encodeURIComponent(board_id_value) + "&date=" + encodeURIComponent(date_value), true);
      xhttp.send();
    },

    save_profile: function() {
      var i_name ="";
      var i_email = "";
      var i_birthday = "";
      var i_phone = "";
      var i_background ="";

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.user.info = JSON.parse(this.response);
        }
      };

      xhttp.open("POST", "/users/save_profile", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "name": i_name,
        "email": i_email,
        "birthday": i_birthday,
        "phone": i_phone,
        "background": i_background,
      }));
    },

    //----------------------------manager ajax----------------------------
    add_task_type: function() {
      var task_type_value = document.getElementById("task-type-input").value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.task_types = JSON.parse(this.response);
        }
      };

      xhttp.open("POST", "/users/manager/add_task_type", true);
      xhttp.send(task_type_value);
    },

    add_member: function() {
      var member_email_value = document.getElementById("member-email-input").value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.members = JSON.parse(this.response);
        }
      };
      xhttp.open("POST", "/users/manager/add_member", true);
      xhttp.send(member_email_value);
    },

    add_task: function() {
      // var task_name_value = document.getElementById("member-email-input").value;
      // var task_tag_value= document.getElementById("member-email-input").value;
      // var task_start_time_value= document.getElementById("member-email-input").value;
      // var task_end_time_value= document.getElementById("member-email-input").value;
      // var task_persons=[];
      // var task_priority_value= document.getElementById("member-email-input").value;

      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.tasks = JSON.parse(this.response);
        }
      };

      xhttp.open("POST", "/users/manager/add_task", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "name": task_name_value,
        "tag": task_tag_value,
        "start_time": task_start_time_value,
        "end_time": task_end_time_value,
        "persons": task_persons,
        "priority": task_priority_value
      }));
    },

    finish_task: function(index) {
      var task_ticket_value = document.getElementById("task-ticket");

      alert(index);
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.tasks = JSON.parse(this.response);
        }
      };
      xhttp.open("POST", "/users/manager/finish_task", true);
      xhttp.send(ticket);
    },

    //----------------------------employee ajax----------------------------
    save_availability: function() {
      var sun_start_value = document.getElementById("sundayfro").value;
      var sun_end_value = document.getElementById("sundayto").value;
      var mon_start_value = document.getElementById("mondayfro").value;
      var mon_end_value = document.getElementById("mondayto").value;
      var tue_start_value = document.getElementById("tuesdayfro").value;
      var tue_end_value = document.getElementById("tuesdayto").value;
      var wed_start_value = document.getElementById("wednesdayfro").value;
      var wed_end_value = document.getElementById("wednesdayto").value;
      var thu_start_value = document.getElementById("thursdayfro").value;
      var thu_end_value = document.getElementById("thursdayto").value;
      var fri_start_value = document.getElementById("fridayfro").value;
      var fri_end_value = document.getElementById("fridayto").value;
      var sat_start_value = document.getElementById("saturdayfro").value;
      var sat_end_value = document.getElementById("saturdayto").value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.availability = JSON.parse(this.response);
        }
      };

      xhttp.open("POST", "/users/user/save_availability", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "sun_s": sun_start_value,
        "sun_e": sun_end_value,
        "mon_s": mon_start_value,
        "mon_e": mon_end_value,
        "tue_s": tue_start_value,
        "tue_e": tue_end_value,
        "wed_s": wed_start_value,
        "wed_e": wed_end_value,
        "thu_s": thu_start_value,
        "thu_e": thu_end_value,
        "fri_s": fri_start_value,
        "fri_e": fri_end_value,
        "sat_s": sat_start_value,
        "sat_e": sat_end_value,
      }));
    },

    set_performance: function() {
      var task_performance_value = "";
      var task_index = "";
      var task_name_value = "";

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.task_performance = this.response;
        }
      };
      xhttp.open("POST", "/users/user/set_performance", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "index": task_index,
        "name": name,
        "performance": performance,
      }));
    }
  },
})


//---------------------sidebar collapse---------------------
$(document).ready(function() {
  $('.sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
  });
});

//---------------------data table---------------------
$(document).ready(function() {
  var t = $('#example').DataTable();
});


//---------------------popover---------------------
$(function() {
  $('[data-toggle="popover"]').popover({
    trigger: 'focus'
  });
});
