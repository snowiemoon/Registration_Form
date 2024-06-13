var nameError = document.getElementById("error1");
var phoneError = document.getElementById("error2");
var emailError = document.getElementById("error3");
var messageError = document.getElementById("error4");
var submitError = document.getElementById("error5");

function validateName(){
 var name = document.getElementById("fName").value;
 if(name.length == " "){
    nameError.innerHTML = "Name is required";
    return false;
 }
 if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
   nameError.innerHTML = "It must be full name";
   return false;
 }
 nameError.innerHTML = '<i class="fa fa-check-square"></i>';
 return true;
}

function validatePhone(){
  var phone = document.getElementById("phNo").value;
  if(phone.length == 0){
    phoneError.innerHTML = "Phone no is required";
    return false;
  }
  if(phone.length != 11){
    phoneError.innerHTML = "Phone no should be 11 Digits";
    return false;
  }
  if(!phone.match(/^[0-9]{11}$/)){
    phoneError.innerHTML = "Only digit please";
    return false;
  }
  phoneError.innerHTML = '<i class="fa fa-check-square"></i>';
  return true;
}

function validateEmail(){
  var email = document.getElementById("email").value;
  if(email.length == 0){
    emailError.innerHTML = "Email is required";
    return false;
  }
  if(!email.match(/^[A-Za-z\._0-9]*[@][a-z]{5}[\.][a-z]{3}$/)){
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML = '<i class="fa fa-check-square"></i>';
  return true;
}

function validateMessage(){
  var message = document.getElementById("msg").value;
  var required = 30;
  var left = required - message.length;
  if(left>0){
    messageError.innerHTML = left + "30 Characters required"
    return false;
  }
  messageError.innerHTML = '<i class="fa fa-check-square"></i>';
  return true;
}

function validateSubmit(){
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function(){submitError.style.display = 'block';}, 3000);
    return false;
  }
}