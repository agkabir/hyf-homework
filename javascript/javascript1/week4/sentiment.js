const positiveWords = [
  "love",
  "like",
  "enjoy",
  "happy",
  "satisfied",
  "succeed",
  "super",
  "awesome",
];
const negativeWords = [
  "hate",
  "dislike",
  "sad",
  "unhappy",
  "upset",
  "terrible",
  "worst",
];
function getSentimentScore(sentence) {
  let score = 0;
  const posWords = [];
  const negWords = [];

  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (positiveWords.includes(words[i])) {
      posWords.push(words[i]);
      score++;
    } else if (negativeWords.includes(words[i])) {
      negWords.push(words[i]);
      score--;
    }
  }
  return {
    score: score,
    positiveWords: posWords,
    negativeWords: negWords,
  };
}
const sentimentScoreObject = getSentimentScore("I am mega super awesome happy");
console.log(sentimentScoreObject);
