
// Creating an array
let fruits = ['apple', 'kiwi', 'mango', 'strawberry']
console.time("Fruits");
console.log(fruits);
console.timeEnd("Fruits");
// Indexing (we start with 0)
// 0 distance from the starting item
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]); //undefined

fruits[2] = "jackfruit";

fruits.push("Cheery");
console.log(fruits[4]); //undefined

fruits.pop();
console.log(fruits[4]); //undefined
console.dir(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Array iteration with for loop
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5

// start with 0 until 4 (because i < 5)
for (let i = 0; i < numbers.length; i++) {
    console.log("Fruits For Loop " + numbers[i]);
}

//Jared's code
// Modifying array elements
fruits[2] = "jackfruit"; // update index
console.log(fruits[2]);
fruits.push('banana');
console.log(fruits[4]); // adding banana at the end of the fruits list
fruits.pop() // remove whats in the end of the fruits list (banana)
console.log(fruits[4]); // undefined

// Array iteration with for loop
let numbers_jared = [1, 2, 3, 4, 5];
console.log(numbers_jared.length); // 5

// start with 0 until 4 (because i < 5)
for (let i = 0; i < numbers_jared.length; i++) {
    console.log(numbers_jared[i]);
}

// Array iteration with forEach method
let colors = ['red', 'green', 'blue'];
//colors = the arrary
//color = the index
colors.forEach(function (color) {
    console.log(color);
})

let christianName;
console.log("Your Name is: " + christianName);

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X'];
console.log('Array length: ', numbers.length);

console.log('Index of 3', numbers.indexOf(3));
console.log('Index of X', numbers.indexOf('X'));

console.log('Find the value 9?', numbers.includes(9));

console.log('Joined arrary:', numbers.join('*'));

let slicedArray = numbers.slice(1, 4);
console.log('Sliced array:', slicedArray);

let removedElements = numbers.splice(1, 2);
console.log('Removed Elements:', removedElements);
console.log('Updated array after splicing:', numbers);

/*
// == Array Methods ==
numbers = [1, 2, 3, 4, 5, 6, 7];

// length
console.log('Array length:', numbers.length);

// indexOf
console.log('Index of 3', numbers.indexOf(3)); // has an index of 2

// includes
console.log('Does it have 9?', numbers.includes(9));

// join
console.log('Joined array:', numbers.join('-')); // turns whole array to string with separator parameter

// slice
// 1, 2, 3, 4, 5, 6, 7
let slicedArray = numbers.slice(1, 4)
console.log('Sliced array:', slicedArray);

// splice
// 1, 2, 3, 4, 5, 6, 7
let removedElements = numbers.splice(2, 2);
console.log('Removed Elements:', removedElements);
console.log('Updated array:', numbers);
*/