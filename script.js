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

//all characters array
var allCharacters = [""];

;
// Create function generate password
function generatePassword(){
  //ask how many characters
  var howMany = prompt("How many characters do you want in your password?")
  if (howMany > 8 && howMany < 120) {
   //ask for special characters
   var askSpecial = confirm("Click OK if you want to include special characters");
   //ask for lowercase characters
   var askLower = confirm("Click OK if you want to include lowercase letters");
   //ask for uppercase characters
   var askUpper = confirm("Click OK if you want to include uppercase letters");
   //ask for numbers
   var askNumbers = confirm("Click OK if you want to include numbers");
   // if statement if they want special characters
   if (askSpecial) {
     allCharacters= allCharacters + special;
   }
   // if statement if they want lower case letters
   if (askLower) {
     allCharacters = allCharacters + lower;
   }
   // if statement if they want upper case letters
   if (askUpper) {
     allCharacters = allCharacters + upper;
   }
   //if statement if they want numbers
   if (askNumbers) {
     allCharacters = allCharacters + numbers
   }

  for ( var i = 0; i < howMany; i++) {
    passwordFinal= passwordFinal + allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
   }

  //We have to return the password
  return passwordFinal;

}
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
