const instructorWithLongestName = function(instructors) {
  // Used a reduce method to compare the length of each object's name properties and keep only the longest.
  return instructors.reduce((a,b) => a["name"].split("").length > b["name"].split("").length ? a : b);
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));