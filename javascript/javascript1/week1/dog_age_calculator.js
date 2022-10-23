// Decleration of variables
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const prompt = require("prompt-sync")({ sigint: true });
const shouldShowResultInDogYears = prompt(
  "Do you want to measure dog age in dog years? yes or no : "
).toLowerCase();

const age = dogYearFuture - dogYearOfBirth;

if (shouldShowResultInDogYears == "yes")
  console.log(
    "Your dog will be " + age * 7 + "  dog years old in " + dogYearFuture
  );
else if (shouldShowResultInDogYears == "no")
  console.log(
    "Your dog will be " + age + "  human years old in " + dogYearFuture
  );
else
  console.log(
    `You entered ${shouldShowResultInDogYears} which does not mean anything!`
  );
