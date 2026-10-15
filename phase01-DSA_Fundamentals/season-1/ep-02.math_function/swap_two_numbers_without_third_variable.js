let prompt = require('prompt-sync')();

let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter b: "));

console.log(`Before Swapping: a = ${a} & b = ${b}`);

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(`After Swapping: a = ${a} & b = ${b}`);
