function printFizzBuzz(numberLimit) {
  for (let i = 1; i < numberLimit; i++) {
    if (i % 3 === 0 && i % 5 != 0) console.log("Fizz ".repeat(3));
    else if (i % 3 != 0 && i % 5 === 0) console.log("Buzz ".repeat(5));
    else if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else console.log(i);
  }
}
printFizzBuzz(50);
