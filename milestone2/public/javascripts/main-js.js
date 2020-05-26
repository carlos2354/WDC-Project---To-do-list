$(document).ready(function() {
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
  });
});


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
