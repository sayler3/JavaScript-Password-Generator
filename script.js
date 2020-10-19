// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password from the function 
function generatePassword() {

  var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var sp = [ "~", "@", "!", "#", "$", "%", "^", "&", "*", "<", ">", "?", "_", "-"];
  var chars = ["a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","q","w","e","r","t","y","u","i","o","p"];
  var charUp = ["A", "S", "D","F","G","H","J","K","L","Z","X","C","V","B","N","M","Q","W","E","R","T","Y","U","I","O","P"];
 
  var possibles = [];

  var length = parseInt(prompt("How many characters would you like in your password?"));

  if (length < 8 || length > 128 || isNaN(length)) {

    alert("Please refresh and select a character count between 8 & 128.")

  } else {

    numTrue = confirm("Would you like number?");
    spTrue = confirm("Would you like special charaters?");
    charsTrue = confirm("Would you like lowercase letters?");
    charUpTrue = confirm("Would you like uppercase letters?");
    
    if (numTrue) { possibles.push(num)}
    if (spTrue) { possibles.push(sp)}
    if (charsTrue) { possibles.push(chars)}
    if (charUpTrue) { possibles.push(charUp)}

  }
  
  for (let i = 0; i < possibles.length; i++) {
    let ran = Math.floor(Math.random() * possibles[i].length)
    password += possibles[i][ran];

  }
  console.log(password);
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = toString(password);

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
