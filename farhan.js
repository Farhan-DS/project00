"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var input1 = await inquirer_1.default.prompt({
    name: "num1",
    Type: "number",
    message: "kindly enter your first No:"
});
var input2 = await inquirer_1.default.prompt({
    name: "num2",
    Type: "number",
    Message: "kindly enter your second no:"
});
var total = input1.num1 + input2.num2;
console.log(total);
