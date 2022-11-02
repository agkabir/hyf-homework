const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime(travelInformation) {
  return `${
    (travelInformation.destinationDistance -
      (travelInformation.destinationDistance % travelInformation.speed)) /
    travelInformation.speed
  } hour(s) and ${
    travelInformation.destinationDistance % travelInformation.speed
  } minute(s)`;
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);
