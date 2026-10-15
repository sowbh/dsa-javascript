let n = 45678; //remove last digit
console.log(Math.trunc(n/10));  // Math.trunc() returns the integer part by removing decimal digits 

let m = 45678; // remove all digit except last
console.log(m%10);

console.log('9' == 9); //true, == compares values only, not types

console.log('9' === 9); //false, === compares values and types

// ***

// Ternary operator
let a = 10;

// use and change the value of a in the same statement
let b = a++;

console.log(a, b); // a = 11, b = 10

let p = 20;

let q = --p; // use and change the value of p in the same statement

console.log(p, q); // p = 19, q = 19

let w = 5;
let x = 12;
let y = 8;

let z = w++ + --x + y++ + ++w;
console.log(z); // 5 + 11 + 8 + 7 = 31

console.log(w, x, y); // w = 7, x = 11, y = 9

