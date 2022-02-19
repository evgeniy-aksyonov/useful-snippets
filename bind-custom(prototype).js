Function.prototype.myBind = function () {
  return () => this.call(...arguments);
};


function greet(text) {
  console.log(`${text}, ${this.name}!`);
}

const user = {
  name: 'John Lakeman'
};

const boundGreeting = greet.myBind(user, 'Hey there');

boundGreeting(); // Hey there, John Lakeman
