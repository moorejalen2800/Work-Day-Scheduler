// Assignment Code






 var numbers = ['0','1','2','3','4','5','6','7','8','9'];
 var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 var special = ['@','%','+','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
 ];

function gitPasswordOption (){
var length = parseInt(
  prompt("How many characters would you like your password to be?")
);

if (Number.isNaN(length)) {
  alert("Password length must be provided as a number");
  return null;
}
if (length < 8) {
  alert("password must be more than 8 characters");
}
if (length > 120) {
  alert("password must be less than 120 characters");
}

var hasNumbers = confirm("Click ok if you want numbers in your password?");
var hasUppercase = confirm("Click ok if you want uppercase in your password?");
var hasLowercase = confirm("Click ok if you want lowercase in your password?");
var hasSpecial = confirm("Click ok if you want special characters in your password?");

if (
  hasNumbers === false &&
  hasUppercase === false &&
  hasLowercase === false &&
  hasSpecial === false
) {
  alert("Must select at least one character type");
  return null;
}

var passwordOptions = {
  length: length,
  hasNumbers: hasNumbers,
  hasUppercase: hasUppercase,
  hasLowercase: hasLowercase,
  hasSpecial: hasSpecial,
};
return passwordOptions;

}


function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}


function generatePassword() {
  var options = gitPasswordOption();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }
  if (options.hasUppercase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }
    if (options.hasLowercase) {
      possibleCharacters = possibleCharacters.concat(lowerCase);
      guaranteedCharacters.push(getRandom(lowerCase));
    }
      if (options.hasSpecial) {
        possibleCharacters = possibleCharacters.concat(special);
        guaranteedCharacters.push(getRandom(special));
      }

      for ( var i = 0; i < options.length; i++) {
        var possibleCharacter = getRandom(possibleCharacters);

        result.push(possibleCharacter);
      }

      for ( var i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
      }
      return result.join('');
}








var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
