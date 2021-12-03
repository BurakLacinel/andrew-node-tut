const chalk = require("chalk");

const notes = require("./notes.js");

const msg = notes();
console.log(msg);

console.log(chalk.green.bold.inverse("Success"));
