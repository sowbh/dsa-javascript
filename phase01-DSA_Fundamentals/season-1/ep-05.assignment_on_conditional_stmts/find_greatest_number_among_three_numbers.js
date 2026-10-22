let prompt = require('prompt-sync')();

let a = Number(prompt("Enter a= "));
let b = Number(prompt("Enter b= "));
let c = Number(prompt("Enter c= "));

if( a > b){
    if(a > c) console.log("a is greater");
    else console.log("c is greater");
} else if( b > c) console.log("b is greater");
else console.log("c is greater");

