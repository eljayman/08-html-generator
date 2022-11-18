const inquirer = require("inquirer");
let newEmployee;
const callInquirer = require("./src/callInquirer.js");

const divContainer = document.createElement("div");
divContainer.setAttribute("class", "card");
const cardHeader = document.createElement("header");
cardHeader.setAttribute("id", "card-header");
const nameContainer = document.createElement("h2");
nameContainer.setAttribute("id", "name-block");
const titleContainer = document.createElement("h3");
titleContainer.setAttribute("id", "title-block");
const cardMain = document.createElement("div");
cardMain.setAttribute("class", "card-main");
const cardField = document.createElement("div");
cardField.setAttribute("class", "card-field");

function Employee(empName, empID, empEmail) {
  this.empName = empName;
  this.empID = empID;
  this.empEmail = empEmail;
}

module.exports = Employee;
