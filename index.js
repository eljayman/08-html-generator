const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
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
    managerCard(newManager);
  },
  (error) => {
    console.log(error);
  }
);

function managerCard() {
  console.log(newManager);
  cardBuilder();
  nameContainer.innerText = Manager.empName;
}

function cardBuilder() {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "card");
  const cardHeader = document.createElement("div");
  cardHeader.setAttribute("id", "card-header");
  const nameContainer = document.createElement("h2");
  nameContainer.setAttribute("id", "name-block");
  const titleContainer = document.createElement("h3");
  titleContainer.setAttribute("id", "title-block");
  const cardMain = document.createElement("div");
  cardMain.setAttribute("class", "card-main");
  const cardField = document.createElement("div");
  cardField.setAttribute("class", "card-field");

  divContainer.append(cardHeader);
  cardHeader.append(nameContainer);
  cardHeader.append(titleContainer);
  divContainer.append(cardMain);
  cardMain.append(cardField);

  console.log(divContainer.innerHTML);
}
// const fileData = fs.readFile("./lib/manager.json", (err, data) => {
//   if (err) {
//     throw new err();
//   }
//   const bufDat = JSON.parse(data);
//   console.log(bufDat);
// });
