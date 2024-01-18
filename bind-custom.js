function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: 'Michael', age: 22, job: 'Frontend' };
const person2 = { name: 'Elena', age: 19, job: 'SMM' };

function myBind(contextObj, func) {
  return function (...args) {
    func.apply(contextObj, args);
  };
}

myBind(person1, logPerson)();
myBind(person2, logPerson)();
