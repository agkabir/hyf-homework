const boughtCandyPrices = [];
const candyTpye = "Sweet";
function addCandy(candyTpye, weight) {
  switch (candyTpye) {
    case "Chocolate":
      boughtCandyPrices.push(0.7 * weight);
      break;
    case "Toffee":
      boughtCandyPrices.push(1.1 * weight);
      break;
    case "Chewing-gum":
      boughtCandyPrices.push(0.03 * weight);
      break;
    default:
      boughtCandyPrices.push(0.5 * weight);
  }
}

// amount to spend
const amountToSpend = Math.random() * 100;
// Buying candies
addCandy(candyTpye, 20);
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
  if (amountToSpend - totalPrice > 0.03)
    console.log("You can buy more, so please do!");
  else console.log("Enough candy for you!");
}

canBuyMoreCandy(boughtCandyPrices, amountToSpend);
