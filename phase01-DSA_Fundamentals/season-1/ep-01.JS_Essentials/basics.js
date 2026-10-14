// js variables - const, let, var

const temp =10;
// temp = 100; 
console.log(temp);

let temp1 = 10;
temp1 = 101;
console.log(temp1);

var temp2 = 10;
temp2 = 102;
console.log(temp2);

//

console.log(b);
var b =10; // accessible but undefined

// console.log(a);
// let a = 10; // not accessible, will throw error

//

p = 100;
console.log(p); // by default it is var, not recommended to use

//

// relation between string and integer
// string + string = string (concatenation)

let s1 = "hello";
let s2 = " world";
console.log(s1 + s2); // hello world

// string + integer = string 
let s3 = "hey";
let temp3 = 10;
console.log(s3 + temp3); // hey10
console.log(typeof(s3 + temp3)); // string

// int + int = int
let x = 2;
let y = 3;
console.log(x + y); // 5
console.log(typeof(x + y)); // number

// type coercion
console.log(10 + "20"); // 1020
console.log(10 - "20"); // -10
console.log(10 * "20"); // 200
console.log(10 / "20"); // 0.5
console.log(10 % "20"); // 10

// accepting user input
let prompt = require("prompt-sync")();

let age = prompt("Enter your age: ");

// let age = Number(prompt("Enter your age: "));
// console.log(typeof(age)); // number

console.log(typeof(age)); // string

console.log(`Age : ${age}`);