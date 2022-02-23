/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
 function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(randomBetween(2, 10));
console.log(randomBetween(100, 102));
console.log(randomBetween(-12, 10));


