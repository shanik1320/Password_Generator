// Assignment Code
var generateBtn = document.querySelector("#generate");
//all special characters
var special = "!@#$%^&*()";
//all lowercase characters
var lower = "asdfghjklpoiuytrewq";
//all uppercase characters
var upper = "ASDFGHJKLPOIUYTREWQ";
//all numbers
var numbers ="1234567890";

// Create function generate password
function generatePassword(){
  //ask for special characters
  var askSpecial = confirm("Click OK to include special characters");
  //ask for lowercase characters
  var askLower = confirm("Click OK to include lower case letters");
  //ask for uppercase characters
  var askUpper = confirm("Click OK to include upper case letters");
  //ask for numbers
  var askNumbers = confirm("Click OK to include numbers");
  //We have to return the password

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
