// JavaScript Document
function log_in(){
	alert();
	 var user_name = document.getElementById("username_2").value;
	  var password = document.getElementById("password_2").value;
	  
	   if(user_name == "" || user_name == null){
	     alert("user name field is empty");
		 return false;
		 
	  }
      if(password == "" || password == null){
	       alert("password field is empty");
		   return false;
	  }
	  
	  
	   var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
		}

	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		 var id = xmlhttp.responseText.search("pass_in");
		   if(id != -1){
			       user_name = ""; password = "";
			       window.location = "publish.html";
			   }
		   else
		        alert("failed to log in");
                                        };
xmlhttp.open("GET","log_in.php?user="+user_name+"&pass="+password,true);
xmlhttp.send();


		return false;	
	}
	
