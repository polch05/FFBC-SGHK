//Original way to declare a function
function greet(name) {
    console.log(name);
}

//Arrow function (modern syntax)
const greet_II = (name) => console.log(name);

// Old way
function greet_III(name) {
    console.log(name);
}

function square(a) {
    return a * a;
}

// Arrow Functions (modern)
const greet_IV = name => console.log(name);
const square = a => a * a;

// Calling an arrow function
greet("Christopher")
console.log(square(5));