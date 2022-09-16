// All possible uppercase Letters in an array
var alphabetU = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// All possible lowercase Letters in an array
var alphabetL = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// All possible in an array
var number = ["1","2","3","4","5","6","7","8","9","0"];
// "All" possible symbols in an array
var symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'","<", ",", ">",".","?","/"];
// All the questions we will ask the user
var questions = ["How many digits?", "capital letters", "numbers", "symbols"];
// Here's where we store all the user's answers
var answers = ["","","","",];
// connects the variable generate Btn to the spot on our HTML that we set the ID of generate (to a button) 
var generateBtn = document.getElementById('generate');
var possibleChar
// looks for when the button's clicked and then executes the function to ask user for peramiters
generateBtn.addEventListener("click", askQuestions);
// And here's that function
function askQuestions(){
  answers[0] = prompt(questions[0]);
  if ((answers[0] >= 8) && (answers[0] <= 128)){
    for (var i = 1; i < 4; i++){
      answers[i] = confirm("Do you want " + (questions[i]) + "? (Click OK to confirm you would like " + (questions[i]) + " or click cancel if you'd like to continue without " + (questions[i]) + ".");}
  } else {
    alert("You picked an ivalid number please choose between 8 and 128 chars")
  }
  letterSoup(answers);
  answers = ["","","","",];
  return(answers);}
// this function creats a list of possible characters based on our criteria from the quest
function letterSoup(answers){possibleChar = (alphabetL);
if (answers[1]){possibleChar = possibleChar.concat(alphabetU);}
if (answers[2]){possibleChar = possibleChar.concat(number);}
if (answers[3]){possibleChar = possibleChar.concat(symbols);}
buildPassword(answers, possibleChar);}
// this function takes all our building blocks from the previous steps and builds a random password based on our parameters from the first function
function buildPassword(answers, possibleChar){
  var passwordBlocks = [""];
  for (var i = answers[0]; i > 0; i--){
    var rand = possibleChar[Math.floor(Math.random() * possibleChar.length)];
    passwordBlocks.push(rand)
  }
  passwordBlocks.shift();
  password = passwordBlocks.join("")
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  generateBtn.setAttribute("style", "background-color: rgb(92, 212, 76);");
}