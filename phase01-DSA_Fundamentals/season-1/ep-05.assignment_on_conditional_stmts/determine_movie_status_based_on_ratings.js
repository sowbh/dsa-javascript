let prompt = require("prompt-sync")();

let rating = Number(prompt("Enter movie rating: "));

if (rating >= 0.0 && rating <= 2.0) {
  console.log("Flop");
} else if (rating >= 2.1 && rating <= 3.4) {
  console.log("Semi-hit");
} else if (rating >= 3.5 && rating <= 4.5) {
  console.log("Hit");
} else if (rating >= 4.6 && rating <= 5.0) {
  console.log("Super Hit");
} else {
  console.log("Invalid rating input");
}
