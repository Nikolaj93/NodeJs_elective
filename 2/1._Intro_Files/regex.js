// regex is a way to search through a string
// regex is very efficient at huge document where multi-line search is nessecary

const myRegEx = /Hello/i;
const result = myRegEx.test("Hello world!");

console.log(result);

// /Hello/ is case sensitive

// Flags -> here used an i flag

// by adding the i flag the regex becomes case in-sensitive
// in other words - NOT case sensitive

// this is pipe ||
// Pipe = or

const petString = "Do you have a dog?"
const petRegEx = /dog|cat|sheep/;
console.log(petRegEx.test(petString));

// Match
const extractString = "Extract this word from the string";
const wordRegex = /word/;
// console.log(extractString.match(wordRegex));

// The G flag
// console.log("Repeat, Repeat, Repeat".match(/Repeat/g));

let twinkleStarSong = "Twinkle, twinkle, little star";