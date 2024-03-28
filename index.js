import inquirer from "inquirer";
const randomNumber = 12;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess A Number"
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You gussed right number");
}
else {
    console.log("Sorry! You gussed wrong number");
}
;
