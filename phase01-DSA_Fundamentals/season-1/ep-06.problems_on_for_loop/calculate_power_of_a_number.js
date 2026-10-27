let prompt = require("prompt-sync")();

let a = Number(prompt("Enter the value of a: "));
let b = Number(prompt("Enter the value of b: "));

let res=1;
for(let i=1; i<=b; i++){
    res*=a;
}
console.log(res);
