/* 
Each Javascript function should start with the function keyword
- sum is the function name, a function needs a name
- (x, y) are parameters (values to be used in the function)
- {} represent what the function does or the code block 
- sum(4, 5) is the function call epression, these are arguments...

Arguments? Arguments are on the call...
Parameters? Parameters are on the Function...
Parameters are little inventory slots... or receptables for the values to pass in the calll
*/

//Parameters are on the function
function sum(x, y) {
    let s = x + y;
    return s;
}

//Arguments are on the call
console.log(sum(4, 5));

function sayHello() {
    return "Ciao!"
}

console.log(sayHello());

console.log(sayHello("Hello"));