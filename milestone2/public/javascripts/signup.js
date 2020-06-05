var vuemain = new Vue({
  el: '#main',
  data:{

  },
  methods:{
    sign_up : function()
    {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          Window.location.href = "/main.html";
        }
        if (this.readyState == 4 && this.status == 400) {
          Window.location.href = "/signup.html";
        }
      };

      xhttp.open("POST", "/login", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "first_name": $("#first-name").val(),
        "last_name":$("#last-name").val(),
        "email":$("#email").val(),
        "password":$("#password").val(),
      }));
    }
  }
})
