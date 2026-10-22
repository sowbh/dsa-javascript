let prompt = require("prompt-sync")();

let ch = prompt("Enter a single character: ");

// 
if((ch.length !== 1) || !((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))){
    console.log("Invalid Input");
} else{
    
    switch (ch) {
        case 'A':
        case 'a':
        case 'E':
        case 'e':
        case 'I':
        case 'i':
        case 'O':
        case 'o':
        case 'U':
        case 'u': console.log("Character is a Vowel");
        break;
    
        default: console.log("Character is a Consonant");
        break;
    }
}
