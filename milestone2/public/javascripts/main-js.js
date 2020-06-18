var vuemain = new Vue({
  el: '#main',
  data: {
    user: {
      info: {
        id: "000001",
        name: "Carlos Atis",
        first_name:"Hunter",
        last_name:"Dong",
        email: "hunter@gmail.com",
        profilePicture: "images/pngfuel.com.png",
        birthday: "12/03/1994",
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
      }],
      profile_display: true,
      table_display: false,
      empty_display:true,

    },

    board: {
      id: "00000001",
      name: "Web and Database Computing",
      day: 1,
      month: 12,
      year: 2020,
      date: new Date,
      date_word:"",
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
    ],

    availability: {
      mon_s: 0,
      mon_e: 15,
      tue_s: 0,
      tue_e: 16,
      wed_s: 0,
      wed_e: 17,
      thu_s: 0,
      thu_e: 18,
      fri_s: 0,
      fri_e: 19,
      sat_s: 0,
      sat_e: 20,
      sun_s: 0,
      sun_e: 21,
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
      }
    ],
    tasks: [{
    id: 1,
    name: "Server response",
    type: "Finished a task",
    start_time: "08:00",
    end_time: "10:00",
    status: "Complete",
    person: ["Carlos", "Hunter"],
    priority: "high"
  },
    ]

  },
  methods: {
    goto_profile: function() {
      vuemain.user.table_display = true;
      vuemain.user.empty_display = true;
      vuemain.user.profile_display = false;
    },

    //################################### General Ajax ###################################
    load: function(id) {
      vuemain.user.table_display = true;
      vuemain.user.profile_display = true;
      vuemain.user.empty_display = false;

      console.log("called");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var server_response = JSON.parse(this.response);
          vuemain.user = server_response.user;
          }
      };

      xhttp.open("GET", "/users/board/load", true);
      xhttp.send();
    },

    //################################### Populate today ###################################
    populate_today: function(id) {
      vuemain.user.table_display = false;
      vuemain.user.empty_display = true;
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
          vuemain.board.day = day;
          vuemain.board.month = month;
          vuemain.board.year = year;
          vuemain.board.date = today;
          vuemain.board.date_word = vuemain.board.day + " " + today.toLocaleString('default', { month: 'long' }) + " " + vuemain.board.year;
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


          if (vuemain.board.email == vuemain.user.info.email)
          {
            vuemain.user.managerTrue = true;
            vuemain.user.managerFalse = false;
          }
          else
          {
            vuemain.user.managerFalse = true;
            vuemain.user.managerTrue = false;
          }
          console.log("mt " + vuemain.user.managerTrue + "mf " + vuemain.user.managerFalse);


        }
      };

      xhttp.open("POST", "/users/board/populate", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "id": id,
        "day": day,
        "month": month,
        "year": year,
        "date":today
      }));
    },

    //################################### Populate on date ###################################
    populate_on_date: function(when) {
      var board_id_value = vuemain.board.id;

      var today = vuemain.board.date;
      if(when==="next")
      {
        today.setDate(today.getDate()+1);
      }
      else if(when==="prev")
      {
        today.setDate(today.getDate()-1);
      }
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
          vuemain.board.day = day;
          vuemain.board.month = month;
          vuemain.board.year = year;
          vuemain.board.date = today;
          vuemain.board.date_word = vuemain.board.day + " " + today.toLocaleString('default', { month: 'long' }) + " " + vuemain.board.year;
        }
      };

      xhttp.open("POST", "/users/board/populate", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "day": day,
        "month": month,
        "year": year,
        "date":today
      }));
    },

    //################################### Save profile ###################################
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

    //################################### Manager Ajax ###################################
    //################################### Add board ###################################
    add_board: function(){
      var board_name = $("#add-board").val();

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.user.boards = JSON.parse(this.response);
        }
      };
      console.log(board_name + " " + vuemain.user.first_main + " " + vuemain.user.last_name + " " + vuemain.user.email);
      xhttp.open("POST", "/users/manager/add_board", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "board_name": board_name,
        "first_name":vuemain.user.first_name,
        "last_name":vuemain.user.last_name
      }));

      $("#add-board").val("");
    },

    add_task_type: function() {
      var task_type_value = document.getElementById("task-type-create").value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.task_types = JSON.parse(this.response);
        }
      };

      xhttp.open("POST", "/users/manager/add_task_type", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({"task_type":task_type_value}));

      document.getElementById("task-type-create").value = "";
    },

    //################################### Finish task ###################################
    add_member: function() {
      var member_email_value = document.getElementById("member-email-input").value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.members = JSON.parse(this.response);
        }
      };
      xhttp.open("POST", "/users/manager/add_member", true);
        xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({"member_email":member_email_value}));

      document.getElementById("member-email-input").value = "";
    },

    //################################### Add task ###################################
    add_task: function() {
      var task_name_value = document.getElementById("task-type-input").value;
      var task_type_select = document.getElementById("task_type_select");
      var task_type_selected = task_type_select.options[task_type_select.selectedIndex].value;
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
          $("#slidertask").slider( "values", [0,24] );
          $("#task_start").text(0);
          $("#task_end").text(24);
          $("#task-type-input").val("");
          $(".member-list-checkbox:checked").each(function( index ) {
            $( this ).prop("checked", false) ;
          });
        }
      };

      xhttp.open("POST", "/users/manager/add_task", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "name": task_name_value,
        "tag": task_type_selected,
        "start_time": task_start_time_value,
        "end_time": task_end_time_value,
        "persons": task_persons_value,  //sends id
        "priority": task_priority_value
      }));
    },

    //################################### Finish task ###################################
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

    //################################### employee ajax ###################################
    //################################### Save availability ###################################
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
        "board_id":vuemain.board.id
      }));
    },

    //################################### Set performance ###################################
    set_performance: function(performance, id) {
      var performance_value = performance;
      var type_id = id;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          vuemain.task_performance = JSON.parse(this.response);
        }
      };

      console.log(performance_value + " " + type_id);
      xhttp.open("POST", "/users/user/set_performance", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "performance": performance_value,
        "type_id":type_id
      }));
    },
    pop:function()
    {
      $(function() {
      $('[data-toggle="popover"]').popover({
        trigger: 'focus'
      });
    });

    }
  },
});

//---------------------populate the board as soon as page loads -------------------------
//vuemain.populate_today(vuemain.board.id);
vuemain.load();

//---------------------sidebar collapse---------------------
$(document).ready(function() {
  $('.sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
  });
});

          //---------------------data table---------------------
// $(document).ready(function() {
//   var t = $('#example').DataTable();
// });




//---------------------popover---------------------

// jQuery(document).ready(function($){
//     $('[data-toggle="popover"]').popover();
// });