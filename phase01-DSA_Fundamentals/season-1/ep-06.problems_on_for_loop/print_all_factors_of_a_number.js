let prompt = require("prompt-sync")();

let n = Number(prompt("Enter the value of n: "));

for (let i = 1; i<=n; i++){
    if(n%i==0){
        process.stdout.write(i + " ");
    }
}