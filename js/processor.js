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
        function upload(){
		
	       var  element_1 = document.querySelector("#input_file");
		   var element_2 = document.createElement("input"); 
		   element_2.type = "file";
		   element_2.id = "upload";
		   element_2.style.visibility = "hidden";
		 // element_2.multiple = "multiple";
		   document.body.appendChild(element_2);
		   document.querySelector("#upload").click();
		   document.querySelector("#upload").onchange = img;
		   return false; 
	 }
function img(){
	      
			var files = this.files;
			
       var reader = new FileReader();
       var name = this.value;
       reader.onload = function (e) {
		    var element = document.createElement("img"); 
		   element.src = e.target.result;
		   element.id = "ava_img";
		    element.style.width = 200 + "px";
			element.style.height = 200 + "px";
		var x = document.querySelector("#ava_img");
         document.querySelector("#input_file").replaceChild(element,x);
       };
       reader.readAsDataURL(files[0]);
		 
	}	
    
 
		

