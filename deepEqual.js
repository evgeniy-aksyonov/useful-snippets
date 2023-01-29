function deepEqual(x, y) {
  /*
  1. check if both are the same obj or array

  2. check if both are type of object

  IF NOT --> go to edge cases:
  3. check NaN
  4. one is object and other is not
  5. check as primitive values

  IF YES --> go to main function body:
  6. check if null
  7. check if one is array and other is not
  8. compare keys length
  9. check if yKeys includes xKeys
  10. check keys and values recursively: deepEqual(x[key], y[key])
  11. if all checks are passed --> return true
  
  */

  //  1. check if both are the same obj or array
  if (x === y) return true;

  // 2. check if both are objects
  if (typeof x == 'object' && typeof y == 'object') {
    // 6. ...but first, check for null, typeof(null) is 'object'
    if (x === null || y === null) {
      // if either is null, both must be
      return x === y;
    }

    // 7. check if one is array and other is not:
    if (!!(Array.isArray(x) ^ Array.isArray(y))) return false;

    // now walk object keys and values
    let xKeys = Object.keys(x);
    let yKeys = Object.keys(y);

    // 8. compare keys length
    if (xKeys.length !== yKeys.length) {
      return false;
    }

    // 9. check if yKeys includes xKeys
    for (const key of xKeys) {
      if (!yKeys.includes(key)) return false;
    }

    // 10. check keys and values recursively
    for (const key of xKeys) {
      if (!deepEqual(x[key], y[key])) return false;
    }
    // 11. if all check are passed --> return true
    return true;

    // 3. if both values are NaNs return true
  } else if (Number.isNaN(x) && Number.isNaN(y)) {
    return true;
    // 4. if one is object and other is not - return false
  } else if (!!((typeof x == 'object') ^ (typeof y == 'object'))) {
    return false;
  } else {
    // 5. neither is object, then check as primitive values
    return x === y;
  }
}

let one = { a: 1, b: 2 },
  two = { b: 2, a: 1 };
console.log('Checking Objects with DIFFERENT key:vakue ORDER, but SAME values:');
console.log(`deepEqual(one, two): ${deepEqual(one, two)}`);

let arr1 = [1, 2, [3, [4, 5]]],
  arr2 = [1, 2, [3, [4, 5]]];
console.log('Checking nested arrays:');
console.log(`deepEqual(arr1, arr2): ${deepEqual(arr1, arr2)}`);

// ================================
console.log('Checking Simple Objects:');
let a = [1, 2, 3, 4],
  b = [1, 2, 3, 4],
  c = [1, 2, 3, 5],
  d = [1, 2, 3];
let x = { a: 1, b: 2 },
  y = { a: 1, b: 2 },
  z = { a: 1, b: 2, c: 3 };
console.log(`deepEqual(a, b): ${deepEqual(a, b)}`);
console.log(`deepEqual(a, c): ${deepEqual(a, c)}`);
console.log(`deepEqual(a, d): ${deepEqual(a, d)}`);
console.log(`deepEqual(x, y): ${deepEqual(x, y)}`);
console.log(`deepEqual(x, z): ${deepEqual(x, z)}`);

console.log('\n\nChecking Nested Objects:');
let m = { a: x, b: z },
  n = { a: x, b: z },
  o = { a: x },
  p = { a: x, b: z, c: y },
  q = { a: y, b: z };
console.log(`deepEqual(m, n): ${deepEqual(m, n)}`);
console.log(`deepEqual(m, o): ${deepEqual(m, o)}`);
console.log(`deepEqual(m, p): ${deepEqual(m, p)}`);
console.log(`deepEqual(m, q): ${deepEqual(m, q)}`);

console.log('\n\nChecking value types:');
console.log(`1 and 1: ${deepEqual(1, 1)}`);
console.log(`1 and 2: ${deepEqual(1, 2)}`);
console.log(`1 and 1.0: ${deepEqual(1, 1.0)}`);
console.log(`1 and "1": ${deepEqual(1, '1')}`);
console.log(`true and true: ${deepEqual(true, true)}`);
console.log(`true and false: ${deepEqual(true, false)}`);
console.log(`true and 1: ${deepEqual(true, 1)}`);
console.log(`true and 2: ${deepEqual(true, 2)}`);
console.log(`false and 0: ${deepEqual(false, 0)}`);
console.log(`false and "false": ${deepEqual(false, 'false')}`);
console.log(`"a string" and "a string": ${deepEqual('a string', 'a string')}`);
console.log(`"a string" and "other": ${deepEqual('a string', 'other')}`);

console.log('\n\nChecking edge cases with NaN, null, {}, and []:');
console.log('deepEqual({}, null): ', deepEqual({}, null));
console.log('deepEqual({}, []): ', deepEqual({}, []));
console.log('deepEqual([], []): ', deepEqual([], []));
console.log('deepEqual({}, {}): ', deepEqual({}, {}));
console.log('deepEqual(NaN, NaN): ', deepEqual(NaN, NaN));
console.log('deepEqual(NaN, "1"): ', deepEqual(NaN, '1'));
console.log('deepEqual(null, null): ', deepEqual(null, null));
console.log('deepEqual(null, {}): ', deepEqual(null, {}));
console.log('deepEqual(Infinity, Infinity): ', deepEqual(Infinity, Infinity));
console.log('deepEqual(Infinity, -Infinity): ', deepEqual(Infinity, -Infinity));
console.log('deepEqual(-Infinity, -Infinity): ', deepEqual(-Infinity, -Infinity));
console.log('deepEqual(0, -0): ', deepEqual(0, -0));
