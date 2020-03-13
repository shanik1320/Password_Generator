// Assignment Code
var generateBtn = document.querySelector("#generate");

//all special characters
var special = "!@#$%^&*()./?[]{}";

//all lowercase characters
var lower = "abcdefghijklmnopqrstuvwxyz";

//all uppercase characters
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//all numbers
var numbers = "0123456789";

//final password
var passwordFinal = "";


// Create function generate password
function generatePassword(){
  //ask how many characters 
  var howMany = prompt("How many characters do you want in the password?");

  // conditional to check number of characters if( howmany < 8 || howmany > 128)
  //ask for special characters
  var askSpecial = confirm("Click OK if you want to include special characters");
  //ask for lowercase characters
  var askLower = confirm("Click OK if you want to include lowercase letters");
  //ask for uppercase characters
  var askUpper = confirm("Click OK if you want to include uppercase letters");
  //ask for numbers
  var askNumbers = confirm("Click OK if you want to include numbers");
  //We have to return the password

  
  for ( var i = 0; i < howMany; i++) {
   
    
  }

  return passwordFinal;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
