const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const fs = require("fs");
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
    const contents = renderHTML();
    fs.writeFile("./dist/index.html", contents, (error) => {
      if (error) console.log(error);
    });
  },
  (error) => {
    console.log(error);
  }
);

function managerCard() {
  return `
  <div class="card">
  <div id="card-header">
    <div id="name-block"><h2>${newManager.empName}</h2></div>
    <div id="title-block"><h3>Manager</h3></div>
  </div>
  <div id="card-main">
    <div id="card-field"><h4>Employee ID:  ${newManager.empID}</h4></div>
    <div id="card-field"><h4>Email Address:  ${newManager.empEmail}</h4></div>
    <div id="card-field"><h4>Office Number:  ${newManager.officeNumber}</h4></div>
  </div>
</div>
  `;
}
function renderHTML() {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="../dist/style.css" rel="stylesheet" />
    <title>My Team</title>
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
      ${managerCard(newManager)}
    </main>
  </body>
</html>
  `;
}
// const fileData = fs.readFile("./lib/manager.json", (err, data) => {
//   if (err) {
//     throw new err();
//   }
//   const bufDat = JSON.parse(data);
//   console.log(bufDat);
// });
