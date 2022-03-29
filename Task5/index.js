const yargs = require("yargs");
const Customer = require("./controllers/Customer");

yargs.command({
  command: "addCustomer",
  describe: "add a customer",
  builder: {
    name: {
      type: String,
      required: true,
    },
    intialBalance: {
      type: Number,
      default: 0,
    },
  },
  handler: (argv) => {
    Customer.addCustomer({
      name: argv.name,
      intialBalance: argv.intialBalance,
    });
  },
});
yargs.command({
  command: "showUser",
  describe: "shows a user",
  builder: {
    accNumber: {
      type: Number,
      required: true,
    },
  },
  handler: (argv) => {
    Customer.showUser(argv.accNumber);
  },
});
yargs.command({
  command: "addOperation",
  describe: "adds withdraw/deposit operations",
  builder: {
    accNumber: {
      type: Number,
      required: true,
    },
    opType: {
      type: String,
      required: true,
    },
    val: {
      type: Number,
      required: true,
    },
  },
  handler: (argv) => {
    const operationData = { ...argv, date: Date.now() };
    Customer.addOperation(operationData);
  },
});

yargs.argv;