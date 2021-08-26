const fs = require("fs");

let managerCardData;
let engineerCardData;
let internCardData;

let finalData;

function managerCard(data) {
  managerCardData = `<div class="card" style="width: 18rem">
    <div class="card-body">
        <h3 class="card-title employee-name">${data.name}</h3>
        <h6 class="card-subtitle employee-position mb-2 text-muted">Manager</h6>

    <div class="card">
       <ul class="list-group list-group-flush">
           <li class="list-group-item info1">ID: ${data.id}"</li>
           <a href="mailto:${data.email}"
                ><li class="list-group-item info2">
                  Email: ${data.email}
                </li></a>
           <li class="list-group-item info3">Office Number: ${data.officeNumber}</li>
       </ul>
    </div>
   </div>
</div>`;
}
function engineerCard(data) {
  engineerCardData = `<div class="card" style="width: 18rem">
    <div class="card-body">
        <h3 class="card-title employee-name">${data.name}</h3>
        <h6 class="card-subtitle employee-position mb-2 text-muted">Engineer</h6>

    <div class="card">
       <ul class="list-group list-group-flush">
           <li class="list-group-item info1">ID: ${data.id}</li>
           <a href="mailto:${data.email}"
           ><li class="list-group-item info2">
             Email: ${data.email}
           </li></a>
           <a href = "https://github.com/${data.github}"><li class="list-group-item info3"> GitHub: ${data.github}</li></a>
           <li class="list-group-item info3">GitHub: </li>
       </ul>
    </div>
   </div>
</div>`;
}
function internCard(data) {
  internCardData = `<div class="card" style="width: 18rem">
    <div class="card-body">
        <h3 class="card-title employee-name">${data.name}</h3>
        <h6 class="card-subtitle employee-position mb-2 text-muted">Intern</h6>

    <div class="card">
       <ul class="list-group list-group-flush">
           <li class="list-group-item info1">ID: ${data.id}</li>
           <a href="mailto:${data.email}"
           ><li class="list-group-item info2">
             Email: ${data.email}
           </li></a>
           <li class="list-group-item info3">School: ${data.school}</li>
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
        <title>Team Members</title>
      </head>
      <body>
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

  console.log(teamMembers);
  console.log(teamMembersType);

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

  console.log(cards);

  finalData = topSection + cards + bottomSection;
  fs.writeFile("./dist/index.html", finalData, (err) => {
    err ? console.log(err) : console.log("File was created.");
  });
}

module.exports = createPage;
