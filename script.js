// Assignment Code


var number ["0,1,2,3,4,5,6,7,8,9"];
var letter ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var special ["!,@,#,$,%,^,&,*,?"];

var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var finalValue = "";
  var characterCount = prompt("How many characters?");
  var includeSpecialCharacters = confirm("Allow special characters?");
  var includeNumbers = confirm("Include numbers?");
  var includeCapitalleters = confirm("Include capital letter?");

  
  return finalValue
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);