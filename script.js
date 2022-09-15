// All possible uppercase Letters in an array
var alphabetU = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// All possible lowercase Letters in an array
var alphabetL = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// All possible in an array
var number = ["1","2","3","4","5","6","7","8","9","0"];
// "All" possible symbols in an array
var symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'","<", ",", ">",".","?","/"];
// All the questions we will ask the user
var questions = ["How many digits?", "Do you want capital letters? (write true for yes or false", "Do you want numbers?", "Do you want numbers?"];
// Here's where we store all the user's answers
var answers = ["","","","",];
// connects the variable generate Btn to the spot on our HTML that we set the ID of generate (to a button) 
var generateBtn = document.getElementById('generate');
// looks for when the button's clicked and then executes the function write Password
generateBtn.addEventListener("click", writePassword);

// And here's that function
function writePassword(){
  answers[0] = prompt(questions[0]);
  if ((answers[0] > 8) && (answers[0] < 127)){
    for (var i = 1; i < 4; i++){
      answers[i] = prompt(questions[i] + " (write yes for yes or no for no)");}
  } else {
    alert("You picked an ivalid number please choose between 8 and 127 chars")
  }
  return(answers)
}
// This doesn't work BUGBUG
var possibleChar = (alphabetU)
if ((answers[2]) = ("yes")){possibleChar = possibleChar.concat(alphabetL);}
if ((answers[3]) = ("yes")){possibleChar = possibleChar.concat(number);}
if ((answers[4]) = ("yes")){possibleChar = possibleChar.concat(symbols);}
  console.log (possibleChar);
  
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }