let prompt = require('prompt-sync')();

let amt = Number(prompt("Enter the amount: "));

let dis = 0;
if(amt > 0 && amt <= 5000) dis = 0;
else if(amt > 5000 && amt <= 7000) dis = 5;
else if(amt > 7000 && amt <= 9000) dis = 10;
else dis = 20;

console.log("Final Amount=" + (amt - (dis*amt)/100));
