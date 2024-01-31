
let numericScore = "";
let finalGrade = "";

numericScore = prompt("Please, enter the students NUMERIC grade between 0-100: ");
//console.log("The numeric grade that has been entered is: " + numericGrade)

if (numericScore >= 90 && numericScore <= 100) {
    let finalGrade = "A";
    console.log("Score achieved equals" + numericScore + ", which gives you an %cA Grade", `background:linear-gradient(#E66465, #9198E5); padding: 1rem; color:white; border-radius: .5em`);
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
    console.log("%cNo Grade is assigned BECAUSE the numeric score that was entered is not recognized. Did you fail the exam :-0 ?", `background:linear-gradient(#E66465, #9198E5); padding: 1rem; color:white; border-radius: .5em`)
}
