
//String Methods
let longSentence = " This is going to be a long sentence. I am just kidding, right? Now, it's just three sentences."

//split
const split = longSentence.split(".");
console.log(split);

// includes
const containsWord = longSentence.includes("alpha")
console.log(containsWord);

// includes
const length = longSentence.length
console.log(length);

/* 
// for in (objects)
const person = {
    name: "Alice", 
    age: 30
}

let text = "";
for (let x in person) {
    text += person[x];
}

console.log(text);

// STRING METHODS
let longSentence = "This is going to be a long sentence. Just kidding. Now, it's three sentences."

// split
const split = longSentence.split(".")
console.log(split);

// includes
const containsWord = longSentence.includes("alpha")
console.log(containsWord);

// length (also includes whitespaces)
const length = longSentence.length
console.log(length); */

//MATH METHODS
const randomValue = Math.random();
console.log(randomValue);

// max/min
// i.e. Math.max(1, 50, 23) != Math.max([1, 50, 23])
const numberGroup = [1, 50, 23];
const maxNumber = Math.max(...numberGroup);
const minNumber = Math.min(...numberGroup);

console.log(maxNumber, minNumber);

// floor/ceil
const float = 1.78;
const floor = Math.floor(float); // round it DOWN to the nearest value
const ceil = Math.ceil(float); // round it UP to the nearest value
const round = Math.round(float); //default rounding formula

console.log(`This is the round down floor, ${floor}, then round up is ceil ${ceil}, and round formula ${round}`);

// Number.toFixed
const longFloat = 3.141592.toFixed(5)
console.log(longFloat);