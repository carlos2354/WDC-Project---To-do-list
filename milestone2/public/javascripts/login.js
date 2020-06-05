var vuemain = new Vue({
  el: '#main',
  data:{

  },
  methods:{
    login : function()
    {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          Window.location.href = "/main.html";
        }
        if (this.readyState == 4 && this.status == 400) {
          Window.location.href = "/login.html";
        }
      };

      xhttp.open("POST", "/login", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify({
        "email": $("#email-address").val(),
        "password":$("#password").val(),
      }));
    }
  }
})
