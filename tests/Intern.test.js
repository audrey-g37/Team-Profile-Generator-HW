const { Intern } = require("../src/EmployeeTypes");

describe("Intern", () => {
  describe("constructIntern", () => {
    it("should store the arguments passed of the intern", () => {
      const newIntern = new Intern("Audrey", "2070999", "a@gmail.com", "UNC");

      expect(newIntern.name).toEqual("Audrey");
      expect(newIntern.id).toEqual("2070999");
      expect(newIntern.email).toEqual("a@gmail.com");
      expect(newIntern.school).toEqual("UNC");
    });
  });
  describe("getSchool", () => {
    it("should display the school the intern is currently attending", () => {
      const newIntern = new Intern("Audrey", "2070999", "a@gmail.com", "UNC");

      expect(newIntern.getSchool()).toEqual("UNC");
    });
  });

  describe("getRole", () => {
    it("should return 'intern' ", () => {
      const newIntern = new Intern();
      expect(newIntern.getRole()).toEqual("Intern");
    });
  });
});
