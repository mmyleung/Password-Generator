// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



var passwordLength;
var lowerCaseNeeded;
var upperCaseNeeded;
var numericNeeded;
var specialNeeded;

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt(`How many characters do you want your password? Enter number between 10 - 64.`);
  lowerCaseNeeded = confirm(`Do you need lowercase characters? Click OK for yes, Cancel for no.`);
  upperCaseNeeded = confirm(`Do you need uppercase characters? Click OK for yes, Cancel for no.`);
  numericNeeded = confirm(`Do you need numerical characters? Click OK for yes, Cancel for no.`);
  specialNeeded = confirm(`Do you need special characters($@%&*, etc.)? Click OK for yes, Cancel for no.`);
  return;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

// Function to generate password with user input
function generatePassword() {

  //empty array to store character types needed in password

  var characterTypes = [];

  //if statements to determine if charactertypes are needed and add to characterTypes array

  if(lowerCaseNeeded) {
    characterTypes.unshift(lowerCasedCharacters);
  }
  if(upperCaseNeeded) {
    characterTypes.unshift(upperCasedCharacters);
  }
  if(numericNeeded) {
    characterTypes.unshift(numericCharacters);
  }
  if(specialNeeded) {
    characterTypes.unshift(specialCharacters);
  }

  //empty array to store characters of password
  var passwordArray = [];
  for (let i = 0; i < characterTypes.length; i++) {
      passwordArray.unshift(getRandom(characterTypes[i]));
  }
  for (let i = characterTypes.length; i < passwordLength; i++) {
      //randomCharacterType stores a randomcharactertype
      var randomCharacterType = characterTypes[Math.floor(Math.random()*characterTypes.length)];
      passwordArray.unshift(getRandom(randomCharacterType));
  }
  console.log(passwordArray);
  
  //convert array into string
  return passwordArray.join("");
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//depending on password length, then decide how many of each character needed
//if password length equals 10, then 10/however many characters = true