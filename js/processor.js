// JavaScript Document
	
 window.onload = function(){
	  alert();
	     function grap_info(){
			
	 var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		document.querySelector("#info").innerHTML = xmlhttp.responseText;
	 } 
			 
			                       };
xmlhttp.open("GET","http://fishpond.site88.net/get_matangazo.php",true);
xmlhttp.send();
   }
             setInterval(grap_info,5);
 }
      
 
		

