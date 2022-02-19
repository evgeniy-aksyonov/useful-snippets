class simpleCalc {
  constructor(initialvalue = 0) {
    this.initialvalue = initialvalue;
  }

  add(num) {
    this.initialvalue += num;
    return this;
  }

  subtract(num) {
    this.initialvalue -= num;
    return this;
  }

  getCurrVal() {
    return this.initialvalue;
  }
}

let calc = new simpleCalc(0);

console.log(calc.add(10).subtract(5).getCurrVal()) // 5
