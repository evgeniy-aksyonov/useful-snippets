/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(randomBetween(1, 10));
// console.log(randomBetween(2, 10));
// console.log(randomBetween(100, 102));
// console.log(randomBetween(-12, 10));

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10));
console.log(getRandomInt(2, 10));
console.log(getRandomInt(100, 102));
console.log(getRandomInt(-12, 10));
