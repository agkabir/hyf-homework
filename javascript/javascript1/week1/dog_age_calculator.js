// Decleration of variables
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const prompt = require("prompt-sync")({ sigint: true });
let shouldShowResultInDogYears = prompt(
  "Do you want to measure dog age in dog years? yes or no : "
).toLowerCase();

let age = dogYearFuture - dogYearOfBirth;
let dogAge = age * 7;
if (shouldShowResultInDogYears == "yes")
  console.log(
    "Your dog will be " + dogAge + "  dog years old in " + dogYearFuture
  );
else if (shouldShowResultInDogYears == "no")
  console.log(
    "Your dog will be " + age + "  human years old in " + dogYearFuture
  );
else
  console.log(
    `You entered ${shouldShowResultInDogYears} which does not mean anything!`
  );
