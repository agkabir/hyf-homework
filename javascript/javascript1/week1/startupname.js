// declaration of arrays
const firstWords = [
  "Æble",
  "Awesome",
  "Easy",
  "Fun",
  "Tech",
  "Comfort",
  "Creative",
  "Instant",
  "Technology",
];
const secondWords = ["Solution", "Zone", "Support", "Valley", "Horizon"];
const startupName =
  firstWords[Math.floor(Math.random() * firstWords.length)] +
  " " +
  secondWords[Math.floor(Math.random() * secondWords.length)];
console.log(
  `The startup: "${startupName}" which contains ${startupName.length} characters`
);
