//1.1. Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestword(danishWords) {
  const smallWord = danishWords.reduce((current, next) => {
    return current.length < next.length ? current : next;
  }, "iamreallyaverybigword");
  return smallWord;
}

console.log(getShortestword(danishWords));

//1.2. Find and count the Danish letters
const danishString = "Jeg har en blå og rød bil men jeg ønsker en grå bil";
function countDanishLetter(danishString) {
  const danishLetters = ["å", "ø", "æ"];
  const danishLetterCounts = [...danishString.toLowerCase()]
    .reduce((accumulator, currentValue) => {
      if (danishLetters.includes(currentValue)) {
        return [...accumulator, currentValue];
      }
      return accumulator;
    }, [])
    .reduce(
      (allChar, char) => {
        return {
          ...allChar,
          total: allChar["total"] + 1,
          [char]: (allChar[char] || 0) + 1,
        };
      },
      { total: 0 }
    );
  return danishLetterCounts;
}
console.log(countDanishLetter(danishString));
