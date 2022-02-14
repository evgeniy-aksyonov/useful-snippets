const array1 = [1,5,7,8,9],
      array2 = [2,5,6,8,10];

const myIntersection = (arr1, arr2) => arr1.filter(item => arr2.includes(item));

console.log(myIntersection(array1, array2)); // [ 5, 8 ]
