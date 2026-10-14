let prompt = require("prompt-sync")();

let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter b: "));

console.log(`Before swapping: a = ${a}, b = ${b}`);

// using third variable
// let temp = a;
// a = b;
// b = temp;

// using destructuring array
[a,b] = [b,a];

console.log(`After swapping: a = ${a}, b = ${b}`);