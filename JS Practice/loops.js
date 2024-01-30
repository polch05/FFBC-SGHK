// for loop
/* 
for (starting point; condition; increment) 
*/

for (let i = 0; i <= 5; i++) {
    console.log(i); //0, 1, 2, 3, 4, 5, 6
}

let counter = 0;
while (counter <= 5) {
    console.log("Running up that hill " + counter + " times!");
    counter++;
}

//do-while loop
let name = "";

do {
    prompt("Enter your name: ");
} while (name = "")

// { console.log(name); }

console.log(name);

