const urlEncode = function(text) {
  let encodedText = text.split("");
  for (let step = 0; step < encodedText.length; step++) {
    // Replaces only if the index isn't at the front or end of a string so %20 does not replace trailing whitespace.
    if (encodedText[step] === " " && step !== 0 && step !== encodedText.length - 1) {
      encodedText[step] = "%20";
      // Removes leading or trailing whitespace if the above doesn't catch it.
    } else if (encodedText[step] === " ") {
      encodedText.splice(step, 1);
    }
  }
  return encodedText.join('');
};
 
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));