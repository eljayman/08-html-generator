const Employee = require("./employee.js");

class Intern extends Employee {
  constructor(empName, empID, empEmail, school) {
    super(empName, empID, empEmail);
    this.school = school;
    this.role = "Intern";
  }

  getSchool() {
    console.log(this.school);
    return this.school;
  }
}

// const leland = new Intern("leland", 1, "test@email", "UofU");
// leland.getName();
// leland.getID();
// leland.getEmail();
// leland.getRole();
// leland.getSchool();

module.exports = Intern;
