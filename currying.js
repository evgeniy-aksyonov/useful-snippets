const sum = (a,b,c) => a + b + c;

console.log(sum(1,2,3));

const curry = (fn) => a => b => c => fn(a, b, c);

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));
