$(document).ready(function(){
	/* form validations */

	var	name=document.getElementById('name');
	var	email=document.getElementById('email');
	var	number=document.getElementById('number');
	var	pwd=document.getElementById('pwd');
	var	cnfrm_pwd=document.getElementById('cnfrm_pwd');
	var	message=document.getElementById('message');

	var submit=document.getElementById('submit');
			
	submit.addEventListener('click',validations);
	
	var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
	
	var valid=true;
	var RE =  /^\d{10}$/;
	var name_regEx=/^[A-Za-z]+$/;
    
	function validations(){
		removeMessage();
		if(name.value==""){
			name.nextElementSibling.innerHTML="name error";
			name.classList.add("wrong-input");
			valid=false;
		}	
		else if(!name.value.match(name_regEx)) {
			name.nextElementSibling.innerHTML="enter charchters";
			name.classList.add('wrong-input');
			console.log("char");
			//return false;
			valid=false;
		}
 		if(email.value == '' || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
			email.nextElementSibling.innerHTML="please enter correct email format";
			email.classList.add("wrong-input");
			valid=false;
		}
		if(isNaN(number.value)){
			number.nextElementSibling.innerHTML="enter numbers only";
			number.classList.add("wrong-input");			
			valid=false;
		}
		else if(!RE.test(number.value)) {
	        number.nextElementSibling.innerHTML="enter valid number only";
			number.classList.add("wrong-input");
			console.log(number.value);			
    	    //return false;
    	    valid=false;
    	}
		if(message.value==""){
			message.nextElementSibling.innerHTML="message can't be empty";
			message.classList.add("wrong-input");
			valid=false;
		}else if(message.value.length >=250){
			message.nextElementSibling.innerHTML="less than 250 chars";
			message.classList.add("wrong-input");
			valid=false;
		}
		if(pwd.value==""){
			pwd.nextElementSibling.innerHTML="password error";
			pwd.classList.add("wrong-input");
			//valid=false;
			return false;	
		}		
		else if(pwd.value.length<6){
			pwd.nextElementSibling.innerHTML="password must be more than 6 digits";
			pwd.classList.add("wrong-input");
			valid=false;
		} 
		else if(pwd.value.search(/[0-9]/)== -1){
			pwd.nextElementSibling.innerHTML="password must contain a number";
			pwd.classList.add("wrong-input");
			valid=false;	
		}
		else if(pwd.value.search(/[a-z]/)== -1){
			pwd.nextElementSibling.innerHTML="password must contain a charchter";
			pwd.classList.add("wrong-input");
			valid=false;	
		}
		else if(pwd.value.search(/[A-Z]/)== -1){
			pwd.nextElementSibling.innerHTML="password must contain a caps";
			pwd.classList.add("wrong-input");
			valid=false;	
		}
		if(cnfrm_pwd.value != pwd.value){
			cnfrm_pwd.nextElementSibling.innerHTML="password doesn't match";
			cnfrm_pwd.classList.add("wrong-input");
			valid=false;
		}
		return valid;
	}					
	function removeMessage(){
		var errorinput=document.querySelectorAll(".wrong-input");
		[].forEach.call(errorinput,function(el){
			el.classList.remove(".wrong-input");
		})
		var errorpara=document.querySelectorAll(".error");
		[].forEach.call(errorpara,function(el){
			el.innerHTML="";
		});				
	}	
	var clear1 = document.getElementById('clear');
	clear1.addEventListener('click',function(){
	 
	document.getElementById("form").reset();			
	
	var errorpara=document.querySelectorAll(".error");
		[].forEach.call(errorpara,function(el){
			el.innerHTML="";
		});
	})
})			