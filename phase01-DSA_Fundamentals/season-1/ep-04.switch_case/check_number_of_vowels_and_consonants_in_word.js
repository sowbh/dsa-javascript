let prompt = require('prompt-sync')();

let str = prompt("Enter string: ");
let vowel = 0, consonant = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i).toLowerCase();

    if (ch >= 'a' && ch <= 'z') {
        switch (ch) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowel++;
                break;

            default:
                consonant++;
                break;
        }
    }
}

console.log("Vowels:", vowel);
console.log("Consonants:", consonant);