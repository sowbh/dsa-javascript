let prompt = require("prompt-sync")();

let r = Number(prompt("Enter radius of circle: "));

let C = 2 * Math.PI * r;
let A = Math.PI * r * r;

console.log(`Circumference of circle is: ${C.toFixed(2)}`);

console.log(`Area of circle is: ${A.toFixed(2)}`);
