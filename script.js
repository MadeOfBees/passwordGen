// Assignment Code
// var generateBtn = document.querySelector("#generate");
var alphabetU = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphabetL = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'","<", ",", ">",".","?","/"];
var questions = ["Do you want capital letters?", "Do you want numbers?", "Do you want numbers?"];
var first
var generateBtn = document.getElementById(generateBtn)

function writePassword() {
  first = prompt("How many digits?", "Number here");
}
generateBtn.addEventListener("click", writePassword);


if ((first > 8) || (first < 127) && (typeof first !== 'number' )){
  alert = "you picked a valid number";
} else {
  alert = "not a valid number, please choose between 8 and 127 chars";
}



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
