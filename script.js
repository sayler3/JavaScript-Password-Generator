// Assignment Code
var generateBtn = document.querySelector("#generate");
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sp = [ "~", "@", "!", "#", "$", "%", "^", "&", "*", "<", ">", "?", "_", "-"];
var chars = ["a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","q","w","e","r","t","y","u","i","o","p"];

var possibles = [];

var length = parseInt(prompt("How many characters would you like in your password?"));

if (length < 8 || length > 128 || isNaN(length)){
  alert("Please refresh and select a character count between 8 & 128.")
} else {

  numTrue = confirm("Would you like number?");
  spTrue = confirm("Would you like special charaters?");
  charsTrue = confirm("Would you like lowercase letters?");
  //chars.toUpperCaseTrue = confirm("Would you like uppercase letters?");

  if (numTrue) { possibles.push(num)}
  if (spTrue) { possibles.push(sp)}
  if (charsTrue) { possibles.push(chars)}
  //if (chars.toUpperCaseTrue) { possibles.push(chars.toUpperCase)}
}

// function random(possibles){
// let ran = Math.floor(Math.random() * possibles.length)
// let dom = possibles[ran]
// return dom;

// console.log(possibles)
// console.log(ran)

 for (let i = 0; i < possibles.length; i++) {
   let ran = Math.floor(Math.random() * possibles[i].length)

   if (length.length === )
   console.log(possibles[i][ran])
 }

//console.log(possibles);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
