// declaration of variables
let houseWidth,
  houseDepth,
  houseHeight,
  gardenSizeInM2,
  volumeInMeters,
  calculatedHousePrice;
//In case of Peter's house
houseWidth = 8;
houseDepth = 10;
houseHeight = 10;
gardenSizeInM2 = 100;
volumeInMeters = houseWidth * houseDepth * houseHeight;

const priceOfPetersHouse = 2500000;
calculatedHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (priceOfPetersHouse > calculatedHousePrice) {
  console.log(
    `Peter is paying ${priceOfPetersHouse - calculatedHousePrice} more`
  );
} else {
  console.log(
    `Peter is paying ${calculatedHousePrice - priceOfPetersHouse} less`
  );
}

//In case of Julia's house
houseWidth = 5;
houseDepth = 11;
houseHeight = 8;
gardenSizeInM2 = 70;
volumeInMeters = houseWidth * houseDepth * houseHeight;

const priceOfJuliasHouse = 1000000;
calculatedHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (priceOfJuliasHouse > calculatedHousePrice) {
  console.log(
    `Julia is paying ${priceOfJuliasHouse - calculatedHousePrice} more`
  );
} else {
  console.log(
    `Julia is paying ${calculatedHousePrice - priceOfJuliasHouse} less`
  );
}
