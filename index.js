const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");
const Engineer = require("./lib/engineer.js");
let newManager;
let newEngineer;
let newIntern;

const ManagerQuestions = [
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
    type: "number",
    message: "Enter the office's phone number.",
  },
];
const teamMembers = [
  {
    name: "teamMember",
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["Add Engineer", "Add Intern", "Team is Complete"],
  },
];
const EngineerQuestions = [
  {
    name: "empName",
    type: "input",
    message: "Please enter the engineer's name.",
  },
  {
    name: "empID",
    type: "number",
    message: "Please enter the engineer's employee ID.",
  },
  {
    name: "empEmail",
    type: "input",
    message: "Please enter an email address for the engineer.",
  },
  {
    name: "gitUser",
    type: "input",
    message: "Please enter the github name for the engineer.",
  },
];
const InternQuestions = [
  {
    name: "empName",
    type: "input",
    message: "Please enter the intern's name.",
  },
  {
    name: "empID",
    type: "number",
    message: "Please enter the intern's employee ID.",
  },
  {
    name: "empEmail",
    type: "input",
    message: "Please enter an email address for the intern.",
  },
  {
    name: "school",
    type: "input",
    message: "Please enter the intern's school.",
  },
];

function addManager() {
  inquirer.prompt(ManagerQuestions).then(
    ({ empName, empID, empEmail, officeNumber }) => {
      newManager = new Manager(empName, empID, empEmail, officeNumber);

      addTeamMembers();
    },
    (error) => {
      console.log(error);
    }
  );
}
function addEngineer() {
  inquirer.prompt(EngineerQuestions).then(
    ({ empName, empID, empEmail, gitUser }) => {
      newEngineer = new Engineer(empName, empID, empEmail, gitUser);
      addTeamMembers();
    },
    (error) => {
      console.log(error);
    }
  );
}

function addIntern() {
  inquirer.prompt(InternQuestions).then(
    ({ empName, empID, empEmail, school }) => {
      newIntern = new Intern(empName, empID, empEmail, school);

      console.log(newIntern);
      addTeamMembers();
    },
    (error) => {
      console.log(error);
    }
  );
}
function addTeamMembers() {
  inquirer.prompt(teamMembers).then(
    ({ teamMember }) => {
      if (teamMember === "Add Engineer") {
        console.log("Add Engineer");
        addEngineer();
      }
      if (teamMember === "Add Intern") {
        console.log("Add Intern");
        addIntern();
      }
      if (teamMember === "Team is Complete") {
        completeTeam();
      }
    },
    (error) => {
      console.log(error);
    }
  );
}
function completeTeam() {
  const contents = renderHTML();
  fs.writeFile("./dist/index.html", contents, (error) => {
    if (error) console.log(error);
  });
}

function ManagerCard() {
  return `
  <div class="card">
  <div id="card-header">
    <div id="name-block"><h2>${newManager.empName}</h2></div>
    <div id="title-block"><h3>Manager</h3></div>
  </div>
  <div id="card-main">
    <div id="card-field"><h4>Employee ID:  ${newManager.empID}</h4></div>
    <div id="card-field"><a href = 'mailto:${newManager.empEmail}'>Email Address:  ${newManager.empEmail}</a></div>
    <div id="card-field"><h4>Office Number:  ${newManager.officeNumber}</h4></div>
  </div>
</div>
  `;
}
function EngineerCard() {
  return `
  <div class="card">
  <div id="card-header">
    <div id="name-block"><h2>${newEngineer.empName}</h2></div>
    <div id="title-block"><h3>Engineer</h3></div>
  </div>
  <div id="card-main">
    <div id="card-field"><h4>Employee ID:  ${newEngineer.empID}</h4></div>
    <div id="card-field"><a href="mailto:${newEngineer.empEmail}">Email Address: ${newEngineer.empEmail}</a></div>
    <div id="card-field"><a href = "http://github.com/${newEngineer.gitUser}">github.com/${newEngineer.gitUser}</a></div>
  </div>
</div>
  `;
}
function InternCard() {
  return `
    <div class="card">
    <div id="card-header">
      <div id="name-block"><h2>${newIntern.empName}</h2></div>
      <div id="title-block"><h3>Intern</h3></div>
    </div>
    <div id="card-main">
      <div id="card-field"><h4>Employee ID:  ${newIntern.empID}</h4></div>
      <div id="card-field"><a href = 'mailto:  ${newIntern.empEmail}'>Email Address:  ${newIntern.empEmail}</a></div>
      <div id="card-field"><h4>School:  ${newIntern.school}</h4></div>
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
      ${ManagerCard(newManager)}
      ${EngineerCard(newEngineer)}
      ${InternCard(newIntern)}
    </main>
  </body>
</html>
  `;
}

addManager();
