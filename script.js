//Variable for the #generate ID
var generateBtn = document.querySelector("#generate");

// Various arrays for PW generation
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "&", "*", "_", "+", "[", "]", "-", "="];
//console.log (upperChar)
//console.log (lowerChar)
//console.log (numbers)
//console.log (special)

//trying this method to generate charecters, numbers and symbols
// function getRandomUpper () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomLower () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomNumber () {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol () {
//   const symbols = '!@#$%^&*()'
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// console.log(getRandomLower);

var entry = {
  length: 0,
  upperCase: false,
  lowerCase: false,
  numeric: false,
  specChar: false,
  getPassword: "",

  pwLength: function () {
    
    this.length = (prompt("How many charecters? (must be between 6 and 30 characters"));
    
  
    while (this.length < 6 || this.length > 30) {
      this.length = (prompt("How many charecters? (must be between 6 and 30 characters"));
    }
    

    return (this.length);
  },

  pwUpperCase: function () {
    
    
    this.upperCase = confirm("Do you want upper case letters?");
    
    
    if (this.upperCase === true) {
      for (var u = 0; u < this.length; u++) {
        var upperRandom = Math.floor(Math.random() * upperChar.length);
        this.getPassword += upperChar [upperRandom];
      }
    }  
  
    return this.getPassword;
  },
  
  pwLowerCase: function () {
    
   
    this.lowerCase = confirm("Do you want lower case letters?");
    
    
    if (this.lowerCase === true) {
      for (var l = 0; l < this.length; l++) {
        var lowerRandom = Math.floor(Math.random() * lowerChar.length);
        this.getPassword += lowerChar[lowerRandom];
      }
    }

    return this.getPassword;
  },


  pwNumeric: function () {
    
 
    this.numeric = confirm("Do you want numbers in your password?");

    if (this.numeric === true) {
      for (var n = 0; n < this.length; n++) {
        var numbersRandom = Math.floor(Math.random() * numbers.length);
        this.getPassword += numbers[numbersRandom];
      }
    }


    return this.getPassword;
  },


  pwSpecChar: function () {   
    this.specChar = confirm("Do you want special characters?");
    
    if (this.specChar === true) {
      for (var s = 0; s < entry.length; s++) {
        var specialRandom = Math.floor(Math.random() * special.length);
        this.getPassword += special[specialRandom];  
      }
    }
    else if (this.upperCase === false && this.lowerCase === false && this.numeric === false && this.specChar === false) {
      alert("At least one criteria must be selected. Please generate a new password.");
      return;
    }
    return(this.getPassword);  
  }
};


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  while (entry.length !== null) {
    entry.pwLength();
    entry.pwUpperCase();
    entry.pwLowerCase();
    entry.pwNumeric();
    entry.pwSpecChar();

    var getPasswordLength = entry.getPassword.length;
    var result = "";

    for (var i = 0; i < entry.length; i++) {
      result += entry.getPassword.charAt(Math.floor(Math.random() * getPasswordLength));
    }
    
    return result;
  }
}
