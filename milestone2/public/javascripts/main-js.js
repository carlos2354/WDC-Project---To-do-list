var vuemain = new Vue({
  el: '#main',
  data: {
    user: {
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
    ]

  },
  methods: {
    goto_profile: function() {
      vuemain.user.table_display = true;
      vuemain.user.profile_display = false;
    },

    //----------------------------general ajax----------------------------
    populate_today: function(id) {
      vuemain.user.table_display = false;
      vuemain.user.profile_display = true;

      var board_id_value = id;
      var today = new Date;
      var year = today.getFullYear();
      var month = today.getMonth();
      var day = today.getDate();

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var server_response = JSON.parse(this.response);
          vuemain.user = server_response.user;
          vuemain.board = server_response.board;
          vuemain.task_types= server_response.task_types;
          vuemain.task_performance = server_response.task_performance;
          vuemain.availability = server_response.availability;
          vuemain.members = server_response.members;
          vuemain.tasks = server_response.tasks;
        }
      };

      xhttp.open("POST", "/users/board/populate", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "day": day,
        "month": month,
        "year": year,
      }));
    },

    populate_on_date: function() {
      var board_id_value = vuemain.board.id;

      var year = "";
      var month = "";
      var day = "";

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var server_response = JSON.parse(this.response);
          vuemain.user = server_response.user;
          vuemain.board = server_response.board;
          vuemain.task_types= server_response.task_types;
          vuemain.task_performance = server_response.task_performance;
          vuemain.availability = server_response.availability;
          vuemain.members = server_response.members;
          vuemain.tasks = server_response.tasks;
        }
      };

      xhttp.open("POST", "/users/board/populate", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "day": day,
        "month": month,
        "year": year,
      }));
    },

    save_profile: function() {

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.user.info = JSON.parse(this.response);
        }
      };

      xhttp.open("POST", "/users/save_profile", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "first_name": vuemain.user.info.first_name,
        "last_name":vuemain.user.info.last_name,
        "email":vuemain.user.info.email,
        "birthday": vuemain.user.info.birthday,
        "phone": vuemain.user.info.phone,
        "background":  vuemain.user.info.background,
      }));
    },

    //----------------------------manager ajax----------------------------
    add_task_type: function() {
      var task_type_value = document.getElementById("task-type-create").value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.task_types = JSON.parse(this.response);
        }
      };

      xhttp.open("POST", "/users/manager/add_task_type", true);
      xhttp.send(task_type_value);

      document.getElementById("task-type-create").value = "";
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

      document.getElementById("member-email-input").value = "";
    },

    add_task: function() {
      var task_name_value = document.getElementById("task-type-input").value;
      var task_type_select = document.getElementById("task_type_select");
      var task_type_selected = task_type_select.options[task_type_select.selectedIndex].text;
      var task_start_time_value= parseInt(document.getElementById("task_start").innerHTML);
      var task_end_time_value= parseInt(document.getElementById("task_end").innerHTML);
      var task_persons=$(".member-list-checkbox:checked");
      var task_persons_value=[];
      var task_priority_value= $(".priority-radio:checked").val();

      for(var i = 0; i <task_persons.length; i++)
      {
        task_persons_value.push(task_persons[i].value);
        // console.log(task_persons_value[0]);
      }
      console.log(task_persons.length);

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.tasks = JSON.parse(this.response);
          $( "#slidertask" ).slider( "values", [0,24] );
          $("#task_start").text(0);
          $("#task_end").text(24);
          document.getElementById("task-type-input").value = "";
          for(var j = 0; j < task_persons.length; j++)
          {
            $(".member-list-checkbox:checked")[1].checked = false;
          }
        }
      };

      xhttp.open("POST", "/users/manager/add_task", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "name": task_name_value,
        "tag": task_type_selected,
        "start_time": task_start_time_value,
        "end_time": task_end_time_value,
        "persons": task_persons_value,  //sends full name instead of first and last
        "priority": task_priority_value
      }));
    },

    finish_task: function(id) {

      console.log(id);

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.tasks = JSON.parse(this.response);
        }
      };

      xhttp.open("POST", "/users/manager/finish_task", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "task_id": id,
        "board_id": vuemain.board.id,
      }));
    },

    //----------------------------employee ajax----------------------------
    save_availability: function() {
      console.log(vuemain.availability.sun_s);
      console.log(vuemain.availability.sun_e);
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.availability = JSON.parse(this.response);
          $( "#slidersun" ).slider( "values", [ vuemain.availability.sun_s, vuemain.availability.sun_e ] );
          $( "#slidermon" ).slider( "values", [ vuemain.availability.mon_s, vuemain.availability.mon_e ] );
          $( "#slidertue" ).slider( "values", [ vuemain.availability.tue_s, vuemain.availability.tue_e ] );
          $( "#sliderwed" ).slider( "values", [ vuemain.availability.wed_s, vuemain.availability.wed_e ] );
          $( "#sliderthu" ).slider( "values", [ vuemain.availability.thu_s, vuemain.availability.thu_e ] );
          $( "#sliderfri" ).slider( "values", [ vuemain.availability.fri_s, vuemain.availability.fri_e ] );
          $( "#slidersat" ).slider( "values", [ vuemain.availability.sat_s, vuemain.availability.sat_e ] );
          $("#sundayfro").text(vuemain.availability.sun_s + ":00");
          $("#sundayto").text("- " + vuemain.availability.sun_e + ":00");
          $("#mondayfro").text(vuemain.availability.mon_s + ":00");
          $("#mondayto").text("- " + vuemain.availability.mon_e + ":00");
          $("#tuesdayfro").text(vuemain.availability.tue_s + ":00");
          $("#tuesdayto").text("- " + vuemain.availability.tue_e + ":00");
          $("#wednesdayfro").text(vuemain.availability.wed_s + ":00");
          $("#wednesdayto").text("- " + vuemain.availability.wed_e + ":00");
          $("#thursdayfro").text(vuemain.availability.thu_s + ":00");
          $("#thursdayto").text("- " + vuemain.availability.thu_e + ":00");
          $("#fridayfro").text(vuemain.availability.fri_s + ":00");
          $("#fridayto").text("- " + vuemain.availability.fri_e + ":00");
          $("#saturdayfro").text(vuemain.availability.sat_s + ":00");
          $("#saturdayto").text("- " + vuemain.availability.sat_e + ":00");
        }
      };

      xhttp.open("POST", "/users/user/save_availability", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "sun_s": vuemain.availability.sun_s,
        "sun_e": vuemain.availability.sun_e,
        "mon_s": vuemain.availability.mon_s,
        "mon_e": vuemain.availability.mon_e,
        "tue_s": vuemain.availability.tue_s,
        "tue_e": vuemain.availability.tue_e,
        "wed_s": vuemain.availability.wed_s,
        "wed_e": vuemain.availability.wed_e,
        "thu_s": vuemain.availability.thu_s,
        "thu_e": vuemain.availability.thu_e,
        "fri_s": vuemain.availability.fri_s,
        "fri_e": vuemain.availability.fri_e,
        "sat_s": vuemain.availability.sat_s,
        "sat_e": vuemain.availability.sat_e,
      }));
    },

    set_performance: function(performance, index) {
      var performance_value = performance;
      var index_value = index;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.task_performance = JSON.parse(this.response);
        }
      };

      xhttp.open("POST", "/users/user/set_performance", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "performance": performance_value,
        "index": index_value,
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
