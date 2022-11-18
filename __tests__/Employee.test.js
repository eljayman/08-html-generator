const Employee = require("../index.js");

test("Employee object has property empName set to the name of the employee", () => {
  expect(Employee.empName).toBe("leland");
});
