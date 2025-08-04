function myPromiseAll(promises) {
  const results = [];
  let resolvedCount = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise
        .then((value) => {
          results[i] = value;
          resolvedCount++;

          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

const slowPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('done');
  }, 1000);
});

const promises1 = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  slowPromise,
];
// const promises2 = [Promise.resolve(2), Promise.reject('error'), Promise.resolve(6), slowPromise];

myPromiseAll(promises1).then(console.log);
// myPromiseAll(promises2).then(console.log);
