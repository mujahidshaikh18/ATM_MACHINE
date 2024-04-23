#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 5000;
let myPin = 1234;

console.log(chalk.blueBright("=".repeat(70)));
console.log(chalk.magentaBright("\n \t <<== Wellcome To Code With Mujahid: ATM Machine ==>> \n"));
console.log(chalk.blueBright("=".repeat(70)));


let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.gray("enter your pin code:"),
    }
])
if(pinAns.pin === myPin){
    console.log(chalk.green("your pin is correct: login successfully"));

    let operationAns =await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.grey("Select an operation"),
            choices: ["Fast Cash","Cash Withdrawal","Check Balance"]
        }
    ])
    if(operationAns.operation === "Fast Cash"){
        let fast = await inquirer.prompt([
            {
                name: "cash",
                type: "list",
                message: chalk.cyanBright("Select Amount"),
                choices: ["500","1000","3000","5000","10000","15000","20000","25000"],
            }
        ])
        if(fast.cash > myBalance){
            console.log(chalk.red("Sorry Insufficient Balance"));
        }else{
            myBalance -= fast.cash;
            console.log(chalk.green(`${fast.cash} Cash Withdrawal Successfully`));
            console.log(chalk.yellowBright(`Your Remaining Balance is: ${myBalance}`));
        }
    }
    if(operationAns.operation === "Cash Withdrawal"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.cyanBright("Enter the amount to withdrawal:"),
            }
        ])
        if(amountAns.amount > myBalance){
            console.log(chalk.redBright("Sorry Insufficient Balance"));
        }else{
            myBalance -= amountAns.amount;
            console.log(chalk.green(`${amountAns.amount} Cash Withdrawal Successfully`));
            console.log(chalk.yellowBright(`Your Remaining Balance is: ${myBalance}`));
        }
    }
    else if(operationAns.operation === "Check Balance"){
        console.log(chalk.magentaBright(`Your Current Balance is: ${myBalance}`));
    }
    
}
else{
  console.log(chalk.red("please enter the correct pin code"));
}