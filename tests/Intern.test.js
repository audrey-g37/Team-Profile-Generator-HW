const { Intern } = require("../src/EmployeeTypes");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should display the school the intern is currently attending", () => {
      const newInt = new Intern("Audrey", "2070999", "a@gmail.com", "UNC");

      expect(newInt.school).toEqual("UNC");
    });
  });

  describe("getRole", () => {
    it("should return 'intern' ", () => {
      const newInt = new Intern();
      expect(newInt.getRole()).toEqual("Intern");
    });
  });
});
