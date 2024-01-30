let num1 = 367;
let num2 = 200;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let num3 = 10;
let num4 = 3;

console.log(num3 % num4);


let testNumber = 500;
console.log("Is it an even number?: ", testNumber % 2 == 0) //500 / 2 == 250r0
/*
Assignment Operators
=. +=, -=, *=, /-
*/

let equals = "value";

testNumber += 20;
console.log(testNumber);

testNumber -= 20;
console.log(testNumber);

testNumber *= 2;
console.log(testNumber);

testNumber /= 2;
console.log(testNumber);

//Comparison Operators - compare two variables based on the operator
// <, >, <=, >=, ==

console.log(34 > 50);

/*
== = loose equality comparison
=== = strict equality on value and data type 
*/
console.log(50 == "50");
console.log(50 === "50");

// true = 1, false = 0 like binary
console.log(50 == false);
console.log("" == 0);
console.log(1 == true);

/*
Logical Operators / Bitwise
(Above Arithmetic, Assignent and Comparison Operators)
*/

console.log("AND (&&):", false && true); // AND (&&) needs both statements to be true
console.log("OR (||):", false || true);
console.log("NOT (!):", !true); // = false

/* ++, --
Uniary Operators */

let num = 20;
console.log(num);

num++;
console.log(num);

num--;
console.log(num);

/* 
Termary Operators (to be discussed later...) */

/* typeof Operator */
console.log(typeof num); //number
console.log(typeof equals); //string

/*  
Number Expressions with PENDA 
*/

console.log(2 + 3 * 4); //(2 + 12 = 14)

/* 
String Expressions - Expressions in JavaScript are types of Statements? 
*/

console.log("Hello" + " " + "World, tutti di mondo!");
// String concatenation

/* Logical Expressions */
let x = 7;
let y = 5;
console.log((x > 5) && (y < 10));

/* 
Assignment Expressions 
*/
x = y + 10; // 5 + 10
console.log(x); //14