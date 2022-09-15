var alphabetU = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphabetL = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'","<", ",", ">",".","?","/"];
var questions = ["How many digits?", "Do you want capital letters? (write true for yes or false", "Do you want numbers?", "Do you want numbers?"];
var Answers = ["","","","",]
var generateBtn = document.getElementById('generate')
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  Answers[0] = prompt(questions[0]);
  console.log (Answers[0])
  if ((Answers[0] > 8) && (Answers[0] < 127)){
    console.log("you picked a valid number"); 
    for (var i = 1; i < 3; i++){
    Answers[i] = prompt(questions[i] + " (write true for yes or false for no)");
    console.log(Answers)
    return(Answers)}
  } else {
    alert("You picked an ivalid number please choose between 8 and 127 chars")
  }
}

function askQuestions() {
  console.log("yee")
  for (var i = 1; i < 3; i++){
    Answers[i] = prompt(questions[i] + " (write true for yes or false for no)");
    console.log(Answers)
    return[Answers]}
    
}