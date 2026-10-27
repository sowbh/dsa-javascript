let prompt = require("prompt-sync")();

let n = Number(prompt("Enter the value of n: "));

let isPrime = true; 

if(n<=1) console.log("Not Prime");
else if(n==2) console.log("Prime");
else if(n%2==0) console.log("Not Prime");
else {
    for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){
        if(n%i==0){
            isPrime =false;
            break;
        }
    }
    console.log(isPrime ? "Prime" : "Not Prime");
}



