import inquirer from "inquirer";

const resp = await inquirer.prompt([
  {
    message: "Please enter pin",
    name: "pin",
  },
]);

console.log("resp: ", resp);
