const Manager = require("../lib/manager.js");

test("Manager class object has name, ID, office number and email", () => {
  expect(new Manager("leland", 1, "test2@email", "80155555552")).toEqual({
    empName: "leland",
    empID: 1,
    empEmail: "test2@email",
    officeNumber: "80155555552",
    role: "Manager",
  });
});
