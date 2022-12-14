BASE_URL = "https://open.er-api.com/v6/latest/USD";

const baseCurrency = document.getElementById("baseCurrency");
const targetCurrency = document.getElementById("targetCurrency");
const btnSwapCurrency = document.getElementById("btnSwapCurrency");
const btnConvertCurrency = document.getElementById("btnConvertCurrency");
const amountToConvert = document.getElementById("amount");

const currencyList = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (response.status !== 200) {
      return `something went wrong ${response.status.toString()}!`;
    }
    const data = await response.json();
    let eurValue;
    let dkkValue;
    Object.entries(data.rates).forEach(([key, value]) => {
      if (key === "EUR") eurValue = value;
      else if (key === "DKK") dkkValue = value;
      const baseOption = document.createElement("option");
      const targetOption = document.createElement("option");
      baseOption.text = key;
      baseOption.value = value;
      targetOption.text = key;
      targetOption.value = value;

      baseCurrency.add(baseOption);
      targetCurrency.add(targetOption);
    });
    baseCurrency.value = eurValue;
    targetCurrency.value = dkkValue;
    //console.log(eurValue);
  } catch (error) {
    return error.message;
  }
};

window.onload = (event) => {
  currencyList();
  //console.log("page is fully loaded");
};

const swapCurrency = () => {
  const baseCurrencyValue = baseCurrency.value;
  const targetCurrencyValue = targetCurrency.value;
  baseCurrency.value = targetCurrencyValue;
  targetCurrency.value = baseCurrencyValue;
};

const convertCurrency = () => {
  if (amountToConvert.value) {
    const convertedAmount =
      (amountToConvert.value / baseCurrency.value) * targetCurrency.value;
    document.getElementById(
      "displayConvertedValue"
    ).innerHTML = `${amountToConvert.value}  ${baseCurrency.selectedOptions[0].text} = ${convertedAmount} ${targetCurrency.selectedOptions[0].text}`;
  }
};

btnSwapCurrency.addEventListener("click", swapCurrency);
btnConvertCurrency.addEventListener("click", convertCurrency);
