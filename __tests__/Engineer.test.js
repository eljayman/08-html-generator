const Engineer = require("../lib/engineer.js");

test("Engineer class object has name, ID, gituser, role and email", () => {
  expect(new Engineer("leland", 1, "test@email", "leland@github")).toEqual({
    empName: "leland",
    empID: 1,
    empEmail: "test@email",
    gitUser: "leland@github",
    role: "Engineer",
  });
});
