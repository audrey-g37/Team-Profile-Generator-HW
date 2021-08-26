const { Manager } = require("../src/EmployeeTypes");

describe("Manager", () => {
  describe("constructManager", () => {
    it("should store the arguments passed of the manager", () => {
      const newManager = new Manager("Audrey", "2070999", "a@gmail.com", "173");

      expect(newManager.name).toEqual("Audrey");
      expect(newManager.id).toEqual("2070999");
      expect(newManager.email).toEqual("a@gmail.com");
      expect(newManager.officeNumber).toEqual("173");
    });
  });

  describe("getOffice", () => {
    it("should return the office number", () => {
      const newManager = new Manager("Audrey", "2070999", "a@gmail.com", "173");
      expect(newManager.getOffice()).toEqual("173");
    });
  });

  describe("getRole", () => {
    it("should return 'manager' ", () => {
      const newManager = new Manager();
      expect(newManager.getRole()).toEqual("Manager");
    });
  });
});
