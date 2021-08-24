const { Engineer } = require("../src/EmployeeTypes");

describe("Engineer", () => {
  describe("github", () => {
    it("should return the GitHub username of the Engineer", () => {
      const newEngineer = new Engineer(
        "Audrey",
        "2070999",
        "a@gmail.com",
        "audrey-g"
      );

      expect(newEngineer.getGithub()).toEqual("audrey-g");
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer' ", () => {
      const newEngineer = new Engineer();
      expect(newEngineer.getRole()).toEqual("Engineer");
    });
  });
});
