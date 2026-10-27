let prompt = require("prompt-sync")();

let start = Number(prompt("Enter the value of start: "));

let end = Number(prompt("Enter the value of end: "));

let evenSum=0, oddSum=0;

if(start>end){
    let temp = start;
    start = end;
    end = temp;
}
else {
    for(let i=start; i<=end;
        i++){
        if(i%2==0) evenSum+=i;
        else oddSum+=i;
    }
    
}
console.log([evenSum, oddSum]);
