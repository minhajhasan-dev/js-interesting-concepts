const favNum = 27; // global variable
function add(first, second) {
  console.log(mood); // hoisting
  const result = first + second; // local variable
  if (result > 9) {
    var mood = "happy";
    mood = "cranky";
  }
  console.log(mood);

  return result;
}

const sum = add(11, 35);
// console.log(result);
