const module1 = require('./module1');
const calc = require('./calculator');

// console.log(module1);
// console.log(module1.name);
// module1.greet('Jacob');
// module1.sayHello();


console.log(calc.addition(10, 8));
console.log(calc.multiplication(3, 5));
console.log(calc.division(6, 2));
console.log(calc.subtraction(3, 3));

console.log(global.college);   // George Brown College
