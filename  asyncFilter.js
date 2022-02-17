// Async filter with async/await

async function hasFourLetters(value) {
  return value.length === 4;
};

let values = ["another", "word", "here"];

values = await values.reduce(async (acc, curr) => {
  const result = await hasFourLetters(curr);
  // If our async method didn't return true, return the current list
  // *without* this new entry
  if (!result) {
    return acc;
  }
  // Otherwise add this value to the list
  return (await acc).concat(curr);
}, []);
// values = ["word", "here"]


// Or this implementation without reduce
// =================================================

const arr = [1, 2, 3, 4, 5];

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const asyncFilter = async (arr, predicate) => {
	const results = await Promise.all(arr.map(predicate));

	return arr.filter((_v, index) => results[index]);
}

const asyncRes = await asyncFilter(arr, async (i) => {
	await sleep(10);
	return i % 2 === 0;
});

console.log(asyncRes);
// 2,4
