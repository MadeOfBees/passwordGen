// Assignment Code
// var generateBtn = document.querySelector("#generate");
var first

// Not really doing what I was hoping for....
function generate() {
  first = prompt("How many digits?", "Number here");
  return [first];
}
if ((first > 8) || (first < 127) && (typeof first !== 'number' )){
  console.log = "you picked a valid number";
} else {
  console.log = "not a valid number, please choose between 8 and 127 chars";
}



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
