class Employee {
  constructor(empName, empID, empEmail) {
    this.empEmail = empEmail;
    this.empID = empID;
    this.empName = empName;
    this.role = "Employee";
  }
  getName() {
    console.log(this.empName);
    return this.empName;
  }
  getID() {
    console.log(this.empID);
    return this.empID;
  }
  getEmail() {
    console.log(this.empEmail);
    return this.empEmail;
  }
  getRole() {
    console.log(this.role);
    return this.role;
  }
}

// const leland = new Employee("leland", 1, "test@email");
// leland.getName();
// leland.getID();
// leland.getEmail();
// leland.getRole();

module.exports = Employee;
