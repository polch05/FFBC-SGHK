function greet() {
    console.log("Hello, welcome to the world of functions!");
}

// calling the function
greet();

// function expression vs. function declaration

// function declaration
/* 
num = parameter
 */

//calling declaration (function hoisting)
console.log("Square (Declaration): ", squareDeclaration(3));

function squareDeclaration(num) {
    return num * num;
    console.log("Hi, it's me!"); //does not run...
}



//function expression for Function Expression you cannot do hoisting... 
const squareExpression = function (num) {
    return num * num;
}

// calling expression function
console.log("Square (Expression): ", squareExpression(3));

//Variable Scope
let globalVar = "I am a GLOBAL variable";

function localScope() {
    let localVar = "I am a LOCAL variable";
    console.log(globalVar);
    console.log(localScope);
}

localScope();
console.log(localVar); //it will error: not defined!



// Nested Functions or Calling a Function in a function (cubing a number)
function firstFunc(num) {
    return num * num * num;
}

function secondFunc(num) {
    let cube = firstFunc(num);
    return cube;
}

console.log(secondFunc(5));


/*
    starts with function keyword
    <function name>(<parameters>) {
        <code block>
    }
function greet() {
    console.log("Hello, welcome to the world of functions!");
}

// calling the function
greet();
*/
// function expression vs function declaration

// function declaration
/*
    num = parameter
    return - outputs a value in the function, and also signifies the end of the function
*/
/*
// calling declaration function (function hoisting)
console.log("Square (Declaration): ", squareDeclaration(3));

function squareDeclaration(num) {
    console.log("Hi, hello!");
    return num * num;
}
// storing a return value
// const squaredValue = squareDeclaration(3);

// calling expression function (function hoisting is a no-go)
console.log("Square (Expression): ", squareExpression(3));

// function expression
const squareExpression = function(num) {
    return num * num;
}
*/