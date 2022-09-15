var alphabetU = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphabetL = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'","<", ",", ">",".","?","/"];
var questions = ["How many digits?", "Do you want capital letters? (write true for yes or false", "Do you want numbers?", "Do you want numbers?"];
var answers = ["","","","",]
var generateBtn = document.getElementById('generate')
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  answers[0] = prompt(questions[0]);
  if ((answers[0] > 8) && (answers[0] < 127)){
    for (var i = 1; i < 3; i++){
      answers[i] = prompt(questions[i] + " (write y for yes or n for no)");
    return(answers)}
  } else {
    alert("You picked an ivalid number please choose between 8 and 127 chars")
  }
}

// function generatePassword(){

// }


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }