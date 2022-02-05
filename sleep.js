// sleep/delay function

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

console.log('Hello');
sleep(2000).then(() => console.log('World!'));

