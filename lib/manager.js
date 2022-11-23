const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(empName, empID, empEmail, officeNumber) {
    super(empName, empID, empEmail);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
}

module.exports = Manager;
