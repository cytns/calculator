const calculator = require('./calculator');

calculator.read();
console.log(`Сумма: ${calculator.sum()}`);
console.log(`Произведение: ${calculator.mul()}`);