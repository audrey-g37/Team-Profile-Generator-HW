const fs = require("fs");

let managerCardData;
let engineerCardData;
let internCardData;

let finalData;

function managerCard(data) {
  managerCardData = `<div class="card whole-card" style="width: 18rem">
    <div class="card-body">
        <h3 class="card-title employee-name">${data.name}</h3>
        <h6 class="card-subtitle employee-position mb-2">Manager</h6>

    <div class="card card-info">
       <ul class="list-group list-group-flush">
           <li class="list-group-item info-id">ID: ${data.id}</li>
           <a href="mailto:${data.email}"
                ><li class="list-group-item info-email">
                  Email: ${data.email}
                </li></a>
           <li class="list-group-item info-office">Office Number: ${data.officeNumber}</li>
       </ul>
    </div>
   </div>
</div>`;
}
function engineerCard(data) {
  engineerCardData = `<div class="card whole-card" style="width: 18rem">
    <div class="card-body">
        <h3 class="card-title employee-name">${data.name}</h3>
        <h6 class="card-subtitle employee-position mb-2">Engineer</h6>

    <div class="card card-info">
       <ul class="list-group list-group-flush">
           <li class="list-group-item info-id">ID: ${data.id}</li>
           <a href="mailto:${data.email}">
           <li class="list-group-item info-email">
             Email: ${data.email}</li>
           </a>
           <a href = "https://github.com/${data.github}" target = "_blank">
           <li class="list-group-item info-github"> GitHub: ${data.github}</li>
           </a>
       </ul>
    </div>
   </div>
</div>`;
}
function internCard(data) {
  internCardData = `<div class="card whole-card" style="width: 18rem">
    <div class="card-body">
        <h3 class="card-title employee-name">${data.name}</h3>
        <h6 class="card-subtitle employee-position mb-2">Intern</h6>

    <div class="card card-info">
       <ul class="list-group list-group-flush">
           <li class="list-group-item info-id">ID: ${data.id}</li>
           <a href="mailto:${data.email}"
           ><li class="list-group-item info-email">
             Email: ${data.email}
           </li></a>
           <li class="list-group-item info-school">School: ${data.school}</li>
       </ul>
    </div>
   </div>
</div>`;
}

function createPage(teamMembers, teamMembersType) {
  let topSection = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Team Members</title>
      </head>
      <body>
      <header id="header">My Team</header>
        <div class="container-fluid">`;

  let bottomSection = `</div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
      crossorigin="anonymous"
    ></script>
  </body>
</html>`;

  let cards = [];

  for (i = 0; i < teamMembersType.length; i++) {
    switch (teamMembersType[i]) {
      case "Manager":
        managerCard(teamMembers[i]);
        cards.push(managerCardData);
        break;

      case "Engineer":
        engineerCard(teamMembers[i]);
        cards.push(engineerCardData);
        break;

      case "Intern":
        internCard(teamMembers[i]);
        cards.push(internCardData);
        break;
    }
  }

  finalData = topSection + cards + bottomSection;
  fs.writeFile("./dist/index.html", finalData, (err) => {
    err ? console.log(err) : console.log("File was created.");
  });
}

module.exports = createPage;
