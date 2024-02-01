
const day2_Int = prompt("Please enter a number: ");
console.log(day2_Int);

function intEven(day2_Int) {
    return day2_Int % 2 === 0;
}

function intOdd(day2_Int) {
    return day2_Int % 2 !== 0;
}

console.log(intEven(day2_Int));
/* Tests
console.log(intEven(10));
console.log(intOdd(9));
console.log(intEven(52));
*/

let expo;
let base;


function calcPower(expo, base) {
    for (let i = 0; i <= expo; i++) {
        newBase = base * expo;
    }
    //console.log("Expo: " + expo);
    //console.log("base: " + base);
    console.log("%cCalculate Power Exercise " + newBase, `background:linear-gradient(#E66465, #9198E5); padding: 1rem; color:white; border-radius: .5em`);
    console.log(`%cCalculate Power Exercise = ${newBase}`, `background: linear - gradient(#E66465, #9198E5); padding: 1rem; color: white; border - radius: .5em`);
}

calcPower(5, 5);