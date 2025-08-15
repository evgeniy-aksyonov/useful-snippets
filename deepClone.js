// New Built-in NATIVE structuredClone() method
// https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
// It’s been available across browsers since March 2022

const orig = { a: { b: { c: 1 } }, d: 10 };

function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    // If the object is not an object or is null, return it directly
    return obj;
  }

  // Create a new object or array to store the copied properties
  const result = Array.isArray(obj) ? [] : {};

  // Recursively copy each property of the object
  for (let key in obj) {
    if (originalObject.hasOwnProperty(prop)) {
      result[key] = deepCopy(obj[key]);
    }
  }

  return result;
}

// Note that this method also has limitations, such as not being able to copy functions or objects with circular references.

/* 
Что здесь происходит:
1. Если объект — простой (строка, число, boolean), просто возвращаем его, 
2. дальше проверяем, что объект — не null (typeof(null) тоже == «object»).
3. Теперь создаём результат (массив или объект) 
4. и пробегаем по свойствам, рекурсивно их клонируя.
*/

// cloning original obj
const copy = deepClone(orig);
console.log(copy); // {a: {b: {c: 1}}, d: 10}

// changing nested prop
copy.a.b.c = 33;
console.log(copy); // {a: {b: {c: 33}}, d: 10}

// original object stays intact(unlike with Object.assign())
console.log(orig); // {a: {b: {c: 1}}, d: 10}
