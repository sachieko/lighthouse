const numberOfVowels = function(data) {
  let letterList = data.split("");
  let countVowel = 0;
  for (let step = 0; step < letterList.length; step++) {
    if (letterList[step] === "a" || letterList[step] === "e" || letterList[step] === "i" ||
    letterList[step] === "o" || letterList[step] === "u") {
      countVowel = countVowel + 1;
    }
  }
  return countVowel;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));