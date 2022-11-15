function findLongestPalindrom(sentence) {
  const words = sentence.split(" ");
  const palindromes = [];
  for (item of words) {
    if (item.length > 2 && item.split("").reverse().join("") === item)
      palindromes.push(item);
  }
  if (palindromes.length > 0) {
    const longestPal = palindromes.reduce((acc, cur) => {
      return acc.length > cur.length ? acc : cur;
    }, "");
    return longestPal;
  } else return "No palindrome found";
}

const palindrome = findLongestPalindrom("I sadafadas madam education");
console.log(palindrome);
