
const day2_Int = prompt("Please enter a number: ");
//console.log(day2_Int);

function intEven(day2_Int) {
    return day2_Int % 2 === 0;
}

/* ßfunction intOdd(day2_Int) {
    return day2_Int % 2 !== 0;
}
 */
console.log(intEven(day2_Int));

if (intEven(day2_Int) === true) {
    console.log("%cEven", `background:linear-gradient(#E66465, #9198E5); padding: 0.3rem; color:white; border-radius: .4em`);
} else {
    console.log("%cOdd", `background:linear-gradient(#FFD265, #919Re8E5); padding: 0.3rem; color:white; border-radius: .4em`);
}

/* Tests
console.log(intEven(10));
console.log(intOdd(9));
console.log(intEven(52));
*/
/*
let expo;
let base;

function calcPower(base, expo) {
    for (let i = 0; i <= expo; i++) {
        newBase = base * expo;
    }
    //console.log("Expo: " + expo);
    //console.log("base: " + base);
    console.log("%cCalculate Power Exercise " + newBase, `background:linear-gradient(#E66465, #9198E5); padding: .3rem; color:white; border-radius: .5em`);
    // console.log(`%cCalculate Power Exercise = ${newBase}`, `background: linear - gradient(#E66465, #9198E5); padding: 1rem; color: white; border - radius: .5em`);
}

calcPower(5, 5);
*/

function calculateExponentWithLoop(base, exponent) {
    let result = 1;

    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    return result;
}

// Example usage:
const result = calculateExponentWithLoop(2, 5); // result will be 32
console.log("Calculate POW with for loop for 2, 5: " + result);




function calcExponent(base, exponent) {
    return Math.pow(base, exponent);
}

const calcResult = calcExponent(3, 3);
console.log("%c Math.pow Result for 3, 3: " + calcResult, `background:linear-gradient(#E66465, #9198E5); padding: .3rem; color:white; border-radius: .5em`);

// FizzBuzz
function printNum1to100() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("%cFizzBuzz", `background:linear-gradient(#E66465, #9198E5); padding: .3rem; color:white; border-radius: .5em`);
        } else if (i % 3 === 0) {
            console.log("%cFizz", `background:linear-gradient(#E66465, #9198E5); padding: .3rem; color:white; border-radius: .5em`);
        } else if (i % 5 === 0) {
            console.log("%cBuzz", `background:linear-gradient(#E22123, #4127E); padding: .3rem; color:white; border-radius: .5em`)
        }
        else {
            console.log(i);
        }
    }
}
printNum1to100();

// Bonus

let numberArray = [12, 49, 29, 56, 72, 18, 2, 3, 4, 5];

function findLargestNumberMathMax(arr) {
    return Math.max(...arr);
}

const maxResult = findLargestNumberMathMax(numberArray);
console.log(maxResult);

// Using a For loop
function findLargestNumber(arr) {

    let largest = arr[0]; //Start with the first element in the Array

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

const something = findLargestNumberMathMax(numberArray);
console.log(something);
console.log(numberArray.length);