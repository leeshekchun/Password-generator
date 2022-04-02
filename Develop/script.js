// Assignment code here

// After button clicked, prompt to select password criteria
var confirmcriteria = window.alert(
  "Select criteria to include in the password: length, character types."
);
  var characterTypes = "";
  const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const Lowercase = "abcdefghijklmnopqrstuvwxyz";
  const Numeric = "0123456789";
  const Specialchar = "~!@#$%^&*()_+=-{}[]|:\";'<>?,./`";
// Choose the length //
var passwordLength = window.prompt(
  "Choose the number of the length for characters (at least 8 characters and no more than 128 characters)"
);


  // If password length is greater or equal to 8, or, smaller or equal to 128
  if (passwordLength >= 8 && passwordLength <= 128) 
  {
    var upperConfirm = window.confirm("Do you want to include uppercase letters?");

      if (upperConfirm == true) {
        characterTypes = characterTypes + Uppercase;
     

        if (upperConfirm) {
        var lowerConfirm = window.confirm("Do you want to include Lowercase letters?");
      }
          if (lowerConfirm == true) {
      characterTypes = characterTypes + Lowercase;
    }

        var numericConfirm = window.confirm("Do you want to include numeric numbers?");

            if (numericConfirm == true) {
      characterTypes = characterTypes + Numeric;
    }

          var specialcharConfirm = window.confirm("Do you want to include special characters?");

    if (specialcharConfirm == true) {
      characterTypes = characterTypes + Specialchar;
    }}
  } else {
    window.alert("number of length needs to be between 8-128");
  }




// // function to generate a random numeric value
// function randomNumber(min, max) {
//   var value = Math.floor(Math.random() * (max - min) + min);

//    return value;
// };

// // If password length is greater or equal to 8, or, smaller or equal to 128
// if (passwordLength => 8 && passwordLength <= 128 )

//  for (let i = 0; i = PasswordLength; i++) {

//     }

// // function to generate a random numeric value
// var randomNumber = function(min, max) {
//   var value = Math.floor(Math.random() * (max - min) + min);

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// function generatePassword(){

//   return ""
// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
