const employee = require("Employee");

class Manager extends employee {
  constructor(name, id, email, office) {
    this.officeNumber = office;
    super(name, id, email);
  }

  getRole() {
    return "Manager";
  }
}
class Engineer extends employee {
  constructor(name, id, email, github) {
    this.github = github;
    super(name, id, email);
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}
class Intern extends employee {
  constructor(name, id, email, school) {
    this.school = school;
    super(name, id, email);
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}
