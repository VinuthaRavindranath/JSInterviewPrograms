function longestWord(sentence) {
  const words = sentence.split(" ");
  return words.reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  });
}
console.log(longestWord("The quick brown fox jumps"));



function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("The quick brown fox jumps")); // Output: "jumping" -> wait, "jumps"