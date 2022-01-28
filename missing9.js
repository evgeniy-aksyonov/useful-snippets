const missing9 = [5,1,2,4,3,6,10,8,7];

function findMissingNumber(arr) {
  const sorted = arr.sort((a,b) => a - b );

  let guessNumber = 1;

  for (; guessNumber < (sorted.length + 1); guessNumber++) {
    if (!sorted.includes(guessNumber)) {
      break;
    }
  }

  return guessNumber;
}

console.log(findMissingNumber(missing9));
