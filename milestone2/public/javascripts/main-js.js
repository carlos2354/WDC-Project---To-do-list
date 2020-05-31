var vuemain = new Vue({
  el: '#main',
  data: {
    user: {
      id: 000001,
      name: "Carlos Atis",
      email: "carlos.atis154@gmail.com",
      birthday: "Oct 1, 1998",
      phone: 0469863752,
      background: "student",
      isManager: false,
      boards: [{
        name: "Web Database",
        id: 0000001,
        active:true
      }, {
        name: "Algorithm Design and Structure Analysis",
        id: 0000002,
        active:false
      }, {
        name: "Algorithm Design and Data Structures",
        id: 0000003,
        active:false
      }, {
        name: "Professional Practice",
        id: 0000004,
        active:false
      }, {
        name: "Foundations of Human Neuroanatomy",
        id: 0000005,
        active:false
      }],

      task_performance: [{
        task1: "Good",
        task2: "Great",
        task3: "Needs improvement",
        task4: "Not Set",
        task5: "Not Set",
        task6: "Not Set",
        task7: "Not Set",
        task8: "Not Set",
        task9: "Not Set",
        task10: "Not Set",
        task11: "Not Set",
        task12: "Not Set",
        task13: "Not Set",
        task14: "Not Set",
        task15: "Not Set",
        task16: "Not Set",
        task17: "Not Set",
        task18: "Not Set",
        task19: "Not Set",
        task20: "Not Set",
      }],

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
      }
    }
  },
  methods: {
    add_task_tag: function() {},
    add_member: function() {},
    submit_availability: function() {},
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
  })
});
