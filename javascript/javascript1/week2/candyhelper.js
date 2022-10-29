const boughtCandyPrices = [];
const candyTypeAndPrice = {
  Sweet: 0.5,
  Toffee: 1.1,
  Chocolate: 0.7,
  "Chewing-gum": 0.03,
};

function addCandy(candyTpye, weight) {
  boughtCandyPrices.push(candyTypeAndPrice[candyTpye] * weight);
}

// amount to spend
const amountToSpend = (Math.random() * 100).toFixed(2);
// Buying candies
addCandy("Sweet", 20);
addCandy("Toffee", 10);
addCandy("Chocolate", 20);
addCandy("Chewing-gum", 10);
// Prints the amount can spend
console.log(amountToSpend);
// Print bought candy prices
console.log(boughtCandyPrices);

function canBuyMoreCandy(boughtCandyPrices, amountToSpend) {
  let i = 0,
    totalPrice = 0;
  // Calculating bought candy prices using while loop
  while (i < boughtCandyPrices.length) {
    totalPrice += boughtCandyPrices[i];
    i++;
  }
  // It is assumed that customer can buy min 1 gram
  // minimum price for 1 gram candy is 0.03 (Chewing-gum)
  if (amountToSpend - totalPrice > 0.03)
    console.log("You can buy more, so please do!");
  else console.log("Enough candy for you!");
}

canBuyMoreCandy(boughtCandyPrices, amountToSpend);
