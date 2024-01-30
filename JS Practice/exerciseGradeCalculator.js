let numericScore = "";
let finalGrade = "";

numericScore = prompt("Please, enter the students NUMERIC grade between 0-100: ");
//console.log("The numeric grade that has been entered is: " + numericGrade);

if (numericScore >= 90 && numericScore <= 100) {
    let finalGrade = "A";
    console.log(`Score achieved equals ${numericScore}, which gives you a ` + finalGrade + " grade.");
} else if (numericScore >= 80 && numericScore <= 89) {
    let finalGrade = "B";
    console.log(`Score achieved equals ${numericScore}, which gives you a ` + finalGrade + " grade.");
} else if (numericScore >= 70 && numericScore <= 79) {
    let finalGrade = "C";
    console.log(`Score achieved equals ${numericScore}, which gives you a ` + finalGrade + " grade.");
} else if (numericScore >= 60 && numericScore <= 69) {
    let finalGrade = "D";
    console.log(`Score achieved equals ${numericScore}, which gives you a ` + finalGrade + " grade.");
} else if (numericScore < 60) {
    let finalGrade = "F";
    console.log(`Score achieved equals ${numericScore}, which gives you a ` + finalGrade + " grade.");
}
else {
    console.log("No grade category is assigned BECAUSE the numeric grade entered is not recognized. Did you fail the exam :-0 ?")
}
