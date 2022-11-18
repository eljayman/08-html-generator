function Employee(empName, empID, empEMail) {
  this.empName = empName;
  this.empID = empID;
  this.empEMail = empEMail;
}

const leland = new Employee("leland", 1, "test@email");

console.log(leland.empName);

module.exports = leland;
