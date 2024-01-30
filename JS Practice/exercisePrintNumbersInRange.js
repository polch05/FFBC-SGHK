//exercisePrintNumbersInRange

let x = "";
let y = "";

x = prompt("Please, enter a starting number: ");
y = prompt("Please, enter an ending number: ");

function printNumberRange() {
    console.log(`Let's LOOP through the numbers from ${x} to ${y}, Ready, Set, Go...`);

    while (x <= y) {
        console.log(`${x} is followed by...`);
        x++;
    }
}

printNumberRange();