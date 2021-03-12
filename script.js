
//Variable for the #generate ID
var generateBtn = document.querySelector("#generate");

// Various arrays for PW generation
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", "}", "{", "[", "]", "\:", ";", "?", ">", "<", ",", ".", "/", "-", "="];

var profile = {
  length: 0,
  upperCase: false,
  lowerCase: false,
  numeric: false,
  specChar: false,
  rawPassword: "",

  pwLength: function () {
    
    this.length = parseInt(prompt("How many charecters? (must be between 6 and 30 characters"));
    
  
    while (this.length < 6 || this.length > 30 || isNaN(this.length)) {
      this.length = parseInt(prompt("How many charecters? (must be between 6 and 30 characters"));
    }
    

    return (this.length);
  },

  pwUpperCase: function () {
    
    
    this.upperCase = confirm("Do you want upper case letters?");
    
    
    if (this.upperCase === true) {
      for (var u = 0; u < this.length; u++) {
        var upperRandom = Math.floor(Math.random() * upperChar.length);
        this.rawPassword += upperChar[upperRandom];
      }
    }
    
   
    return this.rawPassword;
  },
  

  pwLowerCase: function () {
    
   
    this.lowerCase = confirm("Do you want lower case letters?");
    
    
    if (this.lowerCase === true) {
      for (var l = 0; l < this.length; l++) {
        var lowerRandom = Math.floor(Math.random() * lowerChar.length);
        this.rawPassword += lowerChar[lowerRandom];
      }
    }

    return this.rawPassword;
  },


  pwNumeric: function () {
    
 
    this.numeric = confirm("Do you want numbers in your password?");

    if (this.numeric === true) {
      for (var n = 0; n < this.length; n++) {
        var numbersRandom = Math.floor(Math.random() * numbers.length);
        this.rawPassword += numbers[numbersRandom];
      }
    }


    return this.rawPassword;
  },


  pwSpecChar: function () {   
    this.specChar = confirm("Do you want special characters?");
    
    if (this.specChar === true) {
      for (var s = 0; s < profile.length; s++) {
        var specialRandom = Math.floor(Math.random() * special.length);
        this.rawPassword += special[specialRandom];  
      }
    }
    else if (this.upperCase === false && this.lowerCase === false && this.numeric === false && this.specChar === false) {
      alert("At least one criteria must be selected. Please generate a new password.");
      return;
    }
    return(this.rawPassword);  
  }
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  while (profile.length !== null) {
    profile.pwLength();
    profile.pwUpperCase();
    profile.pwLowerCase();
    profile.pwNumeric();
    profile.pwSpecChar();

    var rawPasswordLength = profile.rawPassword.length;
    var result = "";

    for (var i = 0; i < profile.length; i++) {
      result += profile.rawPassword.charAt(Math.floor(Math.random() * rawPasswordLength));
    }
    
    return result;
  }
}
