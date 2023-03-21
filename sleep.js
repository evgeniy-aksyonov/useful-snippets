// sleep/delay function

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// or arrow func oneliner:
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Usage:

console.log('Hello');
sleep(2000).then(() => console.log('World!'));

// OR

console.log('Hello');
sleep(2000)
  .then(() => console.log('world!'))
  .then(() => sleep(2000))
  .then(() => console.log('Goodbye!'));

// OR with async await

async function delayedGreeting() {
  console.log('Hello');
  await sleep(2000);
  console.log('World!');
  await sleep(2000);
  console.log('Goodbye!');
}

delayedGreeting();

// one more variant of calling a func

async function delayedGreeting() {
  console.log('Hello');
  await sleep(2000);
  console.log('World!');
}

delayedGreeting();
console.log('Goodbye!');
