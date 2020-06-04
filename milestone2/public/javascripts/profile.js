var vuemain = new Vue({
  el: '#main',
  data: {
    user: {
      id: "000001",
      name: "Carlos Atis",
      email: "carlos.atis154@gmail.com",
      profilePicture: "images/pngfuel.com.png",
      birthday: "Oct 1, 1998",
      phone: 0469863752,
      background: "student",
      isManager: false,
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
    }]

  },
})


//---------------------sidebar collapse---------------------
$(document).ready(function() {
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
  });
});
