Array.prototype.myReduce = function (fn, accum) {
  let i = 0;

  // if no accum provided --> skip first iteration and set accum to the first elem of array
  if(arguments.length < 2) {
    i = 1;
    accum = this[0];
  }

  // run provided fn through all array elements and update accum value between loop calls
  for (; i < this.length; i++) {
    accum = fn(accum, this[i], i, this);
  }

  return accum;
};

const users = [
  {id: 1, name: 'Jared'},
  {id: 2, name: 'Leo'},
  {id: 3, name: 'Hell'},
  {id: 4, name: 'Mia'}
];

const threeLetterNames = users.myReduce((accum, current) => {
  if(current.name.length === 3) {
    accum.push(current)
  }

  return accum;
}, []);

console.log('threeLetterNames: ', threeLetterNames);

