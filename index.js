import inquirer from "inquirer";
async function number() {
    let inputs = await inquirer.prompt([{
            name: "input1",
            message: "Enter First Number",
            type: "input",
        },
        {
            name: "input2",
            message: "Enter Second Number",
            type: "input"
        }
    ]);
    let a = Number(inputs.input1);
    let b = Number(inputs.input2);
    return { a, b };
}
console.log("-----------------------CALCULATOR-----------------------");
let select = await inquirer.prompt([{
        name: "Choices",
        message: "What do You want to do?",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }]);
if (select.Choices == "Addition") {
    let { a, b } = await number();
    let add = a + b;
    console.log("Answer is " + add);
}
else if (select.Choices == "Subtraction") {
    let { a, b } = await number();
    let sub = a - b;
    console.log("Answer is " + sub);
}
else if (select.Choices == "Multiplication") {
    let { a, b } = await number();
    let Multi = a * b;
    console.log("Answer is " + Multi);
}
else if (select.Choices == "Division") {
    let { a, b } = await number();
    let div = a / b;
    console.log("Answer is " + div);
}
