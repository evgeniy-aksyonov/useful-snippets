const orig = {a: {b: {c: 1}}, d: 10};

function deepClone(originalObject) {
  // equality check is not strict because typeof(null) == «object» too
  if (typeof(originalObject) != 'object') {
    return originalObject;
  }

  // null
  if (!originalObject) {
    return originalObject; // null
  }

  let result = (originalObject instanceof Array) ? [] : {};

  for (const prop in originalObject) {
    if (originalObject.hasOwnProperty(prop)) {
      result[prop] = deepClone(originalObject[prop])
    }
  }

  return result;
}

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
