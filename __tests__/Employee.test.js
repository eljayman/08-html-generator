const Employee = require("../lib/employee.js");

test("Employee object class has name, ID and email", () => {
  expect(new Employee("leland", 1, "test@email")).toEqual({
    empName: "leland",
    empID: 1,
    empEmail: "test@email",
    role: "Employee",
  });
});


