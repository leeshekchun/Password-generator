// Assignment code here

// After button clicked, prompt to select password criteria //
var confirmcriteria = window.prompt("Criteria to include: length, character types.")


// Choose the length //
var length = window.prompt("Length of at least 8 characters and no more than 128 characters.") 










// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
