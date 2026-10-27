let prompt = require('prompt-sync')();

let n = Number(prompt("Enter the value of n: "));

for(let i=n; i>=1; i--){
    // to print in a single line separated with space
    process.stdout.write(i + " ");
   }