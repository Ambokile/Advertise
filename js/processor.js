// JavaScript Document
	
 window.onload = function(){
	     function grap_info(){
   var str = 'A';
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
xmlhttp.open("GET","http://fishpond.site88.net/get_matangazo.php?str="+str,true);
xmlhttp.send();
   }
             setTimeout(grap_info,5);
	 
    function getUser(){
	    var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		
		 document.querySelector("#from").value = xmlhttp.responseText;
		 
		 }
                                        };
xmlhttp.open("GET","http://fishpond.site88.net/getUser.php",true);
xmlhttp.send();

	}
 }
		

