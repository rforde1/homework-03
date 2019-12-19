// // Alert prompt to allow user choose which type of password they would like 
// var specChar = prompt("Would you like to have special characters in your password? Select 'y' for yes and 'n' for no.");
// var upCase = prompt("Would you like to have Uppercase characters in your password? Select 'y' for yes and 'n' for no.");
// var lowCase = prompt("Would you like to have Lowercase characters in your password? Select 'y' for yes and 'n' for no.");
// // Give values to each character based on user prompt
// var specValues = "1234567890!@#$%^&*()";
// var upperValues = "ABCDEFGHIGKLMNOP";
// var lowerValues = "abcdefghigklmnop";

// Assign value to user prompt based on true/fa

 // Password length/complexity
 function generate(){
 var length = document.getElementById("slider-length").value;
 var values ="ABCDEFGHIGKLMNOPabcdefghigklmnop1234567890!@#$%^&*()";
 var password="";

//  Created loop to choose passwords characters
 for (i = 0;i <= length; i++){
     password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

// add password to text-box
document.getElementById("display").value = password;

// add length div set value of 25
 document.getElementById("length").innerHTML = function slider(){
    //  var length = 
 }

 }

 function copyText(){
     
 }