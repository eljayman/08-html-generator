const Employee = require("./employee.js");

class Engineer extends Employee {
  constructor(empName, empID, empEmail, gitUser) {
    super(empName, empID, empEmail);
    this.gitUser = gitUser;
    this.role = "Engineer";
  }
  getGithub() {
    console.log(this.gitUser);
    return this.gitUser;
  }
}

module.exports = Engineer;
