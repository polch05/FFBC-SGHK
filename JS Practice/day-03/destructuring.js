let num = [1, 2, 3];

// Destructuring (array)
// first come first serve
let num = [1, 2, 3];

let [second, first, third] = num;
console.log(second, first, third);

// Destructuring (object)
// key name = variable name
const numbers = {
    firstNum: 1,
    secondNum: 2,
    thirdNum: 3,
}

const { firstNum, secondNum, thirdNum, fourthNum } = numbers;
console.log(fourthNum);

// Destructuring with Default values
const painting = {
    artist: "Michelangelo",
    year: 1550,
    dimensions: "500x500"
}

const { artist, year = 1552, dimensions } = painting;

console.log(artist, year, dimensions);

// Destructuring with Default values
const painting = {
    artist: "Michelangelo",
    year: 1550,
    dimensions: "500x500",
    test: {
        test1: "String",
        test2: "String 2"
    }
}

const { artist, year = 1552, dimensions, test } = painting;
const { test1, test2 } = test;

console.log(artist, year, dimensions, test);
console.log(test1, test2)