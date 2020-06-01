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
    task_tags: ["Cleaning", "Studying", "Research", "Documenting"],

    task_performance: ["Good", //15 length as long as task tags
      "Great",
      "Unsatisfactory",
      "Not Set",
    ],

    availability: {
      mon_s: "0800",
      mon_e: "2000",
      tue_s: "0800",
      tue_e: "2000",
      wed_s: "0800",
      wed_e: "2000",
      thu_s: "0800",
      thu_e: "2000",
      fri_s: "0800",
      fri_e: "2000",
      sat_s: "0000",
      sat_e: "2000",
      sun_s: "0000",
      sun_e: "2000"
    },

    members: [{
        name: "Carlos Atis",
        image: "somesource",
        availability: {
          mon_s: "0600",
          mon_e: "2000",
          tue_s: "0800",
          tue_e: "2000",
          wed_s: "0800",
          wed_e: "2000",
          thu_s: "0800",
          thu_e: "2000",
          fri_s: "0800",
          fri_e: "2000",
          sat_s: "0000",
          sat_e: "2000",
          sun_s: "0000",
          sun_e: "2000"
        },
          task_performance: ["Good",
          "Great",
          "Unsatisfactory",
          "Not Set",
        ] //15 length as long as task tags
      },

      {
        name: "Huatao Dong",
        image: "images/yellow-flower.jpg",
        availability: {
          mon_s: "0800",
          mon_e: "2000",
          tue_s: "0800",
          tue_e: "2000",
          wed_s: "0800",
          wed_e: "2000",
          thu_s: "0800",
          thu_e: "2000",
          fri_s: "0800",
          fri_e: "2000",
          sat_s: "0000",
          sat_e: "2000",
          sun_s: "0000",
          sun_e: "2000"
        },
        task_performance: ["Good",
          "Great",
          "Unsatisfactory",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set",
          "Not Set", //15 length
        ],
      }
    ],
    tasks: [{
      ticket: 1,
      task_name: "Research",
      task_tag: "Study",
      start_time: "08:00",
      end_time: "10:00",
      status: "Complete",
      person: ["Carlos", "Hunter"],
      priority: "high"
    }, {
      ticket: 2,
      task_name: "Watering plants",
      task_tag: "Gardening",
      start_time: "19:00",
      end_time: "20:00",
      status: "Complete",
      person: ["Ofel"],
      priority: "medium"
    }]

  },
  methods: {
    add_task_tag: function() {},
    add_member: function() {},
    submit_availability: function() {},
  },

  computed:{
    availability_string:function(){
      var count = 0;
      return this.members[count].availability.mon_s;
      count++;
    }
  }
})

//highligh active board



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



//---------------------data picker---------------------
$(document).ready(function() {
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  date_input.datepicker({
    format: 'mm/dd/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
  })
});

//---------------------popover---------------------
$(function() {
  $('[data-toggle="popover"]').popover({
    trigger: 'focus'
  });

});
