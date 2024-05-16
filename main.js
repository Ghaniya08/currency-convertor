#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.9,
    JYP: 113,
    CAD: 1.3,
    AUD: 1.65,
    PKR: 278
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "ERU", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "ERU", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your ammount",
        type: "number"
    }
]);
let currencyy = currency[userAnswer.from];
let toamount = currency[userAnswer.to];
let amount = userAnswer.amount;
let answwer = amount / currencyy;
let convertAmount = answwer * toamount;
console.log(`Concerted amount = ${convertAmount.toFixed(2)}`);
