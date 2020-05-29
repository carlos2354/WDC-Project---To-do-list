var vuemain = new Vue({
  el:'#main',
  data:{

  },
  methods:{

  }
})



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
