let prompt = require("prompt-sync")();

let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter b: "));
let c = Number(prompt("Enter c: "));

let s = (a + b + c) / 2;

let A = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(`Area of triangle is: ${A.toFixed(2)}`);