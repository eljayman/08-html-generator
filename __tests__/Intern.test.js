const Intern = require("../lib/intern.js");

test("Intern class object has name, ID, school, role and email", () => {
  expect(new Intern("leland", 1, "test@email", "UofU")).toEqual({
    empName: "leland",
    empID: 1,
    empEmail: "test@email",
    school: "UofU",
    role: "Intern",
  });
});
