const Employee = require("../lib/employee.js");

describe("Employee object", () => {
  expect(new Employee("leland", 1, "test@email")).toEqual({
    empName: "leland",
    empID: 1,
    empEmail: "test@email",
    role: "Employee",
  });
});

describe("Employee", () => {
  describe("getName", () => {
    it("should be the name of the employee", () => {
      const leland = new Employee("leland", 1, "test@email");
      const message = "leland";
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      leland.getName();

      expect(mock).toBeCalledWith(message);

      mock.mockRestore();
    });
  });
  describe("getID", () => {
    it("should be the ID of the employee", () => {
      const leland = new Employee("leland", 1, "test@email");
      const message = 1;
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      leland.getID();

      expect(mock).toBeCalledWith(message);

      mock.mockRestore();
    });
    describe("getEmail", () => {
      describe("getID", () => {
        it("should be the email of the employee", () => {
          const leland = new Employee("leland", 1, "test@email");
          const message = "test@email";
          const mock = jest.spyOn(console, "log");
          mock.mockImplementation(() => {});

          leland.getEmail();

          expect(mock).toBeCalledWith(message);

          mock.mockRestore();
        });
      });
    });
    describe("getRole", () => {
      describe("getRole", () => {
        it("should be the role of the employee", () => {
          const leland = new Employee("leland", 1, "test@email");
          const message = "Employee";
          const mock = jest.spyOn(console, "log");
          mock.mockImplementation(() => {});

          leland.getRole();

          expect(mock).toBeCalledWith(message);

          mock.mockRestore();
        });
      });
    });
  });
});
