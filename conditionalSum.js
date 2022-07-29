const conditionalSum = function(values, condition) {
  let sum = 0;
  // Using a for loop with it only summing values if both the number matches the condition and the condition was input.
  for (let step = 0; step < values.length; step++) {
    if (values[step] % 2 === 0 && condition === "even") {
      sum = sum + values[step];
    } else if (values[step] % 2 !== 0 && condition === "odd") {
      sum = sum + values[step];
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));