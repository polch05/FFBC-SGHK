
/// Spread (Input spreader)
const sum = (x, y, z) => x + y + z;

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Rest (Argument receptacle)
const myFunction = (firstArg, ...restOfArgs) => {
    console.log(firstArg);
    console.log(restOfArgs);
};

myFunction('one', 'two', 'three', 'four');

// Default Parameter example
const multiply = (a, b = 5) => a * b;

console.log(multiply(10));
console.log(multiply(10, 12));