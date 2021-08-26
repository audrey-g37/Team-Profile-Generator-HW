const { Engineer } = require("../src/EmployeeTypes");

describe("Engineer", () => {
  describe("constructEngineer", () => {
    it("should store the arguments passed of the engineer", () => {
      const newEngineer = new Engineer(
        "Audrey",
        "2070999",
        "a@gmail.com",
        "audrey-g37"
      );

      expect(newEngineer.name).toEqual("Audrey");
      expect(newEngineer.id).toEqual("2070999");
      expect(newEngineer.email).toEqual("a@gmail.com");
      expect(newEngineer.github).toEqual("audrey-g37");
    });
  });

  describe("getGithub", () => {
    it("should return the GitHub username of the Engineer", () => {
      const newEngineer = new Engineer(
        "Audrey",
        "2070999",
        "a@gmail.com",
        "audrey-g37"
      );

      expect(newEngineer.getGithub()).toEqual("audrey-g37");
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer' ", () => {
      const newEngineer = new Engineer();
      expect(newEngineer.getRole()).toEqual("Engineer");
    });
  });
});
