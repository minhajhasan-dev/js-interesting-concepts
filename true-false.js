/*
Falsy: 
false
0
empty string
undefined
null
NaN
------------------------------------------
Truthy: 
true
any number (positive or negative)
any string including single white space
empty array []
empty object {}
anything else that is not falsy is truthy
*/

let x = {};
console.log("value of x", x);
if (x) {
  console.log("variable is truthy");
} else {
  console.log("variable is falsy");
}
