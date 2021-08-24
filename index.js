const inquirer = require("inquirer");
const Employee = require("./src/Employee");
const { Manager } = require("./src/EmployeeTypes");
const { Engineer } = require("./src/EmployeeTypes");
const { Intern } = require("./src/EmployeeTypes");

let teamMembers = [];

const aboutManager = [
  {
    type: "input",
    message: "What is the Manager's Name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Manager's Id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Manager's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Manager's office number?",
    name: "officeNumber",
  },
];

const aboutEngineer = [
  {
    type: "input",
    message: "What is the Engineer's Name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Engineer's Id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Engineer's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Engineer's github username?",
    name: "github",
  },
];
const aboutIntern = [
  {
    type: "input",
    message: "What is the Intern's Name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Intern's Id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the Intern's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Intern's current school?",
    name: "school",
  },
];

const employeeType = {
  type: "list",
  message: "What type of employee do you wish to add?",
  name: "type",
  choices: ["Engineer", "Intern", "No more employees at this time"],
};

function newManager() {
  inquirer.prompt(aboutManager).then((data) => {
    anotherManager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officeNumber
    );
    teamMembers.push(anotherManager);
  });
}

function newEmployee() {
  inquirer.prompt(employeeType).then((data) => {
    if (data.type === "No more employees at this time") {
      console.log("team is built");
      console.log(teamMembers);
    } else if (data.type === "Engineer") {
      inquirer.prompt(aboutEngineer).then((data) => {
        anotherEngineer = new Engineer(
          data.name,
          data.id,
          data.email,
          data.github
        );
        teamMembers.push(anotherEngineer);
      });
    } else if (data.type === "Intern") {
      inquirer.prompt(aboutIntern).then((data) => {
        anotherIntern = new Intern(data.name, data.id, data.email, data.school);
        teamMembers.push(anotherIntern);
      });
    }
  });
}
