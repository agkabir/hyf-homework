// Part 1
const addition = function add(a, b) {
  return a + b;
};
const subtraction = function sub(a, b) {
  return a - b;
};

const multiplication = function mul(a, b) {
  return a * b;
};

const division = function div(a, b) {
  if (b != 0) return a / b;
  else return "division by zero not posible";
};

const functions = [addition, subtraction, multiplication, division];
for (func of functions) {
  console.log(func(4, 2));
}
// part 2
console.log(calculateRemainder(3, 2)); // comment this line to run whole code.
const calculateRemainder = function remainder(a, b) {
  return a % b;
};
console.log(calculationOfRemainder(8, 2));
function calculationOfRemainder(a, b) {
  return a % b;
}

// For part 2 if we execute the code then we will have reference error
// for calculateRemainder (function expression) fuction but it will not raise
// error for calculationOfRemainder (Function Declaration) function.

// Part 3
functionObjects = {
  addition: addition,
  subtraction: subtraction,
  multiplication: multiplication,
  division: division,
};
for (let key in functionObjects) {
  console.log(functionObjects[key](4, 2));
}
