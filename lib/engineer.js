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

// const leland = new Engineer("leland", 1, "test@email", "leland@github");
// leland.getName();
// leland.getID();
// leland.getEmail();
// leland.getRole();
// leland.getGithub();

module.exports = Engineer;
