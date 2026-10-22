let prompt = require ('prompt-sync')();

console.log("Enter 1 to find area of triangle: ");
console.log("Enter 2 to find area of circle: ");
console.log("Enter 3 to find area of square: ");
console.log("Enter 4 to find area of rectangle: ");

let n = Number(prompt("Enter n: "));

switch (n) {
    case 1: {
        let base = Number(prompt("Enter base: "));
        let height = Number(prompt("Enter height: "));
        console.log(0.5 * base * height);
        break;
    }
    case 2: {
        let radius = Number(prompt("Enter radius: "));
        console.log(Math.PI * radius * radius);
        break;
    }
    case 3: {
        let side = Number(prompt("Enter side: "));
        console.log(side * side);
        break;
    }
    case 4: {
        let length = Number(prompt("Enter length: "));
        let breadth = Number(prompt("Enter breadth: "));
        console.log(length * breadth);
        break;
    }
    default: console.log("Invalid input");
    break;
}
