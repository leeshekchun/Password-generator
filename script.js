// // Assignment code here

// // After button clicked, prompt to select password criteria
// var confirmcriteria = window.alert(
//   "Select criteria to include in the password: length, character types."
// );

// // global variables 
//   var characterTypes = "";
//   const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const Lowercase = "abcdefghijklmnopqrstuvwxyz";
//   const Numeric = "0123456789";
//   const Specialchar = "~!@#$%^&*()_+=-{}[]|:\";'<>?,./`";

// // Choose the length //
// var passwordLength = window.prompt(
//   "Choose the number of the length for characters (at least 8 characters and no more than 128 characters)"
// );

// // If password length is greater or equal to 8, or, smaller or equal to 128
//   if (passwordLength >= 8 && passwordLength <= 128) 
//   {
//     var upperConfirm = window.confirm("Do you want to include uppercase letters?");
//       if (typeof upperConfirm == "boolean") 
//       {
//         if(upperConfirm == true){
//         characterTypes += Uppercase;}
//         // console.log(characterTypes);

//         var lowerConfirm = window.confirm("Do you want to include Lowercase letters?");
//         if (typeof lowerConfirm == "boolean") 
//         {
//           if(lowerConfirm == true) {
//         characterTypes += Lowercase;}
//         // console.log(characterTypes);

//         var numericConfirm = window.confirm("Do you want to include numeric numbers?");
//             if (typeof numericConfirm == "boolean") 
//             {
//               if(numericConfirm == true) {
//             characterTypes += Numeric;}
//               // console.log(characterTypes);


//             var specialcharConfirm = window.confirm("Do you want to include special characters?");
//               if (typeof specialcharConfirm == "boolean") 
//               {
//                 if(specialcharConfirm == true) {
//               characterTypes += Specialchar;}
//               // console.log(characterTypes);


//               if (characterTypes.length = 0) {
//               window.alert ("At least one character type must be chosen.")

//         }}}}}}
//   else {
//     window.alert("Number of length needs to be between 8-128");
//   }


// var password = document.getElementById("password");
//   function createPassword() {
//     let password = "";

//     for (let i = 0, j = characterTypes.length; i < passwordLength; i++) 
//     {
//         password += characterTypes.charAt(Math.floor(Math.random() * j));
//     };
//     // console.log(password);
 
//     // var passwordText = document.querySelector("#password");
  
//     // passwordText.value = password;

//     document.getElementById("password").value = password;
//   };

  // Assignment code here

// After button clicked, prompt to select password criteria
var confirmcriteria = window.alert("Select criteria to include in the password: length, character types.");

// global variables 
var characterTypes = "";
const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowercase = "abcdefghijklmnopqrstuvwxyz";
const Numeric = "0123456789";
const Specialchar = "~!@#$%^&*()_+=-{}[]|:\";'<>?,./`";
var passwordLength = new Number;

// Choose the length //
function setPasswordLength() {
    passwordLength = window.prompt("Choose the number of the length for characters (at least 8 characters and no more than 128 characters)");
    return passwordLength;
};
setPasswordLength();

function charDialog() {
// If password length is greater or equal to 8, or, smaller or equal to 128
    if (passwordLength >= 8 && passwordLength <= 128) {
        var upperConfirm = window.confirm("Do you want to include uppercase letters?");
        if (typeof upperConfirm == "boolean") {
            if (upperConfirm == true) {
                characterTypes += Uppercase;
            }
            // console.log(characterTypes);

            var lowerConfirm = window.confirm("Do you want to include Lowercase letters?");
            if (typeof lowerConfirm == "boolean") {
                if (lowerConfirm == true) {
                    characterTypes += Lowercase;
                }
                // console.log(characterTypes);

                var numericConfirm = window.confirm("Do you want to include numeric numbers?");
                if (typeof numericConfirm == "boolean") {
                    if (numericConfirm == true) {
                        characterTypes += Numeric;
                    }
                    // console.log(characterTypes);

                    var specialcharConfirm = window.confirm("Do you want to include special characters?");
                    if (typeof specialcharConfirm == "boolean") {
                        if (specialcharConfirm == true) {
                            characterTypes += Specialchar;
                        }
                        // console.log(characterTypes);

                        if (characterTypes.length == 0) {
                            window.alert("At least one character type must be chosen.");
                            charDialog();
                        }
                    }
                }
            }
        }
    } else {
        window.alert("Number of length needs to be between 8-128");
        setPasswordLength();
        charDialog();
    }
};
charDialog();

var password = document.getElementById("password");
function createPassword() {
    let password = "";

    for (let i = 0, j = characterTypes.length; i < passwordLength; i++) {
        password += characterTypes.charAt(Math.floor(Math.random() * j));
    };
    // console.log(password);

    document.getElementById("password").value = password;
};
  