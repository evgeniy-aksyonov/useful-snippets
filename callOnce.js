// Write function "once" which should work only after first call, and then do nothing

function once(someFunc) {
  let wasCalled = false;

  return function (...args) {
    if (!wasCalled) {
      wasCalled = true;
      return someFunc.apply(this, args);
    }
  };
}

function sum(x, y) {
  return x + y;
}

var cally = once(sum);

console.log(cally(10, 15)); // 25
console.log(cally(5, 6)); // undefined
console.log(cally(5, 6)); // undefined
