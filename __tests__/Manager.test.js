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
describe("Manager", () => {
  describe("getRole", () => {
    it("should be the role of the employee", () => {
      const leland = new Manager("leland", 1, "test@email", "651618651");
      const message = "Manager";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      leland.getRole();

      expect(mock).toBeCalledWith(message);

      mock.mockRestore();
    });
  });
});
