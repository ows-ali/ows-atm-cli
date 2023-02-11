import inquirer from "inquirer";
let user = {
    name: "John Doe",
    pin: 1001,
    balance: 100000,
};
const resp = await inquirer.prompt([
    {
        message: "Please enter pin",
        name: "pin",
        type: "password",
    },
]);
// console.log("resp: ", resp);
if (Number(resp.pin) !== user.pin) {
    console.log("You have entered an incorrect pin");
}
else {
    const resp = await inquirer.prompt([
        {
            name: "selectedType",
            message: "Please select an option",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Balance Inquiry"], // TODO: add Deposit, and bill payment
        },
        {
            name: "amount",
            message: "Please select amount",
            type: "list",
            choices: ["500", "1000", "2000", "3000", "5000", "10000"],
            when(resp) {
                return resp.selectedType == "Fast Cash";
            },
        },
        {
            name: "amount",
            message: "Please enter amount",
            when(resp) {
                return resp.selectedType == "Withdraw";
            },
        },
    ]);
    //   console.log("selected type: ", resp);
    if (resp.selectedType == "Balance Inquiry") {
        console.log(`Your balance is: ${user.balance}`);
    }
    else {
        user.balance = user.balance - resp.amount;
        console.log(`Your new balance is: ${user.balance}`);
    }
}
