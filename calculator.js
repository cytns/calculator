const readlineSync = require('readline-sync');

const calculator = {
  read() {
    this.a = +readlineSync.question('Введите значение для a: ');
    this.b = +readlineSync.question('Введите значение для b: ');
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

module.exports = calculator;