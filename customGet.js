// custom 'get' function which accepts 2 arguments: key and nestedObj and returns valid value or undefined if no such value was found
const obj = { big: { red: { apple: '🍎' } } };

function customGet(key, obj) {
  // basic case. recursion exits on this step
  if (key.split('.').length === 1) {
    return obj[key];
  }

  // for every other cases we call the function again recursively with minor arguments modification
  const newKey = key.split('.').slice(1).join('.'); // new string key without first level. executes each time if obj is still nested
  const newObj = obj[key.split('.')[0]]; // object which is a value on current nesting level

  // variables can be omitted, but it's better for readability
  return customGet(newKey, newObj);
}

console.log(customGet('big.red.apple', obj)); // '🍎'
console.log(customGet('big.red.asdhgk', obj)); // undefined
