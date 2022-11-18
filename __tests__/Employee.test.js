const Employee = require("../index.js");

test("Employee object class exists", () => {
  expect(Employee.name).toBe("Employee");
});
// test("Employee object has property empID set to the ID of the employee", () => {
//   expect(Employee.empID).toBe(1);
// });
// test("Employee object has property empEMail set to the email of the employee", () => {
//   expect(Employee.empEMail).toBe("test@email");
// });
