function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      console.log('args.length: ', args.length);
      console.log('func.length: ', func.length);
      return func.apply(this, args);
    } else {
      console.log('args.length: ', args.length);
      console.log('func.length: ', func.length);
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log( curriedSum(1, 2, 3) ); // 6, still callable normally
console.log( curriedSum(1)(2,3) ); // 6, currying of 1st arg
console.log( curriedSum(1)(2)(3) ); // 6, full currying
