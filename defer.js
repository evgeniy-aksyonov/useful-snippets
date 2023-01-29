Function.prototype.defer = Function.prototype.defer || function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};

// check it
function sum(a, b) {
  console.log( a + b );
}

sum.defer(1000)(1, 2); // выведет 3 через 1 секунду.
