// variadic sum(any number of arguments)

const sum = (...args) => args.reduce((accum, curr) => accum + curr);

console.log(sum(1,2)); // 3
console.log(sum(1,2,3)); // 6
console.log(sum(1,2,3,4)); // 10
console.log(sum(1,2,3,4,5)); // 15
