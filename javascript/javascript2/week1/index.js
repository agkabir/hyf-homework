const spiritAnimalStrings = [
  "fullmoon wolf",
  "crying butterfly",
  "canning fox",
  "legend tiger",
  "king lion!",
  "crazy crocodile",
  "talking tom",
];
//Math.floor(Math.random() * spiritAnimalStrings.length);
function displaySpiritName() {
  const nameString = document.getElementById("name").value;

  const para = document.getElementById("displaySpirit");
  randomIndex = Math.floor(Math.random() * spiritAnimalStrings.length);
  if (!/^\s*$/g.test(nameString) && nameString != "")
    para.innerText = `${nameString} the ${spiritAnimalStrings[randomIndex]}!`;
  else para.innerText = `Unknown the ${spiritAnimalStrings[randomIndex]}!`;
}
const spiritButton = document.getElementById("spiritButton");
const spiritName = document.getElementById("name");

function selectedValue(radio) {
  spiritName.removeEventListener("mouseover", displaySpiritName);
  spiritName.removeEventListener("change", displaySpiritName);
  spiritButton.removeEventListener("click", displaySpiritName);
  if (radio.value === "byButtonClick") {
    spiritButton.addEventListener("click", displaySpiritName);
  } else if (radio.value === "byHoverOnTextBox") {
    spiritName.addEventListener("mouseover", displaySpiritName);
  } else if (radio.value === "byTextChange") {
    spiritName.addEventListener("change", displaySpiritName);
  }
}
