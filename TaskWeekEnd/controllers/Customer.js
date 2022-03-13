const JsonHandler = require("./JsonHandler");
const chalk = require("chalk");

class Customer {
  static findUserIndex = (key, val) => {
    const users = JsonHandler.readData();
    return users.findIndex((u) => u[key] == val);
  };
  static addCustomer = (data) => {
    try {
      if (data.name.length < 3) throw new Error("invalid name");
      const users = JsonHandler.readData();

      data.accNumber = users.length;
      data.remainigBalance = 0;
      data.operations = [];
      users.push(data);

      JsonHandler.writeData(users);
      console.log(chalk.green("user Added"));
    } catch (e) {
      console.log(chalk.red(e.message));
    }
  };
  static showUser = (accNumber) => {
    const users = JsonHandler.readData();
    let userIndex = this.findUserIndex("accNumber", accNumber);
    if (userIndex != -1) console.log(users[userIndex]);
    else console.log(chalk.yellow("not found"));
  };
  static addOperation = (operationData) => {
    const users = JsonHandler.readData();
    let userIndex = this.findUserIndex("accNumber", operationData.accNumber);

    if (operationData.opType === "deposit") {
      users[userIndex].remainigBalance += operationData.val;
      users[userIndex].operations.push(operationData);
      JsonHandler.writeData(users);
      console.log(chalk.green("operation successful"));
    } else if (operationData.opType === "withdraw") {
      if (users[userIndex].remainigBalance >= operationData.val) {
        users[userIndex].remainigBalance -= operationData.val;
        users[userIndex].operations.push(operationData);
        JsonHandler.writeData(users);
        console.log(chalk.green("operation successful"));
      } else console.log(chalk.yellow("insufficent balance"));
    } else {
      console.log(chalk.yellow("invalid operation type"));
    }
  };
}

module.exports = Customer;