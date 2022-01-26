const deepArr = [1,2,[3,4,[5,6]]];

// Infinity - is for the maximum level of nesting
console.log(deepArr.flat(Infinity)); // [1, 2, 3, 4, 5, 6]
