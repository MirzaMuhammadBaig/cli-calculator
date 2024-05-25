#!/usr/bin/env node

import inquirer from "inquirer";

import { sub } from "./functions/sub/sub.js";
import { add } from "./functions/add/add.js";
import { mul } from "./functions/mul/mul.js";
import { div } from "./functions/div/div.js";

async function calculator() {
  const questions = [
    {
      type: "input",
      name: "num1",
      message: "Enter the first number",
    },
    {
      type: "list",
      name: "operation",
      message: "Select an operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
    {
      type: "input",
      name: "num2",
      message: "Enter the second number",
    },
  ];

  const answers = await inquirer.prompt(questions);
  let operation = answers.operation;
  const num1 = answers.num1;
  const num2 = answers.num2;

  let result: number | string;

  if (operation === "Addition") {
    result = add(num1, num2);
  } else if (operation === "Subtraction") {
    result = sub(num1, num2);
  } else if (operation === "Division") {
    result = div(num1, num2);
  } else if (operation === "Multiplication") {
    result = mul(num1, num2);
  } else {
    result = "You did not select any operator";
  }

  if (result === "") {
    console.log(
      `Result: Nothing --- Number 1: ${
        num1 === "" ? "Empty" : num1
      } --- Number 2: ${num2 === "" ? "Empty" : num2}`
    );
  } else {
    console.log(`Result: ${result}`);
  }

}

calculator();