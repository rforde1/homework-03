// Get all of the element used with js for var
var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var num = "123456789";
var symbol = "!@#$%^&*()_:><?/";



var generate = document.getElementById("generate");
var passwordLength = document.getElementById('password-length')
var yourPassword = document.getElementById("display");



generate.addEventListener("click", function(e){
   var numBox= document.getElementById("number").checked;
   var symbolBox = document.getElementById("symbol").checked;
   var blank = '';
   if (numBox === true && symbolBox === true){
      blank = char + num + symbol;

   }
   else if (numBox === true && symbolBox === false){
      blank = char + num;
   }
   else if (symbolBox === true && numBox === false){
      blank = char + symbol;
   }
   else{
      blank = char;
   }
   console.log(blank)


   yourPassword.value = password(passwordLength.value, blank);
   // 
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