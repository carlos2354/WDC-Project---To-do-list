var vuemain = new Vue({
  el: '#main',
  data: {
    user: {
      id: 000001,
      name: "Carlos Atis",
      email: "carlos.atis154@gmail.com",
      profilePicture: "images/pngfuel.com.png",
      birthday: "Oct 1, 1998",
      phone: 0469863752,
      background: "student",
      isManager: false,
      boards: [{
        name: "Web Database",
        id: 0000001,
        active: true
      }, {
        name: "Algorithm Design and Structure Analysis",
        id: 0000002,
        active: false
      }, {
        name: "Algorithm Design and Data Structures",
        id: 0000003,
        active: false
      }, {
        name: "Professional Practice",
        id: 0000004,
        active: false
      }, {
        name: "Foundations of Human Neuroanatomy",
        id: 0000005,
        active: false
      }],

    },

    board: {
      id: 00000001,
      name: "Web and Database Computing",
      manager_id: 000001,
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
      task_name: "Research",
      task_type: "Study",
      start_time: "08:00",
      end_time: "10:00",
      status: "Complete",
      person: ["Carlos", "Hunter"],
      priority: "high"
    }, {
      ticket: 2,
      task_name: "Watering plants",
      task_type: "Gardening",
      start_time: "19:00",
      end_time: "20:00",
      status: "Complete",
      person: ["Ofel"],
      priority: "medium"
    }]

  },
  methods: {
    add_task_type: function() {
      var task_type_value = document.getElementById("task_type_input").value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
      };

      xhttp.open("POST", "/manager/add_task_type", true);
      xhttp.send(task_type_value);
    },

    add_member: function() {
      var member_email_value = document.getElementById("member-email-input").value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
      };
      xhttp.open("POST", "/manager/add_member", true);
      xhttp.setRequestHeader("Content-type", "application/json");
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

        }
      };

      xhttp.open("POST", "/manager/add_task", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "task_name": task_name_value,
        "task_tag": task_tag_value,
        "task_start_time": task_start_time_value,
        "task_end_time": task_end_time_value,
        "task_persons": task_persons,
        "task_priority": task_priority_value
      }));
    },

    edit_task: function() {
      // var task_name_value = document.getElementById("member-email-input").value;
      // var task_tag_value= document.getElementById("member-email-input").value;
      // var task_start_time_value= document.getElementById("member-email-input").value;
      // var task_end_time_value= document.getElementById("member-email-input").value;
      //  var task_status= document.getElementById("member-email-input").value;
      // var task_persons=[];
      // var task_priority_value= document.getElementById("member-email-input").value;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
      };
      xhttp.open("POST", "/manager/edit_task", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "task_name": task_name_value,
        "task_tag": task_tag_value,
        "task_start_time": task_start_time_value,
        "task_end_time": task_end_time_value,
        "task_status": task_status_value,
        "task_persons": task_persons,
        "task_priority": task_priority_value
      }));
    },

    finish_task: function() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
      };
      xhttp.open("POST", "/manager/finish_task", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        lines: lines,
        suffix: suffix
      }));
    },

    save_availability: function() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
      };
      xhttp.open("POST", "/user/save_availability", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        lines: lines,
        suffix: suffix
      }));
    },

    set_performance: function() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
      };
      xhttp.open("POST", "/user/set_performance", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        lines: lines,
        suffix: suffix
      }));
    }
  },

  computed: {
    availability_string: function() {
      var count = 0;
      return this.members[count].availability.mon_s;
      count++;
    }
  }
})

//---------------------default values for availability sliders in  'My availability modal'---------------------
var my_availability = {
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
}



//---------------------sidebar collapse---------------------
$(document).ready(function() {
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
  });
});



//---------------------data table---------------------
$(document).ready(function() {
  var t = $('#example').DataTable();
  var counter = 1;

  $("#addTask").before(".dataTables_info");

  $('#addRow').on('click', function() {
    t.row.add([
      counter + '.1',
      counter + '.2',
      counter + '.3',
      counter + '.4',
      counter + '.5'
    ]).draw(false);

    counter++;
  });

  // Automatically add a first row of data
  $('#addRow').click();
});


//---------------------popover---------------------
$(function() {
  $('[data-toggle="popover"]').popover({
    trigger: 'focus'
  });

});
