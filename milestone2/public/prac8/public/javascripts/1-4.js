function makepost() {
	var xhttp = new XMLHttpRequest();

	var s_title= document.getElementById('title').value;
	var s_content= document.getElementById('content').value;

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200){
			var any;
		}
	};

	xhttp.open("POST","/users/addpost", true);
	xhttp.setRequestHeader("Content-type", "application/json");

	xhttp.send(JSON.stringify({ "title": s_title, "content": s_content }));
}

var vueinst = new Vue({
	el: '#main',
	data:{
		posts: [],
	},
	methods:{
		showpost: function()
		{
			var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    vueinst.posts = JSON.parse(this.response);
                }
            };
            xhttp.open("GET" , "/users/getposts?n=5", true);
            xhttp.send();
		}
	}
});
