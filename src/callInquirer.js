const inquirer = require("inquirer");
const Manager = require("../lib/manager.js");
let newManager;

const managerQuestions = [
  {
    name: "empName",
    type: "input",
    message: "Enter the manager's name.",
  },
  {
    name: "empID",
    type: "number",
    message: "Enter employee ID number.",
  },
  {
    name: "empEmail",
    type: "input",
    message: "Enter email address for employee.",
  },
  {
    name: "officeNumber",
    type: "input",
    message: "Enter the office's phone number.",
  },
];

inquirer.prompt(managerQuestions).then(
  ({ empName, empID, empEmail, officeNumber }) => {
    newManager = new Manager(empName, empID, empEmail, officeNumber);
  },
  (error) => {
    console.log(error);
  }
);
