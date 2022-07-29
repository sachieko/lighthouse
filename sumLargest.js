const sumLargestNumbers = function(data) {
  // Using a sort for numbers only if there's at least 2 elements. Default sort will sort by alphanumeric so don't use.
  if (data.length >= 2) {
    data.sort(function(a,b) {
      return a - b;
    });
    console.log(data);
    return data[data.length - 1] + data[data.length - 2];
  } else {
    return console.log("Number of elements in array was less than 2");
  }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));