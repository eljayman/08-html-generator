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

describe("Engineer", () => {
  describe("getRole", () => {
    it("should be the role of the employee", () => {
      const leland = new Engineer("leland", 1, "test@email", "leland@github");
      const message = "Engineer";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      leland.getRole();

      expect(mock).toBeCalledWith(message);

      mock.mockRestore();
    });
  });
  describe("getGithub", () => {
    it("should be the github username of the employee", () => {
      const leland = new Engineer("leland", 1, "test@email", "leland@github");
      const message = "leland@github";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      leland.getGithub();

      expect(mock).toBeCalledWith(message);

      mock.mockRestore();
    });
  });
});
