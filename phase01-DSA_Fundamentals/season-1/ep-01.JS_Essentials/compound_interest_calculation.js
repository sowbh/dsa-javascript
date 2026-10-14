let prompt = require("prompt-sync")();

let p = Number(prompt("Enter principal amount: "));

let r = Number(prompt("Enter rate of interest: "));

let t = Number(prompt("Enter time in years: "));

let n = Number(prompt("Enter number of times interest is compounded per year: "));

let A = p * Math.pow((1 + r / n), n * t);

let CI = A - p;
console.log(`Compound Interest: ${CI.toFixed(2)}`);