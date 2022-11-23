function managerCard(empName, empID, empEmail, officeNumber) {
  return `
  <div class="card">
  <div id="card-header">
    <div id="name-block"><h2>${empName}</h2></div>
    <div id="title-block"><h3>title</h3></div>
  </div>
  <div id="card-main">
    <div id="card-field"><h4>${empID}</h4></div>
    <div id="card-field"><h4>${empEmail}</h4></div>
    <div id="card-field"><h4>${officeNumber}</h4></div>
  </div>
</div>
  `;
}
function renderHTML(managerCard) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="../dist/style.css" rel="stylesheet" />
    <title>My Team</title>
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
      ${managerCard}
    </main>
  </body>
</html>
  `;
}

function engineerCard() {}
function internCard() {}
