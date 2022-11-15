//getCharacterFrequencies("sentences");

function getCharacterFrequencies(str) {
  const characters = [...str];
  const countedChars = characters
    .reduce((allCharacters, char) => {
      return [...allCharacters, { character: char, count: 1 }];
    }, [])
    .reduce((agg, item) => {
      if (agg[item.character] === undefined) {
        agg[item.character] = { character: item.character, count: 0 };
      }
      agg[item.character].count += +item.count;
      return agg;
    }, []);
  return countedChars;
}

const countedChars = getCharacterFrequencies("happy");
console.log(countedChars);
