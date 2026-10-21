let prompt = require('prompt-sync')();

let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter b: "));

if(a>b) console.log("a is greater than b");
else console.log("b is greater than a");