let prompt = require('prompt-sync')();

let greet = Number(prompt("Enter greet number: "));

switch (greet) {

    // for multiple input same output;
    case 1:
    case 3:
        console.log("Hello there!");
        break;

    case 4: console.log("Hey!");
        break;

    case 2: console.log("Have a wonderful day!");
        break;
    
    case 5: 
    case 6: console.log("Namaste");
        break;
    
    default: console.log("Thanks for using greet message!");
    
        break;
}