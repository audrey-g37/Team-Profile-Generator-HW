const Employee = require("../src/Employee");

describe("Employee", () => {
  describe("constructEmployee", () => {
    it("should store the arguments passed of the employee", () => {
      const newEmployee = new Employee("Audrey", "2070999", "a@gmail.com");

      expect(newEmployee.name).toEqual("Audrey");
      expect(newEmployee.id).toEqual("2070999");
      expect(newEmployee.email).toEqual("a@gmail.com");
    });
  });
  describe("getName", () => {
    it("should return the name of the employee", () => {
      const newEmployee = new Employee("Audrey", "2070999", "a@gmail.com");

      expect(newEmployee.getName()).toEqual("Audrey");
    });
  });
  describe("getId", () => {
    it("should return the Id of the employee", () => {
      const newEmployee = new Employee("Audrey", "2070999", "a@gmail.com");

      expect(newEmployee.getId()).toEqual("2070999");
    });
  });
  describe("getEmail", () => {
    it("should return the email of the employee", () => {
      const newEmployee = new Employee("Audrey", "2070999", "a@gmail.com");

      expect(newEmployee.getEmail()).toEqual("a@gmail.com");
    });
  });

  describe("getRole", () => {
    it("should return 'Employee' ", () => {
      const newEmployee = new Employee("Audrey", "2070999", "a@gmail.com");
      expect(newEmployee.getRole()).toEqual("Employee");
    });
  });
});
