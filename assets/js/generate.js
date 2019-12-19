// Get all of the element used with js for var
var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var num = "123456789";
var symbol = "!@#$%^&*()_:><?/";



var generate = document.getElementById("generate");
var numBox= document.getElementById("number");
var symbolBox = document.getElementById("symbol");
var yourPassword = document.getElementById("display");



generate.addEventListener("click", function(e){
   yourPassword.value = password(numBox.value, blank);
}
);

function password(length,characters){
   var pwd = "";

   for(i = 0; i < length; i ++){
      pwd += characters.charAt(Math.floor(Math.random() * characters.length));
   }

   return pwd;
}

function copyFunction() {
   /* Get the text field */
   var copyText = document.getElementById("display");
 
   /* Select the text field */
   copyText.select();
   copyText.setSelectionRange(0, 99999); /*For mobile devices*/
 
   /* Copy the text inside the text field */
   document.execCommand("copy");
 
   /* Alert the copied text */
   alert("Copied the text: " + copyText.value);
 }
 





















//  function generate(){
//  var length = document.getElementById("slider-length").value;
//  var values ="ABCDEFGHIGKLMNOPabcdefghigklmnop1234567890!@#$%^&*()";
//  var password="";

// //  Created loop to choose passwords characters
//  for (i = 0;i <= length; i++){
//      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
// }

// // add password to text-box
// document.getElementById("display").value = password;

// // add length div set value of 25
//  document.getElementById("length").innerHTML = function slider(){
//     //  var length = 
//  }

//  }

//  function copyText(){
     
//  }