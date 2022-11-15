function cardType(cardnumber) {
  if (/^3[47][0-9]{5,}$/.test(cardnumber))
    return "American Express"; // if start with 34 or 37
  else if (/^5[1-5][0-9]{5,}$/.test(cardnumber))
    return "MasterCard"; // if start with 51-55
  else if (/^4[0-9]{6,}$/.test(cardnumber)) return "Visa"; // if start with 4
  else return "Unknown";
}

function formatCreditCardNumber(cardnumber) {
  const cardNumber = cardnumber.toString();
  const segments = [];
  for (let i = 0; i < Math.ceil(cardNumber.length / 4); i++) {
    segments.push(cardNumber.slice(i * 4, (i + 1) * 4));
  }
  return {
    original: cardnumber,
    formatted: segments.join(" "),
    cardType: cardType(cardnumber),
  };
}

//formatCreditCardNumber(123456789);

const formattedCreditCardObject = formatCreditCardNumber(52678956782365);
console.log(formattedCreditCardObject);
