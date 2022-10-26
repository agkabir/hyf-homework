//The objective of this function is to suggest a cloth to a person
// The function takes temperature as input and suggests cloth according to it
function suggestClothesToWear(temperature) {
  if (temperature >= 18) return "Shorts and a t-shirt";
  else if (temperature >= 10 && temperature < 18)
    return "Pants and thermo jacket";
  else return "Jeans pant and winter jacket";
}

const clothesToWear = suggestClothesToWear(18);
console.log(clothesToWear);
