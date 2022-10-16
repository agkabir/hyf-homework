console.log("Hello World!");
const favoritePizzaName = "chicken pizza";
const favoritePizzaPrice = 95;
console.log(
  "New pizza order:",
  favoritePizzaName + " \nThe price of the pizza is:",
  favoritePizzaPrice
);

let pizzaAmount = Number(prompt("print enter the number of pizzas ?"));
let isFamilySize =
  prompt("is it family size yes or no").toLowerCase() === "yes";
let totalPrice;
if (isFamilySize) totalPrice = favoritePizzaPrice * pizzaAmount * 2;
else totalPrice = favoritePizzaPrice * pizzaAmount;

console.log(
  `New pizza order: ${pizzaAmount} Family size: ${isFamilySize} \nTotal cost is: ${totalPrice}`
);
