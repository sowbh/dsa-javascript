let prompt = require("prompt-sync")();

let p = parseFloat(prompt("Enter the principal amount: "));

let r = parseFloat(prompt("Enter the annual interest rate (in %): "));

let t = parseFloat(prompt("Enter the time (in years): "));

let n = parseFloat(prompt("Enter the number of times interest is compounded per year: "));

let A = p * Math.pow(1 + r / n, n*t);
let CI = A - p;

console.log(`Compound Interest: ${CI.toFixed(2)}`);