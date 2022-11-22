const Employee = require("./employee.js");
const officeNumber = "4654816135";

class Manager extends Employee {
  constructor(empName, empID, empEmail, officeNumber) {
    super(empName, empID, empEmail);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
}

// const leland = new Manager("leland", 1, "test@email");
// leland.getName();
// leland.getID();
// leland.getEmail();
// console.log(officeNumber);
// leland.getRole();

module.exports = Manager;
