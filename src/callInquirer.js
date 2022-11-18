const questions = [
  {
    name: "empName",
    type: "input",
    message: "Enter the name of employee.",
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
];

inquirer.prompt(questions).then(
  ({ empName, empID, empEmail }) => {
    newEmployee = new Employee(empName, empID, empEmail);
  },
  (error) => {
    console.log(error);
  }
);
