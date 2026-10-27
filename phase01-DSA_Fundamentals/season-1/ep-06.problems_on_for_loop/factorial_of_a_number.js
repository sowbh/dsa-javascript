let prompt = require("prompt-sync")();

let n = Number(prompt("Enter the value of n: "));

let fact=1;

for(let i=1; i<=n; i++){
    fact*=i;
}
console.log(fact);
