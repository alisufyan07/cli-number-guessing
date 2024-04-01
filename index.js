#! usr/bin/env node
import inquirer from "inquirer";
// computer wil generate a  number
// user input for guessing number
// compare user input with generated number
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number guessing game");
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 6:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation! you guessed the right number.");
}
else {
    console.log("you guessed the wrong number.");
}
