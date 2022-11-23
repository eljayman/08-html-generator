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

describe("Intern", () => {
  describe("getRole", () => {
    it("should be the role of the employee", () => {
      const leland = new Intern(
        "leland",
        1,
        "test@email",

        "UofU"
      );
      const message = "Intern";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      leland.getRole();

      expect(mock).toBeCalledWith(message);

      mock.mockRestore();
    });
  });
  describe("getSchool", () => {
    it("should be the school of the employee", () => {
      const leland = new Intern(
        "leland",
        1,
        "test@email",

        "UofU"
      );
      const message = "UofU";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      leland.getSchool();

      expect(mock).toBeCalledWith(message);

      mock.mockRestore();
    });
  });
});
