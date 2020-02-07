// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch neither line 1 or line 2
var resultFloat = parseFloat(numberOne) + parseFloat(numberTwo);

console.log(resultFloat);
// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

var result = parseFloat(numberOne) + parseFloat(numberTwo);

console.log(result.toFixed(2))

// --------------------------------------
// Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

var total = (one + two + three) / 3;

console.log(total.toFixed(5));

// Show in the console the avg. with 5 decimals

// --------------------------------------
// --------------------------------------
// Exercise 6 - Get the character by index

var letters = "abc"
// Get me the character "c"

console.log(letters[2]);

console.log(letters.charAt(2));

// --------------------------------------
// Exercise 7 - Replace

var fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log(fact.replace('j', 'J'));
// --------------------------------------

var computer = {
    brand = "ASUS"
}